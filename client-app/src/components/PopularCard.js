import React from 'react'

function PopularCard({ name, images}) {

  return (
    <div className=" flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
        <div className="relative h-24 w-24">
            <img className="h-full rounded-lg" src={images} alt="hotel"/>
        </div>
        <div>
            <h2> {name} </h2>
            <h3 className="text=gray-500"></h3>
        </div>
    </div>
  )
}

export default PopularCard