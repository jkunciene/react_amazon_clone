import React from 'react'
import './login.css'
import logo from '../../img/logo.svg.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login_logo'
                    src={logo}
                />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text'/>

                    <h5>Password</h5>
                    <input type='password'/>

                    <button className='login_signInButton'>Sign In</button>

                </form>
                <p>
                    By signing-in you agree to MY Conditions of Use & Copy.
                </p>

                <button className='login_registerButton'>Create new Account</button>

            </div>
        </div>
    )
}

export default Login
