"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 24,
    minutes: 59,
    seconds: 35,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) 
            seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-7xl h-max bg-gradient-to-r from-black to-gray-900 text-white flex justify-between items-center p-10 rounded-lg">
      <div className="max-w-md">
        <p className="text-green-400 font-semibold">Categories</p>
        <h1 className="text-6xl font-medium mt-3 w-200 leading-snug">
          Enhance Your <br/> Music Experience
        </h1>
        <div className="flex space-x-4 mt-6">
          <div className="flex flex-col items-center bg-white text-black rounded-full w-20 h-20 justify-center">
            <span className="text-xl font-bold">
              {timeLeft.days.toString().padStart(2, "0")}
            </span>
            <span className="text-xs">Days</span>
          </div>
          <div className="flex flex-col items-center bg-white text-black rounded-full w-20 h-20 justify-center">
            <span className="text-xl font-bold">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-xs">Hours</span>
          </div>
          <div className="flex flex-col items-center bg-white text-black rounded-full w-20 h-20 justify-center">
            <span className="text-xl font-bold">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-xs">Minutes</span>
          </div>
          <div className="flex flex-col items-center bg-white text-black rounded-full w-20 h-20 justify-center">
            <span className="text-xl font-bold">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-xs">Seconds</span>
          </div>
        </div>
        <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded">
          Buy Now!
        </button>
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/Images/speaker.png"
          alt="Speaker"
          width={600}
          height={300}
          priority
        />
      </div>
    </div>
  );
}
