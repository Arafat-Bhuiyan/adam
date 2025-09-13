import clia from "../../assets/images/clia.png";
import hippa from "../../assets/images/hippa.png";
import cap from "../../assets/images/cap.png";
import staff from "../../assets/images/staff.png";

export default function CredentialsCertifications() {
  const credentials = [
    {
      icon: clia,
      title: "CLIA Certified",
      description: "Clinical Laboratory Improvement Amendments",
      bgColor: "bg-[#C9A14A]",
    },
    {
      icon: hippa,
      title: "HIPAA Compliant",
      description: "Health Insurance Portability and Accountability Act",
      bgColor: "bg-[#16A34A]",
    },
    {
      icon: cap,
      title: "CAP Accredited",
      description: "College of American Pathologists",
      bgColor: "bg-[#9333EA]",
    },
    {
      icon: staff,
      title: "Licensed Staff",
      description: "State Licensed Phlebotomists",
      bgColor: "bg-[#DC2626]",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">
            Credentials & Certifications
          </h2>
          <p className="text-xl text-[#4B5563] max-w-2xl mx-auto">
            Our commitment to excellence is validated through rigorous
            certifications and compliance with industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-lg p-6 text-center"
            >
              <div
                className={`w-16 h-16 ${credential.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}
              >
                <img
                  src={credential.icon}
                  alt={credential.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {credential.title}
              </h3>
              <p className="text-sm text-gray-600">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
