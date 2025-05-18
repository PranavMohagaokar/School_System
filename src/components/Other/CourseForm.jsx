import React, { useState } from "react";

const CourseForm = ({ onSubmit, course = {}, isEditing = false }) => {
  const [formData, setFormData] = useState({
    name: course.name || "",
    code: course.code || "",
    description: course.description || "",
    department: course.department || "",
    duration: course.duration || "",
    durationType: course.durationType || "years",
    totalSemesters: course.totalSemesters || "",
    credits: course.credits || "",
    status: course.status || "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-stone-500 shadow rounded space-y-6">
      <h2 className="text-2xl font-semibold">{isEditing ? "Edit Course" : "Add New Course"}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Course Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>

        <div>
          <label htmlFor="code" className="block mb-1 font-medium">Course Code</label>
          <input
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>

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
          <label htmlFor="department" className="block mb-1 font-medium">Department</label>
          <input
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block mb-1 font-medium">Duration</label>
          <div className="flex gap-2">
            <input
              id="duration"
              name="duration"
              type="number"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-2/3 border rounded px-3 py-2 text-black"
            />
            <select
              name="durationType"
              value={formData.durationType}
              onChange={handleChange}
              className="w-1/3 border rounded px-3 py-2 text-black"
            >
              <option value="years">Years</option>
              <option value="semesters">Semesters</option>
              <option value="months">Months</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="totalSemesters" className="block mb-1 font-medium">Total Semesters</label>
          <input
            id="totalSemesters"
            name="totalSemesters"
            type="number"
            value={formData.totalSemesters}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>

        <div>
          <label htmlFor="credits" className="block mb-1 font-medium">Total Credits</label>
          <input
            id="credits"
            name="credits"
            type="number"
            value={formData.credits}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>

        <div>
          <label htmlFor="status" className="block mb-1 font-medium">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="upcoming">Upcoming</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button type="button" className="px-4 py-2 border rounded text-white hover:bg-red-700">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2  text-white border rounded hover:bg-green-600">
          {isEditing ? "Update" : "Save"} Course
        </button>
      </div>
    </form>
  );
};

export default CourseForm;
