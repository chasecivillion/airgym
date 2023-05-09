import React from 'react'

function BreezePod() {
  return (
    <div className="relative p-8 hover:shadow-lg transition duration-200 ease-out ">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-full w-full">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-4 group-hover:scale-125" src="https://images.pexels.com/photos/933877/pexels-photo-933877.jpeg?cs=srgb&dl=pexels-mica-asato-933877.jpg&fm=jpg" alt="breeze pod" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-sans text-3xl font-bold text-white">Breeze Pod</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">DESCRIPTION HERE</p>
          <button id="breeze" className="rounded-full bg-neutral-900 py-2 px-3.5 font-sans text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
    </div>

  )
}

export default BreezePod