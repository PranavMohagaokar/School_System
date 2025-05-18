import React, { useState } from "react";

const StudentForm = ({ onSubmit, student = {}, isEditing = false }) => {
  const [formData, setFormData] = useState({
    firstName: student.firstName || "",
    lastName: student.lastName || "",
    email: student.email || "",
    phone: student.phone || "",
    enrollmentNo: student.enrollmentNo || "",
    dateOfBirth: student.dateOfBirth || "",
    gender: student.gender || "",
    address: student.address || "",
    city: student.city || "",
    state: student.state || "",
    zipCode: student.zipCode || "",
    country: student.country || "",
    guardianName: student.guardianName || "",
    guardianContact: student.guardianContact || "",
    courseId: student.courseId || "",
    semesterId: student.semesterId || "",
    batchYear: student.batchYear || "",
    status: student.status || "active",
  });

  const [activeTab, setActiveTab] = useState("basic");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="p-4 border  rounded shadow-sm bg-zinc-700">
        <h2 className="text-xl font-semibold mb-4 ">
          {isEditing ? "Edit Student" : "Add New Student"}
        </h2>

        <div className="mb-4">
          <div className="flex gap-2">
            {["basic", "contact", "academic", "guardian"].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`px-4 py-2 rounded ${
                  activeTab === tab
                    ? "bg-slate-700 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Information
              </button>
            ))}
          </div>
        </div>

        {activeTab === "basic" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1  ">First Name</label>
              <input name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full p-2 border rounded text-black" />
            </div>
            <div>
              <label className="block mb-1">Last Name</label>
              <input name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full p-2 border rounded text-black" />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded text-black" />
            </div>
            <div>
              <label className="block mb-1">Enrollment Number</label>
              <input name="enrollmentNo" value={formData.enrollmentNo} onChange={handleChange} required className="w-full p-2 border rounded text-black" />
            </div>
            <div>
              <label className="block mb-1">Date of Birth</label>
              <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="w-full p-2 border rounded text-black" />
            </div>
            <div>
              <label className="block mb-1">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded text-black">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1">Phone</label>
              <input name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded text-black" />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1">Address</label>
              <textarea name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded text-black" />
            </div>
            <div>
              <label className="block mb-1">City</label>
              <input name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded text-black" />
            </div>
            <div>
              <label className="block mb-1">State</label>
              <input name="state" value={formData.state} onChange={handleChange} className="w-full p-2 border text-black rounded" />
            </div>
            <div>
              <label className="block mb-1">Zip Code</label>
              <input name="zipCode" value={formData.zipCode} onChange={handleChange} className="w-full p-2 border text-black rounded" />
            </div>
            <div>
              <label className="block mb-1">Country</label>
              <input name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border text-black rounded" />
            </div>
          </div>
        )}

        {activeTab === "academic" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
            <div>
              <label className="block mb-1 ">Course</label>
              <select name="courseId" value={formData.courseId} onChange={handleChange} className="w-full p-2 border text-black rounded">
                <option value="">Select course</option>
                <option value="btech-cs">B.Tech Computer Science</option>
                <option value="btech-ee">B.Tech Electrical Engineering</option>
                <option value="bba">BBA</option>
                <option value="bcom">B.Com</option>
                <option value="mba">MBA</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Semester</label>
              <select name="semesterId" value={formData.semesterId} onChange={handleChange} className="w-full p-2 border text-black rounded">
                <option value="">Select semester</option>
                {[...Array(8)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Semester {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1">Batch Year</label>
              <input name="batchYear" value={formData.batchYear} onChange={handleChange} className="w-full p-2 border  text-black rounded" />
            </div>
            <div>
              <label className="block mb-1">Status</label>
              <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border text-black rounded">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="graduated">Graduated</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === "guardian" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1">Guardian Name</label>
              <input name="guardianName" value={formData.guardianName} onChange={handleChange} className="w-full p-2 border text-black rounded" />
            </div>
            <div>
              <label className="block mb-1">Guardian Contact</label>
              <input name="guardianContact" value={formData.guardianContact} onChange={handleChange} className="w-full p-2 border text-black rounded" />
            </div>
          </div>
        )}

        <div className="flex justify-between">
          <button type="button" className="px-4 py-2 border rounded hover:bg-red-700">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 border rounded  hover:bg-green-700 ">
            {isEditing ? "Update" : "Save"} Student
          </button>
        </div>
      </div>
    </form>
  );
};

export default StudentForm;
