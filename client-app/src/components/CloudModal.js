import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CloudModal({ createPod, listing, userId, open, onClose }) {

    const navigate = useNavigate()
    if (!open) return null;

    const areaClose = (e) => {
        console.log(e.target)
        if (e.target.classList.contains("cloudModal")) {
            onClose()
        }
    }

    const newPod = {
        name: 'Cloud Pod',
        image: 'https://www.shopbala.com/static/91c9d17a1ecad3bc41499c771733d76c/d28fc/PLP-12-Mobile-1.jpg',
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
        <div onClick={areaClose} id='cloudModal' className='cloudModal fixed inset-0 bg-black bg-opacity-25 grid grid-cols-3 backdrop-blur-sm'>
            <div className='cloudModal'>
                {/* <div>
                    <button onClick={onClose} className='relative items-center top-[60px] start-[890px] end-[350px] text-white text-xl'>X</button>
                    <div className='relative bg-white p-2 rounded'>Cloud Modal
                        <div className="justify-center items-center">
                            <img src='https://cdn.shopify.com/s/files/1/0302/2539/9945/files/LargeDuffel-4.jpg?v=1683585570&width=1000' alt="cloud" />
                        </div>
                        <h3 className="p-8 text-center"> The Cloud Pod is geared towards athletes looking for performance ready gear
                        </h3>
                        <form className="text-center" onSubmit={handleSubmit}>
                            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"> Add Pod </button>
                        </form>




                    </div>
                </div> */}
            </div>
            <div className="cloudModal">
                <div className="cloudModal relative top-20">
                    <div className="cloudModal flex justify-end">
                        <button onClick={onClose} className='cloudModal relative text-white text-xl'>X</button>
                    </div>
                    <div className='relative bg-slate-100 p-2 rounded'>
                        <div className="flex text-center text-6xl font-bold pt-2 pb-2 justify-center bg-gradient-to-r from-sky-400 via-purple-400 to-red-300 inline-block text-transparent bg-clip-text">
                            Cloud Pod
                        </div>
                        <div className="flex pt-5 pb-5 justify-center items-center">
                            <div className="flex w-4/5 justify-center">
                                <img className="rounded-md" src='https://www.shopbala.com/static/91c9d17a1ecad3bc41499c771733d76c/d28fc/PLP-12-Mobile-1.jpg' alt="cloud" />
                            </div>
                        </div>
                        <h3 className="pb-4 text-center"> The Cloud Pod is geared towards athletes looking for performance ready gear
                        </h3>
                        <form className="pt-2 pb-8 text-center" onSubmit={handleSubmit}>
                            <button className="px-4 py-1 text-2xl text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"> Add Pod </button>
                        </form>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloudModal