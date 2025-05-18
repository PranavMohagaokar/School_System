import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar,
    ResponsiveContainer,  
} from "recharts";
import Header from "../Other/Header";

const students = [
  { id: "1", name: "Alice", branch: "CSE" },
  { id: "2", name: "Bob", branch: "ECE" },
];

const semesterWiseMarks = [
  { studentId: "1", semester: "Sem 1", marks: 85 },
  { studentId: "1", semester: "Sem 2", marks: 90 },
  { studentId: "1", semester: "Sem 3", marks: 88 },
];

const projectDetails = [
  { studentId: "1", title: "AI Chatbot", domain: "AI", marks: 92 },
  { studentId: "2", title: "Smart Traffic", domain: "IoT", marks: 89 },
];

const Report = () => {
  const [activeTab, setActiveTab] = useState("basic-info");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProjects = projectDetails.filter((project) => {
    const student = students.find((s) => s.id === project.studentId);
    return (
      student &&
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedStudentId || project.studentId === selectedStudentId)
    );
  });

  const filteredMarks = semesterWiseMarks.filter((mark) => {
    const student = students.find((s) => s.id === mark.studentId);
    return (
      student &&
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedStudentId || mark.studentId === selectedStudentId) &&
      (!selectedBranch || student.branch === selectedBranch)
    );
  });

  return (
    <>
      <div className="h-screen  p-5 bg-stone-600">
        <div className="mb-4 space-x-2 ">
          <button
            onClick={() => setActiveTab("basic-info")}
            className="px-4 py-2 bg-white text-black hover:bg-black  hover:text-white rounded"
          >
            Basic Info
          </button>
          <button
            onClick={() => setActiveTab("semester-marks")}
            className="px-4 py-2 bg-white text-black hover:bg-black  hover:text-white rounded"
          >
            Semester Marks
          </button>
          <button
            onClick={() => setActiveTab("project-details")}
            className="px-4 py-2 bg-white text-black hover:bg-black  hover:text-white rounded"
          >
            Project Details
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className="px-4 py-2 bg-white text-black hover:bg-black  hover:text-white rounded"
          >
            Analytics
          </button>
        </div>

        {activeTab === "basic-info" && (
          <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Student Information</h2>
            <input
              type="text"
              placeholder="Search Student"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4 w-full p-2 text-black border rounded"
            />
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">ID</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Branch</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td className="border p-2">{student.id}</td>
                    <td className="border p-2">{student.name}</td>
                    <td className="border p-2">{student.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "semester-marks" && (
          <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Semester-wise Marks</h2>
            <input
              type="text"
              placeholder="Search Student"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4 w-full p-2 text-black border rounded"
            />
            <div className="mb-4 flex gap-4">
              <select
                value={selectedStudentId}
                onChange={(e) => setSelectedStudentId(e.target.value)}
                className="p-2 border text-black rounded"
              >
                <option value="">All Students</option>
                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.name}
                  </option>
                ))}
              </select>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="p-2 border text-black rounded"
              >
                <option value="">All Branches</option>
                {[...new Set(students.map((s) => s.branch))].map((branch) => (
                  <option key={branch} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Student ID</th>
                  <th className="border p-2">Semester</th>
                  <th className="border p-2">Marks</th>
                </tr>
              </thead>
              <tbody>
                {filteredMarks.map((mark, index) => (
                  <tr key={index}>
                    <td className="border p-2">{mark.studentId}</td>
                    <td className="border p-2">{mark.semester}</td>
                    <td className="border p-2">{mark.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
              Export
            </button>
          </div>
        )}

        {activeTab === "project-details" && (
          <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Project Details</h2>
            <input
              type="text"
              placeholder="Search Student"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4 w-full p-2 text-black border rounded"
            />
            <select
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}
              className="p-2 border text-black rounded"
            >
              <option value="">All Students</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
            <table className="w-full border-collapse mt-4">
              <thead>
                <tr>
                  <th className="border p-2">Student ID</th>
                  <th className="border p-2">Project Title</th>
                  <th className="border p-2">Domain</th>
                  <th className="border p-2">Marks</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project, index) => (
                  <tr key={index}>
                    <td className="border p-2">{project.studentId}</td>
                    <td className="border p-2">{project.title}</td>
                    <td className="border p-2">{project.domain}</td>
                    <td className="border p-2">{project.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
              Export
            </button>
          </div>
        )}

{activeTab === "analytics" && (
  <div className="border p-4 rounded shadow bg-white">
    <h2 className="text-xl font-semibold mb-4">Performance Analytics</h2>

    <div className="mb-6">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={semesterWiseMarks}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="semester" stroke="#000" />
          <YAxis stroke="#000" />
          {/* <Tooltip /> */}
          <Line type="monotone" dataKey="marks" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={projectDetails}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="title" stroke="#000" />
        <YAxis stroke="#000" />
        {/* <Tooltip /> */}
        <Bar dataKey="marks" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
)}

      </div>
    </>
  );
};

export default Report;
