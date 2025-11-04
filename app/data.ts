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
    title: "Classic Beef Burger",
    desc: "Juicy grilled beef patty with melted cheese, lettuce, and house sauce.",
    price: 14.99,
    image: "/187.png",
    options: [
      { title: "Small", additionalPrice: 19.99 },
      { title: "Medium", additionalPrice: 18.99 },
      { title: "Large", additionalPrice: 22.99 },
    ],
  },
  {
    id: 2,
    title: "Double Cheese Burger",
    desc: "Beef burger stacked with double cheese, crispy onions, and a toasted bun.",
    price: 24.11,
    image: "/product3-202x181.png.png",
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
    title: "Hawaiian Pizza",
    desc: "A sweet and savory combo of ham, pineapple, and melted mozzarella.",
    price: 34.56,
    image: "/product4-202x181.png (1).png",
    options: [
      { title: "Small", additionalPrice: 1.38 },
      { title: "Medium", additionalPrice: 3.55 },
      { title: "Large", additionalPrice: 4.54 },
    ],
  },
  {
    id: 5,
    title: "Italian Pasta",
    desc: "Authentic Italian pasta tossed in creamy Alfredo or tomato sauce.",
    price: 15.34,
    image: "/184.png",
    options: [
      { title: "Small", additionalPrice: 3.63 },
      { title: "Medium", additionalPrice: 5.55 },
      { title: "Large", additionalPrice: 6.88 },
    ],
  },
  {
    id: 6,
    title: "Crispy French Fries",
    desc: "Golden fries with a perfect crunch, served with spicy or classic dip.",
    price: 4.44,
    image: "/178.png",
    options: [
      { title: "Small", additionalPrice: 3.63 },
      { title: "Medium", additionalPrice: 5.5 },
      { title: "Large", additionalPrice: 4.48 },
    ],
  },
  {
    id: 7,
    title: "Chicken Sandwich",
    desc: "Tender grilled chicken layered with lettuce and creamy mayo.",
    price: 25.49,
    image: "/product3-300x269.png.png",
    options: [
      { title: "Small", additionalPrice: 9.33 },
      { title: "Medium", additionalPrice: 4.9 },
      { title: "Large", additionalPrice: 2.99 },
    ],
  },
  {
    id: 8,
    title: "Veggie Delight Pizza",
    desc: "A healthy pizza topped with colorful veggies, olives, and cheese.",
    price: 12.5,
    image: "/181.png",
    options: [
      { title: "Small", additionalPrice: 2.89 },
      { title: "Medium", additionalPrice: 3.88 },
      { title: "Large", additionalPrice: 4.99 },
    ],
  },
  {
    id: 9,
    title: "Fresh Garden Salad",
    desc: "Crisp lettuce, cucumbers, and tomatoes topped with light dressing.",
    price: 3.47,
    image: "/Rectangle 15.png",
    options: [
      { title: "Small", additionalPrice: 2.45 },
      { title: "Medium", additionalPrice: 3.45 },
      { title: "Large", additionalPrice: 8.54 },
    ],
  },
  {
    id: 10,
    title: "Classic Cheese Pizza",
    desc: "Baked to perfection with rich mozzarella and tangy tomato sauce.",
    price: 9.99,
    image: "/product4-202x181.png (1).png",
    options: [
      { title: "Small", additionalPrice: 9.99 },
      { title: "Medium", additionalPrice: 12.99 },
      { title: "Large", additionalPrice: 14.99 },
    ],
  },
  {
    id: 11,
    title: "Hearty Vegetable Soup",
    desc: "A warm bowl of mixed veggies and herbs — comforting and healthy.",
    price: 20.49,
    image: "/Rectangle 23.png",
    options: [
      { title: "Small", additionalPrice: 4.99 },
      { title: "Medium", additionalPrice: 6.99 },
      { title: "Large", additionalPrice: 8.99 },
    ],
  },
  {
    id: 12,
    title: "Extra Cheese Pizza",
    desc: "Double mozzarella topping on a crisp crust — for cheese lovers.",
    price: 18.5,
    image: "/Ellipse 6 (3).png",
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
    title: "Hawaiian Pizza",
    desc: "A sweet and savory combo of ham, pineapple, and melted mozzarella.",
    price: 34.56,
    image: "/181.png",
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

