import React, { useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { FaDatabase, FaLaptopCode, FaServer } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

/**
 * MobileMenu Component
 * Renders a responsive navigation menu for mobile devices.
 */
const MobileMenu = ({
  menuOpen,
  setMenuOpen,
  dropdown,
  setDropdown,
  navLinks,
}) => {
  const menuRef = useRef(null);

  // Close the menu when clicking outside or resizing the page
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setDropdown(false);
      }
    };

    const handleResize = () => {
      setMenuOpen(false);
      setDropdown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [setMenuOpen, setDropdown]);

  return (
    // Main container for the mobile menu, expands when menuOpen is true
    <div
      ref={menuRef}
      className={`overflow-hidden transition-all duration-300 ${
        menuOpen ? "max-h-[400px] mt-8 mb-2" : "max-h-0"
      }`}
    >
      {/* Navigation links list */}
      <ul className="flex flex-col gap-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            {/* Regular navigation link */}
            {link.id !== 3 ? (
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text capitalize transition-colors duration-200 ${
                    isActive ? "text-[#a3153b] font-medium" : "text-white"
                  } `
                }
              >
                {link.name}
              </NavLink>
            ) : (
              // Dropdown menu for specific navigation item
              <div>
                {/* Button to toggle dropdown */}
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="flex justify-between items-center w-full capitalize hover:text-[#a3153b] hover:font-medium transition-colors duration-200"
                >
                  {link.name}
                  <IoMdArrowDropdown
                    className={`text-xl transition-transform duration-300 ${
                      dropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown list */}
                <ul
                  className={`flex flex-col gap-4 text-sm ml-4 overflow-hidden transition-all duration-300 ${
                    dropdown
                      ? "max-h-[120px] mt-3 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {link.sublinks?.map((sub) => (
                    <li
                      key={sub.id}
                      className="border-b border-[#fff4] pb-2 text-[#ddd]"
                    >
                      {/* Dropdown item link */}
                      <Link className="flex items-center justify-between font-medium transition-colors duration-200">
                        {/* Icon and text */}
                        <div className="flex items-center gap-2">
                          <span className="text-[#a3153b] text-xl">
                            {sub.id === 1 && <FaLaptopCode />}
                            {sub.id === 2 && <FaServer />}
                            {sub.id === 3 && <FaDatabase />}
                          </span>
                          <span>{sub.name}</span>
                        </div>
                        {/* Arrow icon */}
                        <MdOutlineArrowOutward className="text-lg" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Resume button at the bottom */}
      <div className="mt-5 ">
        <Button />
      </div>
    </div>
  );
};

export default MobileMenu;
