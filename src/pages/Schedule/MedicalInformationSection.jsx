"use client"

import { Upload } from "lucide-react"

export function MedicalInformationSection({ formData, onInputChange, onMedicalConditionChange }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
          3
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Medical Information</h2>
      </div>

      <div className="space-y-6">
        {/* Medications & Prescription */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="medications" className="text-sm font-medium text-gray-700 mb-2 block">
              Current Medications
            </label>
            <textarea
              id="medications"
              placeholder="List any current medications or supplements"
              value={formData.medications}
              onChange={(e) => onInputChange("medications", e.target.value)}
              className="w-full h-24 resize-none border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Prescription</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <button className="bg-orange-500 text-white hover:bg-orange-600 border border-orange-500 rounded-md px-4 py-2">
                Upload
              </button>
              <p className="text-xs text-gray-500 mt-2">PDF, JPG - Max 5MB</p>
            </div>
          </div>
        </div>

        {/* Allergies */}
        <div>
          <label htmlFor="allergies" className="text-sm font-medium text-gray-700 mb-2 block">
            Known Allergies
          </label>
          <textarea
            id="allergies"
            placeholder="List any known allergies"
            value={formData.allergies}
            onChange={(e) => onInputChange("allergies", e.target.value)}
            className="w-full h-20 resize-none border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Medical Conditions */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-3 block">Medical Conditions</label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="diabetes"
                checked={formData.medicalConditions.includes("diabetes")}
                onChange={(e) => onMedicalConditionChange("diabetes", e.target.checked)}
                className="h-4 w-4"
              />
              <label htmlFor="diabetes" className="text-sm text-gray-700">
                Diabetes
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="high-blood-pressure"
                checked={formData.medicalConditions.includes("high-blood-pressure")}
                onChange={(e) => onMedicalConditionChange("high-blood-pressure", e.target.checked)}
                className="h-4 w-4"
              />
              <label htmlFor="high-blood-pressure" className="text-sm text-gray-700">
                High Blood Pressure
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="heart-disease"
                checked={formData.medicalConditions.includes("heart-disease")}
                onChange={(e) => onMedicalConditionChange("heart-disease", e.target.checked)}
                className="h-4 w-4"
              />
              <label htmlFor="heart-disease" className="text-sm text-gray-700">
                Heart Disease
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="thyroid-disorder"
                checked={formData.medicalConditions.includes("thyroid-disorder")}
                onChange={(e) => onMedicalConditionChange("thyroid-disorder", e.target.checked)}
                className="h-4 w-4"
              />
              <label htmlFor="thyroid-disorder" className="text-sm text-gray-700">
                Thyroid Disorder
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
