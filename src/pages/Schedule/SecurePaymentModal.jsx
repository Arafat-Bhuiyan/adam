"use client";

import { useState } from "react";
import { X, Lock } from "lucide-react";
import important from "../../assets/images/important.png";
import bonding from "../../assets/images/bonding.png";
import visa from "../../assets/images/visa.png";
import mc from "../../assets/images/mc.png";
import ame from "../../assets/images/ame.png";
import dis from "../../assets/images/dis.png";
import { PaymentSuccess } from "./PaymentSuccess";

export function SecurePaymentModal({ isOpen, onClose }) {
  const [isPaymentSuccessOpen, setIsPaymentSuccessOpen] = useState(false);
  const [billingData, setBillingData] = useState({
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleInputChange = (field, value) => {
    setBillingData((prev) => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {isPaymentSuccessOpen ? (
        <PaymentSuccess onClose={onClose} />
      ) : (
        <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] pb-20">
          {/* Header */}
          <div className="flex items-center justify-end p-6">
            <button
              onClick={onClose}
              className="text-[#747480] bg-[#747480]/40 rounded-full p-2 transition-colors "
            >
              <X size={12} />
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div className="p-6">
              <h2 className="text-4xl font-bold text-[#2C2C2C] text-center mb-3">
                Secure Payment
              </h2>
              <p className="text-[#4B5563] text-lg text-center mb-2">
                Your service is confirmed. Please complete the payment to
                finalize your booking.
              </p>

              {/* SSL Badge */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center justify-center gap-2">
                  <img src={important} alt="" />
                  <p className="text-[#C9A14A] text-base font-medium">
                    256-bit SSL Encrypted
                  </p>
                </div>
              </div>

              <div className="flex w-full gap-8">
                {/* Left Column - Service Overview & Billing */}
                <div className="w-2/3 space-y-6 bg-white border border-[#E5E7EB] shadow-md rounded-2xl p-8">
                  {/* Service Overview */}
                  <div className="bg-[#EFF6FF] border border-[#E5E7EB] rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4">
                      Service Overview
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-[#4B5563] font-medium text-base">
                          Service:
                        </span>
                        <span className="font-semibold text-base text-[#2c2c2c]">
                          Mobile Blood Draw
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4B5563] font-medium text-base">
                          Date:
                        </span>
                        <span className="text-[#2c2c2c] text-base">
                          March 15, 2024
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#4B5563] font-medium text-base">
                          Time:
                        </span>
                        <span className="text-[#2c2c2c] text-base">
                          10:30 AM
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t">
                        <span className="text-[#4B5563] text-base font-medium">
                          Total Amount:
                        </span>
                        <span className="text-2xl font-bold text-[#C9A14A]">
                          $89.00
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4">
                      Billing Address
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Street Address"
                          value={billingData.streetAddress}
                          onChange={(e) =>
                            handleInputChange("streetAddress", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A14A] focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="City"
                          value={billingData.city}
                          onChange={(e) =>
                            handleInputChange("city", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A14A] focus:border-transparent"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="State"
                          value={billingData.state}
                          onChange={(e) =>
                            handleInputChange("state", e.target.value)
                          }
                          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A14A] focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="ZIP Code"
                          value={billingData.zipCode}
                          onChange={(e) =>
                            handleInputChange("zipCode", e.target.value)
                          }
                          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A14A] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Order Summary */}
                <div className="w-1/3 bg-white border border-[#E5E7EB] shadow-md rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4">
                    Order Summary
                  </h3>
                  <div className="space-y-3 mb-6 text-base">
                    <div className="flex justify-between">
                      <span className="text-[#4B5563]">Mobile Blood Draw</span>
                      <span className="font-medium">$75.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#4B5563]">Service Fee</span>
                      <span className="font-medium">$9.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#4B5563]">Tax</span>
                      <span className="font-medium">$5.00</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-gray-300 text-lg font-bold">
                      <span className="text-black">Total</span>
                      <span className="text-[#C9A14A]">$89.00</span>
                    </div>
                  </div>

                  {/* Pay Now Button */}
                  <button
                    onClick={() => setIsPaymentSuccessOpen(true)}
                    className="w-full bg-gradient-to-r from-[#897214] to-[#C9A14A] text-white py-3 font-bold text-base rounded-xl my-10 flex items-center justify-center"
                  >
                    <Lock size={16} className="mr-2" />
                    Pay Now
                  </button>

                  {/* Security Info */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-[#6B7280] text-sm mb-2">
                      <img src={bonding} alt="" />
                      <p>Secure Payment Protected</p>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <img src={visa} alt="" />
                      <img src={mc} alt="" />
                      <img src={ame} alt="" />
                      <img src={dis} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
