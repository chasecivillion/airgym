import { HeartIcon } from '@heroicons/react/20/solid'
import React from 'react'

function Footer() {
  return (
    <div className="absolute w-full">
        <div className="flex absolute w-full text-xs opacity-70 flex justify-center pt-24 pb-2">
            <HeartIcon className="text-red-500 pr-1 h-3.5"/> you, ps
        </div>
    </div>
  )
}

export default Footer