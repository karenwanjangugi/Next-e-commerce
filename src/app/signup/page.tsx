"use client";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../shared/navbar";
import Footer from "../shared/footer";

export default function Login() {
  return (
    <div>
      <NavBar />
      <div className="flex gap-50 text-black mt-10 ">
        <div className="bg-blue-100 h-170 w-200 ">
          <Image
            src="/login.png"
            alt="product"
            width={600}
            height={500}
            className="ml-10"
          />
        </div>

        <div className="mt-20 w-full max-w-md">
          <h3 className="text-5xl font-semibold">Log in to Exclusive</h3>
          <p className="text-lg mt-3 text-gray-600">Enter your details below</p>

          <div className="mt-10 flex flex-col gap-6">
            <input
              placeholder="Email or Phone Number"
              className="border-b border-gray-400 focus:border-black outline-none py-2 w-full"
            />
           
            <input
              type="password"
              placeholder="Password"
              className="border-b border-gray-400 focus:border-black outline-none py-2 w-full"
            />
          </div>

          <div className="mt-10 flex  gap-10 justify-between">
            <button className="bg-red-600 text-white py-3 w-45 rounded-md hover:bg-red-700 transition">Login</button>
            <Link href="/" className="underline text-red-600 mt-3">Forgot Password?</Link>

            
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}