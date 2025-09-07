import heroImage from "../../assets/images/ProvidersHero.png";

export function ProvidersHero() {
  return (
    <section className="bg-gradient-to-b from-white via-[#FAF6ED] via-60% to-[#FAF6ED] to-100% py-16 lg:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-[#2c2c2c] leading-tight">
                Extend Your Care <br /> to Your Patient's <br /> Home
              </h1>
              <p className="text-lg text-[#2C2C2C] leading-relaxed max-w-lg">
                Partner with VeniX Lab to provide professional healthcare
                services directly to your patients' homes. Enhance care quality
                while reducing costs and improving patient satisfaction.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-7">
              <button className="bg-gradient-to-r from-[#877018] to-[#C9A14A] text-white w-72 h-16 rounded-lg font-semibold text-lg">
                Start Partnership Application
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
    </section>
  );
}
