import React, {useState} from 'react';
import EyeActive from './images/eye.svg';
import EyeDisabled from './images/Property 1=Linear, Property 2=No show.svg'
import Lock from './images/lock1.svg';
import Sms from './images/sms.svg';
import { Navigate, useLocation } from 'react-router-dom';
// import AuthService from './Auth/authin';


const LoginForm = (props) => {
    const [show,setShow]=useState(false);
    const handelShow=()=>{
        setShow(!show);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        <Navigate to= '/'/>
    }
  return (
    <div className="form-container">
        <div className="login-info">
            <h1>Log In</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, maiores.</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <span className="left-icon">
                    <img src={Sms} />
                </span>
                <input name="Email" autoComplete="off" type='email' placeholder='Enter Your Email' required/>
            </div>
            <div className="input-container">
                <span className="left-icon">
                    <img src={Lock} />
                </span>
                <input type={show?'text':'password'} placeholder='Enter Your Password' name="Password" autoComplete="off" required/>
                <span className="right-icon" onClick={handelShow}>
                    <img src={!show?EyeActive:EyeDisabled} />
                </span>
            </div>
            <div className="forget">
                <a href='#'>Forget Password?</a>
            </div>
            <div className="submit-btn">
                <button type='submit'>Sign in</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm;