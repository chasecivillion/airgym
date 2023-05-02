import { useEffect } from "react";
import Signin from "./Signin";

function SigninModal({ appear, disappear }) {
    if (!appear) return null;

    const areaClose = (e) => {
        if (e.target.id === "sign-in-modal") {
            disappear()
        }
    }
    
    return (
        <div onClick={areaClose} id='sign-in-modal' className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <button onClick={disappear} className='text-white text-xl place-self-end'>X</button>
                <div className='bg-white p-2 rounded'>
                    <Signin/>
                </div>
            </div>

        </div>
    );
};

export default SigninModal