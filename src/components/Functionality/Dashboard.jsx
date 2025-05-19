import React from "react";
import { BookOpen, GraduationCap, Users, FileText, BarChart2 } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-stone-600 p-4 md:p-8">
      <div className="mb-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">Dashboard</h1>
        <p className="text-gray-300">Welcome to the student management system.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
        {[
          { icon: <Users className="h-8 w-8" />, label: "Total Students", value: 368 },
          { icon: <BookOpen className="h-8 w-8 text-blue-500" />, label: "Total Courses", value: 12 },
          { icon: <GraduationCap className="h-8 w-8 text-green-500" />, label: "Graduating Soon", value: 42 },
          { icon: <FileText className="h-8 w-8 text-amber-500" />, label: "Active Projects", value: 24 },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-zinc-700 shadow rounded p-4 flex items-center space-x-4"
          >
            <div className="p-3 rounded-full bg-black">{card.icon}</div>
            <div>
              <p className="text-sm text-white">{card.label}</p>
              <h3 className="text-2xl font-bold text-white">{card.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded p-4 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-3 sm:space-y-0">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Recent Activity
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
              Upcoming Events
            </button>
          </div>
         
        </div>

        <ul className="space-y-4">
          {[
            {
              icon: <FileText className="h-5 w-5 text-blue-600" />,
              title: "End-term exam results published",
              desc: "Results for Computer Science semester 4 are now available",
              time: "2 hours ago",
            },
            {
              icon: <Users className="h-5 w-5 text-green-600" />,
              title: "New student registrations",
              desc: "15 new students registered for the MBA program",
              time: "Yesterday",
            },
            {
              icon: <BarChart2 className="h-5 w-5 text-amber-600" />,
              title: "Course completion rates updated",
              desc: "B.Tech CS course completion rate is now at 92%",
              time: "2 days ago",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex items-start space-x-4 pb-4 border-b last:border-b-0"
            >
              <div className="p-2 rounded-full bg-gray-100">{item.icon}</div>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
                <p className="text-xs text-gray-400 mt-1">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
