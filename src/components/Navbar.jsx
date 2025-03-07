import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose, IoLogoLinkedin } from "react-icons/io5";
import { navLinks } from "./nav-links";
import MobileMenu from "./MobileMenu";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaDatabase, FaLaptopCode, FaServer } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="px-4 py-2 lg:py-4 border border-[#eee2] shadow-lg fixed top-4 md:top-6 left-4 right-4 rounded bg-[#082635] text-white">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="text-xl font-bold rounded-full">
          <span className="text-[#d31a4b]">Ebr</span>Asil
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-10 capitalize">
          {navLinks.map((link) => (
            <li key={link.id}>
              {/* Regular Navigation Link */}
              {link.id !== 3 ? (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `p-1 rounded transition-colors duration-300 text-sm md:text-base ${
                      isActive ? "bg-brand" : "hover:bg-brand"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ) : (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  {/* Dropdown Button */}
                  <button
                    className="p-1 rounded capitalize flex items-center transition-colors duration-300 hover:bg-brand"
                    aria-haspopup="true"
                    aria-expanded={dropdown}
                  >
                    {link.name}
                    <IoMdArrowDropdown
                      className={`ml-1 text-xl transition-transform duration-300 ${
                        dropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <ul
                    className={`absolute left-0 bg-[#082635] w-[390px] px-4  rounded overflow-hidden transition-all duration-300 ${
                      dropdown ? "max-h-[200px] pt-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.sublinks?.map((sub) => (
                      <li
                        key={sub.id}
                        className={`border-b border-[#fff4] pb-4 mb-2 text-[#ddd] ${
                          sub.id === 3 ? "border-none" : ""
                        }`}
                      >
                        <Link className="flex items-center text-sm justify-between group font-medium">
                          <div className="flex items-center gap-2">
                            <span className="text-brand text-2xl">
                              {/* Conditional Icons */}
                              {sub.id === 1 && <FaLaptopCode />}
                              {sub.id === 2 && <FaServer />}
                              {sub.id === 3 && <FaDatabase />}
                            </span>
                            {sub.name}
                          </div>
                          {/* Arrow Outward Icon */}
                          <MdOutlineArrowOutward className="text-xl group-hover:translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Social Icons & Resume Button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center text-xl md:text-2xl gap-2">
            {/* LinkedIn Icon */}
            <a
              href=""
              aria-label="LinkedIn"
              className="text-[#0077B5] bg-white p-[1px] lg: rounded transition-all duration-300 
              hover:text-white hover:bg-[#0077B5] "
            >
              <IoLogoLinkedin />
            </a>

            {/* GitHub Icon */}
            <a
              href=""
              aria-label="GitHub"
              className="text-[#333] bg-white p-[1px] lg: rounded transition-all duration-300 
              hover:text-white hover:bg-[#333]"
            >
              <FaSquareGithub />
            </a>
          </div>

          {/* Resume Button (Only Visible on Desktop) */}
          <div className="hidden md:block ml-3">
            <Button />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden h-9 w-9 text-white"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <IoClose className="text-4xl text-brand -mr-2" />
            ) : (
              <CgMenuRight className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu
        {...{
          navLinks,
          menuOpen,
          setMenuOpen,
          setMenuOpen,
          dropdown,
          setDropdown,
        }}
      />
    </nav>
  );
};

export default Navbar;
