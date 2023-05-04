import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik'
import Signin from './Signin';

function Signup() {

    const {values, handleChange, handleBlur} = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    })
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
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input 
                        value={values.email} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        type="text" 
                        name="email" 
                        placeholder="email" />
                    <label htmlFor="password">Password</label>
                    <input
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        type="password" 
                        name="password" 
                        placeholder="password" />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="confirmPassword"
                        name="confirmPassword"
                        placeholder="confirm password" />
                
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
