import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import React from 'react'

function UserFailModal({open, onClose}) {
    if (!open) return null;

    const areaClose = (e) => {
        if (e.target.classList.contains("userFailModal")) {
            onClose()
        }
    }

    return (
        <div className="">
            <div onClick={areaClose} className='userFailModal fixed z-[9999] w-screen h-screen inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='w-[500px] flex flex-col'>
                    <div>
                        <div className='justify-center bg-white rounded-md'>
                            <div className="flex w-full p-5 justify-center">
                                <div className="">
                                    <ExclamationCircleIcon className="h-24 text-red-400" />
                                </div>
                            </div>
                            <div className="flex text-red-400 text-xl text-center font-bold p-5 justify-center">
                                Must enter correct e-mail and password
                            </div>
                            <div className="flex pb-5 justify-center w-full">
                                <button onCLick={areaClose} className=" userFailModal flex w-1/4 justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserFailModal