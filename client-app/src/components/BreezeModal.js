import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BreezeModal({createPod, listing, userId, open, onClose}) {

    const navigate = useNavigate()
    if (!open) return null;
    
    const areaClose = (e) => {
        if (e.target.classList.contains("breezeModal")) {
            onClose()
        }
    }
    
    const newPod = {
        name: 'Breeze Pod',
        image: 'https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/83907808_3350889531605674_3221206823252000768_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=zCBRSTTQLJ8AX_Cmnas&_nc_ht=scontent-iad3-2.xx&oh=00_AfBIes2Mgww_rxZv_LUUVJ1_q8QZcfbnOVwC0MA-ldfnRQ&oe=64820D04',
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
            headers: {"Content-Type": "application/json"},
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
    return(
        <div onClick={areaClose} id='breezeModal' className='breezeModal fixed inset-0 bg-black bg-opacity-25 grid grid-cols-3 backdrop-blur-sm'>
            <div className='breezeModal'>
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
            <div className="breezeModal">
                <div className="breezeModal relative top-20">
                    <div className="breezeModal flex justify-end">
                        <button onClick={onClose} className='breezeModal relative text-white text-xl'>X</button>
                    </div>
                    <div className='relative bg-slate-100 p-2 rounded'>
                        <div className="flex text-center text-6xl font-bold pt-2 pb-2 justify-center bg-gradient-to-r from-teal-400 via-sky-300 to-blue-300 inline-block text-transparent bg-clip-text">
                            Breeze Pod
                        </div>
                        <div className="flex pt-5 pb-5 justify-center items-center">
                            <div className="pl-2 pr-2">
                                <img className="rounded-md" src='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/83907808_3350889531605674_3221206823252000768_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=zCBRSTTQLJ8AX_Cmnas&_nc_ht=scontent-iad3-2.xx&oh=00_AfBIes2Mgww_rxZv_LUUVJ1_q8QZcfbnOVwC0MA-ldfnRQ&oe=64820D04' alt="breeze" />
                            </div>
                        </div>
                        <h3 className="pb-4 text-center"> The Breeze Pod is geared towards athletes looking for performance ready gear
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

export default BreezeModal