import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            Gym<span className="text-red-600">Pro</span>
          </h3>
          <p className="text-sm">
            Helping you build strength, confidence, and discipline.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
           <ul className="md:flex items-center gap-8 text-gray-700 font-medium">
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
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p className="text-sm">📍 Lagos, Nigeria</p>
          <p className="text-sm">📞 +234 701 170 4047</p>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 border-t border-gray-800 py-4">
        © {new Date().getFullYear()} GymPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
