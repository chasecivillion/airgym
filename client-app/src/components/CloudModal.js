import { useEffect } from "react";

function CloudModal({ open, onClose }) {
    if (!open) return null;

    const areaClose = (e) => {
        if (e.target.id === "wrapper") {
            onClose()
        }
    }
    return (
        <div onClick={areaClose} id='wrapper' className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <button onClick={onClose} className='text-white text-xl place-self-end'>X</button>
                <div className='bg-white p-2 rounded'>Cloud Modal</div>
            </div>
        </div>
    );
};

export default CloudModal