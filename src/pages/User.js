import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function User() {
  const [user, setUser] = useState([])
  const navigate = useNavigate();

  const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      setUser(user)
    }else{
      navigate('/login')
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    navigate('/login')
    alert('Berhasil logout!')
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className='h-screen'>
      <div className='flex justify-center'>
        <div className='w-full lg:w-2/6'>
          <div className='bg-green-600 py-2 flex justify-between space-x-5 items-center text-white px-5'>
            <div className='flex items-center space-x-5'>
              <div className='py-2'>
              <Link to="/main" className='cursor-pointer hover:bg-green-300 bg-green-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
              </Link>
              </div>
              <div className='font-semibold text-2xl'>
                Setelan
              </div>
            </div>
            <div>
              <div className='flex space-x-3'>
                
              </div>
            </div>
          </div>
          <div className='w-full'>
            <div className='flex items-center space-x-5 px-3 mt-5'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className='font-bold text-2xl'>
                  {user.username}
                </div>
                <div className="text-sm">Info</div>
              </div>
            </div>

            <div className='px-3 mt-6 space-y-5'>
              <div className='hover:bg-green-300 cursor-pointer hover:ring-2 ring-inset ring-green-500'>
                <Link to="/edit-user" className='flex items-center space-x-4'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                  </div>
                  <div>
                    <div className='font-semibold'>Akun</div>
                    <div className='text-sm'>Privasi, Ubah Nomor, Ubah Email</div>
                  </div>
                </Link>
              </div>
              { user.isSeller === 0 && 
                <div className='hover:bg-green-300 cursor-pointer hover:ring-2 ring-inset ring-green-500'>
                  <Link to="/registrasi-toko" className='flex items-center space-x-4'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className='font-semibold'>Mulai Jualan</div>
                    </div>
                  </Link>
                </div>
              }

              { user.isSeller === 1 && 
                <div className='hover:bg-green-300 cursor-pointer hover:ring-2 ring-inset ring-green-500'>
                  <Link to="/edit-toko" className='flex items-center space-x-4'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className='font-semibold'>Edit Toko</div>
                    </div>
                  </Link>
                </div>
              }

              { user.isSeller === 1 && 
                <div className='hover:bg-green-300 cursor-pointer hover:ring-2 ring-inset ring-green-500'>
                  <Link to="/add-food" className='flex items-center space-x-4'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                      </svg>

                    </div>
                    <div>
                      <div className='font-semibold'>Tambah Makanan</div>
                    </div>
                  </Link>
                </div>
              }
            
              <div className='hover:bg-red-300 cursor-pointer hover:ring-2 ring-inset ring-red-500 text-red-600'>
                <div onClick={() => logout()}className='flex items-center space-x-4'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>


                  </div>
                  <div>
                    <div className='font-semibold'>Logout</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default User