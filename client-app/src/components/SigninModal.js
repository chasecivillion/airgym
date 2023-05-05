import Signin from "./Signin";
import Signup from "./Signup";

function SigninModal({ appear, disappear, toggle }) {
    
    if (!appear) return null;

    const areaClose = (e) => {
        if (e.target.id === "sign-in-modal") {
            disappear()
        }
    }

    const doThis = (e) => {
        if (e.target.id === "sign-up"){
            toggle()
        }
    }
    
    return (
        <div onClick={areaClose} id='sign-in-modal' className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <button onClick={disappear} className='text-white text-xl place-self-end'>X</button>
                <div className='mb-10 bg-white rounded'>
                    <div className="flex justify-center">
                        <img
                            alt=""
                            className="h-48 w-48"
                            src="https://media.istockphoto.com/id/910293318/vector/running-men-icon.jpg?s=612x612&w=0&k=20&c=G5Azj4uEBHjfA7WXRQbsNx0YBOWIWpvoMvptOaJtEVI=" 
                        />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Login to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                        Don't have an account yet?{" "}
                        <div
                        className="ml-[270px] mr-[270px] font-medium text-purple-600 hover:cursor-pointer hover:text-purple-400"
                        id="sign-up"
                        onClick={doThis}>
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