"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // keep the original Tailwind classes but toggle the mobile visibility
  const baseMobileClasses = "mt-4 flex w-full flex-col items-start text-sm";
  const mobileCollapsed = "h-screen max-h-0 opacity-0";
  const mobileExpanded = "h-auto max-h-screen opacity-100";

  const navClasses = `${baseMobileClasses} ${
    open ? mobileExpanded : mobileCollapsed
  } md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100`;

  // Change background when scrolled beyond 10% of the viewport height
  // Assumption: "10% scroll" means 10% of the viewport height (window.innerHeight * 0.1).
  // If you prefer 10% of the full document height, I can switch to that.
  useEffect(() => {
    const threshold = window.innerHeight * 0.01;
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 w-full max-w-[90%] mx-auto ${
        scrolled ? "bg-black/60 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-5">
        <div className="flex shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3] text-3xl font-bold">
            MUDASSAR AULAKH
          </Link>
        </div>

        {/* Mobile toggle button - visible only on small screens; does not change styling of the menu items */}
        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((s) => !s)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-800 focus:outline-none md:hidden"
          type="button"
        >
          {/* simple hamburger / X svg */}
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

        <ul className={navClasses} id="navbar-default">
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#experience"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#education"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EDUCATION
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PROJECTS
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
