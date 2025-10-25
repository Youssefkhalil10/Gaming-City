// src/components/Navbar.jsx
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/gamingcity.png";
import userPhoto from "../assets/gamingcity.png";
import { Link } from "react-router-dom";
export default function Navbar({ onNavigate }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const LINKS = [
    { key: "news", label: "الأخبار" },
    { key: "calendar", label: "التقويم" },
    { key: "reviews", label: "التقييمات" },
    { key: "tournaments", label: "البطولات" },
    { key: "stores", label: "المتاجر" },
    { key: "podcast", label: "البودكاست" },
    { key: "home-original", label: "الصفحة الأصلية" },
  ];

  const handleNav = (key) => {
    setIsMobileOpen(false);
    if (typeof onNavigate === "function") {
      onNavigate(key);
    } else {
      console.info("navigate ->", key);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300
        ${isDarkMode ? " border-gray-700" : "bg-white/80 border-gray-200"}
        backdrop-blur-sm`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav("home")}
              className="flex items-center gap-3 focus:outline-none"
              aria-label="Go home"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                style={{
                  background: isDarkMode
                    ? "linear-gradient(90deg,#b26b00,#f6c84c)"
                    : "linear-gradient(90deg,#f59e0b,#fbbf24)",
                }}
              >
                <img
                  src={logo}
                  className="text-white font-bold w-20 h-14 rounded-2xl"
                />
              </div>
              <span
                className={`hidden sm:inline-block font-extrabold tracking-wide ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Gaming City
              </span>
            </button>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {LINKS.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNav(link.key)}
                className={`relative cursor-pointer px-2 py-1 text-base font-medium transition-all duration-200
                  ${
                    isDarkMode
                      ? "text-gray-100 hover:text-yellow-400"
                      : "text-gray-800 hover:text-yellow-500"
                  }`}
                aria-label={`Open ${link.label}`}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-0 rounded-sm transition-all duration-200
                    ${isDarkMode ? "bg-yellow-400" : "bg-yellow-500"}`}
                />
                <style>{`
                  button[aria-label="Open ${link.label}"]:hover span:not(:first-child){ width:100%; }
                `}</style>
              </button>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* User Photo - Now placed with social icons */}
            <button
              onClick={() => handleNav("profile")}
              className="flex items-center focus:outline-none"
              aria-label="User profile"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400 shadow-md">
                <Link to={"/setting"}>
                  <img
                    src={userPhoto}
                    alt="User profile"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            </button>

            {/* Social icons (small) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                aria-label="youtube"
                href="#"
                className={`${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                } hover:text-yellow-400 transition`}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2s-.2-1.7-.8-2.5c-.8-.9-1.7-.9-2.1-1-2.9-.2-7.3-.2-7.3-.2s-4.4 0-7.3.2c-.4 0-1.4.1-2.1 1C.7 4.5.5 6.2.5 6.2S.2 8.6.2 11v1c0 2.4.3 4.8.3 4.8s.2 1.7.8 2.5c.8.9 1.9.8 2.4.9 1.7.1 7.2.2 7.2.2s4.4 0 7.3-.2c.4 0 1.4-.1 2.1-1 .6-.8.8-2.5.8-2.5s.3-2.4.3-4.8v-1c0-2.4-.3-4.8-.3-4.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
                </svg>
              </a>
              <a
                aria-label="instagram"
                href="#"
                className={`${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                } hover:text-yellow-400 transition`}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.9a4.1 4.1 0 100 8.2 4.1 4.1 0 000-8.2zM18.5 6a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                </svg>
              </a>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
                ${
                  isDarkMode
                    ? "bg-gray-800 text-yellow-400 ring-gray-700"
                    : "bg-gray-200 text-gray-800 ring-gray-100"
                }`}
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707 8.001 8.001 0 1017.293 13.293z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zM16.657 4.343a1 1 0 010 1.414L15.243 7.17a1 1 0 01-1.414-1.414l1.414-1.413a1 1 0 011.414 0zM17 10a1 1 0 110 2h-1a1 1 0 110-2h1zM4.343 4.343a1 1 0 011.414 0L7.17 5.757A1 1 0 015.757 7.17L4.343 5.757a1 1 0 010-1.414zM3 10a1 1 0 110 2H2a1 1 0 110-2h1zM4.343 15.657a1 1 0 001.414 0L7.17 14.243a1 1 0 10-1.414-1.414L4.343 14.243a1 1 0 000 1.414zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM15.657 15.657a1 1 0 000-1.414l-1.414-1.414a1 1 0 10-1.414 1.414L14.243 15.657a1 1 0 001.414 0z" />
                </svg>
              )}
            </button>

            {/* CTA / Login */}
            <button
              onClick={() => handleNav("login")}
              className={`hidden md:inline-flex items-center px-4 py-2 rounded-full font-semibold shadow-sm transition
                ${
                  isDarkMode
                    ? "bg-gradient-to-r from-yellow-600 to-yellow-400 text-gray-900"
                    : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
                }`}
            >
              تسجيل الخروج
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              className={`md:hidden p-2 rounded focus:outline-none focus:ring-2 transition
                ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-100"
                    : "bg-gray-100 text-gray-800"
                }`}
            >
              {isMobileOpen ? (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      <div
        className={`md:hidden transform-gpu transition-all duration-250 origin-top
          ${
            isMobileOpen
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div
          className={`px-4 pb-4 pt-2 ${
            isDarkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          <div className="flex flex-col gap-2">
            {/* User Profile in Mobile Menu */}
            <button
              onClick={() => handleNav("profile")}
              className={`w-full text-right py-2 px-3 rounded-md font-medium transition flex items-center justify-end gap-3
                ${
                  isDarkMode
                    ? "text-gray-100 hover:bg-gray-800/60"
                    : "text-gray-800 hover:bg-yellow-50"
                }`}
            >
              <span>الملف الشخصي</span>
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-yellow-400 shadow-md">
                <img
                  src={userPhoto}
                  alt="User profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>

            {LINKS.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNav(link.key)}
                className={`w-full text-right py-2 px-3 rounded-md font-medium transition
                  ${
                    isDarkMode
                      ? "text-gray-100 hover:bg-gray-800/60"
                      : "text-gray-800 hover:bg-yellow-50"
                  }`}
              >
                {link.label}
              </button>
            ))}

            <div
              className={`mt-2 border-t ${
                isDarkMode ? "border-gray-800" : "border-gray-200"
              }`}
            />

            <button
              onClick={() => handleNav("login")}
              className={`mt-3 w-full py-2 rounded-full font-semibold transition
                ${
                  isDarkMode
                    ? "bg-gradient-to-r from-yellow-600 to-yellow-400 text-gray-900"
                    : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
                }`}
            >
              تسجيل الدخول
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
