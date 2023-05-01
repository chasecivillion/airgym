import React from 'react'
import { useNavigate } from 'react-router-dom'
import HotelCard from './HotelCard'

function HotelCards({listing}) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/hotels/pods', {state:{listing}})
  }

  return (
    <div style={{cursor: 'pointer'}} onClick={handleClick} >
        <HotelCard listing ={listing}/>
    </div>
  )
}

export default HotelCards