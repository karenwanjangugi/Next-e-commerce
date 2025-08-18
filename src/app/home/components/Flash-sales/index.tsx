"use client";

import { useEffect, useState } from "react";

export default function Flash() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
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
    <section className="">
      <div className="flex">
        <div className="mb-6 block items-center w-100 p-2">
          <div className="flex items-center">
            <div className="w-3 h-6 bg-red-600 rounded-sm mr-3" />
            <span className="text-red-600 font-semibold text-xs">
              Today's
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Flash Sales
          </h2>
        </div>

        <div className="flex space-x-4 mt-6">
          <div className="flex flex-col items-center bg-white text-black rounded-full w-20 h-20 justify-center">
            <span className="text-xs">Days</span>
            <span className="text-xl font-bold">
              {timeLeft.days.toString().padStart(2, "0") + " :"}
            </span>
          </div>
          <div className="flex flex-col items-center bg-white text-black rounded-full w-20 h-20 justify-center">
            <span className="text-xs">Hours</span>
            <span className="text-xl font-bold">
              {timeLeft.hours.toString().padStart(2, "0") + " :"}
            </span>
          </div>
          <div className="flex flex-col items-center bg-white text-black rounded-full w-20 h-20 justify-center">
            <span className="text-xs">Minutes</span>
            <span className="text-xl font-bold">
              {timeLeft.minutes.toString().padStart(2, "0") + " :"}
            </span>
          </div>
          <div className="flex flex-col items-center bg-white text-black rounded-full w-20 h-20 justify-center">
            <span className="text-xs">Seconds</span>

            <span className="text-xl font-bold">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
