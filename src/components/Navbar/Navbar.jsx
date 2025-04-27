"use client";

import Link from "next/link";
import { useState } from "react"; // Import useState hook for state management
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Correct import
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Import icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  // Toggle Menu Function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  // Close Menu Function (For Back Button)
  const closeMenu = () => {
    setMenuOpen(false); // Close the mobile menu
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-center" id="home">
      {/* Full Navbar for larger screens */}
      <ol className="hidden md:flex bg-[#1b1b1b] text-white items-center justify-around h-16 w-11/12 rounded-b-lg shadow-lg">
        <ul className="flex gap-11">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
          <Link href="#helloSubhan">Case Studios</Link>
          </li>
          <li>
            <Link href="#timeline">Timeline</Link>
          </li>
          <li>
            <Link href="#Testimonials">Testimoials</Link>
          </li>
        </ul>
        <ul className="flex gap-4">
          <li>
            <Link href="" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="sm" className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} size="sm" className="w-5 h-5" />
          </li>
          <li>
            <Link href="https://www.instagram.com/subhan_40.75/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="sm" className="w-5 h-5" />
            </Link>
          </li>
        </ul>
      </ol>

      {/* Mobile Navbar for smaller screens */}
      <div className="flex items-center justify-between w-full h-16 px-4 text-white bg-gray-900 md:hidden">
        <div className="flex items-center gap-4">
          <img
            src="/Images/Subhan Pics Shahlimar Garden-removebg-preview.jpg"
            alt=""
            className="h-12"
          />
          <h1 className="text-lg font-semibold">Portfolio</h1>
        </div>
        <div className="flex flex-col gap-1 cursor-pointer" onClick={toggleMenu}>
          <div className="bg-white h-0.5 w-5"></div>
          <div className="bg-white h-0.5 w-5"></div>
          <div className="bg-white h-0.5 w-5"></div>
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <ul className="pt-8 space-y-6 text-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
          <Link href="#helloSubhan">Case Studios</Link>
          </li>
          <li>
            <Link href="/Timeline/Timeline.tsx">Testimonials</Link>
          </li>
          <li>
            <Link href="/Projects">Recent Work</Link>
          </li>
        </ul>
        <ul className="flex justify-center gap-4 mt-8">
          <li>
            <FontAwesomeIcon icon={faLinkedin} size="sm" className="w-5 h-5" />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} size="sm" className="w-5 h-5" />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} size="sm" className="w-5 h-5" />
          </li>
        </ul>
        <div className="flex items-center justify-center mt-6">
          <button
            className="px-6 py-2 text-lg text-green-500 border border-green-500 rounded-md"
            onClick={closeMenu}
          >
            Back &#8594;
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
