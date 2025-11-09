import Price from '@/app/components/Price'
import { SingleProduct } from '@/app/data'
import Image from 'next/image'

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex 
    flex-col justify-around text-orange-600 md:flex-row
    md:gap-8 md:items-center
    '>
     <div className='relative w-full h-1/2 md:h-[70%]'>
      <Image src={SingleProduct.image} alt='' 
      className='object-contain' fill />
     </div>

     <div className='h-1/2 flex flex-col gap-4  md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
  <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{SingleProduct.title}</h1>
  <p>
    {SingleProduct.desc}
  </p>
     </div>
     <Price price={SingleProduct.price} id={SingleProduct.id}
     options={SingleProduct.options}
     />
    </div>
  )
}

export default SingleProductPage
