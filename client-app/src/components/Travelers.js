import React from 'react'
import TravelerCard from './TravelerCard'


function Travelers({travelers}) {


  const travelerList = travelers.map((traveler) => {
    return (<TravelerCard key={traveler.id} email={traveler.email}/>)
  })

  return (
    <div>{travelerList}</div>
  )
}

export default Travelers