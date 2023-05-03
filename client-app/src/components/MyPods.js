import React, {useState, useContext} from 'react'
import { IdContext } from './IdContext'
import PodCard from './PodCard'

function MyPods() {

    const [ pods, setPods ] = useState([])
    const { userId, setUserId } = useContext(IdContext)

    
    fetch(`/user/${userId}`)
    .then(r => {
        if (r.status === 200) {
            r.json()
                .then(pods => {
                    console.log(pods)
                })
        } else {
            console.log('User not found')
        }
    })

    const userPods = pods.map((pod) => {
        return (<PodCard key={pod.id} pod={pod} />)
    })
    if (userPods.length === 0){
        return (
            <div>Empty!</div>
        )
    }
  return (
    <div>{userPods}</div>
  )
}

export default MyPods