import { Shield, FileText, Users, Smartphone, Clock, BarChart3 } from "lucide-react"

export default function PartnershipRequirements() {
  return (
    <div className="bg-[##F8FAFC] rounded-lg shadow-sm p-20 flex flex-col justify-center items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#111827] mb-2">Partnership Requirements & Features</h2>
        <p className="text-[#4B5563] text-xl">Everything you need to know about joining our partnership program</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Requirements Section */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Requirements</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Shield className="w-3 h-3 text-orange-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Valid Healthcare License</h4>
                <p className="text-sm text-gray-600">Current state healthcare provider license in good standing</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <FileText className="w-3 h-3 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Insurance Coverage</h4>
                <p className="text-sm text-gray-600">Professional liability and general liability insurance</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Users className="w-3 h-3 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Minimum Patient Volume</h4>
                <p className="text-sm text-gray-600">Minimum of 50 patients per month for partnership eligibility</p>
              </div>
            </div>
          </div>
        </div>

        {/* Program Features Section */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Program Features</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Smartphone className="w-3 h-3 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Mobile Platform Access</h4>
                <p className="text-sm text-gray-600">Real-time scheduling and patient management system</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-3 h-3 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">24/7 Support</h4>
                <p className="text-sm text-gray-600">Dedicated support team for all partnership needs</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <BarChart3 className="w-3 h-3 text-teal-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Analytics Dashboard</h4>
                <p className="text-sm text-gray-600">Comprehensive reporting and performance metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
