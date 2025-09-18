import { useState } from "react";
import { Search, Bell, MapPin, ChevronRight, Calendar } from "lucide-react";
import DatePicker from "../DataPicker";
import { FaAngleDown } from "react-icons/fa6";
import JobDetailsModal from "./JobDetailsModal";

const JobManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [dateFilter, setDateFilter] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Blood Draw Station",
      jobId: "#JOB-2025-001",
      company: "Community Health Center",
      location: "XYZ",
      payRate: "$180-120/hr",
      postedTime: "Posted 2 hours ago",
      status: "Published",
      statusColor: "bg-orange-500",
    },
    {
      id: 2,
      title: "Blood Draw Station",
      jobId: "#JOB-2025-001",
      company: "Community Health Center",
      location: "XYZ",
      payRate: "$180-120/hr",
      postedTime: "Posted 2 hours ago",
      status: "Approved",
      statusColor: "bg-green-500",
    },
    {
      id: 3,
      title: "Blood Draw Station",
      jobId: "#JOB-2025-001",
      company: "Community Health Center",
      location: "XYZ",
      payRate: "$180-120/hr",
      postedTime: "Posted 2 hours ago",
      status: "Approved",
      statusColor: "bg-green-500",
    },
    {
      id: 4,
      title: "Blood Draw Station",
      jobId: "#JOB-2025-001",
      company: "Community Health Center",
      location: "XYZ",
      payRate: "$180-120/hr",
      postedTime: "Posted 2 hours ago",
      status: "Approved",
      statusColor: "bg-green-500",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All Status" || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className=" ">
      {/* Header */}
      {/* <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Job Management</h1>
          <p className="text-gray-600 mt-1">Review and manage job postings on the platform</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <img src="/professional-woman-headshot.png" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          </div>
        </div>
      </div> */}

      {/* Search and Filters */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg  focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg   "
              >
                <option>All Status</option>
                <option>Published</option>
                <option>Active</option>
                <option>Approved</option>
                <option>Pending</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Date:</span>
              {/* <div className="relative">
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="px-3 py-2 pr-10 border border-gray-300 rounded-lg "
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div> */}
              <DatePicker />
            </div>
          </div>

          <div className="text-sm text-gray-600">
            Total Jobs: <span className="font-semibold text-gray-900">247</span>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-3xl bg-gray-50 w-full rounded-md my-7">
        <div className="p-6">
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg p-4  transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">
                        {job.title}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-4 text-sm  mb-2">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm ">Job ID : {job.jobId}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <span className="font-medium text-gray-900">
                        {job.payRate}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-4 py-2 flex justify-center items-center gap-1 rounded-md text-xs font-medium text-white ${job.statusColor}`}
                      >
                        {job.status}
                        <FaAngleDown />
                      </span>
                      <span className="text-sm text-gray-500">
                        {job.postedTime}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className="w-5 h-5  self-start text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <JobDetailsModal isOpen={true} />
    </div>
  );
};

export default JobManagement;
