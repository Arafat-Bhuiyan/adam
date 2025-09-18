import AvatarImage from "@/assets/images/Image-52.png";
import BloodImage from "@/assets/images/image 22.png";
import { HiDocumentAdd } from "react-icons/hi";
import {
  FaAngleDown,
  FaCertificate,
  FaCircleCheck,
  FaMessage,
} from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const DetailedUserProfile = ({ user, onClose }) => {
  const handleSkillRemove = (skillToRemove) => {
    // Handle skill removal logic here
    console.log("Removing skill:", skillToRemove);
  };

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-[70vw] w-full max-h-[90vh]  pt-7 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
        {/* Header */}
        <div className="sticky top-0 ">
          <div className="absolute top-0 right-4">
            <button
              onClick={onClose}
              className="text-gray-400 transition-colors h-8 w-8 bg-gray-200 flex items-center justify-center rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>{" "}
        <div className="px-6 mt-5">
          {" "}
          <div className="flex items-center justify-between p-6   shadow-sm">
            <div className="flex items-center space-x-4">
              <img
                src={AvatarImage}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  FA Kabita
                </h2>
                <p className="text-gray-600">Phlebotomist</p>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <div className="w-2 h-2 bg-[#166534] rounded-full mr-1"></div>
                    Active
                  </span>
                  <span className="text-sm text-gray-500">
                    Member since March 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Overall Rating</p>
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    4.8
                  </span>
                  <div className="flex ml-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Personal & Professional Info */}
            <div className="lg:col-span-2 space-y-8 ">
              {/* Personal Information */}
              <div className="shadow-sm border border-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <p className="text-gray-500">sarah.johnson@email.com</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <p className="text-gray-500">(555) 123-4567</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <p className="text-gray-500">March 15, 1990</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      License Number
                    </label>
                    <p className="text-gray-500">PHL-2023-789456</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <p className="text-gray-500">1234 XYZ, Dhaka-1216</p>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="shadow-sm border border-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Professional Information
                </h3>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience
                  </label>
                  <p className="text-gray-900">3.5 years</p>
                </div>
                <div>
                  <label className="block text-md font-semibold text-gray-900 mb-2">
                    Skill
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Blood Collection",
                      "Blood Collection",
                      "Blood Collection",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-[#0C1A2A]"
                      >
                        {skill}
                        <button
                          onClick={() => handleSkillRemove(skill)}
                          className="ml-2 text-gray-700 "
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Document Verification */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Document Verification
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                        <HiDocumentAdd className="text-[24px] text-[#00A6A6]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Phlebotomy License
                        </p>
                        <p className="text-sm text-gray-500">
                          Uploaded Jan 15, 2024
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex gap-1 items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <FaCircleCheck />
                      Approved
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                        <FaCertificate className="text-[20px] text-[#00A6A6]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          CPR Certification
                        </p>
                        <p className="text-sm text-gray-500">
                          Uploaded Jan 10, 2024
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex gap-1 items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <FaCircleCheck />
                      Approved
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Activity & Actions */}
            <div className="space-y-8">
              {/* Activity Summary */}
              <div className="shadow-sm border border-gray-100 p-6 rounded-lg min-h-[250px]">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Activity Summary
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Jobs Completed</span>
                    <span className="text-2xl font-bold text-teal-600">
                      247
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Success Rate</span>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-yellow-400 fill-current mr-1"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span className="font-semibold text-gray-900">4.8</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Last Active</span>
                    <span className="text-gray-900">2 hours ago</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full gap-1 bg-[#00A6A6] text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                    <FaEdit />
                    Edit Profile
                  </button>
                  <button className="w-full gap-2 bg-[#3B82F6] text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                    <FaMessage />
                    Send Message
                  </button>
                  <button className="w-full justify-center items-center flex gap-2 bg-[#EAB308] text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    <FaAngleDown />
                    Pending
                  </button>
                </div>
              </div>

              {/* Mascot */}
              <div className="flex justify-center">
                <img src={BloodImage} alt="Mascot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedUserProfile;
