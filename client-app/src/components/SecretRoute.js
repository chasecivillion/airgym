import React, { useState } from 'react'
import Travelers from './Travelers'

function SecretRoute() {

  const [ travelers, setTravelers ] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault()
    // const randint = Math.floor(Math.random()*986) + 1
    fetch(`/hotels/135`)
      .then(response => {
        if (response.ok) {
            response.json()
            .then(obj => {
                setTravelers(obj)
            })
        }
        return(
            <div>Turtles don't fly</div>
        )
    })
  }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Open Shell
              </button>
          </form>
          <div>
            <Travelers travelers={travelers}/>
          </div>
      </div>
  )
}

export default SecretRoute