"use client"

import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Flash from "../Flash-sales";
import { useState } from "react";

interface Props {
  rating: number;
}

const ProductStars = ({ rating }: Props) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  return (
    <span className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={"f" + i} className="text-yellow-400 mr-0.5" />
      ))}
      {hasHalf && <FaStarHalfAlt className="text-yellow-400 mr-0.5" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={"e" + i} className="text-yellow-400 mr-0.5" />
      ))}
    </span>
  );
};

export default function Product() {
  const [products] = useState([
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: 40,
      image: "/Images/controller.png",
      rating: 5,
      reviews: 88,
      
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: 35,
      image: "/Images/keyboard.png",
      rating: 4,
      reviews: 75,
      
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: 30,
      image: "/Images/tv.png",
      rating: 5,
      reviews: 99,
      
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: 25,
      image: "/Images/chair.png",
      rating: 4.5,
      reviews: 99,
    
    },
  ]);
  return (
    <>
      <Flash />
      <div className="flex gap-6 pb-4 ">
        {products.map((prod) => (
          <div
            className="relative bg-[#FAFAFA] rounded-lg shadow-sm w-[250px] min-h-[350px] flex flex-col items-center border border-gray-100"
            key={prod.id}
          >
            <span className="absolute top-4 left-4 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
              -{prod.discount}%
            </span>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="bg-white rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center">
                <FiHeart size={18} className="text-black" />
              </button>
              <button className="bg-white rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center">
                <IoEyeOutline className="text-black" size={18} />
              </button>
            </div>
            <img
              src={prod.image}
              alt={prod.name}
              className="w-[140px] h-[120px] object-contain mt-14 cursor-pointer"
            
            />
          
              <button className="mt-4 w-full bg-black text-white rounded text-base font-medium py-2 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-0 left-0 right-0">
                Add To Cart
              </button>
          
            <div className="mt-auto w-full text-left px-3 pb-3">
              <div className="font-medium text-base mt-4 text-black">{prod.name}</div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#DB4444] font-semibold">${prod.price}</span>
                <span className="text-gray-400 line-through text-sm">${prod.oldPrice}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <ProductStars rating={prod.rating} />
                <span className="text-gray-500 ml-1">({prod.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
