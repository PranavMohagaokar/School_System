import React, { useState } from "react";


import { Book, Edit, Plus, Search, Trash } from "lucide-react";
import CourseForm from "../Other/CourseForm";
import Header from "../Other/Header";

// Mock data
const mockCourses = [
  {
    id: "1",
    name: "Bachelor of Technology in Computer Science",
    code: "BTech-CS",
    department: "Computer Science & Engineering",
    duration: "4",
    durationType: "years",
    totalSemesters: "8",
    credits: "180",
    status: "active",
  },
  {
    id: "2",
    name: "Bachelor of Technology in Electrical Engineering",
    code: "BTech-EE",
    department: "Electrical Engineering",
    duration: "4",
    durationType: "years",
    totalSemesters: "8",
    credits: "180",
    status: "active",
  },
  {
    id: "3",
    name: "Master of Business Administration",
    code: "MBA",
    department: "Management Studies",
    duration: "2",
    durationType: "years",
    totalSemesters: "4",
    credits: "120",
    status: "active",
  },
  {
    id: "4",
    name: "Bachelor of Business Administration",
    code: "BBA",
    department: "Management Studies",
    duration: "3",
    durationType: "years",
    totalSemesters: "6",
    credits: "140",
    status: "active",
  },
  {
    id: "5",
    name: "Bachelor of Commerce",
    code: "BCom",
    department: "Commerce",
    duration: "3",
    durationType: "years",
    totalSemesters: "6",
    credits: "140",
    status: "inactive",
  },
];

const Courses = () => {
  const [courses, setCourses] = useState(mockCourses);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddCourse = (data) => {
    const newCourse = {
      id: (courses.length + 1).toString(),
      name: data.name,
      code: data.code,
      department: data.department,
      duration: data.duration,
      durationType: data.durationType,
      totalSemesters: data.totalSemesters,
      credits: data.credits,
      status: data.status,
    };

    setCourses([...courses, newCourse]);
    setIsAddDialogOpen(false);
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return { backgroundColor: "#d1fae5", color: "#065f46", border: "1px solid #a7f3d0", padding: "2px 8px", borderRadius: "12px" };
      case "inactive":
        return { backgroundColor: "#fee2e2", color: "#991b1b", border: "1px solid #fecaca", padding: "2px 8px", borderRadius: "12px" };
      case "upcoming":
        return { backgroundColor: "#dbeafe", color: "#1e40af", border: "1px solid #bfdbfe", padding: "2px 8px", borderRadius: "12px" };
      case "archived":
        return { backgroundColor: "#f3f4f6", color: "#374151", border: "1px solid #d1d5db", padding: "2px 8px", borderRadius: "12px" };
      default:
        return { backgroundColor: "#f3f4f6", color: "#374151", border: "1px solid #d1d5db", padding: "2px 8px", borderRadius: "12px" };
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900">
     
      <div className="container mx-auto py-8 px-4">
        <div className="bg-zinc-700 shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold flex items-center">
              {/* <Book className="h-6 w-6 mr-2" /> */}
              Courses:-
            </h1>
            <button
              className="flex items-center bg-white text-black hover:bg-black hover:text-white  py-2 px-4 rounded"
              onClick={() => setIsAddDialogOpen(true)}
            >
               + Add Course
            </button>
          </div>

          <div className="relative w-full md:w-96 mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 py-2 border text-black rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-zinc-700 border">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Course Name</th>
                  <th className="py-2 px-4 border-b">Code</th>
                  <th className="py-2 px-4 border-b">Department</th>
                  <th className="py-2 px-4 border-b">Duration</th>
                  <th className="py-2 px-4 border-b">Semesters</th>
                  {/* <th className="py-2 px-4 border-b">Credits</th> */}
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course) => (
                  <tr key={course.id} className="text-center">
                    <td className="py-2 px-4 border-b">{course.name}</td>
                    <td className="py-2 px-4 border-b">{course.code}</td>
                    <td className="py-2 px-4 border-b">{course.department}</td>
                    <td className="py-2 px-4 border-b">{`${course.duration} ${course.durationType}`}</td>
                    <td className="py-2 px-4 border-b">{course.totalSemesters}</td>
                    {/* <td className="py-2 px-4 border-b">{course.credits}</td> */}
                    <td className="py-2 px-4 border-b">
                      <span style={getStatusColor(course.status)}>
                        {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <div className="flex justify-center space-x-2">
                        <button className="text-blue-500 hover:underline">
                        Edit
                          {/* <Edit className="h-4 w-4" />  */}
                        </button>
                        <button className="text-red-500 hover:underline">
                          delete
                          {/* <Trash className="h-4 w-4" /> */}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Course Dialog */}
          {isAddDialogOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
              <div className="g-zinc-700 p-6 rounded-lg shadow-lg w-full max-w-2xl bg-neutral-800">
                <div className="flex justify-between items-center mb-4">
                  {/* <h2 className="text-xl font-semibold">Add New Course</h2> */}
                  <button onClick={() => setIsAddDialogOpen(false)} className="text-gray-500 hover:text-red-700 text-4xl">&times;</button>
                </div>
                <CourseForm onSubmit={handleAddCourse}/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
