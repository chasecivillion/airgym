import React from 'react'
import TravelerCard from './TravelerCard'


function Travelers({travelers}) {


  const travelerList = travelers.map((traveler) => {
    return (<TravelerCard key={traveler.id} name={traveler.name} image={traveler.images} users={traveler.users}/>)
  })

  return (
    <div>{travelerList}</div>
  )
}

export default Travelers