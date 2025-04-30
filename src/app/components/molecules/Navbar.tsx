"use client";

import React, { useState } from "react";
import { Button } from "../atoms/Button";

interface NavbarProps {
  links: { label: string; href: string }[];
  items?: { id: string; name: string }[];
  className?: string;
  activeItemId?: string;
  activeItemClassName?: string;
  onButtonClick?: () => void;
  buttonLabel?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  links,
  items,
  onButtonClick,
  buttonLabel,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-gray-800">
              Primordial Soccar League
            </a>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Items */}
          {items && (
            <div className="hidden md:flex space-x-4">
              {items.map((item) => (
                <span
                  key={item.id}
                  className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </span>
              ))}
            </div>
          )}

          {/* Button */}
          {buttonLabel && onButtonClick && (
            <div className="hidden md:flex">
              <Button onClick={onButtonClick} className="ml-4">
                {buttonLabel}
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            {items &&
              items.map((item) => (
                <span
                  key={item.id}
                  className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </span>
              ))}
            {buttonLabel && onButtonClick && (
              <Button onClick={onButtonClick} className="w-full mt-2">
                {buttonLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
