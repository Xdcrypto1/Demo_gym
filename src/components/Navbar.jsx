import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <div className="text-2xl font-bold text-blue-300">
          La'Bompa<span className="text-black"> Fitness</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
           <Link to="/">
            <li className="hover:text-red-600 cursor-pointer">Home</li>
            </Link>
            <Link to="/about">
             <li className="hover:text-red-600 cursor-pointer">About</li>
            </Link>
            <Link to="/plans">
             <li className="hover:text-red-600 cursor-pointer">Plans</li>
            </Link>
            <Link to="/contact">
             <li className="hover:text-red-600 cursor-pointer">Contact</li>
            </Link>
            <Link to="/gallery">
             <li className="hover:text-red-600 cursor-pointer">Gallery</li>
            </Link>
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-500 transition">
          Join Now
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-8 text-gray-700 font-medium">
           <Link to="/">
            <li className="hover:text-red-600 cursor-pointer">Home</li>
            </Link>
            <Link to="/about">
             <li className="hover:text-red-600 cursor-pointer">About</li>
            </Link>
            <Link to="/plans">
             <li className="hover:text-red-600 cursor-pointer">Plans</li>
            </Link>
            <Link to="/contact">
             <li className="hover:text-red-600 cursor-pointer">Contact</li>
            </Link>
             <Link to="/gallery">
             <li className="hover:text-red-600 cursor-pointer">Gallery</li>
            </Link>

            <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition">
              Join Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
