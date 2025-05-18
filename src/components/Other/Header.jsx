// import React from "react";
// import { Link } from "react-router-dom";
// import { Search } from "lucide-react";

// const Header = () => {
//   return (
//     <nav className="bg-slate-500 text-primary-foreground shadow-md">
//       <div className="container p-14 py-3 flex items-center justify-between">
//         <Link to="/" className="text-2xl font-bold">
//           ScholarTrack
//         </Link>
        
//         <div className="relative w-12 ">
          
//           {/* <input
//             type="text"
//             placeholder="Search..."
//             className="w-full bg-primary-foreground/10 border-none rounded-md pl-10 py-1.5 text-sm text-white placeholder:text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-white/50"
//           />
//         </div> */}
        
//         <div className="flex gap-9 text-white">
//           <button>
//             <Link to="/" className="text-primary-foreground hover:text-black">
//               Dashboard
//             </Link>
//           </button>
//           <button>
//             <Link to="/students" className="text-primary-foreground hover:text-black">
//               Students
//             </Link>
//           </button>
//           <button>
//             <Link to="/courses" className="text-primary-foreground hover:text-black ">
//               Courses
//             </Link>
//           </button>
//           <button >
//             <Link to="/subjects" className="text-primary-foreground hover:text-black ">
//               Subjects
//             </Link>
//           </button>
//           <button>
//             <Link to="/reports" className="text-primary-foreground hover:text-black ">
//               Reports
//             </Link>
//           </button>
//         </div>
//       </div>
//       </div>
//     </nav>
//   )
// }


// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Student System
        </Link>

        {/* Hamburger - visible only on mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-black transition">Dashboard</Link>
          <Link to="/students" className="hover:text-black transition">Students</Link>
          <Link to="/courses" className="hover:text-black transition">Courses</Link>
          <Link to="/subjects" className="hover:text-black transition">Subjects</Link>
          <Link to="/reports" className="hover:text-black transition">Reports</Link>
        </div>
      </div>

      {/* Mobile menu - only shown when open */}
      {isOpen && (
        <div className="md:hidden bg-slate-600 px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-black">Dashboard</Link>
          <Link to="/students" className="block hover:text-black">Students</Link>
          <Link to="/courses" className="block hover:text-black">Courses</Link>
          <Link to="/subjects" className="block hover:text-black">Subjects</Link>
          <Link to="/reports" className="block hover:text-black">Reports</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;


