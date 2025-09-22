"use client";

import { useState } from "react";
import ContentReviewDetails from "./ContentReviewDetails";

const Review = ({onPageShow}) => {
  const [contentType, setContentType] = useState("All Types");
  const [reportReason, setReportReason] = useState("All Reasons");
  const [activeTab, setActiveTab] = useState("content");
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const openDetailsModal = () => {
    setIsDetailsOpen(true);
  };

  const contentItems = [
    {
      id: 1,
      type: "Message",
      reason: "Inappropriate Language",
      title: "Message from Arif Hassan to Joti Das",
      preview: "This is completely unacceptable behavior and...",
      timestamp: "2 hours ago",
      reasonColor: "bg-orange-100 text-orange-800",
      typeColor: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      type: "Review",
      reason: "Spam",
      title: "Review by Nilutpal",
      preview: "Check out my website for amazing deals...",
      timestamp: "4 hours ago",
      reasonColor: "bg-purple-100 text-purple-800",
      typeColor: "bg-gray-100 text-gray-800",
    },
    {
      id: 3,
      type: "Message",
      reason: "Harassment",
      title: "Message from Joti Das to Nilutpal",
      preview: "You better respond to my messages or else...",
      timestamp: "1 hour ago",
      reasonColor: "bg-red-100 text-red-800",
      typeColor: "bg-blue-100 text-blue-800",
    },
  ];

  const messages = [
    {
      id: 1,
      type: "Direct Message",
      reason: "Spam",
      title: "Message from John Smith",
      preview: "Hey, check out this amazing offer...",
      timestamp: "30 minutes ago",
      reasonColor: "bg-purple-100 text-purple-800",
      typeColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      type: "Group Message",
      reason: "Inappropriate Content",
      title: "Message in Healthcare Group",
      preview: "This content violates our community guidelines...",
      timestamp: "1 hour ago",
      reasonColor: "bg-orange-100 text-orange-800",
      typeColor: "bg-indigo-100 text-indigo-800",
    },
  ];

  const currentItems = activeTab === "content" ? contentItems : messages;
  const contentCount = contentItems.length;
  const messageCount = messages.length;

  return (
    <div>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="p-5 bg-white rounded-lg shadow border border-gray-200"
      >
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Filter Pending Content
        </h2>

        {/* Filters */}
        <div className="flex  flex-wrap gap-4 mb-2">
          <div className=" min-w-48">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content Type
            </label>
            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
            >
              <option>All Types</option>
              <option>Message</option>
              <option>Review</option>
              <option>Comment</option>
              <option>Post</option>
            </select>
          </div>

          <div className=" min-w-48">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Reason
            </label>
            <select
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
            >
              <option>All Reasons</option>
              <option>Spam</option>
              <option>Harassment</option>
              <option>Inappropriate Language</option>
              <option>Inappropriate Content</option>
              <option>Fake Information</option>
            </select>
          </div>

          <div className="flex items-end">
            <button className="px-12 py-2 bg-[#C9A14A] transition-colors rounded-md text-white font-medium">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex  mt-6 mb-6">
        <button
          onClick={() => setActiveTab("content")}
          className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors border-[#C9A14A] text-[#C9A14A]
             ${ ""
            // activeTab === "content"
            //   ? "border-[#C9A14A] text-[#C9A14A]"
            //   : "border-transparent text-gray-500 hover:text-gray-700"
          }
          `}
        >
          Content 
        </button>
        <button
          onClick={() => onPageShow()}
          className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ml-6 ${
            ""
            // activeTab === "messages"
            //   ? "border-[#C9A14A] text-[#C9A14A]"
            //   : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Messages 
        </button>
      </div>

      {/* Content List */}
      <div className="border mb-6 divide-y-2 max-w-[800px] rounded-md">
        {currentItems.map((item) => (
          <div
            onClick={openDetailsModal}
            key={item.id}
            className="flex items-center justify-between p-4   transition-colors cursor-pointer"
          >
            <div className="flex-1">
              {/* Tags */}
              <div className="flex gap-2 ">
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium ${item.reasonColor}`}
                >
                  {item.reason}
                </span>
                <span className={`px-2 py-1 text-xs font-medium text-gray-400`}>
                  {item.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>

              {/* Preview */}
              <p className="text-sm text-gray-600 mb-2">{item.preview}</p>

              {/* Timestamp */}
              <p className="text-xs text-gray-500">{item.timestamp}</p>
            </div>

            {/* Arrow */}
            <div className="ml-4 self-start">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <ContentReviewDetails
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        contentItem={true}
      />
    </div>
  );
};

export default Review;
