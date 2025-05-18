import React from "react";
import { Edit, User } from "lucide-react";

const StudentCard = ({
  id,
  name,
  email,
  enrollmentNo,
  course,
  semester,
  status,
  onEdit,
  onView,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "inactive":
        return "bg-red-100 text-red-800 border-red-200";
      case "graduated":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md bg-zinc-700">
      <div className="bg-neutral-800 p-4 pb-2 border-b">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div >
              {/* <User className="h-6 w-6" /> */}
            </div>
            <div className="ml-3">
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-sm text-gray-500">{enrollmentNo}</p>
            </div>
          </div>
          <span
            className={`text-xs font-medium px-2.5 py-0.5 rounded border ${getStatusColor()}`}>
            {status ? status.charAt(0).toUpperCase() + status.slice(1) : "Unknown"}
        </span>
        </div>
      </div>

      <div className="p-4 pt-2 space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-500">Email</p>
          <p className="text-sm">{email}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Course</p>
          <p className="text-sm">{course}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Semester</p>
          <p className="text-sm">{semester}</p>
        </div>
      </div>

      <div className="flex justify-between items-center border-t bg-gray-50 px-4 py-3">
        <button
          className="text-sm px-3 py-1 border rounded text-black hover:bg-gray-100"
          onClick={() => onView && onView(id)}
        >
          View Details
        </button>
        <button
          className="text-sm flex items-center text-black hover:underline"
          onClick={() => onEdit && onEdit(id)}
        >
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
