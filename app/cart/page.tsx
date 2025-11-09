"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
    name: 'Pepperoni Pizza',
      size: 'Small',
      price: 49.99,
      image: '/product4.png (1).png',

    },
    {
      id: 2,
      name: 'Double Burger',
      size: 'Medium',
      price: 59.99,
      image: '/product3-300x269.png.png',
    },
    {
      id: 3,
        name: 'Chicken',
      size: 'Large',
      price: 79.97,
      image: '/shop3-1-202x181.png.png',
    },
  ]);
  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const serviceCost = 23.60;
  const deliveryCost = 0; 
  const total = subtotal + serviceCost + deliveryCost;

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row text-orange-600">
      
      <div className="flex-1 p-4 lg:p-8 flex flex-col overflow-y-auto lg:h-full lg:px-12 xl:px-24 2xl:px-32">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between w-full py-6 px-2 border-b gap-4">
            <div className="flex items-center gap-4 flex-1">
              <Image 
                src={item.image} 
                alt="Pizza Image" 
                width={80} 
                height={80} 
                className="object-contain"
              />
              <div className="flex flex-col">
                <h1 className="uppercase text-lg font-bold">{item.name}</h1>
                <span className="text-gray-600">{item.size}</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <h2 className="font-bold text-lg min-w-[80px] text-right">${item.price.toFixed(2)}</h2>
              <span 
                className="cursor-pointer text-red-500 text-lg font-bold hover:text-red-700" 
                onClick={() => handleRemoveItem(item.id)}
              >
                ×
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 bg-fuchsia-50 flex flex-col justify-center lg:h-full lg:w-1/3 2xl:w-1/4 lg:px-8 xl:px-12 2xl:px-16">
        
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Subtotal ({cartItems.length} items)</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
       
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Service cost</span>
            <span className="font-medium">${serviceCost.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-700">Delivery cost</span>
            <span className="text-green-500 font-medium">FREE</span>
          </div>
          
          <hr className="my-4 border-gray-300" />

          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">TOTAL (INCL. VAT)</span>
            <span className="font-bold text-lg">${total.toFixed(2)}</span>
          </div>
        </div>
        <button className="bg-orange-600 text-white py-4 px-8 rounded-md font-semibold w-full hover:bg-orange-700 transition duration-200 text-lg">
          CHECKOUT
        </button> 
      </div>

    </div>
  );
};

export default CartPage;
