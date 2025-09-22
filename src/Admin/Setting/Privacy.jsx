"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

// Privacy Policy Component
const PrivacyPolicy = ({ onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState({
    informationWeCollect:
      "Welcome to [Your App Name]. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data when you use our AI voice cloning platform.",
    keyPoints: [
      "Information We Collect: Name, email, and account details.",
      "Voice Data: Audio samples uploaded for AI voice cloning.",
      "Usage Data: Interactions with our platform, such as settings, preferences, and feedback.",
      "Payment Information: Processed securely through third-party payment providers.",
    ],
    howWeUseData:
      "We use your data to: • Provide you with AI voice cloning services. • Personalize your AI-generated voice experience. • Enhance AI accuracy based on your interactions. • Ensure security and prevent fraudulent activities. • Send updates, promotions, or important notifications (you can opt out anytime).",
    dataSharingAndSecurity:
      "We do not sell your personal data to third parties. • We may share data with trusted partners solely for AI training within your account. • We may share necessary data with service providers (e.g., payment processors) under strict confidentiality agreements. • Data is protected with encryption and security measures to prevent unauthorized access.",
    userControlAndChoices:
      "You can update or delete your account information from the My Profile section. • You can request data deletion by contacting [Your Support Email]. • You can manage communication preferences (e.g., email notifications). • You can opt out of promotional communications.",
    dataRetention:
      "We retain user data only as long as necessary to provide our services. Upon account deletion, personal data is permanently removed, except as required by law.",
    childrensPrivacy:
      "Our platform is not intended for users under the age of [age]. We do not knowingly collect data from minors.",
    changesToPolicy:
      "We may update this Privacy Policy from time to time. Continued use of the platform after updates means you accept the changes.",
    contactUs:
      "For any questions or privacy concerns, contact us at [Your Support Email].",
  });

  const handleEdit = () => {
    if (isEditing) {
      console.log("Saving changes:", content);
    }
    setIsEditing(!isEditing);
  };

  const removeKeyPoint = (index) => {
    const newPoints = content.keyPoints.filter((_, i) => i !== index);
    setContent({ ...content, keyPoints: newPoints });
  };

  return (
    <div className="rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <h1 className="text-2xl underline underline-offset-4 font-semibold text-[#C9A14A]">
          Privacy Policy
        </h1>
        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md font-medium transition-colors"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      {/* Document Content */}
      <div className="p-6 space-y-6">
        {/* Information We Collect */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            1. Information We Collect
          </h2>
          {isEditing ? (
            <RichTextEditor
              value={content.informationWeCollect}
              onChange={(value) =>
                setContent({ ...content, informationWeCollect: value })
              }
              placeholder="Enter information collection details..."
              className="mb-4"
            />
          ) : (
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.informationWeCollect }}
            />
          )}

          {/* Key Points */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900">Data Types:</h3>
              {isEditing && (
                <button
                  onClick={() =>
                    setContent({
                      ...content,
                      keyPoints: [...content.keyPoints, "New data type"],
                    })
                  }
                  className="px-3 py-1 text-sm bg-yellow-500 hover:bg-yellow-600 text-white rounded transition-colors"
                >
                  + Add Data Type
                </button>
              )}
            </div>
            <ul className="space-y-2">
              {content.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  {isEditing ? (
                    <div className="flex-1 flex items-center gap-2">
                      <input
                        type="text"
                        value={point}
                        onChange={(e) => {
                          const newPoints = [...content.keyPoints];
                          newPoints[index] = e.target.value;
                          setContent({ ...content, keyPoints: newPoints });
                        }}
                        className="flex-1 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="Enter data type..."
                      />
                      {content.keyPoints.length > 1 && (
                        <button
                          onClick={() => removeKeyPoint(index)}
                          className="px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Remove point"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-700">{point}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How We Use Your Data */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            2. How We Use Your Data
          </h2>
          {isEditing ? (
            <RichTextEditor
              value={content.howWeUseData}
              onChange={(value) =>
                setContent({ ...content, howWeUseData: value })
              }
              placeholder="Enter how data is used..."
              className="mb-4"
            />
          ) : (
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.howWeUseData }}
            />
          )}
        </div>

        {/* Data Sharing & Security */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            3. Data Sharing & Security
          </h2>
          {isEditing ? (
            <RichTextEditor
              value={content.dataSharingAndSecurity}
              onChange={(value) =>
                setContent({ ...content, dataSharingAndSecurity: value })
              }
              placeholder="Enter data sharing and security details..."
              className="mb-4"
            />
          ) : (
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: content.dataSharingAndSecurity,
              }}
            />
          )}
        </div>

        {/* User Control & Choices */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            4. User Control & Choices
          </h2>
          {isEditing ? (
            <RichTextEditor
              value={content.userControlAndChoices}
              onChange={(value) =>
                setContent({ ...content, userControlAndChoices: value })
              }
              placeholder="Enter user control options..."
            />
          ) : (
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: content.userControlAndChoices,
              }}
            />
          )}
        </div>

        {/* Data Retention */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            5. Data Retention
          </h2>
          {isEditing ? (
            <RichTextEditor
              value={content.dataRetention}
              onChange={(value) =>
                setContent({ ...content, dataRetention: value })
              }
              placeholder="Enter data retention policy..."
            />
          ) : (
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.dataRetention }}
            />
          )}
        </div>

        {/* Children's Privacy */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            6. Children's Privacy
          </h2>
          {isEditing ? (
            <RichTextEditor
              value={content.childrensPrivacy}
              onChange={(value) =>
                setContent({ ...content, childrensPrivacy: value })
              }
              placeholder="Enter children's privacy policy..."
            />
          ) : (
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.childrensPrivacy }}
            />
          )}
        </div>

        {/* Changes to This Policy */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            7. Changes to This Policy
          </h2>
          {isEditing ? (
            <RichTextEditor
              value={content.changesToPolicy}
              onChange={(value) =>
                setContent({ ...content, changesToPolicy: value })
              }
              placeholder="Enter policy changes information..."
            />
          ) : (
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.changesToPolicy }}
            />
          )}
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            8. Contact Us
          </h2>
          {isEditing ? (
            <RichTextEditor
              value={content.contactUs}
              onChange={(value) => setContent({ ...content, contactUs: value })}
              placeholder="Enter contact information..."
            />
          ) : (
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.contactUs }}
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end p-6">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md font-medium transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
