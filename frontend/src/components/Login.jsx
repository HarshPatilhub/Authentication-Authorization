import React, { useState } from 'react'
import axios from "axios"
import { Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
const Login = () => {

  const [email,setemail]= useState('')
  const [password,setpassword] = useState("")
  const [mymessage,setmaymessage] = useState("")
  const [errors,seterrors] = useState('')

  const navigate = useNavigate()  
  const handleSubmit =  async (e)=>{
    e.preventDefault()

    try {
      const userdata = {email,password}
      const response = await axios.post('users/login',userdata)
      console.log(response.data)
      setmaymessage(response.data.message)
      setemail('')
      setpassword('')
      seterrors('')
      setTimeout(() => {
        setmaymessage('')
        navigate("/")
      }, 3000);
      
    } catch (error) {
      if (error.request.status === 404) {
        seterrors("Email or password is incorrect")
      }
    }

  }

  const handleClick = ()=>{
    console.log("click hua");
  }
 

  return (
    <div className='w-full flex h-screen bg-gray-800 justify-center items-center'>
      <div className='border  w-96 p-4 shadow-xl bg-white rounded-2xl'>
      <form className='leading-10' onSubmit={handleSubmit}>
      <div><h2 className='w-full flex'>
         { mymessage && <i className= "mx-5 fa-solid text-green-500 text-3xl fa-circle-check"></i>}{mymessage}</h2></div>
        <p className='text-center text-4xl py-5 font-bold'>Login</p>
        <h1 className='text-lg '>Email</h1>
        <input type="email"
        value={email}
        onChange={(e)=> setemail(e.target.value)}
        placeholder='Type your email'
        className='w-full border-b-2 px-5 bg-zinc-100 text-black border-zinc-300' />
        <h1 className='text-lg '>Password</h1>
        <input type="password"
        placeholder='Type your password'
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        className='w-full border-b-2 px-5 bg-zinc-100 text-black border-zinc-300' />
        <a href="" className='flex justify-end text-zinc-500'>Forgot Password</a>
        <button className='w-full bg-red-500 text-white font-bold' type='submit' onClick={handleClick}>Login</button>
        { errors  &&  <p className='text-red-600 text-center'>{errors}</p>}
        <p className='text-center my-5'>Or Sign up using </p>
        <div className='flex justify-center items-center gap-8'>
        <i className=" text-3xl text-blue-800 fa-brands fa-facebook"></i> 
        <i className=" text-3xl text-blue-400 fa-brands fa-twitter"></i> 
        <i className=" text-3xl bg-gradient-to-r from-red-600 via-yellow-600 to-green-600 text-transparent bg-clip-text  fa-brands fa-google"></i> 
        </div>
        <Link to={'/register'} className='flex justify-center'><span className='underline text-red-400'>Register Now</span></Link></form>
      </div>
    </div>
  )
}

export default Login
