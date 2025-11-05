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
    desc: "Tender roasted chicken marinated with special spices, served hot and juicy.",
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
    title: "Pasta with Sauce",
    desc: "Authentic Italian pasta tossed in a rich, flavorful sauce with herbs and cheese.",
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
    desc: "Classic pizza topped with spicy pepperoni slices, melted cheese, and a crispy crust.",
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
    desc: "A hearty burger stacked with two juicy beef patties, cheese, and house sauce.",
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
    title: "Shawarma",
    desc: "Deliciously spiced grilled meat wrapped in pita bread with veggies and sauce.",
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
    title: "Chicken with Veggies",
    desc: "Stir-fried chicken cooked with fresh vegetables in a savory sauce.",
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
    title: "Chicken",
    desc: "Perfectly grilled chicken seasoned with herbs and served with house sauce.",
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
    title: "Meat with Veggies",
    desc: "Juicy beef or lamb cooked with mixed vegetables and flavorful spices.",
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
    desc: "Freshly squeezed orange juice packed with natural sweetness and vitamin C.",
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

