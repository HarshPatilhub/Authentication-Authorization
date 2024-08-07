import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"


const Register = () => {

  const [username,setuser] =useState('')
  const [email,setemail] =useState('')
  const [password,setpassword] =useState('')
  const [mymessage,setmessage] = useState('')
  const [errors,seterrors] = useState('')

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const userdata = {username,email,password};
      const response = await axios.post('/users/reg', userdata) 
      console.log("Response data", response.data);
      setmessage(response.data.message)
      setuser('')
      setemail('')
      setpassword('')
      seterrors("")
      setTimeout(() => {
        setmessage('')
      }, 3000);
    } catch (error) {
      if (error.request.status === 409) {
        seterrors("Username or email already existed")
      }
    }
  }
  
  useEffect(()=>{
    // fetchdata()

  },[])

  
  const handleclick = (e)=>{
    // console.log("submit hua");
  }
  return (
    <div>
      <div className='w-full flex h-screen bg-gray-800 justify-center items-center'>
      <div className='border  w-96 p-4 shadow-xl bg-white rounded-2xl'>
      <form className='leading-10' onSubmit={handleSubmit}>
        <div><h2 className='w-full flex'>
         { mymessage && <i className= "mx-5 fa-solid text-green-500 text-3xl fa-circle-check"></i>}{mymessage}</h2></div>
        <p className='text-center text-4xl py-2 font-bold'>Register</p>
        <h1 className='text-[15px] '>username</h1>  
        <input type="text" required
        placeholder='Type your username'
        value={username}
        onChange={(e)=> setuser(e.target.value)}
        className='w-full mb- border-b-2 px-5 bg-zinc-100 text-black border-zinc-300' />
        <h1 className='text-[15px] '>Email</h1>
        <input type="email" required
        placeholder='Type your email'
        value={email}
        onChange={(e)=> setemail(e.target.value)}
        className='w-full mb- border-b-2 px-5 bg-zinc-100 text-black border-zinc-300' />
        <h1 className='text-[15px] '>Password</h1>
        <input type="password" required
        placeholder='Type your password'
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        className='w-full mb- border-b-2 px-5 bg-zinc-100 text-black border-zinc-300' />
        <button className='w-full bg-red-500 text-white font-bold my-3' type='submit' onClick={handleclick}>Register</button>
        { errors  &&  <p className='text-red-600 text-center'>{errors}</p>}
        <p className='text-center my-5'>Or Sign up using </p>
        <div className='flex justify-center items-center gap-8'>
        <i className=" text-3xl text-blue-800 fa-brands fa-facebook"></i> 
        <i className=" text-3xl text-blue-400 fa-brands fa-twitter"></i> 
        <i className=" text-3xl bg-gradient-to-r from-red-600 via-yellow-600 to-green-600 text-transparent bg-clip-text  fa-brands fa-google"></i> 
        </div>
        <Link to={'/login'} className='flex justify-center'>Already Existed Customer?<span className='underline text-red-400'>Login</span></Link>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Register
