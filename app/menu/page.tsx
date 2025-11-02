import React from 'react'
import { menuItems } from '../data'
import Link from 'next/link'

const MenuPage = () => {
  return (
    <div className='p-4 px-20 xl:px-40
     h-[calc(100vh - 6rem)] md:h-[calc(100vh - 9rem)] 
     flex flex-col md:flex-row items-center'>
    {menuItems.map(catagory => (
       <Link href={`/menu/{catagory.slug}`} key={catagory.id}
        className='w-full h-1/3 bg-cover p-8 md:h-1/2'
       style={{backgroundImage:`url(${catagory.image})`}}
       >
        <div className= {`text-${catagory.color} w-1/2`}>
          <h1 className='uppercase font-bold text-3xl'>{catagory.title}</h1>
          <p className='text-sm my-8'>{catagory.desc}</p>
          <button className={`hidden 2xl:block bg-${catagory.color}
           text-orange-600 py-2 px-4 rounded-md`}>Explore</button>
        </div>
       </Link>
    ))}
    </div>
  )
}

export default MenuPage
