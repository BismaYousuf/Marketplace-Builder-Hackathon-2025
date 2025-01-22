//src\app\data\products.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Lime",
    price: 38.00,
    description: "Refreshing citrus fruit, perfect for beverages and cooking.",
    image: "/Mask Group.png"
  },
  {
    id: 2,
    name: "Chicken Burger",
    price: 42.00,
    description: "Juicy chicken patty with fresh vegetables and special sauce.",
    image: "/Mask Group (1).png"
  },
  {
    id: 3,
    name: "Veg Pizza",
    price: 35.00,
    description: "Delicious pizza loaded with fresh vegetables and cheese.",
    image: "/Mask Group (3).png"
  },
  {
    id: 4,
    name: "Fruit Salad",
    price: 28.00,
    description: "A mix of fresh seasonal fruits, perfect for a healthy snack.",
    image: "/Salad.png"
  },
  {
    id: 5,
    name: "Cheese Sandwich",
    price: 30.00,
    description: "Classic sandwich with a variety of cheeses and fresh bread.",
    image: "/bread.png"
  }
];

