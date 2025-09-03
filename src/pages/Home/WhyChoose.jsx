import React from "react";
import box from "../../assets/images/box.png";
import dr from "../../assets/images/dr.png";
import home from "../../assets/images/home.png";
import safe from "../../assets/images/safe.png";
import clock from "../../assets/images/clock.png";

export const WhyChoose = () => {
  return (
    <section className="py-16 mb-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Why Choose Primepath?
        </h2>
        <p className="text-xl text-gray-900 pt-2 max-w-3xl mx-auto">
          Experience the convenience of professional healthcare services
          delivered to <br /> your doorstep with uncompromising quality and
          reliability.
        </p>
      </div>
      <div className="mt-16 px-32 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex flex-col">
          <div className="p-6 flex flex-col gap-3  items-center justify-center">
            <img src={clock} alt="" className="w-16 h-16" />
            <p className="font-semibold text-xl">Fast Results</p>
            <p className="text-base text-center w-56">
              Get your test results within <br /> 24-48 hours via secure <br />{" "}
              digital delivery.
            </p>
          </div>
          <div className="p-6 flex flex-col gap-3  items-center justify-center">
            <img src={home} alt="" className="w-16 h-16" />
            <p className="font-semibold text-xl">Home Convenience</p>
            <p className="text-base text-center w-56">
              Professional blood tests in the comfort of your home. No travel,
              no waiting rooms.
            </p>
          </div>
        </div>

        <div>
          <img src={box} alt="" className="w-80 h-80" />
        </div>

        <div className="flex flex-col">
          <div className="p-6 flex flex-col gap-3  items-center justify-center">
            <img src={safe} alt="" className="w-16 h-16" />
            <p className="font-semibold text-xl">100% Safe & Secure</p>
            <p className="text-base text-center w-56">
              HIPAA compliant with strict safety protocols and secure data
              handling.
            </p>
          </div>
          <div className="p-6 flex flex-col gap-3  items-center justify-center">
            <img src={dr} alt="" className="w-16 h-16" />
            <p className="font-semibold text-xl">Certified Professionals</p>
            <p className="text-base text-center w-56">
              Licensed phlebotomists and healthcare professionals ensure safe,
              accurate results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
