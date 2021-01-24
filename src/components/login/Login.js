import React, {useState} from 'react'
import './login.css'
import logo from '../../img/logo.svg.png'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'


const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

    }

    const register = e => {
        e.preventDefault()

        auth
        .createUserWithEmailAndPassword(email, password)
        //it successfully created a new user wiht email and passwd
        .then((auth) =>{
            console.log(auth);
        })
        .catch(error => alert(error.message))
       
    }


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
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn}
                    className='login_signInButton'>Sign In</button>

                </form>
                <p>
                    By signing-in you agree to MY Conditions of Use & Copy.
                </p>

                <button onClick={register}
                className='login_registerButton'>Create new Account</button>

            </div>
        </div>
    )
}

export default Login
