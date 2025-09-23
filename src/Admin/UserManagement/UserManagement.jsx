import { useState } from "react";
import Avatar from "@/assets/images/Image-52.png";
import { FaEye } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import DetailedUserProfile from "./DetailedUserProfile";
import AppointmentDetails from "./AppointmentDetails";
import SelectionDropdown from "../Dashboard/SelectionDropdown";
const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const users = [
    {
      id: "SID-2025-001",
      name: "FA Kabita",
      role: "Phlebotomist",
      status: "pending",
      joinDate: "Jan 15, 2024",
      avatar: Avatar,
    },
    {
      id: "SID-2025-002",
      name: "Fahmida Tasnim",
      role: "Client",
      status: "draft",
      joinDate: "Jan 12, 2024",
      avatar: Avatar,
    },
    {
      id: "SID-2025-003",
      name: "Md. Fahad Hossain",
      role: "Phlebotomist",
      status: "Active",
      joinDate: "Jan 10, 2024",
      avatar: Avatar,
    },
    {
      id: "SID-2025-004",
      name: "Md. Rashan Hossain",
      role: "Client",
      status: "draft",
      joinDate: "Jan 08, 2024",
      avatar: Avatar,
    },
    {
      id: "SID-2025-005",
      name: "Rohan Islam",
      role: "Phlebotomist",
      status: "Active",
      joinDate: "Jan 05, 2024",
      avatar: Avatar,
    },
  ];

  const [userList, setUserList] = useState(users);

  const handleStatusChange = (userId, newStatus) => {
    setUserList((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "draft":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "Phlebotomist":
        return "bg-blue-100 text-blue-800";
      case "Client":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // state for selected actions
  const [selectedAction, setSelectedAction] = useState({}); // { userId: "pending" }

  const getActionButton = (user) => {
    return (
      <div className="w-28">
        <SelectionDropdown
          options={["pending", "active", "draft"]}
          selected={selectedAction[user.id] || user.status} // user unique id অনুযায়ী
          onSelect={(action) =>
            setSelectedAction((prev) => ({
              ...prev,
              [user.id]: action,
            }))
          }
        />
      </div>
    );
  };

  const filteredUsers = userList.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRole =
      selectedRole === "All Roles" || user.role === selectedRole;
    const matchesStatus =
      selectedStatus === "All Status" || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div
      style={{ fontFamily: "Montserrat" }}
      className="w-full  mx-auto mt-6 bg-white rounded-lg shadow-sm"
    >
      {/* Header with Search and Filters */}
      <div className="p-6 border rounded-md border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Search Bar */}
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md   "
            />
          </div>

          {/* Filters */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Role:</span>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md "
              >
                <option>All Roles</option>
                <option>Phlebotomist</option>
                <option>Client</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Status:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Draft</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* User List */}
      <div className=" space-y-3 my-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="p-6 rounded-md bg-[#f6f6f6] hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <img
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                {/* User Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {user.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleBadgeColor(
                        user.role
                      )}`}
                    >
                      {user.role}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadgeColor(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                    <span className="text-sm text-gray-500">
                      Joined: {user.joinDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsProfileOpen(true)}
                  // onClick={() => handleStatusChange(user.id, "Approved")}
                  className="px-3 flex gap-1 items-center justify-center py-1 bg-[#C9A14A] text-white text-sm rounded-md transition-colors"
                >
                  <FaEye /> View
                </button>
                {getActionButton(user)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" space-y-3 mt-6 pb-[100px]">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="p-6 rounded-md bg-[#f6f6f6] hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* User Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {user.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-gray-500">ID: {user.id}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  // onClick={() => handleStatusChange(user.id, "Approved")}
                  onClick={() => setIsAppointmentOpen(true)}
                  className="px-3 flex gap-1 items-center justify-center py-1 bg-[#C9A14A] text-white text-sm rounded-md transition-colors"
                >
                  <FaEye /> View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <div className="p-12 mt-9 text-center">
          <div className="text-gray-400 mb-2">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <p className="text-gray-500">No users found matching your criteria</p>
        </div>
      )}
      {/* <DetailedUserProfile /> */}
      <DetailedUserProfile
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
      <AppointmentDetails
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </div>
  );
};

export default UserManagement;
