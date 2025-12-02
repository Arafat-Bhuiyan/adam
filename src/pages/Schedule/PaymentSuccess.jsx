import { X } from "lucide-react";

export const PaymentSuccess = ({ appointmentId }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-7xl w-full pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-[#2C2C2C] mb-3 text-center">
          Payment Successful!
        </h2>
        <p className="text-gray-600 text-lg mb-6 text-center max-w-3xl mx-auto">
          Your payment has been successfully processed. A confirmation notice
          with your service details has been sent to your email.
        </p>

        {/* Booking Confirmation */}
        <div className="text-center bg-white shadow-md rounded-xl p-6 border border-gray-200 max-w-2xl mx-auto">
          <h3 className="text-[#C9A14A] font-semibold text-xl ">
            "Your Booking with Metro General Hospital is Confirmed!"
          </h3>
          <p className="text-[#2c2c2c] text-xl font-semibold my-5">
            Your Booking ID
          </p>
          <p className="text-gray-900 font-medium text-base mb-5">
            Booking ID: {appointmentId}
          </p>
          <p className="text-gray-500 text-base font-medium mb-5">
            "You will be contacted by a healthcare professional soon."
          </p>

          {/* Service Overview Box */}
          <div className="bg-[#EFF6FF] border border-[#E5E7EB] rounded-xl p-6 text-left">
            <h4 className="text-xl font-semibold text-[#2C2C2C] mb-3">
              Service Overview
            </h4>
            <div className="space-y-2 text-base">
              <div className="flex justify-between">
                <span className="text-[#2c2c2c] font-medium">Service:</span>
                <span className="font-semibold text-[#2C2C2C]">
                  Mobile Blood Draw
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2c2c2c] font-medium">Date:</span>
                <span className="text-[#2C2C2C]">March 15, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2c2c2c] font-medium">Time:</span>
                <span className="text-[#2C2C2C]">10:30 AM</span>
              </div>
              <div className="flex items-center justify-between border-t pt-3">
                <span className="text-[#2c2c2c] font-medium">
                  Total Amount:
                </span>
                <span className="text-[#C9A14A] font-bold text-2xl">
                  $89.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
