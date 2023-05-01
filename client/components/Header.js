import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
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

export default Header
