import React, {useState, useContext} from 'react'
import { IdContext } from './IdContext'

function MyPods() {

    const [ pods, setPods ] = useState([])
    const { userId, setUserId } = useContext(IdContext)

    
    fetch(`/user/${userId}`)
    .then(response => response.json())
    .then(obj => setPods(obj))
    // const 
  return (
    <div></div>
  )
}

export default MyPods