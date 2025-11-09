import Image from 'next/image'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:h-screen'>
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delcious Burger</h1>
        <p className='text-white xl:text-xl'>Enjoy a juicy, freshly grilled burger paired with golden French fries — made
      to order, hot, and packed with flavor. Perfect for a quick lunch or a cozy dinner!</p>
        <CountDown />
        <button className='bg-orange-600 text-white rounded-md py-3 px-6 hover:bg-orange-400'>Order Now</button>
           </div>
        <div className='flex-1 w-full relative md:h-full'>
<Image src="/bagar-img1.png.png" alt="" fill className='object-contain '/>
     
      </div>
    </div>
  )
}

export default Offer
