import React from 'react'

function PodCard({ pod }) {
  return (
    <div>
        <h1>
        {pod.name}
        </h1>
        <img src={pod.image} alt="pod"/>
        <h2>Pod Description goes here</h2>
    </div>
  )
}

export default PodCard