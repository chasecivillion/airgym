import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik'
import Signin from './Signin';
import { basicSchema } from '../FormSchema/BasicSchema';
import '../index.css';

function Signup() {
    
    const onSubmit = (values, actions) => {

        fetch("/sign_up", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    email: values.email,
                    password: values.password,
                }
            )
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
        actions.resetForm()
    }
    const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const new_user = {
        email: email,
        password: password,
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
                        className={errors.email && touched.email ? 'border-2 border-red-300' : 
                            '' }
                        type="text" 
                        name="email" 
                        placeholder="email" />

                        {errors.email && touched.email && <p className='text-red-400'>{errors.email}</p>}

                    <label htmlFor="password">Password</label>
                    <input
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password ? 'border-2 border-red-300' :
                            ''} 
                        type="password" 
                        name="password" 
                        placeholder="password" />

                        {errors.password && touched.password && <p className='text-red-400'>{errors.password}</p>}

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.confirmPassword && touched.confirmPassword ? 'border-2 border-red-300' :
                            ''} 
                        type="password"
                        name="confirmPassword"
                        placeholder="confirm password" />
                        {errors.confirmPassword && touched.confirmPassword && <p className='text-red-400'>{errors.confirmPassword}</p>}
                
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
