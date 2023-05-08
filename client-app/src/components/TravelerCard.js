import React from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid'

function TravelerCard({email}) {

  return (
    <div className="w-screen h-screen p-12 flex justify-center items-center bg-gradient-to-r from-pink-400 to-purple-600">
    <div className="w-full md:w-6/12 lg:w-4/12 space-y-2">
    <div className="relative">
        <input type="radio" name="user" id="user1" className="hidden peer" />
        <label htmlFor="user1" className="flex items-center gap-4 p-4 rounded-xl bg-white bg-opacity-90 backdrop-blur-2xl shadow-xl hover:bg-opacity-75 peer-checked:bg-purple-900 peer-checked:text-white cursor-pointer transition">
            <UserCircleIcon alt="user photo" className="w-10 h-10 object-cover rounded-full" />
            <div>
                <h6 className="text-base">{email}</h6>
                <span className="text-sm opacity-60">UX Writer</span>
            </div>
        </label>
        <div className="flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-purple-700 scale-0 peer-checked:scale-100 transition delay-100">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 text-white my-auto mx-auto" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg> */}
        </div>
    </div>
    </div>
    </div>
)
}
export default TravelerCard