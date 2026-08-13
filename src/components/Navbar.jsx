"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Books", path: "/all-books" },
    { name: "My Profile", path: "/profile" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all">
      <nav className="flex justify-between items-center py-3.5 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        
        {/* Logo Section */}
        <Link href="/" className="flex gap-2.5 items-center group">
          <div className="relative w-8 h-8 flex items-center justify-center rounded-xl bg-slate-50 p-1 group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="BookVibe Logo"
              width={28}
              height={28}
              priority
              className="object-contain"
            />
          </div>
          <span className="font-black text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500">
            BookVibe
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-pink-600 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/signin">
            <Button
              variant="light"
              className="font-medium text-slate-700 hover:text-slate-900 rounded-xl px-4"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 shadow-md shadow-pink-500/20 hover:opacity-90 transition-opacity rounded-xl px-5">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-b border-slate-100 backdrop-blur-lg px-4 pt-2 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                      isActive
                        ? "bg-pink-50 text-pink-600 font-semibold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <Link href="/signin" onClick={() => setIsOpen(false)} className="w-full">
              <Button variant="flat" className="w-full font-medium text-slate-700 bg-slate-100 rounded-xl">
                Sign In
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full">
              <Button className="w-full font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-xl shadow-md shadow-pink-500/20">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;