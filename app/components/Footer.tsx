import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40  text-orange-600 flex items-center justify-center'>
      <Link href="/">BurgerHub | </Link>
      <p> &copy; ALL RIGHT RESERVED</p>
    </div>
  )
}

export default Footer
