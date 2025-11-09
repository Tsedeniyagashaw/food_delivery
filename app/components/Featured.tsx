import Image from 'next/image'
import { featuredItems } from '../data'

const Featured = () => {
  return (
    <div className="w-full overflow-x-scroll scrollbar-hide text-orange-500 scroll-smooth snap-x snap-mandatory">
      <div className="flex w-max">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="shrink-0 h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-orange-50 transition-all
            duration-300 w-[80vw] md:w-[45vw] xl:w-[30vw] xl:h-[90vh] snap-center"
          >
            <div className="relative flex-1 w-full hover:rotate-60 transition-all duration-500">
              <Image
                src={item.image}
                alt={item.title}
                fill
                quality={100}
                sizes="(max-width: 768px) 80vw,
                       (max-width: 1200px) 45vw,
                       30vw"
                className="object-contain"
              />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured
