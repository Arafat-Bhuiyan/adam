import { Users, Award, Star } from "lucide-react";
import dr from "../../assets/images/hero.png";
import people from "../../assets/images/people.svg";
import star from "../../assets/images/star.svg";
import tag from "../../assets/images/tag.svg";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#F4ECDB] to-[#FAF6ED] py-16 px-32 rounded-3xl mb-48 relative">
      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left side - Doctor image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img src={dr} alt="Healthcare professional" className="" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#2C2C2C] mb-5">
              About PRIMEPATH
            </h2>
            <p className="text-gray-600 text-xl">
              Revolutionizing healthcare accessibility through innovative mobile
              laboratory services, bringing professional medical testing
              directly to your doorstep with uncompromising quality and care.
            </p>
          </div>
        </div>      
      </div>
      <div className="flex gap-16 absolute bottom-[-135px] left-[490px]">
          <div className="bg-[#FAF6ED] rounded-full w-64 h-64 shadow-xl flex flex-col gap-1 items-center justify-center">
            <div className="px-4 py-5 bg-[#DBEAFE] rounded-full flex items-center justify-center mb-2">
              <img src={people}/>
            </div>
            <p className="text-[#2c2c2c] font-bold text-3xl">2,500+</p>
            <p className="text-[#4B5563] text-base">Patients Served</p>
          </div>
          <div className="bg-[#FAF6ED] rounded-full w-64 h-64 shadow-xl flex flex-col gap-1 items-center justify-center">
            <div className="p-5 bg-[#DCFCE7] rounded-full flex items-center justify-center mb-2">
              <img src={tag}/>
            </div>
            <p className="text-[#2c2c2c] font-bold text-3xl">15+</p>
            <p className="text-[#4B5563] text-base">Years Collective Experience</p>
          </div>
          <div className="bg-[#FAF6ED] rounded-full w-64 h-64 shadow-xl flex flex-col gap-1 items-center justify-center">
            <div className="px-4 py-5 bg-[#FEF9C3] rounded-full flex items-center justify-center mb-2">
              <img src={star}/>
            </div>
            <p className="text-[#2c2c2c] font-bold text-3xl">99%</p>
            <p className="text-[#4B5563] text-base">Patient Satisfaction</p>
          </div>
        </div>
    </section>
  );
}
