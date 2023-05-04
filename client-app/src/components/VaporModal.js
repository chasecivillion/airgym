import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function VaporModal({ createPod, listing, userId, open, onClose }) {

    const navigate = useNavigate()
    if (!open) return null;

    const areaClose = (e) => {
        if (e.target.id === "vaporModal") {
            onClose()
        }
    }

    const newPod = {
        name: 'Vapor Pod',
        image: 'https://repository-images.githubusercontent.com/49910095/8c5be280-5bbd-11ea-83c7-7fb50300e4df',
        user_id: userId,
        hotel_id: listing.id
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(userId)
        // if (userId === null){
        //     console.log('unauthorized access')
        // }
        fetch(`/user/${userId}/pods`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPod)
        })
            .then(r => {
                if (r.ok) {
                    r.json()
                    navigate('/')
                } else if (r.status !== 201) {
                    navigate('/sign_up')
                }
            })
    }
    return (
        <div onClick={areaClose} id='vaporModal' className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <div>
                    <button onClick={onClose} className='absolute top-[60px] start-[890px] end-[350px] text-white text-xl'>X</button>
                    <div className='bg-white p-2 rounded'>Vapor Modal
                        <img src='https://repository-images.githubusercontent.com/49910095/8c5be280-5bbd-11ea-83c7-7fb50300e4df' alt="vapor" />
                        <h3 className="p-8 text-center"> The all-inclusive pod. Custom-tailored for any athlete's needs.</h3>
                        <form className="text-center" onSubmit={handleSubmit}>
                            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"> Add Pod </button>
                        </form>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default VaporModal