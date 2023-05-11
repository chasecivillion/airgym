import { CheckCircleIcon } from '@heroicons/react/24/outline';
import React from 'react'

function NewUserAddModal({open, onClose}) {
    if (!open) return null;

    const areaClose = (e) => {
        if (e.target.classList.contains("newUserAddModal")) {
            onClose()
        }
    }

    return (
        <div className="">
            <div onClick={areaClose} className='newUserAddModal fixed z-[9999] w-screen h-screen inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='w-[500px] flex flex-col'>
                    <div>
                        <div className='justify-center bg-white rounded-md'>
                            <div className="flex w-full p-5 justify-center">
                                <div className="">
                                    <CheckCircleIcon className="h-24 text-green-400" />
                                </div>
                            </div>
                            <div className="flex text-green-400 text-3xl font-bold p-5 justify-center">
                                Welcome
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewUserAddModal