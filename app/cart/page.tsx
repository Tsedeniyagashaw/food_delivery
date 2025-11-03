import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)]  md:h-[calc(100vh-9rem)] flex flex-col text-orange-600 overflow-scroll'>
     
     
     
      <div className='h-1/2 p-4 flex flex-col items-center'>

        <div className='flex items-center justify-between mb-4'>
          <Image src="/Group 16.png" alt="" width={100} height={100} />
          <div className=''>
        <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
        <span>Large</span>
          </div>
          <h2 className='font-bold'>79.97</h2>
          <span className=' cursor-pointer'>X</span>
        </div>
    

        <div className='h-1/2 p-4 flex flex-col items-center'>

        <div className='flex items-center justify-between mb-4'>
          <Image src="/Group 16.png" alt="" width={100} height={100} />
          <div className=''>
        <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
        <span>Large</span>
          </div>
          <h2 className='font-bold'>79.97</h2>
          <span className=' cursor-pointer'>X</span>
        </div>
      </div>

        <div className='h-1/2 p-4 flex flex-col items-center '>

        <div className='flex items-center justify-between mb-4'>
          <Image src="/Group 16.png" alt="" width={100} height={100} />
          <div className=''>
        <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
        <span>Large</span>
          </div>
          <h2 className='font-bold'>79.97</h2>
          <span className=' cursor-pointer'>X</span>
        </div>
      </div>

      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center'>
        <div className='flex justify-between'>
          <span>Subtotal (3 items)</span>
          <span>$180.60</span>
        </div>
        <hr />  <div className='flex justify-between'>
          <span>Service cost</span>
          <span>$23.60</span>
        </div>
        <hr />  <div className='flex justify-between'>
          <span>Delivery cost</span>
          <span className='text-green-500'>FREE</span>
        </div>
        <hr />
     <button className='bg-orange-600 text-white p-3 rounded-md'>CHECKOUT</button>

      </div>

    </div>
  )
}

export default CartPage
