import { featuredItems } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-orange-600 '>
      {featuredItems.map(item => (
        <Link className='w-full h-[60vh] border-r-2 
        border-b-2 border-orange-600  group
        sm:w-1/2 lg:w-1/3 p-4 flex flex-col
         justify-between odd:bg-orange-50'
         href={`/product/{item.id}`} key={item.id}>
         <div className='relative h-[70%] w-full'>
             <Image src={item.image} alt="" fill className='object-contain'/> 
         </div>
       <div className='flex items-center
        justify-between font-bold'>
        <h1>{item.title}</h1>
        <h2 className='group-hover:hidden'>{item.price}</h2>
        <button className='hidden group-hover:block uppercase bg-orange-600 
        text-white p-2 rounded-md
        '>Add to Cart</button>
       </div>
        </Link>
    
    ))}
    </div>
  )
}

export default CategoryPage
