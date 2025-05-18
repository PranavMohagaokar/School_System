import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from './components/Other/Header';
import Dashboard from './components/Functionality/Dashboard';
import Students from './components/Functionality/Students';
import Courses from './components/Functionality/Courses';
import Subjects from './components/Functionality/Subjects';
import Reports from './components/Functionality/Report';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-zinc-900 text-white p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
