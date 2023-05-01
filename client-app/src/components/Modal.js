import { useEffect } from "react";

function Modal({setTest, onClose}) {

    const handleClose = (e) => {
        if( e.target.id === 'wrapper') {
            onClose();
    }
}

    // useEffect( () => {
    //     setTest(false);
    // }, [setTest] );
    
    return(
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <button className='text-white text-xl place-self-end'>X</button>
                <div id='wrapper' onClick={handleClose} className='bg-white p-2 rounded'>Modal</div>
            </div>
        </div>
  );
};

export default Modal