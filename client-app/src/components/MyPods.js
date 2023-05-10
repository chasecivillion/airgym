import React, {useState, useEffect, useContext} from 'react'
import { IdContext } from './IdContext'
import MyCards from './MyCards'
import { useNavigate } from 'react-router-dom'

function MyPods() {

    const navigate = useNavigate()

    const [ pods, setPods ] = useState([])
    const [ hotels, setHotels ] = useState([])
    const { userId, setUserId } = useContext(IdContext)


    useEffect(() => {
        fetch(`/user/${userId}/pods`)
        .then(r => {
            if (r.status === 200) {
                r.json()
                    .then(hotelsAndPods => {
                        const hotelPodObj = hotelsAndPods
                        const listPods = hotelPodObj.pods
                        const listHotels = hotelPodObj.hotels
                        setPods(listPods)
                        setHotels(listHotels)
                    })
            } else {
                console.log('User not found')
                navigate('/')
            }
        })
    },[])

    const updatedPods = (updatedPod) => {
        const updatedUserPods = pods.map(pod => {
            return (pod.id !== updatedPod.id ? pod : updatedPod)
        })
        setPods(updatedUserPods)
    }

    const remainingPods = (deletingPod) => {
        const newPods = pods.filter(podObj => podObj.id !== deletingPod)
        setPods(newPods)
    }

  return (
    <div>
        <div className="z-0"><MyCards hotels={hotels} pods={pods} updatedPods={updatedPods} remainingPods={remainingPods}/></div>
        <div className="pb-96">
        </div>
    </div>
  )
}

export default MyPods