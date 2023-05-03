import React, {useState, useEffect, useContext} from 'react'
import { IdContext } from './IdContext'
import PodCards from './PodCards'
import PodCard from './PodCard'

function MyPods() {

    const [ pods, setPods ] = useState([])
    const { userId, setUserId } = useContext(IdContext)

    console.log(userId)

    useEffect(() => {
        fetch(`/user/${userId}`)
        .then(r => {
            if (r.status === 200) {
                r.json()
                    .then(pods => {
                        const podsObj = pods
                        const listPods = podsObj.pods
                        setPods(listPods)
                    })
            } else {
                console.log('User not found')
            }
        })
    },[])



    const remainingPods = (deletingPod) => {
        const newPods = pods.filter(podObj => podObj.id !== deletingPod)
        setPods(newPods)
    }

  return (
    <div><PodCards pods={pods} remainingPods={remainingPods}/></div>
  )
}

export default MyPods