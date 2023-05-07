import React from 'react'
import { useNavigate } from 'react-router-dom'
import HotelCard from './HotelCard'

function HotelCards({listing, range}) {

  const navigate = useNavigate()
  const state = {
    listing: listing,
    range: range
  }

  const handleClick = () => {
    navigate('/hotels/pods', {state})
  }

  return (
      <div style={{cursor: 'pointer'}} onClick={handleClick} >
          <HotelCard listing ={listing}/>
      </div>
  )
}

export default HotelCards