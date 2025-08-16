import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black w-full">
      <div className="max-w-max mx-auto py-12 px-8">
        <div className="grid grid-cols-5 gap-20 mb-12">
          <div>
            <h2 className="text-2xl text-white font-semibold mb-6">
              Exclusive
            </h2>
            <h4 className="text-white font-medium mb-2">Subscribe</h4>
            <p className="text-white mb-3 text-sm">
              Get 10% off your first order
            </p>
            <form className="flex border border-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-sm px-3 py-2 text-white placeholder:text-gray-400 outline-none flex-1"
              />
              <button
                type="submit"
                className="px-4 flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  color="white"
                  width="18px"
                />
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl text-white font-semibold mb-6">Support</h2>
            <p className="text-white mb-2 text-sm">
              111 Bijoy Sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </p>
            <p className="text-white mb-1 text-sm">exclusive@gmail.com</p>
            <p className="text-white text-sm">+88015-8888-9999</p>
          </div>

          <div>
            <h2 className="text-2xl text-white font-semibold mb-6">Account</h2>
            <ul>
              {[
                "My Account",
                "Login / Register",
                "Cart",
                "Wishlist",
                "Shop",
              ].map((item) => (
                <li key={item} className="text-white mb-2 text-sm">
                  <a
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-white hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-white font-semibold mb-6">
              Quick Link
            </h2>
            <ul>
              {[
                "About Us",
                "Contact Us",
                "FAQ",
                "Terms & Conditions",
                "Privacy policy",
              ].map((link) => (
                <li key={link} className="text-white mb-2 text-sm">
                  <a
                    href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-white hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-white font-semibold mb-6">
              Download App
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Save $3 with App New User Only
            </p>
            <div className="flex space-x-3 items-center mb-4">
              <Image
                src="/Images/Qr Code.png"
                alt="qr code"
                width={80}
                height={80}
              />
              <div className="flex flex-col gap-3">
                <a href="#" className=" w-fit">
                  <Image
                    src="/Images/google-play.png"
                    alt="Play Store"
                    width={100}
                    height={20}
                    className="mr-2"
                  />
                </a>
                <a href="#" className=" w-fit">
                  <Image
                    src="/Images/download-appstore.png"
                    alt="App Store"
                    width={100}
                    height={20}
                    className="mr-2"
                  />
                </a>
              </div>
            </div>
            <div className=" text-white flex space-x-4">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} className="w-5" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="w-5" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className="w-5" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} className="w-5" />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 mb-4" />
        <p className="text-center text-gray-500 text-sm pb-2">
          &copy; Copyright Rimel 2022. All rights reserved
        </p>
      </div>
    </div>
  );
}


