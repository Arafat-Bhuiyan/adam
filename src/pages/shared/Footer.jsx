import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import logo from "../../assets/images/logo.png";
import fb from "../../assets/images/fb.png";
import tweet from "../../assets/images/tweet.png";
import linkedin from "../../assets/images/linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="" />
          <p className="text-base mb-4">
            Professional home blood testing services with certified healthcare
            professionals.
          </p>
          <div className="flex space-x-3">
            <img src={fb} alt="" />
            <img src={tweet} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>

        {/* Services */}
        <div className="text-base">
          <h4 className="text-white font-semibold text-lg mb-3">Services</h4>
          <ul className="space-y-2 ">
            <li>Blood Tests</li>
            <li>Health Panels</li>
            <li>Diabetes Testing</li>
            <li>Lipid Profile</li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-base">
          <h4 className="text-white font-semibold text-lg mb-3">Company</h4>
          <ul className="space-y-2 ">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-base">
          <h4 className="text-white font-semibold text-lg mb-3">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@venixlab.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Available in major cities</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-base text-[#9CA3AF] mt-8">
        © 2025 VeniX Lab. All rights reserved.
      </div>
    </footer>
  );
}
