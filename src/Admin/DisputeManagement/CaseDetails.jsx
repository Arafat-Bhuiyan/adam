import { useState } from "react";
import { FaBan, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa6";
import { IoWarning } from "react-icons/io5";

function CaseDetails({ isOpen, onClose }) {
  const [selectedAction, setSelectedAction] = useState("");
  const [images, setImages] = useState({ one: null, two: null });

  const handleImageUpload = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file); // preview purpose
      setImages((prev) => ({ ...prev, [key]: url }));
    }
  };

  const actions = [
    {
      id: "resolve",
      label: "Resolve Case - Warning Issued",
      color: "bg-teal-500  text-white",
      icon: <FaCheckCircle />,
    },
    {
      id: "warning",
      label: "Send Final Warning",
      color: "bg-orange-500  text-white",
      icon: <IoWarning />,
    },
    {
      id: "suspend",
      label: "Suspend User Account",
      color: "bg-red-500  text-white",
      icon: <FaBan />,
    },
    {
      id: "dismiss",
      label: "Dismiss Case",
      color: "bg-gray-500  text-white",
      icon: <FaTimesCircle />,
    },
  ];

  const evidenceItems = [
    {
      id: 1,
      name: "Screenshot 1",
      date: "Dec 5, 2024 AM",
    },
    {
      id: 2,
      name: "Screenshot 2",
      date: "Dec 6, 2024 AM",
    },
  ];
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white  shadow-xl max-w-[70vw] w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 ">
          <div className="absolute top-4 right-4">
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
        </div>
        <div className="py-9">
          {/* Header */}
          <div
            style={
              {
                // boxShadow: "0px 4px 6px 0px #0000001A",
              }
            }
            className=" p-6 border-b shadow-md m-5 rounded-md border-gray-200"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Case Details
              </h2>
              <div className="flex items-center gap-4 mt-1 text-sm text-gray-500 border-b pb-2">
                <span>Case ID : DSP-123456</span>
                <span>Filed: August 15, 2015</span>
              </div>
            </div>

            <div className="flex  justify-between items-center gap-10 pt-3 ">
              {/* Complaint Information */}
              <div className="flex-[3]">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Complaint Information
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="text-gray-500">
                      Harassment & Inappropriate Behavior
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Filed By:</span>
                    <span className="text-gray-900">FA Kabita</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reported User:</span>
                    <span className="text-gray-500">DR Rahul</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platform:</span>
                    <span className="text-gray-500">Mobile App</span>
                  </div>
                </div>
              </div>
              {/* Initial Report Summary */}
              <div className="flex-[2] p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Initial Report Summary
                </h3>
                <div className=" rounded-lg ">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    User reported receiving inappropriate messages and
                    persistent contact attempts after blocking the reported
                    user. Claims include harassment through multiple accounts
                    and threatening language.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Evidence & Timeline Review */}
                <div className="rounded p-6 shadow-md">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Evidence & Timeline Review
                  </h3>{" "}
                  <div className="flex items-center gap-2 mb-3">
                    <FaFileImage className="text-[#00A6A6]" />
                    <span className="font-medium text-gray-900">
                      Submitted Evidence
                    </span>
                  </div>
                  <div className="">
                    <div className="space-y-2">
                      {/* Screenshot 1 */}
                      <div className="py-2 px-3 bg-white rounded border">
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gray-700 text-sm">
                            ScreenShoot 1
                          </span>
                          <span className="text-sm text-gray-500">
                            Dec 5, 9:20 AM
                          </span>
                        </div>

                        {/* Upload area */}
                        <label className="border py-3 my-2 h-[130px] w-full rounded-md flex items-center justify-center cursor-pointer">
                          {images.one ? (
                            <img
                              src={images.one}
                              alt="screenshot1"
                              className="h-[100px] w-[100px] self-start object-cover rounded-md"
                            />
                          ) : (
                            <span className="text-gray-400 text-sm">
                              Click to upload
                            </span>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, "one")}
                          />
                        </label>

                        <p className="text-[13px] text-gray-400">
                          Messages from alternate account
                        </p>
                      </div>

                      {/* Screenshot 2 */}
                      <div className="py-2 px-3 bg-white rounded border">
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gray-700 text-sm">
                            ScreenShoot 2
                          </span>
                          <span className="text-sm text-gray-500">
                            Dec 5, 9:20 AM
                          </span>
                        </div>

                        {/* Upload area */}
                        <label className="border py-3 my-2 h-[130px] w-full rounded-md flex items-center justify-center cursor-pointer">
                          {images.two ? (
                            <img
                              src={images.two}
                              alt="screenshot2"
                              className="h-[100px] self-start w-[100px] object-cover rounded-md"
                            />
                          ) : (
                            <span className="text-gray-400 text-sm">
                              Click to upload
                            </span>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, "two")}
                          />
                        </label>

                        <p className="text-[13px] text-gray-400">
                          Profile page showing continued attempts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decision & Action */}
                <div className=" p-6 shadow-md rounded-md">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Decision & Action
                  </h3>
                  <div>
                    <p className="text-gray-800 mb-4 font-[600]">
                      Available Actions
                    </p>
                    <div className="space-y-3">
                      {actions.map((action) => (
                        <button
                          key={action.id}
                          onClick={() => setSelectedAction(action.id)}
                          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors focus:outline-none ${
                            action.color
                          } ${selectedAction === action.id ? "" : ""}`}
                        >
                          <span>{action.icon}</span>
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 shadow-md rounded-md p-5  self-start">
                {/* Decision Summary */}
                <div className=" p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Decision Summary
                  </h3>
                  <div className="   rounded-lg">
                    <textarea
                      rows={10}
                      placeholder="Enter your decision summary and reasoning here. This will be logged and may be shared with relevant parties..."
                      className="text-gray-700 rounded-md p-3 border h-[100px] w-full text-[13px] leading-relaxed"
                    />
                  </div>
                </div>

                {/* Recommended Action */}
                <div className="bg-[#ffe9b836] p-4 rounded-md">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Recommended Action
                  </h3>
                  <div className=" rounded-lg  mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Based on evidence review, suspend user account. Clear
                      violation of harassment policy with evidence of
                      inappropriate messaging and threatening language.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className=" bg-[#C9A14A] text-white font-medium py-2 px-5 rounded-lg transition-colors">
                    Submit Decision
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;
