import { Shield, CheckCircle } from "lucide-react"
import Umbrella from "../../assets/images/umbrella.png";
import Bonding from "../../assets/images/bonding.png";

export default function InsuranceBonding() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2c2c2c] mb-4">Insurance & Bonding</h2>
        <p className="text-center text-[#4B5563] text-lg mb-12 max-w-2xl mx-auto">
          Comprehensive coverage and bonding provide additional protection and peace of mind for our patients.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Professional Liability Insurance */}
          <div className="bg-[#F9FAFB] rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#DBEAFE] rounded-full flex items-center justify-center flex-shrink-0">
                <img src={Umbrella} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2c2c2c] mb-3">Professional Liability Insurance</h3>
                <p className="text-[#4B5563] text-base leading-relaxed">
                  $2M coverage protecting patients and ensuring professional accountability in all our services.
                </p>
              </div>
            </div>
          </div>

          {/* Surety Bonding */}
          <div className="bg-[#F9FAFB] rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#DCFCE7] rounded-full flex items-center justify-center flex-shrink-0">
                <img src={Bonding} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2c2c2c] mb-3">Surety Bonding</h3>
                <p className="text-[#4B5563] text-base leading-relaxed">
                  Bonded operations provide additional financial protection and demonstrate our commitment to ethical
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
