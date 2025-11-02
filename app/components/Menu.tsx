"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";
import Carticon from './Carticon';

const links = [
    {id:1, name:"Home", url:"/"},
    {id:2, name:"Menu", url:"/menu"},
    {id:3, name:"Working Hours", url:"/"},
    {id:4, name:"Contact", url:"/"}, 
  
]


const Menu = () => {
    const [open, setOpen] = useState(false);
    const user = false;
  return (
    <div>
      {!open ? (<HiMenu size={30} onClick={()=>setOpen(true)}/> ): (<HiX size={30} onClick={()=>setOpen(false)}/>) }
  
  {open && <div className='bg-orange-700 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col gap-8 z-10 items-center justify-center text-3xl'>
{links.map((link)=>(
   <Link href={link.url} key={link.id} onClick={()=>setOpen(false)}>{link.name}</Link>
))}

{!user ?
(<Link href="/login" onClick={()=>setOpen(false)}>Login</Link>) :
(<Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>)}

<Link href="/cart"  onClick={()=>setOpen(false)}>
<Carticon />
</Link> 
    </div>} 
    </div>


  )
}

export default Menu
