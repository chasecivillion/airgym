import React from 'react'

function HotelCard({listing}) {
  return (
    <div>
      <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          <img className="h-full w-full" src={listing.images} alt={listing.name}/>
        </div>
        <div className="flex flex-col flex-grow pl-5">
          <div className="flex justify-between">
            <p className="text-sm pb-2">Distance from city center: {listing.distance} KM</p>
          </div>
          <h4 className="text-xl">{listing.name}</h4>
          <div className="border-b w-2/3 pt-2"/>
          <p className="pt-4 text-sm text-gray-500 flex-grow">
            This hotel is currently offering these pods:
          </p>
        </div>
      </div>
    </div>
  )
}

export default HotelCard