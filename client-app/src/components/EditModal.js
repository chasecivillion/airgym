import { useState } from "react";

function EditModal({ id, name, image, key, open, onClose, updatedPods }) {

    const [ podImage, setPodImage ] = useState(image)
    const [ podChoice, setPodChoice ] = useState(name)

    const breeze = 'https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/83907808_3350889531605674_3221206823252000768_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=zCBRSTTQLJ8AX_Cmnas&_nc_ht=scontent-iad3-2.xx&oh=00_AfBIes2Mgww_rxZv_LUUVJ1_q8QZcfbnOVwC0MA-ldfnRQ&oe=64820D04'

    const cloud = 'https://www.shopbala.com/static/91c9d17a1ecad3bc41499c771733d76c/d28fc/PLP-12-Mobile-1.jpg'

    const vapor = 'https://static.dezeen.com/uploads/2014/08/Nike-pop-up-robert-storey-studio_dezeen_784_5.jpg'

    if (!open) return null;

    const areaClose = (e) => {
        if (e.target.id === `${id}`) {
            onClose()
        }
    }

    // const newPod = {
    //     name: 'Breeze Pod',
    //     image: 'https://images-platform.99static.com//ww0Tx85rXClf2LZcxvc14IT4PvE=/360x4843:944x5427/fit-in/500x500/projects-files/60/6050/605097/9854e835-ef81-40ff-810b-0007cb10dc27.jpg',
    //     user_id: userId,
    //     hotel_id: listing.id
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(userId)
    //     if (userId === null) {
    //         console.log('unauthorized access')
    //     }
    //     fetch(`/pods/${userId}`, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(newPod)
    //     })
    //         .then(r => r.json())
    //     console.log('pod created')
    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(podChoice)
        fetch(`/user/${id}/pods`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: podChoice,
                image: podImage
            })
        })
            .then(r => r.json())
            .then(updatedPod => updatedPods(updatedPod))
            console.log('updated!')
    }

    const selectPod = (e) => {
        if (e.target.id === "breeze") {
            setPodImage(breeze)
            setPodChoice('Breeze Pod')
        } else if (e.target.id === "cloud") {
            setPodImage(cloud)
            setPodChoice('Cloud Pod')
        } else if (e.target.id === "vapor") {
            setPodImage(vapor)
            setPodChoice('Vapor Pod')
        }
    }

    return (
        <div className="">
            <div onClick={areaClose} id={id} className='fixed z-[9999] w-screen h-screen inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='w-[600px] flex flex-col'>
                    <div>
                        <button onClick={onClose} className='absolute top-[60px] start-[890px] end-[350px] text-white text-xl'>X</button>
                        <div className='bg-white p-2 rounded'>Edit Modal
                            <img className="w-1/2" src={podImage} alt="breeze" />
                            <div>
                                <button onClick={selectPod} id="breeze" className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:bg-purple-600  focus:text-white"> Breeze Pod </button>
                                <button onClick={selectPod} id="cloud" className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:bg-purple-600  focus:text-white"> Cloud Pod </button>
                                <button onClick={selectPod} id="vapor" className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:bg-purple-600  focus:text-white"> Vapor Pod </button>
                                <h3 className="p-8 text-center">  
                                </h3>
                            </div>
                            <form className="text-center" onSubmit={handleSubmit}>
                                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"> Confirm Change </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal