import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import lele from "../assets/images/menu/pecellele.png";

function Detail() {
  var param = useParams();
  
  var id = parseInt(param.id);
  const [daftar, setDaftar] = useState([]);
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const getData = async () => {
    await axios.get('http://localhost:8080/food/' + id).then(res =>{
      setDaftar(res.data.data[0])
    })
      
  }

  const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      setUser(user)
    }else{
      navigate('/login')
    }
  }

  useEffect(() => {
    getUser()
    getData()
  }, [])
  return (
    <div className='h-screen'>
      <div className='flex justify-center'>
        <div className='w-full lg:w-2/6 '>
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
                {user.username}
              </div>
            </div>
            <div>
              <div className='flex space-x-3'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <div>
              <img src={lele} className="px-8 pt-2 rounded-lg w-full h-[20rem]" alt="" />
              <div>
                <p className='block text-xl font-semibold px-8'>{daftar.nama}</p>
                <div className='px-8'>
                  <div className='flex space-x-3 items-center text-2xl font-semibold '>
                    <div className="text-green-600">
                      Rp {daftar.harga}
                    </div>
                    <div>
                      -
                    </div>
                    <div className='text-xl'>
                      250m away
                    </div>
                  </div>
                  <div>
                    <button className='bg-green-600 py-1 px-5 font-semibold text-lg text-white rounded-xl mt-4'>Buka Maps</button>
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

export default Detail