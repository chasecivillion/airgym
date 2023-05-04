import { useState } from "react";

function EditModal({ name, image, id, open, onClose, updatedPods }) {

    const [ podImage, setPodImage ] = useState(image)
    const [ podChoice, setPodChoice ] = useState(name)

    const breeze = 'https://images-platform.99static.com//ww0Tx85rXClf2LZcxvc14IT4PvE=/360x4843:944x5427/fit-in/500x500/projects-files/60/6050/605097/9854e835-ef81-40ff-810b-0007cb10dc27.jpg'

    const cloud = 'https://cdn.dribbble.com/users/5935617/screenshots/16201104/media/f0e83b00016b2e1d78bcbb42e29b0c89.jpg?compress=1&resize=400x300&vertical=top'

    const vapor = 'https://repository-images.githubusercontent.com/49910095/8c5be280-5bbd-11ea-83c7-7fb50300e4df'

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
        <div onClick={areaClose} id={id} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <div>
                    <button onClick={onClose} className='absolute top-[60px] start-[890px] end-[350px] text-white text-xl'>X</button>
                    <div className='bg-white p-2 rounded'>Edit Modal
                        <img src={podImage} alt="breeze" />
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
    );
};

export default EditModal