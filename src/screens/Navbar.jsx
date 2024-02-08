import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Navbar() {
  return (
    <>
        <div className='h-24 flex justify-center place-items-center w-[100%] space-x-[5%] absolute my-5 sm:gap-40 md:gap-56'>
            <div className='w-[30%] ml-24 sm:ml-0 md:ml-0'>
                <h1 className='text-4xl font-bold text-white'>Car<span className='text-[#F14648]'>Rental</span></h1>
            </div>
            <div className='sm:hidden md:hidden space-x-[5%] w-[55%] lg:w-[70%] lg:mr-10 flex justify-center'>
                <a href="#home" className='text-xl font-bold text-white'>Home</a>
                <a href="" className='text-xl font-bold text-white'>Rent Details</a>
                <a href="" className='text-xl font-bold text-white'>Why Choose Us</a>
                <a href="" className='text-xl font-bold text-white'>Register</a>
            </div>
            <FontAwesomeIcon icon={faBars} style={{color: "#f5f5f5", height: 45, cursor: 'pointer'}} className='hidden sm:block md:block'/>
        </div>
    </>
  )
}

export default Navbar