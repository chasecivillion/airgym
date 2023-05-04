import React from 'react'

function HotelPodCard({ id, image, name }) {
  return (
    <div>
        <h1>{id}</h1>
        <img src={image}/>
        <h1>{name}</h1>
    </div>
  )
}

export default HotelPodCard