"use client";

import Link from "next/link";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      url: "/",
      caption: "Home",
    },
    {
      url: "/hiragana",
      caption: "Hiragana",
    },
    {
      url: "/katakana",
      caption: "Katakana",
    },
    {
      url: "/kanji",
      caption: "Kanji",
    },
  ];

  return (
    <nav className={`bg-white border-gray-200 dark:bg-gray-900`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 text-white">
            <a href="/meals" target="_blank">
              <img className="h-16 rounded-full" src="/logo.jpg" alt="Logo" />
            </a>
          </div>
          <button
            className="text-white focus:outline-none lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          className={`${
            isMenuOpen
              ? "block lg:hidden text-white" // Show on mobile, hide on larger screens
              : "hidden"
          }`}
        >
          {links.map((item, index) => (
            <li className="px-5 py-1" key={index}>
              <Link href={item.url} target="_blank">
                {item.caption}
              </Link>
            </li>
          ))}

          {/* Add more navigation items as needed */}
        </ul>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:space-x-4 px-5 lg:items-center text-white">
          {links.map((item, index) => (
            <li key={index}>
              <Link href={item.url} target="_blank">
                {item.caption}
              </Link>
            </li>
          ))}

          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};
