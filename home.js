import React, {useState} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'

import signiniImage from '../assets/signup.jpg'
const initialState={
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    phoneNumber:'',
    avatarURL:'',
}
const Auth = () => {
    const [form,setForm]=useState(initialState)
    const [isSignup, setIsSignup] = useState(true)
    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
        console.log(form)
    }
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(form)

    }

    return (
        <div className="auth__from-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{
                            isSignup
                                ? 'signup '
                                : 'sign in'
                        }</p>
                    <form onSubmit={handleSubmit}>
                        {
                            isSignup && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="fullName">
                                        Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder='Full Name'
                                        onChange={handleChange}
                                        required="required"/>
                                </div>
                            )
                        }
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">
                                User Name</label>
                            <input
                                type="text"
                                name="username"
                                placeholder='User xName'
                                onChange={handleChange}
                                required="required"/>
                        </div>
                        {
                            isSignup && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="phonenumber">
                                        Phone Number</label>
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        placeholder='Phone Number '
                                        onChange={handleChange}
                                        required="required"/>
                                </div>
                            )
                        }
                        {
                            isSignup && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="avaterURL">
                                        Avatar URL</label>
                                    <input
                                        type="text"
                                        name="avatarURL"
                                        placeholder='Avatar URL '
                                        onChange={handleChange}
                                        required="required"/>
                                </div>
                            )
                        }

                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">
                                Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                onChange={handleChange}
                                required="required"/>
                        </div>

                        {
                            isSignup && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="confimpassword">
                                        Confim Password</label>
                                    <input
                                        type="password"
                                        name="confirmpassword"
                                        placeholder='Confirm password'
                                        onChange={handleChange}
                                        required="required"/>
                                </div>
                            )
                        }
                        <div className="auth__form-container_fields-content_button">
                            <button>
                                {isSignup ?"SignUp ":"SignIn"}
                            </button>
                        </div>
                    </form>

                    <div className="auth__form-container_fields-account">
                        <p>

                            {
                                isSignup
                                    ? "already have an account "
                                    : "don't have an account? "
                            }
                            <span onClick={switchMode}>
                                {
                                    isSignup
                                        ? "Sign In "
                                        : "sign Up "
                                }

                            </span>
                        </p>
                    </div>

                </div>

            </div>
            <div className="auth__form-container_image">
                <img src={signiniImage} alt="sign in"/>
            </div>
        </div>
    )
}

export default Auth
