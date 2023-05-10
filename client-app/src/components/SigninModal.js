import { UserIcon } from "@heroicons/react/24/outline";
import Signin from "./Signin";
import Signup from "./Signup";

function SigninModal({ appear, disappear, toggle }) {
    
    if (!appear) return null;

    const areaClose = (e) => {
        if (e.target.id === "sign-in-modal") {
            disappear()
        }
    }

    const signUpPortal = (e) => {
        if (e.target.id === "sign-up"){
            toggle()
        }
    }
    
    return (
        <div onClick={areaClose} id='sign-in-modal' className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <button onClick={disappear} className='text-white text-xl place-self-end'>X</button>
                <div className='mb-10 bg-white rounded'>
                    <div className="flex pt-8 justify-center">
                        <UserIcon className="h-12"/>
                    </div>
                    <h2 className="cursor-default mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Login to your account
                    </h2>
                    <p className="cursor-default mt-2 text-center text-sm text-gray-600 mt-5">
                        Don't have an account yet?{" "}
                        <div
                        className="ml-[270px] mr-[270px] font-medium text-purple-600 hover:cursor-pointer hover:text-purple-400"
                        id="sign-up"
                        onClick={signUpPortal}>
                            Signup
                        </div>
                    </p>
                    <Signin/>
                </div>
            </div>
        </div>
    );
};

export default SigninModal