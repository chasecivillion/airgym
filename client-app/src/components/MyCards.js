import React from 'react'
import MyCard from './MyCard';
import PodCard from './PodCard'
import HotelPodCard from './HotelPodCard'

function MyCards({ hotels, pods, remainingPods, updatedPods }) {

  const myCards = [];

  for (let i = 0; i < hotels.length && i < pods.length; i++) {
    myCards.push(
      <MyCard
        key={hotels[i].id + pods[i].id}
        hotel={hotels[i]}
        pod={pods[i]}
        remainingPods={remainingPods}
        updatedPods={updatedPods}
      />
    );
  }
  return (
      <div>{myCards}</div>
  )
}

export default MyCards