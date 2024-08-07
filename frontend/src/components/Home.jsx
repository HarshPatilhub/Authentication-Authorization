import React, { useState } from 'react'
import {Link} from "react-router-dom"

const Home = () => {

  const [message,setmessage] = useState('')
  return (
    <div className='h-screen w-full bg-gray-800  flex justify-center items-center gap-44 text-white'>
      <div>
        <img src="https://miro.medium.com/v2/resize:fit:1200/1*BuFBq5NKiG2pCBDkG5AK7Q.jpeg" width={500} alt="" />
      </div>
      <div className='text-center'>
        <h1 className='text-4xl leading-tight'>Authorization & Authenticaton</h1>
        <p className='text-xl'>{}</p>
        <div>
        <Link to={'/login'}><button  className='bg-blue-500 shadow-lg shadow-grey-800 hover:scale-95 transition-all duration-100 font-bold px-9 text-white  py-2 m-5'> Login </button></Link>
        <Link to={'/register'} > <button className='bg-blue-500 shadow-lg shadow-grey-800 hover:scale-95 transition-all duration-100 font-bold px-9 text-white  py-2 m-5'> Register</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
