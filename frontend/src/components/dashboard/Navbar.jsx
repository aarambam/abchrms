import React from 'react'
import { useAuth } from '../../context/authContext'

const Navbar = () => {
    const { user, logout } = useAuth()
  return (
    <div className='flex items-center text-gray justify-between h-12 bg-white-600 px-5'>
        <p>Welcome, {user.name}</p>
        <button className='px-4 py-1 bg-blue-700 text-white hover:bg-blue-800' onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar