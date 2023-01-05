import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Logo from "../assets/images/logo.png";


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = localStorage.getItem('user')
    if(user) {
      navigate('/main')
    }
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:8080/login', {
      email: email,
      password: password,
    }).then(res => {
      if(res.data.success) {
        alert(res.data.message)
        localStorage.setItem('user', JSON.stringify(res.data.data[0]))
        navigate("/main")
      }else{
        alert(res.data.message)
      }
    })
  }

  return (  
    <div>
      <div className='flex justify-center'>
        <div className='w-full lg:w-2/6 h-screen'>
          <div className='bg-green-600 py-2 flex space-x-5 items-center text-white px-5'>
            <div>
              <Link to="/" className='cursor-pointer hover:bg-green-300 bg-green-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
              </Link>
            </div>
            <div className='font-semibold text-lg'>
              Login
            </div>
          </div>
          <div>
            <div className='flex justify-center pt-28'>
              <img src={Logo} alt="" />
            </div>
            <form onSubmit={submitHandler} className='flex justify-center mt-10'>
              <div className='w-5/6 lg:w-1/2 space-y-5'>
                <div>
                  <label className='text-center block' htmlFor="">E-mail</label>
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='block w-full bg-green-500 py-1 px-5 rounded-xl text-white text-lg' />
                </div>
                <div>
                  <label className='text-center block' htmlFor="">Password</label>
                  <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className='block w-full bg-green-500 py-1 px-5 rounded-xl text-white text-lg' />
                </div>
                <div>
                  <div className='flex justify-center'>
                    <button type="submit" className='block bg-green-500 py-1 px-10 rounded-xl font-semibold text-white text-lg'>Masuk</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login