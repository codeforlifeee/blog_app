import React, { useState } from 'react'
import '../UserLogin/userlogin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';




const UserLogin = () => {

  const[userName,setUserName]= useState('');
  const[password,setPassword] = useState('');
  const[isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler =(event)=>{
    event.preventDefault();
    setLoading(true);
    console.log(userName,password);
    axios.post('http://localhost:3000/auth/admin/login',{
      userName:userName,
      password:password
    })
    .then(res=>{
      setLoading(false);
      console.log(res.data)
      localStorage.setItem('email',res.data.email);
      localStorage.setItem('fullName',res.data.fullName);
      localStorage.setItem('token',res.data.token);
      navigate('/admin/dashboard')
    })
    .catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className='loginContainer'>
      <div className='loginBox'>
        <form onSubmit={submitHandler} className='loginBox'> 
        
        <h1 align="center">Blog App</h1>
        <input onChange={(e)=>{setUserName(e.target.value)}} placeholder='username'/>
        <input onChange={(e)=>{setPassword(e.target.value)}} type='password'placeholder='password'/>

        <button className='submitBtn' type='submit'><span style={{marginLeft:20}}>Submit</span> <CircularProgress size={20} color='inherit'/></button>

        </form>
      </div>
    </div>
  )
}

export default UserLogin
