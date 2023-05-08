import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { HomeIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { UserContext } from './UserContext'
import { IdContext } from './IdContext'
import SigninModal from './SigninModal'
import SignupModal from './SignupModal'

function Header() {

    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { userId, setUserId } = useContext(IdContext)
    const [ showSignIn, setShowSignIn ] = useState(false)
    const [ showSignUp, setShowSignUp ] = useState(false)

    const handleClick = () => {
        setShowSignIn(true)
    }

    const signInSignUp = () => {
        setShowSignUp(!showSignUp)
        setShowSignIn(!showSignIn)
    }
    const handleLogOut = () => {
        // e.preventDefault()
        // const user = {user: currentUser}
        fetch("/sign_out")
            .then( response => response.json())
            .then( setCurrentUser("guest"))
            .then( setUserId(-1))
            window.location.reload()
            // return (
            // <div>
            //     <div>
            //         <Link to='/sign_in'> Log In </Link>
            //     </div>
            //     <div>
            //         <Link to='/'> Home </Link>
            //     </div>
            // </div>
            // )
    }
    if (currentUser !== "guest") {
        return (
            <div>
                <div>
                    Welcome back, {currentUser}!
                </div>
                <div>
                    <Link to='/'> Home </Link>
                </div>
                <div>
                    <Link to='/mypods'> My Pods </Link>
                </div>
                <div>
                    <button onClick={handleLogOut}>Logout</button>
                </div>
                <div>
                    <Link to='/turtlebay'>𓆉</Link>
                </div>
            </div>
        )
    }
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md p-3 grid grid-cols-3">
            <div className="flex items-center">
                <img 
                    src="https://www.pngall.com/wp-content/uploads/5/Wind-PNG-Free-Image.png"
                    className="max-w-[50px]"
                    alt="logo"/>
            </div>
            <div className="flex items-center">
                <Link to='/'> <HomeIcon className="h-8 bg-red-400 text-white rounded-full p-2" /> </Link>
            </div>
            <div className="flex items-center justify-end text-gray-500">
                <div style={{ cursor: 'pointer' }} onClick={handleClick}  className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <div>
                        Login
                    </div>
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
            <SigninModal appear={showSignIn} disappear={() => setShowSignIn(false)} toggle={signInSignUp} />
            <SignupModal signUpAppear={showSignUp} signUpDisappear={() => setShowSignUp(false)} toggle={signInSignUp} />
        </header>
    )
}

export default Header
