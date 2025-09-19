"use client";

import { useState } from "react";
import { FaCertificate, FaLocationDot } from "react-icons/fa6";
import Avatar from "../../assets/images/Image-52.png";
import ProfessionalComparison from "./ProfessionalComparison";

const AvailablePhlebotomists = ({ isOpen, onClose }) => {
  const [openJobMatchingDetails, setOpenJobMatchingDetails] = useState(false);

  const [phlebotomists] = useState([
    {
      id: 1,
      name: "FA Kabita",
      rating: 4.9,
      reviews: 107,
      distance: "23 miles away",
      certification: "Certified Phlebotomist - 5 years exp",
      status: "Available",
      avatar: "/professional-woman-headshot.png",
    },
    {
      id: 2,
      name: "FA Kabita",
      rating: 4.9,
      reviews: 107,
      distance: "23 miles away",
      certification: "Certified Phlebotomist - 5 years exp",
      status: "Busy",
      avatar: "/professional-woman-headshot.png",
    },
    {
      id: 3,
      name: "FA Kabita",
      rating: 4.9,
      reviews: 107,
      distance: "23 miles away",
      certification: "Certified Phlebotomist - 5 years exp",
      status: "Available",
      avatar: "/professional-woman-headshot.png",
    },
  ]);

  const handleAssignJob = (phlebotomistId) => {
    console.log("Assigning job to phlebotomist:", phlebotomistId);
    // Handle job assignment logic here
  };

  const handleViewProfile = (phlebotomistId) => {
    setOpenJobMatchingDetails(true);
    // Handle view profile logic here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white  shadow-xl w-full max-w-md mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
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
        <div className="flex items-center justify-between p-4 mt-9 ">
          <h2 className="text-lg font-semibold text-[#003366]">
            Available Phlebotomists
          </h2>
          <p className="text-sm text-gray-500">{phlebotomists.length} found</p>
        </div>

        {/* Phlebotomists List */}
        <div className="p-4 space-y-4 max-h-[calc(90vh-120px)] overflow-y-auto">
          {phlebotomists.map((phlebotomist) => (
            <div key={phlebotomist.id} className="shadow-sm rounded-lg p-4">
              {/* Status Badge */}
              <div className="flex justify-end mb-2"></div>

              {/* Profile Info */}
              <div></div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={Avatar}
                    alt={phlebotomist.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {phlebotomist.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(phlebotomist.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {phlebotomist.rating} ({phlebotomist.reviews})
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      phlebotomist.status === "Available"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-orange-800"
                    }`}
                  >
                    {phlebotomist.status}
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-1">
                  {/* Distance */}
                  <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                    <FaLocationDot className="text-[#00A6A6]" />
                    {phlebotomist.distance}
                  </div>

                  {/* Certification */}
                  <div className="flex items-center mt-1 gap-1 text-sm text-gray-600">
                    <FaCertificate className="text-[#00A6A6]" />
                    {phlebotomist.certification}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 mt-3">
                    <button
                      onClick={() => handleViewProfile(phlebotomist.id)}
                      className="flex-1 px-3 py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
                    >
                      View Profile
                    </button>
                    {phlebotomist.status === "Available" ? (
                      <button
                        onClick={() => handleAssignJob(phlebotomist.id)}
                        className="flex-1 px-3 py-2 bg-yellow-600 text-white rounded-md text-sm font-medium hover:bg-yellow-700 transition-colors"
                      >
                        Assign Job
                      </button>
                    ) : (
                      <button
                        disabled
                        className="flex-1 px-3 py-2 bg-gray-300 text-gray-500 rounded-md text-sm font-medium cursor-not-allowed"
                      >
                        Unavailable
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="p-4 ">
          <button className="w-full text-center text-[#C9A14A] font-medium text-sm">
            Load More Phlebotomists
          </button>
        </div>
      </div>
      <ProfessionalComparison
        isOpen={openJobMatchingDetails}
        onClose={() => setOpenJobMatchingDetails(false)}
      />
    </div>
  );
};

export default AvailablePhlebotomists;
