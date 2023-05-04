import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Signin from './Signin';

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const new_user = {
        email: email,
        password: password,
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/sign_up", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(new_user)
        })
            .then(r => {
                if (r.ok) {
                    r.json()
                        .then(console.log('success'))
                    return (
                        <main>
                            <NavLink to='/sign_in'>
                                <Signin />
                            </NavLink>
                        </main>
                    )
                } else {
                    console.log('failure')
                }
            })
        e.target.reset()
    }

    return (
        <div>
            <div>sukase: travel lighter</div>
            <div>
                <div>
                    <h2>Create a New Account</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="email" />
                    </div>
                    <div>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" />
                    </div>
                    <button type="submit">Create Account</button>
                </form>
                <div>
                    <NavLink to='/sign_in'>Return to Login</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Signup;
