import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik'
import Signin from './Signin';
import { basicSchema } from '../FormSchema/BasicSchema';
import '../index.css';
import SigninModal from './SigninModal';

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
                            <NavLink to='/'>
                                <SigninModal />
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
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // const new_user = {
    //     email: email,
    //     password: password,
    // }


    return (
        <div className="pr-32 pl-32 pb-12">
            <form 
            className="justify-center" 
            autoComplete="off" 
            onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label 
                    htmlFor="email"
                    className="block mb-.5 text-sm font-medium text-gray-900 ">
                        Email
                    </label>
                    <input 
                        value={values.email} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email ? "border-2 border-red-300 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" : 
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" }
                        type="text" 
                        name="email" 
                        placeholder="email" />
                        {errors.email && touched.email && <p className='text-red-400'>{errors.email}</p>}
                </div>
                <div className="mb-6">
                    <label 
                    htmlFor="password"
                    className="block mb-.5 text-sm font-medium text-gray-900 ">
                        Password
                    </label>
                    <input
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password ? "border-2 border-red-300 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" : 
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" } 
                        type="password" 
                        name="password" 
                        placeholder="password" />
                        {errors.password && touched.password && <p className='text-red-400'>{errors.password}</p>}
                </div>
                <div className="mb-6">
                    <label 
                    htmlFor="confirmPassword"
                    className="block mb-.5 text-sm font-medium text-gray-900 ">
                        Confirm Password
                    </label>
                    <input
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.confirmPassword && touched.confirmPassword ? "border-2 border-red-300 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" : 
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" } 
                        type="password"
                        name="confirmPassword"
                        placeholder="confirm password" />
                        {errors.confirmPassword && touched.confirmPassword && <p className='text-red-400'>{errors.confirmPassword}</p>}
                </div>
                <button 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default Signup;
