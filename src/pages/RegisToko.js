import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const options = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu", "Tidakada"]


function RegisToko() {

  const [nama, setNama] = useState('')
  const [alamat, setAlamat] = useState('')
  const [hari , setHari] = useState(options[0])
  const [jamBuka, setJamBuka] = useState('')
  const [jamTutup, setJamTutup] = useState('')
  const [link, setLink] = useState('')
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


  const submitHandler = async (e) => {
    e.preventDefault()
    
    await axios.post('http://localhost:8080/toko', {
      user_id: user.id,
      nama: nama,
      alamat: alamat,
      hari_tutup: hari,
      jam_buka: jamBuka,
      jam_tutup: jamTutup,
      maps: link,
    }).then(res => {
      console.log(res);
      alert(res.data.message)
      if(res.data.success){
        user.isSeller = 1
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/user')
        alert("Toko berhasil dibuat")
      }
    })
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
              <Link to="/user" className='cursor-pointer hover:bg-green-300 bg-green-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
              </Link>
              </div>
              <div className='font-semibold text-2xl'>
                Registrasi Toko
              </div>
            </div>
          </div>
          <form onSubmit={submitHandler} className='w-full'>
            <div className='space-y-3 mt-5'>
              <div className='space-y-2'>
                <label htmlFor="nama" className='block'>Nama Toko</label>
                <input type="text" name="nama" value={nama} onChange={(e) => setNama(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' placeholder='Nama Toko' />
              </div>
              <div className='space-y-2'>
                <label htmlFor="alamat" className='block'>Alamat Toko</label>
                <input type="text" name="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' placeholder='Alamat Toko' />
              </div>
              <div className='space-y-2'>
                <label htmlFor="hari" className='block'>Hari Tutup</label>
                <select 
                  value={hari} 
                  className='py-1 rounded-xl border px-5 w-full border-black'
                  onChange={e => setHari(e.target.value)}>
                  {options.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className='space-y-2'>
                <label htmlFor="jambuka" className='block'>Jam Buka - Jam Tutup</label>
                <div className='flex justify-between'>
                  <div>
                    <input type="text" name="jambuka" value={jamBuka} onChange={(e) => setJamBuka(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' placeholder='Jam buka' />
                  </div>
                  <div className='text-2xl font-bold'>
                    -
                  </div>
                  <div>
                    <input type="text" name="jamtutup" value={jamTutup} onChange={(e) => setJamTutup(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' placeholder='Jam Tutup' />
                  </div>
                </div>
              </div>
              <div className='space-y-2'>
                <label htmlFor="map" className='block'>Link google map toko</label>
                <input type="text" name="map" value={link} onChange={(e) => setLink(e.target.value)}className='py-1 rounded-xl border px-5 w-full border-black' placeholder='Link google map toko' />
              </div>
              <div className='pt-3'>
                  <button type="submit" className='bg-green-500 py-1 px-6 rounded-xl text-white font-semibold float-right '>Daftarkan</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisToko