"use client";

import { useState } from "react";
import { PersonalInformationSection } from "./PersonalInformationSection";
import { ServiceDetailsSection } from "./ServiceDetailsSection";
import { MedicalInformationSection } from "./MedicalInformationSection";
import { AdditionalOptionsSection } from "./AdditionalOptionsSection";
import { SidebarInfo } from "./SidebarInfo";
import { SecurePaymentModal } from "./SecurePaymentModal";

export default function BloodDrawBooking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    testPackage: "",
    schedule: "",
    hospital: "",
    location: "",
    medications: "",
    allergies: "",
    medicalConditions: [],
    specialRequests: "",
    emailNotifications: false,
    smsReminders: false,
    termsAccepted: false,
    consentAccepted: false,
  });

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleMedicalConditionChange = (condition, checked) => {
    setFormData((prev) => ({
      ...prev,
      medicalConditions: checked
        ? [...prev.medicalConditions, condition]
        : prev.medicalConditions.filter((c) => c !== condition),
    }));
  };

  const handleSubmitBooking = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="bg-white p-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#2c2c2c] mb-2">
            Schedule Your Blood Draw
          </h1>
          <p className="text-[#4B5563] text-base">
            Complete all sections below to book your appointment
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sections (kept as they are) */}
            <PersonalInformationSection
              formData={formData}
              onInputChange={handleInputChange}
            />

            <ServiceDetailsSection
              formData={formData}
              onInputChange={handleInputChange}
            />

            <MedicalInformationSection
              formData={formData}
              onInputChange={handleInputChange}
              onMedicalConditionChange={handleMedicalConditionChange}
            />

            <AdditionalOptionsSection
              formData={formData}
              onInputChange={handleInputChange}
            />

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.termsAccepted}
                  onChange={(e) =>
                    handleInputChange("termsAccepted", e.target.checked)
                  }
                  className="mt-1"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-[#5B5B5B] leading-relaxed"
                >
                  I acknowledge that I have read and agree to the{" "}
                  <span className="text-[#C9A14A] underline cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-[#C9A14A] underline cursor-pointer">
                    Privacy Policy
                  </span>
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consentAccepted}
                  onChange={(e) =>
                    handleInputChange("consentAccepted", e.target.checked)
                  }
                  className="mt-1"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-[#5B5B5B] leading-relaxed"
                >
                  I consent to receive appointment confirmations and results via
                  my provided contact information
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="space-y-4">
              <button
                onClick={handleSubmitBooking}
                className="w-full bg-[#C9A14A] hover:bg-[#C9A14A]/80 text-white py-3 font-semibold text-base rounded-md"
              >
                Submit Booking Request
              </button>
              <p className="text-center text-sm text-[#5B5B5B]">
                You will receive a confirmation email within 2 hours
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <SidebarInfo />
        </div>
      </div>

      <SecurePaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </div>
  );
}
