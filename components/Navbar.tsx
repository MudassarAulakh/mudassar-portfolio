"use client";

import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#0A0A0A]">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 w-full md:px-10 px-3 bg-black ${
          open ? "bg-black md:bg-transparent" : ""
        }`}
      >
        {/* Main navbar container: flex column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-5">
          {/* Logo - always visible */}
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[#16f2b3] text-xl xl:text-2xl font-bold">
              MUDASSAR AULAKH
            </Link>

            {/* Mobile toggle button - visible only on small screens */}
            <button
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-800 focus:outline-none md:hidden"
              type="button"
            >
              {open ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Menu */}
          <ul
            className={`${
              open ? "flex w-full flex-col items-start text-sm mt-4 max-h-screen opacity-100" : "flex w-full flex-col items-start text-sm mt-4 max-h-0 opacity-0 overflow-hidden"
            } md:flex md:flex-row md:items-center md:space-x-1 md:w-auto md:mt-0 md:max-h-full md:opacity-100`}
            id="navbar-default"
          >
            {[
              { href: "/#about", label: "ABOUT" },
              { href: "/#experience", label: "EXPERIENCE" },
              { href: "/#skills", label: "SKILLS" },
              { href: "/#education", label: "EDUCATION" },
              { href: "/#projects", label: "PROJECTS" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} legacyBehavior>
                  <a className="nav-link block px-4 py-2 no-underline outline-none">
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .nav-link {
          position: relative;
          color: white;
          font-size: 0.875rem; /* text-sm */
          transition: color 0.3s ease;
        }

        // .nav-link:hover {
        //   color: #ec4899; /* pink-600 */
        // }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -4px;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          width: 80%;
          height: 2px;
          background: linear-gradient(to right, #ffffff, #ffffff, #ffffff);

          border-radius: 50%;
          transition: transform 0.6s ease, box-shadow 0.6s ease;
          box-shadow: 0 0 6px rgba(192, 192, 192, 0);
        }

        .nav-link:hover::after {
          transform: translateX(-50%) scaleX(1);
          box-shadow: 0 0 12px rgba(192, 192, 192, 0.6);
        }
      `}</style>
    </div>
  );
}

export default Navbar;
