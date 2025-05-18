import React, { useState } from "react";
import { Plus, Search, User } from "lucide-react";
import StudentCard from "./StudentCard";
import Header from "../Other/Header";
import StudentForm from "../Other/StudentForm";

const mockStudents = [
  { id: "1", name: "John Smith", email: "john.smith@example.com", enrollmentNo: "CS2023001", course: "B.Tech Computer Science", semester: 3, status: "active" },
  { id: "2", name: "Jane Doe", email: "jane.doe@example.com", enrollmentNo: "CS2023002", course: "B.Tech Computer Science", semester: 3, status: "active" },
  { id: "3", name: "Michael Brown", email: "michael.brown@example.com", enrollmentNo: "EE2023001", course: "B.Tech Electrical Engineering", semester: 5, status: "active" },
  { id: "4", name: "Emma Wilson", email: "emma.wilson@example.com", enrollmentNo: "MBA2023001", course: "MBA", semester: 2, status: "active" },
  { id: "5", name: "Robert Johnson", email: "robert.johnson@example.com", enrollmentNo: "BBA2023001", course: "BBA", semester: 4, status: "inactive" },
  { id: "6", name: "Sarah Davis", email: "sarah.davis@example.com", enrollmentNo: "CS2022001", course: "B.Tech Computer Science", semester: 5, status: "active" },
  { id: "7", name: "David Miller", email: "david.miller@example.com", enrollmentNo: "BCOM2023001", course: "B.Com", semester: 3, status: "graduated" },
  { id: "8", name: "Jennifer Wilson", email: "jennifer.wilson@example.com", enrollmentNo: "EE2022002", course: "B.Tech Electrical Engineering", semester: 7, status: "active" },
];

function Students() {
  const [students, setStudents] = useState(mockStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [tab, setTab] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddStudent = (data) => {
    const newStudent = {
      id: (students.length + 1).toString(),
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      enrollmentNo: data.enrollmentNo,
      course: data.courseId === "btech-cs" ? "B.Tech Computer Science" : 
              data.courseId === "btech-ee" ? "B.Tech Electrical Engineering" :
              data.courseId === "bba" ? "BBA" :
              data.courseId === "bcom" ? "B.Com" : "MBA",
      semester: parseInt(data.semesterId),
      status: data.status,
    };

    setStudents([...students, newStudent]);
    setIsAddDialogOpen(false);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.enrollmentNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditStudent = (id) => {
    console.log("Editing student with ID:", id);
  };

  const handleViewStudent = (id) => {
    console.log("Viewing student with ID:", id);
  };

  const getTabStudents = () => {
    if (tab === "all") return filteredStudents;
    return filteredStudents.filter(student => student.status === tab);
  };

  return (
    <div className="min-h-screen bg-stone-800">
     {/* <Header/> */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-neutral-700 shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold  flex items-center">
             Students Information:-
            </h2>
            <button onClick={() => setIsAddDialogOpen(true)} className="flex items-center border text-white px-4 py-2 rounded hover:bg-black ">
              <Plus className="h-4 w-4 mr-1" /> Add Student
            </button>
          </div>

          <div className="mb-4 relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-10 pr-4 py-2 text-black border border-gray-300 rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} /> */}
          </div>

          <div className="mb-4 flex gap-2">
            {['all', 'active', 'inactive', 'graduated'].map(status => (
              <button
                key={status}
                className={`px-4 py-2 rounded ${tab === status ? 'bg-slate-600 text-black' : 'bg-gray-200 text-black'}`}
                onClick={() => setTab(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getTabStudents().map((student) => (
              <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                email={student.email}
                enrollmentNo={student.enrollmentNo}
                course={student.course}
                semester={student.semester}
                status={student.status}
                onEdit={handleEditStudent}
                onView={handleViewStudent}
              />
            ))}
          </div>
        </div>
      </div>

      {isAddDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className=" bg-neutral-700 rounded-lg p-6 w-full max-w-3xl">
            <div className="flex justify-between items-center mb-4 ">
              
              <button onClick={() => setIsAddDialogOpen(false)} className=" text-3xl hover:text-red-700 ">&times;</button>
            </div>
            <StudentForm onSubmit={handleAddStudent} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Students;
