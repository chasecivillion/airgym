import React, {useState} from 'react'
import EditModal from './EditModal';

function MyCard({hotel, pod, remainingPods, updatedPods}) {


    const [showEditModal, setShowEditModal] = useState(false);

    const deletePod = () => {
        fetch(`/user/${pod.id}/pods`, { method: "DELETE" })
            .then(remainingPods(pod.id))
    }

    const openModal = () => {
        setShowEditModal(true)
    }

    return (
        <div>
            <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out">
                <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                    <img className="h-full w-full rounded-2xl" src={hotel.images} alt={hotel.name} />
                </div>
                <div className="flex flex-col flex-grow pl-5">
                    <div className="flex justify-between">
                        <p className="text-sm pb-2">Distance from city center: {hotel.distance} KM</p>
                    </div>
                <h4 className="text-xl">{hotel.name}</h4>
                <div className="border-b w-2/3 pt-2" />
                    <p className="pt-4 text-sm text-gray-500 flex-grow">
                        This hotel is currently offering these pods:
                    </p>
                </div>
                    <div className="flex h-24 w-40 items-center md:h-52 md:w-80 flex-shrink-0">
                        <img className="h-1/2 w-1/3 rounded-md" src={pod.image} alt={hotel.name} />
                        <div className="w-2/3 justify-center tracking-wider h-1/2">
                            {pod.name}
                                <button className="text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={deletePod}>Delete Pod</button>
                                <button className="text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={openModal}>Edit Pod</button>
                            <div className="flex bg-yellow-200">
                            </div>
                        </div>
                    <EditModal updatedPods={updatedPods} name={pod.name} image={pod.image} id={pod.id} open={showEditModal} onClose={() => setShowEditModal(false)} />
                    </div>
                <div>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    <div>

                        {/* <div >
                            <section>
                                <h1>
                                    {pod.name}
                                </h1>
                                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={deletePod}>Delete Pod</button>
                                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={openModal}>Edit Pod</button>
                                <h2>Pod Description goes here</h2>
                            </section>
                            <EditModal updatedPods={updatedPods} name={pod.name} image={pod.image} id={pod.id} open={showEditModal} onClose={() => setShowEditModal(false)} />
                        </div> */}
                        </div>
                    
                </div>
            </div>
        </div >
            )
}
export default MyCard;
        
        
        
        
        
        
        
        
        
        
        
        
        
        {/* // <div>

        // <div >
        //     <section>
        //         <h1>
        //             {pod.name}
        //         </h1>
        //         <img src={pod.image} alt="pod" />
        //         <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={deletePod}>Delete Pod</button>
        //         <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={openModal}>Edit Pod</button>
        //         <h2>Pod Description goes here</h2>
        //     </section>
        //     <EditModal updatedPods={updatedPods} name={pod.name} image={pod.image} id={pod.id} open={showEditModal} onClose={() => setShowEditModal(false)} />
        // </div>




    // <div>
    //     <img src={hotel.images}/>
    //     <h1>{hotel.name}</h1>
    //     </div>
    //     </div> */}
