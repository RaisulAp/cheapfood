import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../assets/images/logo.png"

import lele from "../assets/images/menu/pecellele.png";

function Main() {
  const [food, setFood] = useState([]);
  const [daftar, setDaftar] = useState(food);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const filterHarga = (a,b) => {
    setDaftar(food.filter((item) => item.harga >= a && item.harga <= b));
  }
  
  const clearFilter = () => {
    setDaftar([]);
    setMax(0)
    setMin(0)
  }

  const getData = async () => {
    const data = await axios.get('http://localhost:8080/food').then(res => {
      setFood(res.data.data)
    })

    return data;
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
    getData()
    getUser()
  }, [])

  return (
    <div className='h-screen'>
      <div className='flex justify-center h-full'>
        <div className='w-full lg:w-2/6 '>
          <div className='bg-green-600 py-2 flex justify-between space-x-5 items-center text-white px-5'>
            <div className='flex items-center space-x-5'>
              <div className='py-2'>
                <img src={Logo} alt="Logo" className='h-16' />
              </div>
              <div className='font-semibold text-2xl'>
                <Link to="/user" className='hover:underline'>{user.username}</Link>
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
            <p>Batas Harga(RP)</p>
            <div className='bg-gray-200 px-2 md:px-10 py-1 flex justify-between items-center'>
              <div>
                <input type="number" className='text-center w-full' value={min} onChange={(e) => setMin(parseInt(e.target.value))} placeholder='MIN' />
              </div>
              <div className='text-gray-500 font-bold text-xl'>
              -
              </div>
              <div>
                <input type="number" className='text-center w-full' value={max} onChange={(e) => setMax(parseInt(e.target.value))} placeholder='MAX' />
              </div>
              <button className="bg-green-600 text-white px-2 ml-2" onClick={() => filterHarga(min, max)}>Cari</button>
            </div>
            <div className={`grid gap-2 mt-2 text-center px-6 ${daftar.length > 0  ? "grid-cols-5 " : "grid-cols-4"}`}>
              <button onClick={() => filterHarga(0,5000)} className='bg-gray-200 hover:bg-green-600 hover:cursor-pointer hover:text-white'>0 - 5RB</button>
              <button onClick={() => filterHarga(5000,10000)} className='bg-gray-200 hover:bg-green-600 hover:cursor-pointer hover:text-white'>5 - 10RB</button>
              <button onClick={() => filterHarga(10000,15000)} className='bg-gray-200 hover:bg-green-600 hover:cursor-pointer hover:text-white'>10 - 15RB</button>
              <button onClick={() => filterHarga(15000,20000)} className='bg-gray-200 hover:bg-green-600 hover:cursor-pointer hover:text-white'>15 - 20RB</button>
              {
                daftar.length > 0 &&
                <button onClick={() => clearFilter()} className='bg-gray-200 hover:bg-red-600 hover:cursor-pointer hover:text-white'>clear</button>
              }
            </div>

            <div className='mt-5 px-6 space-y-5 overflow-y-auto h-[31.6rem]'>
              {daftar.length == 0 && food.map((item) => (
                <Link to={`/main/detail/${item.id}`} className='flex space-x-5' key={item.id}>
                  <div className='w-2/6'>
                    <img src={lele} alt="" className='rounded-2xl' />
                  </div>
                  <div className='w-4/6'>
                    <p>{item.nama}</p>
                    <p className='text-green-600 text-2xl font-semibold'>Rp {item.harga}</p>
                    <p>300 Meter</p>
                  </div>
                </Link>
              ))}

              {daftar.length > 0 && daftar.map((item) => (
                <Link to={`/main/detail/${item.id}`} className='flex space-x-5' key={item.id}>
                  <div className='w-2/6'>
                    <img src={lele} alt="" className='rounded-2xl' />
                  </div>
                  <div className='w-4/6'>
                    <p>{item.nama}</p>
                    <p className='text-green-600 text-2xl font-semibold'>Rp {item.harga}</p>
                    <p>300 Meter</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main