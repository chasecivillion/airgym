import React from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid'

function TravelerCard({email, name, count}) {

  return (
    <div className="w-full h-36 p-12 flex justify-center items-center">
        <div className="w-full md:w-6/12 lg:w-4/12 space-y-2">
            <div className="relative">
                <div className="absolute">
                    <div className="flex justify-center">
                        <UserCircleIcon alt="user photo" className="w-10 h-10 object-cover rounded-full" />
                    </div>
                    <div className="cursor-default">
                        <h2 className="cursor-default text-base">{email}</h2>
                        <span className=" cursor-default text-sm opacity-60"> at {name}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default TravelerCard