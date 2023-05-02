import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';

function Signin() {
    const navigate = useNavigate()
    const {currentUser, setCurrentUser} = useContext(GlobalContext)

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
                            navigate("/", { state: { idToken } })
                        })
                } else {
                    console.log('failure')
                }
            })
        e.target.reset()
    }

    return (
        <div>
            <div >sukase: travel lighter</div>
            <div>
                <div>
                    <h2>Login Here</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="email" />
                    </div>
                    <div>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div>
                    <NavLink to='/sign_up'>Don't have an account? Create one!</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Signin;
