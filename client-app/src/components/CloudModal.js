import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CloudModal({ createPod, listing, userId, open, onClose }) {

    const navigate = useNavigate()
    if (!open) return null;

    const areaClose = (e) => {
        if (e.target.id === "cloudModal") {
            onClose()
        }
    }

    const newPod = {
        name: 'Cloud Pod',
        image: 'https://cdn.dribbble.com/users/5935617/screenshots/16201104/media/f0e83b00016b2e1d78bcbb42e29b0c89.jpg?compress=1&resize=400x300&vertical=top',
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
        <div onClick={areaClose} id='cloudModal' className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <div>
                    <button onClick={onClose} className='absolute top-[60px] start-[890px] end-[350px] text-white text-xl'>X</button>
                    <div className='bg-white p-2 rounded'>Cloud Modal
                        <img src='https://cdn.dribbble.com/users/5935617/screenshots/16201104/media/f0e83b00016b2e1d78bcbb42e29b0c89.jpg?compress=1&resize=400x300&vertical=top' alt="cloud" />
                        <h3 className="p-8 text-center"> The Cloud Pod is geared towards athletes looking for performance ready gear</h3>
                        <form className="text-center" onSubmit={handleSubmit}>
                            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"> Add Pod </button>
                        </form>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloudModal