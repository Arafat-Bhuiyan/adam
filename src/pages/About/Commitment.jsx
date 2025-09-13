import { Shield, Users, Lock } from "lucide-react";
import lock from "../../assets/images/lock.png";
import privacy from "../../assets/images/privacy.png";
import monitor from "../../assets/images/monitor.png";

export default function CommitmentConfidentiality() {
  return (
    <section className="bg-[#FAF6ED] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2c2c2c] mb-12">
          Our Commitment to Confidentiality
        </h2>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Secure Data Handling */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DBEAFE] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={lock} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-[#2c2c2c] mb-3">
                Secure Data Handling
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All patient information is encrypted and stored using
                industry-leading security protocols.
              </p>
            </div>

            {/* Privacy Protection */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={privacy} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-[#2c2c2c] mb-3">
                Privacy Protection
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strict adherence to HIPAA regulations ensures your personal
                health information remains confidential.
              </p>
            </div>

            {/* Compliance Monitoring */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F3E8FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={monitor} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-[#2c2c2c] mb-3">
                Compliance Monitoring
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regular audits and staff training ensure continuous compliance
                with privacy regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
