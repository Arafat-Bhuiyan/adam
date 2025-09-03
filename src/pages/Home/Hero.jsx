import heroImage from "../../assets/images/hero-image.png";
import star from "../../assets/images/star.png";
import user from "../../assets/images/user.png";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-[#FAF6ED] via-60% to-[#FAF6ED] to-100% py-16 lg:py-24 mb-52 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#0C1A2A] leading-tight">
                Professional <br />
                Blood Tests <span className="text-[#C9A14A]">At Your Home</span>
              </h1>
              <p className="text-xl text-[#2C2C2C] leading-relaxed max-w-lg">
                Skip the clinic queues. Get accurate, certified blood tests done
                in the comfort of your home by qualified healthcare
                professionals.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-7">
              <button className="bg-gradient-to-r from-[#877018] to-[#C9A14A] text-white w-64 h-16 rounded-lg font-semibold text-lg">
                Hire Healthcare Staff
              </button>
              <button
                variant="outline"
                className="border border-[#877018] bg-gradient-to-r from-[#877018] to-[#C9A14A] bg-clip-text text-transparent w-64 h-16 rounded-lg font-semibold text-lg bg-transparent"
              >
                Get Paid Shifts
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="">
              <img
                src={heroImage}
                alt="Healthcare professionals conducting blood test"
                className="w-full h-[440px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Social Proof */}
      <div className="flex items-center gap-8 pt-4 absolute bottom-16 left-[685px]">
        <div className="border border-[#E5E7EB] rounded-xl w-72 h-44 mx-auto py-8 flex flex-col justify-center items-center bg-gradient-to-r from-[#FAF6ED] to-[#F4ECDB] drop-shadow-xl">
          <img src={star} alt="" className="w-9 h-9 pb-2" />
          <p className="font-medium text-2xl">4.9/5</p>
          <p className="font-medium text-2xl">Rating</p>
        </div>
        <div className="border border-[#E5E7EB] rounded-xl w-72 h-44 mx-auto py-8 flex flex-col justify-center items-center bg-gradient-to-r from-[#FAF6ED] to-[#F4ECDB] drop-shadow-xl">
          <img src={user} alt="" className="w-9 h-9 pb-2" />
          <p className="font-medium text-2xl">4.9/5</p>
          <p className="font-medium text-2xl">Rating</p>
        </div>
      </div>
    </section>
  );
}
