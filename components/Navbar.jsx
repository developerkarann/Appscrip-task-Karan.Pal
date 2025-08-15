'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SHOP", href: "/shop" },
    { name: "SKILLS", href: "/skills" },
    { name: "STORIES", href: "/stories" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className="border-b border-gray-200">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        
        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo Icon */}
        <div className="flex items-center">
          <Image
            src="/images/logo-icon.svg"
            alt="Brand icon"
            width={24}
            height={24}
            priority
          />
        </div>

        {/* Center Logo */}
        <h1 className="text-lg font-bold hidden md:block ml-30"> <Link href='/'> LOGO </Link> </h1>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Wishlist">
            <Heart className="w-5 h-5" />
          </button>
          <button aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button aria-label="Account">
            <User className="w-5 h-5" />
          </button>
          <span className="text-sm cursor-pointer hidden md:inline">ENG ▾</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav
        className="max-w-7xl mx-auto px-4 py-4 hidden md:flex justify-center space-x-6  text-sm font-semibold"
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="bg-white w-64 h-full p-6 flex flex-col">
          {/* Close button */}
          <button
            className="self-end mb-6"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Links */}
          <nav className="flex flex-col space-y-4 text-base font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <span className="text-sm cursor-pointer">ENG ▾</span>
          </div>
        </div>
      </div>
    </header>
  );
}
