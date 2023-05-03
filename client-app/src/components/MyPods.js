import React, {useContext} from 'react'
import { IdContext } from './IdContext'

function MyPods() {

    const { userId, setUserId } = useContext(IdContext)

    
    fetch(`/user/${userId}`)
    .then(response => response.json())
    .then(obj => console.log(obj))
  return (
    <div>MyPods</div>
  )
}

export default MyPods