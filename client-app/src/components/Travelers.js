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
    <div className="flex items-center w-screen h-screen grid bg-gradient-to-r from-pink-400 to-purple-600">{travelerList}</div>
  )
}

export default Travelers