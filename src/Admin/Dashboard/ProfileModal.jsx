import { FaEye } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import Avatar from "../../assets/images/Image-52.png";
import { useState } from "react";
import SelectionDropdown from "./SelectionDropdown";

const ProfileModal = ({ isOpen, onClose, professional }) => {
  const [selectedAction, setSelectedAction] = useState("approve");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-[961px] mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header with close button */}

        {/* Profile Section */}
        <div className="px-6 pb-6 ">
          <div className="border-[1px] rounded-md mt-9 mb-3  border-b-[#E5E7EB] ">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold bg-[#F3F4F6] rounded-full w-8 h-8 flex items-center justify-center m-3"
              >
                ×
              </button>
            </div>
            <div className="flex p-4 pt-0 items-start gap-4 mb-6">
              <img
                src={Avatar}
                alt="FA Kabita"
                className="w-16 h-16 m-3 rounded-full object-cover"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  FA Kabita
                </h2>

                {/* Contact Information */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email Address</span>
                    <span className="text-gray-900">Registration Date</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">example@gmail.com</span>
                    <span className="text-gray-900">August 01, 2025</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone Number</span>
                    <span className="text-gray-600">User Type</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">(123) 456-7890</span>
                    <span className="text-gray-900">Phlebotomist</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Address</span>
                    <span className="text-gray-600">Experience Level</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">
                      1234 ABCD, Dhaka-124, Bangladesh
                    </span>
                    <span className="text-gray-900">3.8 Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Uploaded Documents Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Uploaded Documents
            </h3>

            {/* Professional License */}
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <FaFilePdf className="text-[#2563EB]" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    Professional License
                  </div>
                  <div className="text-sm text-gray-500">
                    contractor_license_2025.pdf • 2.3 MB
                  </div>
                  <div className="text-xs text-gray-400">
                    Uploaded on August 15, 2025
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1 bg-[#C9A14A] text-white text-xs rounded ">
                  <FaEye className="text-white" /> View
                </button>
                <div className="w-36">
                  <SelectionDropdown
                    options={["approve", "deny"]}
                    selected={
                      selectedAction["professionalLicense"] || "approve"
                    } // unique key
                    onSelect={(action) =>
                      setSelectedAction((prev) => ({
                        ...prev,
                        professionalLicense: action,
                      }))
                    }
                  />
                </div>
              </div>
            </div>

            {/* Insurance Certificate */}
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                  <FaFilePdf className="text-[#16A34A]" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    Insurance Certificate
                  </div>
                  <div className="text-sm text-gray-500">
                    insurance_cert_2025.pdf • 1.9 MB
                  </div>
                  <div className="text-xs text-gray-400">
                    Uploaded on August 15, 2025
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1 bg-[#C9A14A] text-white text-xs rounded ">
                  <FaEye className="text-white" /> View
                </button>
                <div className="w-36">
                  <SelectionDropdown
                    options={["approve", "deny"]}
                    selected={
                      selectedAction["insuranceCertificate"] || "approve"
                    } // unique key
                    onSelect={(action) =>
                      setSelectedAction((prev) => ({
                        ...prev,
                        insuranceCertificate: action,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Final Decision Section */}
          <div className="border p-3 rounded-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Final Decision
            </h3>
            <div className="flex gap-3">
              <button className=" bg-[#C9A14A] text-white py-2 px-4 rounded-lg  font-medium">
                ✓ Approve Profile
              </button>
              <button className="border border-red-500 text-red-500 py-2 px-4 rounded-lg  font-medium">
                ✗ Deny Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
