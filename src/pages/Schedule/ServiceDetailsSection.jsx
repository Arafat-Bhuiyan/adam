"use client"

import { Calendar, Clock } from "lucide-react"

export function ServiceDetailsSection({ formData, onInputChange }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
          2
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Service Details</h2>
      </div>

      <div className="space-y-6">
        {/* Test Package */}
        <div>
          <label htmlFor="testPackage" className="text-sm font-medium text-gray-700 mb-2 block">
            Test Package
          </label>
          <select
            id="testPackage"
            value={formData.testPackage}
            onChange={(e) => onInputChange("testPackage", e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select test package</option>
            <option value="basic">Basic Panel</option>
            <option value="comprehensive">Comprehensive Panel</option>
            <option value="executive">Executive Panel</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Schedule */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Schedule</label>
            <div className="space-y-3">
              {/* Schedule 1 */}
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">11 Monday</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">09:00 AM</span>
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">to</span>
                  <span className="text-sm">06:00 PM</span>
                  <Clock className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              {/* Schedule 2 */}
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">11 Monday</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">09:00 AM</span>
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">to</span>
                  <span className="text-sm">06:00 PM</span>
                  <Clock className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Hospital & Location */}
          <div className="space-y-4">
            <div>
              <label htmlFor="hospital" className="text-sm font-medium text-gray-700 mb-2 block">
                Hospital
              </label>
              <select
                id="hospital"
                value={formData.hospital}
                onChange={(e) => onInputChange("hospital", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="general">General Hospital</option>
                <option value="medical-center">Medical Center</option>
                <option value="clinic">Community Clinic</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-2 block">
                Locations
              </label>
              <input
                id="location"
                placeholder="Your Street address"
                value={formData.location}
                onChange={(e) => onInputChange("location", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
