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
            .then( setShowSignIn(false))
            .then( setCurrentUser("guest"))
            .then( setUserId(-1))
            .then(window.location.reload())
    }
    if (currentUser !== "guest") {
        return (
            <header className="sticky top-0 z-50 bg-white shadow-md p-3">
                <div className="">
                </div>
                <div className="flex w-full grid grid-cols-3 items-center text-4xl font-bold">
                    <div>
                        <Link to='/mypods'> My Pods. </Link>
                    </div>
                    <div className="flex w-full justify-center">
                        <Link to='/'>
                            ≡Airgym.
                        </Link>
                    </div>
                    <div className="flex items-center justify-end">
                        <div style={{ cursor: 'pointer' }} onClick={handleLogOut}  className="flex items-center space-x-2  p-2 rounded-full">
                            <div>
                                Logout
                            </div>
                            <UserCircleIcon className="flex text-slate-600 h-8" />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
    
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md p-3">
            <div className="">
            </div>
            <div className="flex w-full grid grid-cols-3 items-center text-4xl font-bold">
                <div>
                </div>
                <div className="flex w-full justify-center">
                    <Link to='/'> 
                        ≡Airgym.
                    </Link>
                </div>
                <div className="flex items-center justify-end">
                    <div style={{ cursor: 'pointer' }} onClick={handleClick}  className="flex items-center space-x-2 p-2 rounded-full">
                        <div>
                            Login
                        </div>
                        <UserCircleIcon className="flex text-slate-600 h-8" />
                    </div>
                </div>
            </div>
            <SigninModal appear={showSignIn} disappear={() => setShowSignIn(false)} toggle={signInSignUp} />
            <SignupModal signUpAppear={showSignUp} signUpDisappear={() => setShowSignUp(false)} toggle={signInSignUp} />
        </header>
    )
}

export default Header
