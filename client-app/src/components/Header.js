import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { GlobalContext } from './GlobalContext'
import SigninModal from './SigninModal'

function Header() {

    const { currentUser, setCurrentUser } = useContext(GlobalContext)
    const [ showSignIn, setShowSignIn ] = useState(false)

    const handleClick = () => {
        setShowSignIn(true)
    }
    const handleLogOut = (e) => {
        e.preventDefault()
        const user = {user: currentUser}
        fetch("/sign_out", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
            .then(setCurrentUser("guest"))
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
                    <form onSubmit={handleLogOut}>
                        <button>Logout</button>
                    </form>
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
