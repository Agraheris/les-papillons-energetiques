"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center p-4 relative bg-[#E9BAF1]">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0"
        >
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo du site"
              width={200}
              height={150}
              className="w-20 lg:w-[200px] lg:mr-4"
            />
          </div>
        </Link>
        <div className="flex-1 relative flex flex-col items-center justify-center text-center mx-4">
          <Image
            src="/images/papillon_fond.png"
            alt="Papillon décoratif"
            width={200}
            height={150}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none z-0"
          />
          <h1 className="text-xl font-semibold leading-tight z-10 relative">
            Le papillon énergétique<br />
            <span className="text-sm font-normal">Prenez votre envol vers un mieux-être</span>
          </h1>
        </div>

        <div className="hidden lg:flex space-x-4">
          <Link
            href="/prestations"
            className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Prestation / Tarif
          </Link>
          <Link
            href="/avis"
            className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Avis
          </Link>
          <Link
            href="/contact"
            className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col space-y-1 p-2 flex-shrink-0"
          aria-label="Menu"
        >
          <div
            className={`w-6 h-0.5 bg-purple-800 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-purple-800 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-purple-800 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></div>
        </button>
      </nav>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleMenu}
        >
          <div
            style={{ backgroundColor: "#E9BAF1" }}
            className="w-full p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo du site"
                  width={40}
                  height={30}
                  className="mr-2"
                />
                <div>
                  <h2 className="text-lg font-semibold">
                    Le papillon énergétique
                  </h2>
                  <p className="text-xs">
                    Prenez votre envol vers un mieux-être
                  </p>
                </div>
              </div>
              <button
                onClick={toggleMenu}
                className="text-purple-800 text-2xl"
                aria-label="Fermer le menu"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              <Link
                href="/prestations"
                className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-lg text-center transition-colors"
                onClick={toggleMenu}
              >
                Prestation / Tarif
              </Link>
              <Link
                href="/avis"
                className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-lg text-center transition-colors"
                onClick={toggleMenu}
              >
                Avis
              </Link>
              <Link
                href="/contact"
                className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-lg text-center transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;