import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-semibold">
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Anil’s
          </span>
          <span className="text-white ml-1">Portfolio</span>
        </h1>

        {/* Menu */}
        <ul className="flex items-center gap-10 text-gray-300 text-[16px] font-medium">
          <li className="text-white font-semibold">Home</li>
          <li className="hover:text-white transition">Services</li>
          <li className="hover:text-white transition">About me</li>
          <li className="hover:text-white transition">Contact me</li>
        </ul>

        {/* Button */}
        <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2 rounded-md text-sm font-medium">
          Hire Me
        </button>

      </div>
    </nav>
  );
}
