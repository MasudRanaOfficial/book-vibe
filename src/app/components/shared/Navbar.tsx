"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Listed Books", href: "/listedBooks" },
  { name: "Pages to Read", href: "/read-books" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 tracking-tight"
          >
            Book Vibe
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "border border-emerald-500 text-emerald-600 font-semibold bg-emerald-50/20"
                      : "text-slate-600 hover:text-emerald-600 border border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Sign In
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-xl bg-[#4eb6cb] text-white text-sm font-semibold hover:bg-[#3ea0b4] transition-colors shadow-sm"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "border border-emerald-500 text-emerald-600 font-semibold bg-emerald-50/20"
                      : "text-slate-600 hover:text-emerald-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Sign In
            </button>
            <button
              type="button"
              className="w-full py-2.5 rounded-xl bg-[#4eb6cb] text-white text-sm font-semibold hover:bg-[#3ea0b4] transition-colors shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
