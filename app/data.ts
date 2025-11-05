type Product = {
    id: number;
    title: string;
    desc?: string;
    image: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];

  }

type Items = Product[];

export const featuredItems: Items = [
  {
    id: 1,
    title: "Chicken Roast",
    desc: "Juicy grilled beef patty with melted cheese, lettuce, and house sauce.",
    price: 14.99,
    image: "/01.png",
    options: [
      { title: "Small", additionalPrice: 19.99 },
      { title: "Medium", additionalPrice: 18.99 },
      { title: "Large", additionalPrice: 22.99 },
    ],
  },
  {
    id: 2,
    title: "Pasta with sauce",
    desc: "Beef burger stacked with double cheese, crispy onions, and a toasted bun.",
    price: 24.11,
    image: "/Authentic italian pasta.png",
    options: [
      { title: "Small", additionalPrice: 3.44 },
      { title: "Medium", additionalPrice: 6.45 },
      { title: "Large", additionalPrice: 7.54 },
    ],
  },
  {
    id: 3,
    title: "Pepperoni Pizza",
    desc: "Crispy crust topped with melted cheese and spicy pepperoni slices.",
    price: 16.91,
    image: "/product4.png (1).png",
    options: [
      { title: "Small", additionalPrice: 1.88 },
      { title: "Medium", additionalPrice: 4.45 },
      { title: "Large", additionalPrice: 5.54 },
    ],
  },
  {
    id: 4,
    title: "Double Burger",
    desc: "A sweet and savory combo of ham, pineapple, and melted mozzarella.",
    price: 34.56,
    image: "/product3-300x269.png.png",
    options: [
      { title: "Small", additionalPrice: 1.38 },
      { title: "Medium", additionalPrice: 3.55 },
      { title: "Large", additionalPrice: 4.54 },
    ],
  },
  {
    id: 5,
    title: "shwarma",
    desc: "Authentic Italian pasta tossed in creamy Alfredo or tomato sauce.",
    price: 15.34,
    image: "/175.png",
    options: [
      { title: "Small", additionalPrice: 3.63 },
      { title: "Medium", additionalPrice: 5.55 },
      { title: "Large", additionalPrice: 6.88 },
    ],
  },
  {
    id: 6,
    title: "Chicken with vegi",
    desc: "Golden fries with a perfect crunch, served with spicy or classic dip.",
    price: 4.44,
    image: "/shop2-1-202x181.png.png",
    options: [
      { title: "Small", additionalPrice: 3.63 },
      { title: "Medium", additionalPrice: 5.5 },
      { title: "Large", additionalPrice: 4.48 },
    ],
  },
  {
    id: 7,
       title: "chicken",
    desc: "Crisp lettuce, cucumbers, and tomatoes topped with light dressing.",
    price: 3.47,
    image: "/shop3-1-202x181.png.png",
   
    options: [
      { title: "Small", additionalPrice: 9.33 },
      { title: "Medium", additionalPrice: 4.9 },
      { title: "Large", additionalPrice: 2.99 },
    ],
  },
  {
    id: 8,
    title: "meat with ",
    desc: "A warm bowl of mixed veggies and herbs — comforting and healthy.",
    price: 20.49,
    image: "/190.png",
    options: [
      { title: "Small", additionalPrice: 2.89 },
      { title: "Medium", additionalPrice: 3.88 },
      { title: "Large", additionalPrice: 4.99 },
    ],
  },

      {
    id: 9,
    title: "Orange Juice",
    desc: "Double mozzarella topping on a crisp crust — for cheese lovers.",
    price: 18.5,
    image: "/Rectangle 46 (6).png",
    options: [
      { title: "Small", additionalPrice: 2.89 },
      { title: "Medium", additionalPrice: 3.88 },
      { title: "Large", additionalPrice: 4.99 },
    ],
  },
];

type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    image?: string;
    color?: string;
}

export const SingleProduct : Product =   {
    id: 1,
    title: "Chicken roast",
    desc: "A sweet and savory combo of ham, pineapple, and melted mozzarella.",
    price: 34.56,
    image: "/01.png",
    options: [
      { title: "Small", additionalPrice: 1.38 },
      { title: "Medium", additionalPrice: 3.55 },
      { title: "Large", additionalPrice: 4.54 },
    ],
  };



export const menuItems: Menu[] = [
  {
    id: 1,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Freshly grilled beef patties layered with cheese, lettuce, and our special sauce.",
    image: "/187.png",
    color: "orange"
  },
  {
    id: 2,
    slug: "pasta",
    title: "Creamy Pasta",
    desc: "Rich and creamy Alfredo pasta tossed with herbs and parmesan cheese.",
    image: "/Ellipse 6 (3).png",
    color: "blue"
  },
  {
    id: 3,
    slug: "desserts",
    title: "Sweet Desserts",
    desc: "Indulge in our freshly baked cakes, pastries, and ice cream sundaes.",
    image: "/Ellipse 6 (2).png",
    color: "pink"
  }
];

