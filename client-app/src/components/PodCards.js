import React from 'react'
import PodCard from './PodCard'

function PodCards({ pods, remainingPods }) {

  const userPods = pods.map((pod) => {
    return (<PodCard key={pod.id} pod={pod} remainingPods={remainingPods} />)
  })

  return (
    <div>{userPods}</div>
  )
}

export default PodCards