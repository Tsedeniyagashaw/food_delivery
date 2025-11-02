import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className=''>
      <div>

        <div>
          <Image src="/public/Group 16.png" alt="" />
          <div className=''>
        <h1>Sicilian</h1>
        <span>Large</span>
          </div>
          <h2>79.97</h2>
          <span>X</span>
        </div>
      </div>

      <div>
        <div>
          <span>Subtotal (3 items)</span>
          <span>$180.60</span>
        </div>
        <hr />
     <button className='bg-orange-600'>CHECKOUT</button>

      </div>

    </div>
  )
}

export default CartPage
