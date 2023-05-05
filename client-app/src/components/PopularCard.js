import React from 'react'

function PopularCard({key, name, images, id}) {
  return (
    <div>
        <h1>{name}</h1>
        <img src={images} alt="hotel"/>
    </div>
  )
}

export default PopularCard