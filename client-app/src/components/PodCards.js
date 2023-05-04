import React from 'react'
import PodCard from './PodCard'

function PodCards({ pods, remainingPods, updatedPods }) {

  const userPods = pods.map((pod) => {
    return (<PodCard key={pod.id} pod={pod} remainingPods={remainingPods} updatedPods={updatedPods} />)
  })

  return (
    <div>{userPods}</div>
  )
}

export default PodCards