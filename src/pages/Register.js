import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirm, setPasswordConfirm] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user')
    if(user) {
      navigate('/main')
    }
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    if(password === password_confirm) {
      await axios.post('http://localhost:8080/user', {
        email: email,
        username: username,
        password: password,
        isSeller: 0
      }).then(res => {
        if(res.status === 200) {
          alert(res.data.message)
          navigate("/login")
        }
      })
    }
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
              Registrasi
            </div>
          </div>
          <div>
            <form onSubmit={submitHandler} className='flex mt-10'>
              <div className="w-5/6 px-2 space-y-5">
                <div className='space-y-2'>
                  <label htmlFor="nama" className='block'>Nama Lengkap</label>
                  <input type="text" name="nama" value={nama} onChange={(e) => setNama(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="username" className='block'>Username</label>
                  <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="email" className='block'>Email</label>
                  <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="password" className='block'>Password</label>
                  <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="password_confirm" className='block'>Verifikasi Password</label>
                  <input type="password" name="password_confirm" value={password_confirm} onChange={(e) => setPasswordConfirm(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' />
                </div>
                <div>
                  <button type="submit" className='bg-green-500 py-1 px-6 rounded-xl text-white font-semibold'>Buat Akun</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register