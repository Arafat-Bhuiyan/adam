import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import { FaBell } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <div>
        <h2 className=" font-semibold text-[24px] leading-[32px] text-[#2C2C2C]">
          Welcome back, Admin Fariha
        </h2>
        <p className="text-[#8E8E8E]">
          Here's what's happening with Phlebotomist today
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <span>
          <FaBell className="w-6 h-6 text-gray-600 mr-1" />
        </span>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
      </div>
    </>
  );
};

export default Header;
