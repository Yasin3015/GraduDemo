import React,{useState,useEffect} from 'react'
import Carousel from '../../components/carousel';
import LoginForm from '../../components/loinForm';
const SignInLayout = (props) => {
    const [logged,setLogged]=useState(false);
    useEffect(() => {
        localStorage.setItem('logged', logged);
    }, [logged]);
    const handleLogin = ()=>{
        setLogged(!logged);
    }
  return (
    <div className="login-page">
        <div className="left-side">
          <Carousel />
        </div>
        <div className="right-side">
          <LoginForm handleLogin={handleLogin}/>
        </div>
    </div>
  )
}

export default SignInLayout