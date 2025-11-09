import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 px-4 lg:px-20 xl:px-40  text-orange-600 flex items-center justify-center'>
      <Link href="/">BurgerHub | </Link>
      <p> &copy; ALL RIGHT RESERVED</p>
    </div>
  )
}

export default Footer
