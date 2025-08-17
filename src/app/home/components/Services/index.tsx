import Image from "next/image";

export default function Services() {
  return (
    <div className="flex justify-between items-center gap-6 py-10">
      <div className="flex flex-col items-center text-center max-w-xs">
        <Image
          className="mb-3"
          src="/Images/Services.png"
          alt="Delivery Icon"
          width={50}
          height={30}
        />
        <h4 className="font-bold mb-2">FREE AND FAST DELIVERY</h4>
        <p className="text-gray-500 text-sm">Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col items-center text-center max-w-xs">
        <Image
          className="mb-3"
          src="/Images/Services.png"
          alt="Customer Service Icon"
          width={50}
          height={30}
        />
        <h4 className="font-bold mb-2">24/7 CUSTOMER SERVICE</h4>
        <p className="text-gray-500 text-sm">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col items-center text-center max-w-xs">
        <Image
          className="mb-3"
          src="/Images/Services.png"
          alt="Money Back Icon"
          width={50}
          height={30}
        />
        <h4 className="font-bold mb-2">MONEY BACK GUARANTEE</h4>
        <p className="text-gray-500 text-sm">We return money within 30 days</p>
      </div>
    </div>
  );
}
