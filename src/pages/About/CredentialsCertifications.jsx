import { Award, Shield, CheckCircle, Users } from "lucide-react"

export default function CredentialsCertifications() {
  const credentials = [
    {
      icon: Award,
      title: "CLIA Certified",
      description: "Clinical Laboratory Improvement Amendments",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Health Insurance Portability and Accountability Act",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: CheckCircle,
      title: "CAP Accredited",
      description: "College of American Pathologists",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Users,
      title: "Licensed Staff",
      description: "State Licensed Phlebotomists",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
  ]

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">Credentials & Certifications</h2>
          <p className="text-xl text-[#4B5563] max-w-2xl mx-auto">
            Our commitment to excellence is validated through rigorous certifications and compliance with industry
            standards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => {
            const IconComponent = credential.icon
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div
                  className={`w-12 h-12 ${credential.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <IconComponent className={`w-6 h-6 ${credential.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{credential.title}</h3>
                <p className="text-sm text-gray-600">{credential.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
