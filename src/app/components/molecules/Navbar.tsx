"use client";

import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar } from "../atoms/Avatar";
import Link from "next/link";

interface NavbarProps {
  links: { label: string; href: string }[];
  items?: { id: string; name: string }[];
  className?: string;
  activeItemId?: string;
  activeItemClassName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ links, items }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleAuthClick = () => {
    if (session) {
      signOut();
    } else {
      signIn("discord");
    }
  };

  // Filter out any login-related links
  const navigationLinks = links.filter(
    (link) =>
      !link.label.toLowerCase().includes("login") &&
      !link.label.toLowerCase().includes("logout")
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-1/4">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <span className="md:hidden">PSL</span>
              <span className="hidden md:inline">Primordial Soccar League</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-4">
            <div className="flex space-x-4">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleAuthClick}
                className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                {session ? "Logout" : "Login"}
              </button>
            </div>

            {/* Items */}
            {items && (
              <div className="flex space-x-4">
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
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center justify-end w-1/4">
            {session?.user && (
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">
                  {session.user.name}
                </span>
                <Avatar
                  src={session.user.image || ""}
                  alt={session.user.name || "User avatar"}
                  size="sm"
                />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                // X icon when menu is open
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon when menu is closed
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                handleAuthClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {session ? "Logout" : "Login"}
            </button>
            {session?.user && (
              <div className="flex items-center space-x-2 px-3 py-2">
                <span className="text-sm font-medium text-gray-700">
                  {session.user.name}
                </span>
                <Avatar
                  src={session.user.image || ""}
                  alt={session.user.name || "User avatar"}
                  size="sm"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
