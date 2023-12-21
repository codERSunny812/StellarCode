import React,{useState}from 'react'
import Signup from './Signup';
import Login from './Login';

const Auth = () => {
  const[isLoggedIn , setUserLoggedIn] = useState(false);

  const AuthStats = () =>{
    setUserLoggedIn(true);
  }
  return (

    isLoggedIn? <Login/> : <Signup handleStatus = { AuthStats }/>
    
  )
}

export default Auth