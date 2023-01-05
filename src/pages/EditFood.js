import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditFood() {
    const [nama, setNama] = useState('')
    const [harga, setHarga] = useState('')
    const [lokasi, setLokasi] = useState('')
    const [user, setUser] = useState([])
    const [toko_id, setToko_id] = useState('')
    const { id } = useParams()

    const navigate = useNavigate();

    const getUser = async () => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            setUser(user)
            await axios.get('http://localhost:8080/toko/user/' + user.id).then(res => {
                setToko_id(res.data.data[0].id)  
                axios.get('http://localhost:8080/food/'+  id).then(res => {

                    setNama(res.data.data[0].nama)
                    setHarga(res.data.data[0].harga)
                    setLokasi(res.data.data[0].lokasi)
                })
            })

        }else{
            navigate('/login')
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        await axios.put('http://localhost:8080/food/'+id ,{
        nama: nama,
        harga: harga,
        lokasi: lokasi,
        }).then(res => {
            if(res.data.success){
                alert("Makanan berhasil diedit!")
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
                        <Link to="/add-food" className='cursor-pointer hover:bg-green-300 bg-green-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                            </svg>
                        </Link>
                        </div>
                        <div className='font-semibold text-2xl'>
                            Edit Makanan
                        </div>
                        </div>
                    </div>
                    <form onSubmit={submitHandler} className='w-full block'>
                        <div className='space-y-3 mt-5'>
                            <div className='space-y-2'>
                                <label htmlFor="nama" className='block'>Nama Makanan</label>
                                <input type="text" name="nama" value={nama} onChange={(e) => setNama(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' placeholder='Nama Makanan' />
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="harga" className='block'>Harga Makanan</label>
                                <input type="number" name="harga" value={harga} onChange={(e) => setHarga(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' placeholder='Harga Makanan' />
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="lokasi" className='block'>Lokasi Tempat</label>
                                <input type="text" name="lokasi" value={lokasi} onChange={(e) => setLokasi(e.target.value)} className='py-1 rounded-xl border px-5 w-full border-black' placeholder='Lokasi Makanan' />
                            </div>
                            <div className='pt-3'>
                                <button type="submit" className='bg-green-500 py-1 px-6 rounded-xl text-white font-semibold float-right '>Tambahkan</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        </div>
    )
}

export default EditFood
