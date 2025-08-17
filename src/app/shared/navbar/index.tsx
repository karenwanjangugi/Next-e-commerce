"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("English");

  const languages = ["English", "French", "Kiswahili", "German"];
  const handleSelect = (lang: string) => {
    setSelected(lang);
    setIsOpen(false);
  };

  return (
    <div className="w-full border-b border-gray-200">
      <div className="bg-black text-white flex justify-between p-2">
        <div className="ml-150 ">
          <p className="mt-3">
            Summer Sale For All Swim Suits And Free Express Delivery- OFF 50%
            <Link href="/signup" className="underline ml-7">
              Shop Now
            </Link>
          </p>
        </div>
        <div className="mr-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg shadow-sm hover:bg-gray-100"
          >
            {selected}
            <FontAwesomeIcon
              icon={faChevronDown}
              className="ml-2 text-gray-500"
            />
          </button>

          {isOpen && (
            <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <ul className="py-2 text-sm text-gray-700">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    onClick={() => handleSelect(lang)}
                    className="px-4 py-2 cursor-pointer hover:bg-red-500 hover:text-white"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="#"
          className="text-2xl font-extrabold tracking-wide text-black"
        >
          Exclusive
        </Link>
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/signup" className="hover:text-black">
            Shop
          </Link>
          <Link href="#" className="hover:text-black">
            On Sale
          </Link>
          <Link href="#" className="hover:text-black">
            New Arrivals
          </Link>
          <Link href="#" className="hover:text-black">
            Brands
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="pl-10 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-5 h-5 absolute left-3 top-2.5 text-gray-500"
            />
          </div>
          <button className="p-2 text-black">
            <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
          </button>
          <button className="p-2 text-black">
            <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" />
          </button>
          <button className="p-2 text-black">
            <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
