import { Square3Stack3DIcon } from '@heroicons/react/20/solid'
import React from 'react'

function HotelCard({listing}) {
  return (
    <div >
      <div className="flex py-7 px-2 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          <img className="h-full w-full rounded-2xl" src={listing.images} alt={listing.name}/>
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
          <div className="flex font-bold text-gray-500 text-xs">
            <div className="justify-center text-center p-2 w-14">
              <Square3Stack3DIcon className="ml-2 h-6 text-teal-300"/>
              <div className="flex mt-1.5 flex mt-1.5 bg-gradient-to-r from-teal-400 via-sky-300 to-blue-300 inline-block text-transparent bg-clip-text">
                Breeze
              </div>
            </div>
            <div className="justify-center p-2 w-14">
              <Square3Stack3DIcon className="ml-1 h-6 text-sky-300"/>
              <div className="flex mt-1.5 bg-gradient-to-r from-sky-400 via-purple-400 to-red-300 inline-block text-transparent bg-clip-text">
                Cloud
              </div>
            </div>
            <div className="justify-center p-2 w-14">
              <Square3Stack3DIcon className="ml-1 h-6 text-pink-300"/>
              <div className="flex mt-1.5 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                Vapor
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelCard