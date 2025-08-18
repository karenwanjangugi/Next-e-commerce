"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faLaptop, faCamera, faHeadphones, faGamepad, faClock } from "@fortawesome/free-solid-svg-icons";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Browse: React.FC = () => {
  const links = [
    { icon: <FontAwesomeIcon icon={faMobile} width={15} />, name: "Phones" },
    { icon: <FontAwesomeIcon icon={faLaptop} width={15} />, name: "Computers" },
    { icon: <FontAwesomeIcon icon={faClock} width={15} />, name: "SmartWatch" },
    { icon: <FontAwesomeIcon icon={faCamera} width={15} />, name: "Camera" },
    { icon: <FontAwesomeIcon icon={faHeadphones} width={15} />, name: "HeadPhones" },
    { icon: <FontAwesomeIcon icon={faGamepad} width={15} />, name: "Gaming" },
  ];


  const [selected, setSelected] = useState("Camera");

  return (
    <section className="w-7xl mx-auto px-6">
      <div className="mb-6 flex items-center">
        <div className="w-3 h-6 bg-red-600 rounded-sm mr-3" />
        <span className="text-red-600 font-semibold text-xs">Categories</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Browse By Category</h2>

      <div className="flex items-center justify-between">
        <ul className="flex gap-7 flex-wrap w-7xl">
          {links.map(({ icon, name }) => {
            const isActive = selected === name;
            return (
              <li
                key={name}
                className={`cursor-pointer w-24 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-md border ${
                  isActive ? "bg-red-600 text-white" : "border-gray-300 text-black"
                }`}
                onClick={() => setSelected(name)}
              >
                <div className="text-3xl mb-2">{icon}</div>
                <p className="text-xs font-medium">{name}</p>
              </li>
            );
          })}
        </ul>

        <div className="flex gap-2 ml-6">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors"
            aria-label="Previous"
          >
       
          </button>
        </div>
      </div>
    </section>
  );
};
