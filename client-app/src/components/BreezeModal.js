import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BreezeModal({createPod, listing, userId, open, onClose}) {

    const navigate = useNavigate()
    if (!open) return null;
    
    const areaClose = (e) => {
        if (e.target.id === "wrapper") {
            onClose()
        }
    }
    
    const newPod = {
        name: 'Breeze Pod',
        image: 'https://images-platform.99static.com//ww0Tx85rXClf2LZcxvc14IT4PvE=/360x4843:944x5427/fit-in/500x500/projects-files/60/6050/605097/9854e835-ef81-40ff-810b-0007cb10dc27.jpg',
        user_id: userId,
        hotel_id: listing.id
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(userId)
        // if (userId === null){
        //     console.log('unauthorized access')
        // }
        fetch(`/pods/${userId}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPod)
        })
        .then(r => {
            if (r.ok) {
                r.json()
                    .then(navigate('/'))
            } else {
                navigate('/')
            }
        })

    }
    return(
        <div onClick={areaClose} id='wrapper' className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <div>
                    <button onClick={onClose} className='absolute top-[60px] start-[890px] end-[350px] text-white text-xl'>X</button>
                    <div className='bg-white p-2 rounded'>Breeze Modal
                        <img src="https://images-platform.99static.com//ww0Tx85rXClf2LZcxvc14IT4PvE=/360x4843:944x5427/fit-in/500x500/projects-files/60/6050/605097/9854e835-ef81-40ff-810b-0007cb10dc27.jpg" alt="breeze"/>
                        <h3 className="p-8 text-center"> The Breeze Pod is for the adventurous traveler looking for performance ready gear</h3>
                    <form className="text-center" onSubmit={handleSubmit}>
                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"> Add Pod </button>
                    </form>
                    
                    
                    
                    
                    </div>
                </div>
            </div>
        </div>
  );
};

export default BreezeModal