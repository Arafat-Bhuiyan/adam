import logo from "../../assets/images/logo.png"

export default function Navbar() {
  return (
    <header className="w-full py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* Navigation */}
          <nav className="flex items-center font-medium text-lg text-[#2c2c2c] gap-10">
            <a href="#services" className="">
              Services
            </a>
            <a href="#why-choose" className="">
              Why Choose Us
            </a>
            <a href="#providers" className="">
              For Providers
            </a>
            <a href="#about" className="">
              About
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-md font-medium">
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}
