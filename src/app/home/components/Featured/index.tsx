import Image from "next/image";

export default function Featured(){
    return (
        <div>
            <div className="mb-5">
                
               
            <div className="mb-8 flex items-center">
        <div className="w-3 h-8 bg-red-600 rounded-sm mr-4" />
        <span className="text-red-600 font-semibold">Featured</span>
      </div>
      <h2 className="text-3xl font-bold mb-8">New Arrival</h2>
      <div className="grid grid-cols-3 gap-6 place-items-center justify-center">
        </div>
                <div className="display: flex">
                    <div>
                        <div>
                        <Image className="m-3" src="/Images/Frame 684.png"  alt="services" width={650} height={30} />
                        </div>
                    </div>
                    <div>
                        <div>
                        <Image className="m-3" src="/Images/Frame 685.png"  alt="services" width={650} height={30} />
                        </div>
                        <div className="display: flex">
                        <Image className="m-3" src="/Images/Frame 686.png"  alt="services" width={310} height={30} />
                        <Image className="m-3" src="/Images/Frame 687.png"  alt="services" width={310} height={30} />
                        </div>
                    </div>
                   
                </div>

                </div>
            </div>
       
    );
}



