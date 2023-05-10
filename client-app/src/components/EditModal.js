import { useState } from "react";

function EditModal({ id, name, image, key, open, onClose, updatedPods, openUpdateModal }) {

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
            onClose()
            openUpdateModal()
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
                <div className='w-[500px] flex flex-col'>
                    <div>
                        <button onClick={onClose} className='absolute top-[40px] start-[465px] end-[0px] text-black text-xl'>X</button>
                        <div className='bg-white rounded-md'>
                            <div className="flex pt-4 pb-2 justify-center">
                                Current gear: {name}  
                            </div>
                            <div className="flex justify-center">
                                <img className="rounded-md pr-5 pl-5 pt-5 pb-1 " src={podImage} alt="breeze" />
                            </div>
                            <div className="flex p-2 grid grid-cols-3 items-center justify-center">
                                <button onClick={selectPod} id="breeze" className="p-3 text-sm text-purple-600 font-semibold rounded-full hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:bg-purple-600  focus:text-white"> Breeze Pod </button>
                                <button onClick={selectPod} id="cloud" className="p-3 text-sm text-purple-600 font-semibold rounded-full hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:bg-purple-600  focus:text-white"> Cloud Pod </button>
                                <button onClick={selectPod} id="vapor" className="p-3 text-sm text-purple-600 font-semibold rounded-full hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:bg-purple-600  focus:text-white"> Vapor Pod </button>
                                <h3 className="p-8 text-center">  
                                </h3>
                                <form className="flex w-full h-2/3 justify-center text-center" onSubmit={handleSubmit}>
                                    <button className="w-full font-bold px-4 py-2 pt-2 text-md text-purple-600 font-semibold rounded-sm border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"> Confirm </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal