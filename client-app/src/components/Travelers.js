import React from 'react'
import TravelerCard from './TravelerCard'


function Travelers({travelers, name}) {

  const uniqueTravelerList = [...new Set(travelers.map(traveler => traveler.email))].map(email => {
    return travelers.find(traveler => traveler.email === email)
  })
  
  const travelerList = uniqueTravelerList.map((traveler, i) => {

    return (<TravelerCard key={i} name={name} email={traveler.email}/>)
  })

  return (
    <div class="relative overflow-hidden">
      <img src="https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1612351.jpg&fm=jpg" alt="Avatar" className="object-cover brightness-75 w-full h-full" />
      <div className="cursor-default absolute w-full py-0 bottom-[90%] inset-x-0 text-white text-3xl px-12 leading-4">
        Recent stays
      </div>
      <div className="absolute text-center w-full py-0 bottom-[65%] inset-x-0 px-12 leading-4 items-center grid grid-cols-3 text-white">
        {travelerList}
      </div>
    </div>
  )
}

export default Travelers