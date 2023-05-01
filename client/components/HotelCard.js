import React from 'react'

function HotelCard({listing}) {
  return (
    <div>
        <h1>{listing.name}</h1>
        <img src={listing.images} alt="Paris Hotel"/>
        <h2>{listing.city}</h2>
    </div>
  )
}

export default HotelCard