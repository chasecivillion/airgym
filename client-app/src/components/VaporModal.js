import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function VaporModal({ createPod, listing, userId, open, onClose }) {

    const navigate = useNavigate()
    if (!open) return null;

    const areaClose = (e) => {
        if (e.target.classList.contains("vaporModal")) {
            onClose()
        }
    }

    const newPod = {
        name: 'Vapor Pod',
        image: 'https://i.imgur.com/DxVYr5O.jpeg',
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
        <div onClick={areaClose} id='vaporModal' className='vaporModal fixed inset-0 bg-black bg-opacity-25 grid grid-cols-3 backdrop-blur-sm'>
            <div className='vaporModal'>
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
            <div className="vaporModal">
                <div className="vaporModal relative top-20">
                    <div className="vaporModal flex justify-end">
                        <button onClick={onClose} className='cloudModal relative text-white text-xl'>X</button>
                    </div>
                    <div className='relative bg-slate-100 p-2 rounded'>
                        <div className="flex text-center text-6xl font-bold pt-2 pb-4 justify-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                            Vapor Pod
                        </div>
                        <div className="flex pt-5 pb-5 justify-center items-center">
                            <div className="flex justify-center">
                                <img className="rounded-md" src='https://static.dezeen.com/uploads/2014/08/Nike-pop-up-robert-storey-studio_dezeen_784_5.jpg' alt="cloud" />
                            </div>
                        </div>
                        <h3 className="pb-4 text-center"> The Vapor Pod is geared towards athletes looking for performance ready gear
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

export default VaporModal