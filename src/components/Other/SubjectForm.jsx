import React, { useState } from "react";

const SubjectForm = ({ onSubmit, subject, isEditing = false }) => {
  const [formData, setFormData] = useState({
    name: subject?.name || "",
    code: subject?.code || "",
    description: subject?.description || "",
    courseId: subject?.courseId || "",
    semesterId: subject?.semesterId || "",
    credits: subject?.credits || "",
    hoursPerWeek: subject?.hoursPerWeek || "",
    isElective: subject?.isElective || false,
    instructorId: subject?.instructorId || "",
    status: subject?.status || "active",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-stone-500 shadow rounded space-y-6 ">
      <h2 className="text-2xl  font-semibold">{isEditing ? "Edit Subject" : "Add New Subject"}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Subject Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full   rounded px-3 py-2 text-black"
            
          />
        </div>

        {/* <div>
          <label htmlFor="code" className="block mb-1 font-medium">Subject Code</label>
          <input
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div> */}

        <div className="md:col-span-2">
          <label htmlFor="description" className="block mb-1 font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>

        <div>
          <label htmlFor="courseId" className="block mb-1 font-medium">Course</label>
          <select
            name="courseId"
            value={formData.courseId}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
          >
            <option value="">Select course</option>
            <option value="btech-cs">B.Tech Computer Science</option>
            <option value="btech-ee">B.Tech Electrical Engineering</option>
            <option value="bba">BBA</option>
            <option value="bcom">B.Com</option>
            <option value="mba">MBA</option>
          </select>
        </div>

        <div>
          <label htmlFor="semesterId" className="block mb-1 font-medium">Semester</label>
          <select
            name="semesterId"
            value={formData.semesterId}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black "
            
          >
            <option value="" >Select semester</option>
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>Semester {i + 1}</option>
            ))}
          </select>
        </div>

        {/* <div>
          <label htmlFor="credits" className="block mb-1 font-medium">Credits</label>
          <input
            id="credits"
            name="credits"
            type="number"
            value={formData.credits}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div> */}

        {/* <div>
          <label htmlFor="hoursPerWeek" className="block mb-1 font-medium">Hours Per Week</label>
          <input
            id="hoursPerWeek"
            name="hoursPerWeek"
            type="number"
            value={formData.hoursPerWeek}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div> */}

        <div>
          <label htmlFor="instructorId" className="block mb-1 font-medium">Instructor</label>
          <select
            name="instructorId"
            value={formData.instructorId}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
          >
            <option value="">Select instructor</option>
            <option value="instructor1">Dr. John Smith</option>
            <option value="instructor2">Prof. Jane Doe</option>
            <option value="instructor3">Dr. Robert Johnson</option>
            <option value="instructor4">Prof. Sarah Williams</option>
          </select>
        </div>

        {/* <div className="flex items-center gap-2 mt-2">
          <input
            id="isElective"
            name="isElective"
            type="checkbox"
            checked={formData.isElective}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <label htmlFor="isElective" className="font-medium">Elective Subject</label>
        </div> */}

        <div>
          <label htmlFor="status" className="block mb-1 font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button type="button" className="px-4 py-2 border rounded text-white hover:bg-red-700">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2  text-white border rounded hover:bg-green-700">
          {isEditing ? "Update" : "Save"} Subject
        </button>
      </div>
    </form>
  );
};

export default SubjectForm;
