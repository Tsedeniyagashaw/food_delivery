import Image from 'next/image'
import React from 'react'
import { featuredItems } from '../data'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-orange-500 '>
     <div className='w-max flex'>

      {featuredItems.map(item =>(
        
        <div key={item.id} className='w-screen h-[60vh] flex flex-col 
        items-center justify-around p-4 hover:bg-gray-100 transition-all
         duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
        <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500 '>
          <Image src={item.image} alt="" fill className='object-contain'/>
        </div>

        <div className='flex-1 flex flex-col items-center justify-center text-center gap-4 '>
          <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
          <p className='p-4'>{item.desc}</p>
          <span className='text-xl font-bold'>{item.price}</span>
          <button className='bg-orange-600 text-white p-2 rounded-md'>Add to Cart</button>
        </div>

      </div>  ) )}

     </div>
    </div>
  )
}

export default Featured
