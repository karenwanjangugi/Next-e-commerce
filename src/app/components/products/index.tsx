import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  isNew?: boolean;
  colors?: string[];
}
const products: Product[] = [
  {
    id: 1,
    name: "Dog Food",
    image: "/Images/dogfood.png",
    price: 100,
    rating: 5,
  },
  { id: 2,
    name: "Camera",
    image: "/Images/camera.png",
    price: 360, 
    rating: 4 },
  { id: 3, name: "Laptop", image: "/Images/laptop.png", price: 700, rating: 5 },
  {
    id: 4,
    name: "Skincare Set",
    image: "/Images/skincare.png",
    price: 500,
    rating: 5,
  },
  {
    id: 5,
    name: "Toy Car",
    image: "/Images/car.png",
    price: 960,
    rating: 4,
    isNew: true,
    colors: ["#ff0000", "#000000"],
  },
  {
    id: 6,
    name: "Soccer Shoes",
    image: "/Images/shoes.png",
    price: 1160,
    rating: 5,
    colors: ["#ffff00", "#000000"],
  },
  {
    id: 7,
    name: "Game Controller",
    image: "/Images/game.png",
    price: 660,
    rating: 4,
    isNew: true,
    colors: ["#ff0000", "#000000"],
  },
  {
    id: 8,
    name: "Jacket",
    image: "/Images/jacket.png",
    price: 660,
    rating: 4,
    colors: ["#004d40", "#ff0000"],
  },
];
const Products: React.FC = () => {
  return (
    <section className=" py-12 text-center ">
      <div className="display: flex mb-4">
        <div>
        <div className="mb-8 flex items-center">
          <div className="w-3 h-8 bg-red-600 rounded-sm mr-4" />
          <span className="text-red-600 font-semibold">Our Products</span>
        </div>
        <h2 className="text-3xl font-bold mb-8">Explore Our Products</h2>
        </div>
        
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 w-340">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg p-4 relative group"
          >
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
            )}
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded"
              />
              <div className="absolute top-2 right-2 flex flex-col gap-2 ">
                <button className="bg-white p-2 rounded-full shadow">
                  <FontAwesomeIcon icon={faHeart} width={15} />
                </button>
                <button className="bg-white p-2 rounded-full shadow ">
                  <FontAwesomeIcon icon={faEye} width={15} />
                </button>
              </div>
            </div>
            
          <div className="flex items-center space-x-4">
          <p className="text-red-500 font-bold mt-3">${product.price}</p>
            <div className="text-yellow-400">
              {"★".repeat(Math.floor(product.rating)) }
              {"☆".repeat(5 - Math.floor(product.rating))}
            </div>
          </div>
          

            {product.colors && (
              <div className="flex gap-2 mt-2">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="mt-10 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
        View All Products
      </button>
    </section>
  );
};
export default Products;
