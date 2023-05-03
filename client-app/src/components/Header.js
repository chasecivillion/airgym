import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from './UserContext'
import { IdContext } from './IdContext'
import SigninModal from './SigninModal'

function Header() {

    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { userId, setUserId } = useContext(IdContext)
    const [ showSignIn, setShowSignIn ] = useState(false)

    const handleClick = () => {
        setShowSignIn(true)
    }
    const handleLogOut = () => {
        // e.preventDefault()
        // const user = {user: currentUser}
        fetch("/sign_out")
            .then( response => response.json())
            .then( setCurrentUser("guest"))
            .then( setUserId(-1))
            return (
            <div>
                <div>
                    <Link to='/sign_in'> Log In </Link>
                </div>
                <div>
                    <Link to='/'> Home </Link>
                </div>
            </div>
            )
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
            </div>
        )
    }
    return (
        <div >
            <div style={{cursor:'pointer'}} onClick={ handleClick }>
                Login
            </div>
            <div>
                <Link to='/'> Home </Link>
            </div>
            <SigninModal appear={showSignIn} disappear={() => setShowSignIn(false)} />
        </div>
    )
}

export default Header
