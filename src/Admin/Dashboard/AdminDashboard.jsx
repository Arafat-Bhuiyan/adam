import { useState } from "react";
import { MessageSquareDot } from "lucide-react";
import { Sidebar } from "./Sidebar";

export default function AdminDashboard() {
  const [currentComponent, setCurrentComponent] = useState("Dashboard"); // New state to track the active component

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };
  return (
    <div className="flex bg-[#EEF6FF] font-poppins">
      {/* Sidebar */}
      <div className="w-72 fixed top-0 left-0 h-screen">
        <Sidebar
          currentComponent={currentComponent}
          onMenuClick={handleComponentChange}
        />
        Sidebar
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-72 min-h-screen overflow-y-auto">
        {/* Header */}
        <div className="bg-[#EEF6FF] px-6 py-4">
          <div className="flex items-center justify-end gap-9">
            <MessageSquareDot color="#1E90FF" />
            {/* <img
              onClick={() => handleComponentChange("Profile")}
              src={profile}
              alt="profile"
              className="w-12 h-12"
            /> */}
            header
          </div>
        </div>

        {/* Content */}
        <div className="px-6 bg-[#EEF6FF]">
          {/* Conditionally render the component based on the state */}
          {currentComponent === "Dashboard" && (
            <div className="">
              {/* Status Cards */}
              {/* <StartCards /> */}
              main content
            </div>
          )}
          {/* {currentComponent === "User Management" && <Quizz />}
          {currentComponent === "Job Management" && <Monetization />}
          {currentComponent === "Dispute Management" && <Account />}
          {currentComponent === "Communication & Reviews" && <Terms />}
          {currentComponent === "Analytics & Reporting" && <Terms />}
          {currentComponent === "Payroll Management" && <Privacy />} */}
        </div>
      </div>
    </div>
  );
}
