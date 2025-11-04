"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverLightBackground, setIsOverLightBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;

      setIsOverLightBackground(scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#news", label: "Události" },
    { href: "#about", label: "O nás" },
    { href: "#courses", label: "Kurzy" },
    { href: "#gallery", label: "Galerie" },
    { href: "#contact", label: "Přihlásit se" },
    { href: "#faq", label: "FAQ" },
  ];

  // Dynamic styling based on background
  const headerBg = isOverLightBackground
    ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50"
    : "bg-black/10 backdrop-blur-xl border-b border-white/10";

  const textColor = isOverLightBackground ? "text-gray-900" : "text-white";
  const hoverTextColor = isOverLightBackground
    ? "hover:text-skoda-dynamic-blue"
    : "hover:text-skoda-dynamic-blue";
  const hoverBg = isOverLightBackground
    ? "hover:bg-gray-100/50"
    : "hover:bg-white/10";
  const mobileTextColor = textColor; // Use same adaptive color as other elements

  return (
    <>
      {/* Blur overlay when mobile menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 lg:hidden transition-all duration-300 ease-out cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-lg ${headerBg}`}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo with click effect */}
            <div className="flex items-center space-x-3">
              <Link
                href="/#home"
                className="block transition-all duration-300 hover:scale-105 active:scale-95 rounded-lg p-1 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <h1
                  className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${textColor}`}
                >
                  Autoškola Falář
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium text-lg transition-all duration-300 rounded-lg group cursor-pointer ${textColor} ${hoverTextColor} ${hoverBg} hover:scale-105`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-skoda-dynamic-blue/0 via-skoda-dynamic-blue/10 to-skoda-dynamic-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                  ></div>
                </Link>
              ))}

              {/* Contact CTA Button */}
              <a
                href="#contact-info"
                className="ml-4 px-6 py-2 bg-skoda-dynamic-blue hover:bg-blue-hover text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-skoda-dynamic-blue/25 flex items-center space-x-2 cursor-pointer"
              >
                {/* <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.22 11.22 0 003.48.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.22 11.22 0 00.56 3.48 1 1 0 01-.27 1.11l-2.2 2.2z" />
                </svg> */}
                <span>Kontakt</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-3 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer ${mobileTextColor}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                {/* Top bar */}
                <span
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 transform origin-center rounded-full ${
                    isMenuOpen
                      ? "rotate-45 translate-y-2"
                      : "rotate-0 translate-y-0"
                  }`}
                />
                {/* Middle bar */}
                <span
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 rounded-full ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                {/* Bottom bar */}
                <span
                  className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 transform origin-center rounded-full ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-2"
                      : "rotate-0 translate-y-0"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden w-full overflow-hidden transition-all duration-300 ease-out ${
              isMenuOpen
                ? "max-h-96 opacity-100 mt-4"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 px-2 transition-all duration-300 text-base font-medium rounded-lg hover:scale-105 transform cursor-pointer ${textColor} ${hoverTextColor} ${hoverBg} ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile Contact CTA Button */}
            <a
              href="#contact-info"
              className={`mt-4 px-4 py-3 bg-skoda-dynamic-blue hover:bg-blue-hover text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-skoda-dynamic-blue/25 flex items-center space-x-2 cursor-pointer ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: isMenuOpen
                  ? `${navItems.length * 50}ms`
                  : "0ms",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {/* <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.22 11.22 0 003.48.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.22 11.22 0 00.56 3.48 1 1 0 01-.27 1.11l-2.2 2.2z" />
              </svg> */}
              <span>Kontakt</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
