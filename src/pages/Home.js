import React, { useEffect } from 'react'
import {
  Link, useNavigate
} from "react-router-dom";

import Logo from "../assets/images/logo.png";

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user')
    if(user) {
      navigate('/main')
    }
  }, [])
  return (
    <div>
      <div className='flex justify-center'>
        <div className='w-full md:w-2/6 h-screen'>
          <div>
            <div className='flex justify-center pt-28'>
              <img src={Logo} alt="" />
            </div>
            <div className='flex justify-center mt-10'>
              <div className='w-4/6 md:w-1/2 space-y-5'>
                <div>
                  <Link to="/login" className='block bg-green-600 py-2 px-5 text-center rounded-xl font-semibold text-white text-lg'>
                    Login
                  </Link>
                </div>
                <div>
                  <Link to="/register" className='block bg-green-600 py-2 px-5 text-center rounded-xl font-semibold text-white text-lg'>
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home