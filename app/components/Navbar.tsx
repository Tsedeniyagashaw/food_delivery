import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Carticon from './Carticon';
import { FaPhoneAlt } from "react-icons/fa";
// import { MdPhoneInTalk } from "react-icons/md";

const Navbar = () => {
    const user = false;
  return (
    <div className='h-12 text-orange-600 p-4 flex items-center justify-between border-b-2 uppercase md:h-24 lg:px-20 lx:px-40'>
      
      <div className='hidden md:flex gap-4 flex-1'>

        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        {/* <Link href="/">Working Hours</Link> */}
        <Link href="/">Contact</Link>
      </div>
      
        <div className='text-xl md:font-bold  flex-1 md:text-center '>
            <Link href="/">BurgerHub</Link>
        </div>
      
      <div className='md:hidden'>
        <Menu />
      </div>

        <div className='hidden md:flex gap-4 items-center justify-end   flex-1'>
  
  <div className='md:absolute top-3 r-2 lg:static flex  items-center gap-1 cursor-pointer rounded-sm bg-orange-300 p-1'>
 <FaPhoneAlt size={20} className='text-white' /> <span>+123 456 789</span>
  </div>
       {!user ? (<Link href="/login">Login</Link>) :
        (<Link href="orders">Orders</Link>)}
       <Carticon />
      </div>
    </div>
  )
}

export default Navbar
