import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { IdContext } from './IdContext';

function Signin() {
    const navigate = useNavigate()
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const {userId, setUserId} = useContext(IdContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const user = {
        email: email,
        password: password,
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/sign_in", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
            .then(r => {
                if (r.status === 200) {
                    r.json()
                        .then(result => {
                            const idToken = result[0]['idToken']
                            const email = result[1]['email']
                            setCurrentUser(email)
                            setUserId(idToken)
                            navigate("/", { state: { idToken } })
                        })
                } else {
                    console.log('failure')
                }
            })
        e.target.reset()
    }

    return (
        <div className="pr-32 pl-32 pb-12">
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div >
                    <div className="mb-6">
                        <label htmlFor="sign-in-email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)}
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        type="text" 
                        name="email" 
                        placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="sign-in-password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)}
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        type="password" 
                        name="password" 
                        placeholder="password" />
                    </div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signin;


// <form>
//     <div class="mb-6">
//         <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//         <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
//     </div>
//     <div class="mb-6">
//         <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//         <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
//     </div>
//     <div class="mb-6">
//         <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
//         <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
//     </div>
//     <div class="flex items-start mb-6">
//         <div class="flex items-center h-5">
//             <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
//         </div>
//         <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
//     </div>
//     <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
// </form>

