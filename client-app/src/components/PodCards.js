import React from 'react'
import PodCard from './PodCard'
import HotelPodCard from './HotelPodCard'

function PodCards({ hotels, pods, remainingPods, updatedPods }) {

  const userComponents = [];

  for (let i = 0; i < hotels.length && i < pods.length; i++) {
    userComponents.push(
      <HotelPodCard key={hotels[i].id} image={hotels[i].images} name={hotels[i].name} />,
      <PodCard key={pods[i].id} pod={pods[i]} remainingPods={remainingPods} updatedPods={updatedPods} />
    );
  }
  return (
    <div>{userComponents}</div>
  )
}

export default PodCards