import React, { useState } from "react";
import SubjectForm from "../Other/SubjectForm";
// import SubjectForm from "./components/Other/SubjectForm"; // Adjust path as needed

const mockSubjects = [
  {
    id: "1",
    name: "Data Structures and Algorithms",
    code: "CS201",
    course: "B.Tech Computer Science",
    semester: "3",
    credits: "4",
    hoursPerWeek: "6",
    instructor: "Dr. John Smith",
    isElective: false,
    status: "active",
  },
  {
    id: "2",
    name: "Database Management Systems",
    code: "CS202",
    course: "B.Tech Computer Science",
    semester: "3",
    credits: "4",
    hoursPerWeek: "5",
    instructor: "Prof. Jane Doe",
    isElective: false,
    status: "active",
  },
  {
    id: "3",
    name: "Computer Networks",
    code: "CS301",
    course: "B.Tech Computer Science",
    semester: "5",
    credits: "4",
    hoursPerWeek: "5",
    instructor: "Dr. Robert Johnson",
    isElective: false,
    status: "active",
  },
  {
    id: "4",
    name: "Machine Learning",
    code: "CS401",
    course: "B.Tech Computer Science",
    semester: "7",
    credits: "4",
    hoursPerWeek: "6",
    instructor: "Prof. Sarah Williams",
    isElective: true,
    status: "active",
  },
  {
    id: "5",
    name: "Power Systems",
    code: "EE301",
    course: "B.Tech Electrical Engineering",
    semester: "5",
    credits: "4",
    hoursPerWeek: "6",
    instructor: "Dr. Michael Brown",
    isElective: false,
    status: "active",
  },
  {
    id: "6",
    name: "Financial Accounting",
    code: "BA101",
    course: "BBA",
    semester: "1",
    credits: "3",
    hoursPerWeek: "4",
    instructor: "Prof. Emily Clark",
    isElective: false,
    status: "inactive",
  },
];

const Subjects = () => {
  const [subjects, setSubjects] = useState(mockSubjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddSubject = (data) => {
    const newSubject = {
      id: (subjects.length + 1).toString(),
      name: data.name,
    //   code: data.code,
      course:
        data.courseId === "btech-cs"
          ? "B.Tech Computer Science"
          : data.courseId === "btech-ee"
          ? "B.Tech Electrical Engineering"
          : data.courseId === "bba"
          ? "BBA"
          : data.courseId === "bcom"
          ? "B.Com"
          : "MBA",
      semester: data.semesterId,
      credits: data.credits,
      hoursPerWeek: data.hoursPerWeek,
      instructor:
        data.instructorId === "instructor1"
          ? "Dr. John Smith"
          : data.instructorId === "instructor2"
          ? "Prof. Jane Doe"
          : data.instructorId === "instructor3"
          ? "Dr. Robert Johnson"
          : "Prof. Sarah Williams",
      isElective: data.isElective,
      status: data.status,
    };

    setSubjects([...subjects, newSubject]);
    setIsAddDialogOpen(false);
  };

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "inactive":
        return "bg-red-100 text-red-800 border-red-200";
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      <div className="max-w-6xl mx-auto bg-zinc-700 p-6 rounded shadow">
        <div className="flex justify-between items-center mb-6 ">
          <h1 className="text-2xl font-bold">Subjects</h1>
          <button
            onClick={() => setIsAddDialogOpen(true)}
            className="px-4 py-2 bg-white text-black rounded hover:bg-black hover:text-white"
          >
            Add Subject
          </button>
        </div>

        <div className="mb-4 text-black">
          <input
            type="text"
            placeholder="Search subjects..."
            className="border px-4 py-2 rounded w-full max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-auto border rounded ">
          <table className="min-w-full table-auto ">
            <thead className="bg-stone-700 ">
              <tr>
                <th className="p-2 text-left">Subject Name</th>
                {/* <th className="p-2 text-left">Code</th> */}
                <th className="p-2 text-left">Course</th>
                <th className="p-2 text-left">Semester</th>
                {/* <th className="p-2 text-left">Credits</th> */}
                {/* <th className="p-2 text-left">Hours/Week</th> */}
                <th className="p-2 text-left">Instructor</th>
                {/* <th className="p-2 text-left">Elective</th> */}
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubjects.map((subject) => (
                <tr key={subject.id} className="border-t ">
                  <td className="p-2">{subject.name}</td>
                  {/* <td className="p-2">{subject.code}</td> */}
                  <td className="p-2">{subject.course}</td>
                  <td className="p-2">{subject.semester}</td>
                  {/* <td className="p-2">{subject.credits}</td> */}
                  {/* <td className="p-2">{subject.hoursPerWeek}</td> */}
                  <td className="p-2">{subject.instructor}</td>
                  {/* <td className="p-2">{subject.isElective ? "Yes" : "No"}</td> */}
                  <td className="p-2">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-semibold rounded ${getStatusColor(
                        subject.status
                      )}`}
                    >
                      {subject.status.charAt(0).toUpperCase() + subject.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-2">
                    <button className="text-blue-600 hover:underline mr-2">Edit</button>
                    <button className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isAddDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start pt-20 z-50">
          <div className="bg-zinc-700 rounded shadow-lg p-6 w-full max-w-3xl relative">
            <button
              className="absolute top-2 right-3 text-white"
              onClick={() => setIsAddDialogOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Add New Subject</h2>
            
            <SubjectForm onSubmit={handleAddSubject} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Subjects;
