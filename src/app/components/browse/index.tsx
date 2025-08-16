// import { FaArrowRight } from "@fortawesome/fontawesome-svg-core";
// import { FaArrowLeft } from "@fortawesome/fontawesome-svg-core";
import { FaMobile } from "react-icons/fa6";          
import { FaLaptop } from "react-icons/fa6";             
import { FaBath } from "react-icons/fa6";              
import { FaCamera } from "react-icons/fa6";             
import { FaHeadphones } from "react-icons/fa6";         
import { FaGamepad } from "react-icons/fa6";            

export const Browse: React.FC = () => {
  const links = [
    { icon: <FaMobile />, name: "phones" },
    { icon: <FaLaptop />, name: "computers" },
    { icon: <FaBath />, name: "smartWatch" },
    { icon: <FaCamera />, name: "camera" },
    { icon: <FaHeadphones />, name: "Headphones" },
    { icon: <FaGamepad />, name: "Gaming" },
  ];

  return (
    <div>
      <div>
        <div className="mb-8 flex items-center mt-700">
          <div className="w-3 h-8 bg-red-600 rounded-sm mr-4" />
          <span className="text-red-600 font-semibold">Categories</span>
        </div>
        <h2 className="text-3xl font-bold mb-8">View By Categories</h2>
      </div>
      <div>
        <ul className="flex text-5xl gap-5 ">
          {links.map(({ icon, name }) => (
            <li key={name} className="border-2 border-gray-300 w-35 h-23 pt-3 pl-7">
              {icon}
              <p className="text-sm pl-3">{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
