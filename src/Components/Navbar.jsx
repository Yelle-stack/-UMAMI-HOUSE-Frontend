import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-8 text-white'>
      <div>
        <h2 className='font-bold text-2xl'>UMAMI HOUSE</h2>
      </div>
      <div>
        <ul className='flex justify-between gap-8 '>
            <li className='font-bold text-lg cursor-pointer'>HOME</li>
            <li className='font-bold text-lg cursor-pointer'>RESERVATION</li>
            <li className='font-bold text-lg cursor-pointer'>MENU</li>
            <li className='font-bold text-lg cursor-pointer'>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
