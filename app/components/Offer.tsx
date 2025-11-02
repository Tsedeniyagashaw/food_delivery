import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]'>
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delcious Burger</h1>
        <p className='text-white xl:text-xl'>Enjoy a juicy, freshly grilled burger paired with golden French fries — made
      to order, hot, and packed with flavor. Perfect for a quick lunch or a cozy dinner!</p>
        <CountDown />
        <button className='bg-orange-600 text-white rounded-md py-3 px-6'>Order Now</button>
           </div>
        <div className='flex-1 w-full relative md:h-full'>
<Image src="/photo_1_2025-10-29_16-21-48.jpg" alt="" fill className='object-contain '/>
     
      </div>
    </div>
  )
}

export default Offer
