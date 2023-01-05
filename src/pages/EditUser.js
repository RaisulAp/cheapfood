import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditUser() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useState([])

    const navigate = useNavigate();

    const getUser = async () => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            setUser(user)
            await axios.get('http://localhost:8080/user/' + user.id).then(res => {
                setUsername(res.data.data[0].username)
                setEmail(res.data.data[0].email)
            })

        }else{
            navigate('/login')
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        await axios.put('http://localhost:8080/user/'+user.id ,{
        username: username,
        email: email,
        password: password
        }).then(res => {
            if(res.data.success){
                alert("User berhasil diedit!")
                user.email = email
                user.username = username
                localStorage.setItem('user', JSON.stringify(user))
            }else{
                alert(res.data.message)
            }
        })
    }


    useEffect(() => {
        getUser()
    }, [])

    return (
        <div>
        <div className='h-screen'>
            <div className='flex justify-center'>
                <div className='w-full lg:w-2/6'>
                    <div className='bg-green-600 py-2 flex justify-between space-x-5 items-center text-white px-5'>
                        <div className='flex items-center space-x-5'>
                        <div className='py-2'>
                        <Link to="/user" className='cursor-pointer hover:bg-green-300 bg-green-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                            </svg>
                        </Link>
                        </div>
                        <div className='font-semibold text-2xl'>
                            Edit User
                        </div>
                        </div>
                    </div>
                    <form onSubmit={submitHandler} className='w-full block'>
                        <div className='space-y-3 mt-5'>
                            <div className='space-y-2'>
                                <label htmlFor="username" className='block'>Username</label>
                                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' placeholder='Username' />
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="email" className='block'>Email</label>
                                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' placeholder='Email' />
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="email" className='block'>Verifikasi Password</label>
                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' placeholder='Password' />
                            </div>
                            <div className='pt-3'>
                                <button type="submit" className='bg-green-500 py-1 px-6 rounded-xl text-white font-semibold float-right '>Edit user</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        </div>
    )
}

export default EditUser
