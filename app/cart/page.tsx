import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row text-orange-600 overflow-scroll">
      
      <div className="h-1/2 p-4 flex flex-col justify-center items-center
       gap-4 lg:h-full lg:w-2/3  2xl:w-1/2 lg:px-20 xl:px-40">
        
        <div className="flex items-center justify-between w-full ">
          <Image src="/Group 16.png" alt="" width={100} height={100} />
          <div className="flex flex-col items-start">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.97</h2>
          <span className="cursor-pointer">X</span>
        </div>

        <div className="flex items-center justify-between w-full  pb-2">
          <Image src="/Group 16.png" alt="" width={100} height={100} />
          <div className="flex flex-col items-start">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.97</h2>
          <span className="cursor-pointer">X</span>
        </div>

        <div className="flex items-center justify-between w-full ">
          <Image src="/Group 16.png" alt="" width={100} height={100} />
          <div className="flex flex-col items-start">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.97</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>

      <div className="p-4 bg-fuchsia-50 flex flex-col  lg:px-20 xl:px-40 gap-4 justify-center  lg:h-full lg:w-1/3 2xl:w-1/2 2xl:text-xl 2xl:gap-46">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>$180.60</span>
        </div>
     
        <div className="flex justify-between">
          <span>Service cost</span>
          <span>$23.60</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery cost</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className='my-2' />
          <div className="flex justify-between">
          <span>TOTAL(INCL. VAT)</span>
          <span className="font-bold">$214.20</span>
        </div>
      <button className="bg-orange-600 text-white py-3 px-4 rounded-md
       font-semibold w-full sm:w-auto  sm:self-end hover:bg-orange-700
        transition self-end">
          CHECKOUT
        </button> </div>

    </div>
  )
}

export default CartPage
