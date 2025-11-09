import Link from 'next/link'
import { FaShoppingBasket } from "react-icons/fa";

const Carticon = () => {
  return (
    <div>
      <Link href="/cart" className='flex items-center gap-1'>
 
        <FaShoppingBasket size={25}  />
       <span>Cart (2)</span>
        </Link>
    </div>
  )
}

export default Carticon
