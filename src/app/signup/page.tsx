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
        <div className="bg-blue-5 h-170 w-200 ">
          <Image
            src="/Images/login.png"
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
              type="name"
              placeholder="Name"
              className="border-b border-gray-400 focus:border-black outline-none py-2 w-full"
            />

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

          <div className="mt-10 block  gap-10">
            <Link href="/home">
            <button className="bg-red-600 text-white py-3 w-100 rounded-md hover:bg-red-700 transition">
              Create an account
            </button>
            </Link>
            <button className="bg-red-600 text-white py-3 w-100 rounded-md hover:bg-red-700 transition">
              Create an account
            </button>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
