'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav style={{ backgroundColor: '#E9BAF1' }} className="flex items-center justify-between p-4 relative">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/images/papillon_fond.png"
            alt="Papillon décoratif"
            width={300}
            height={200}
            className="opacity-15"
          />
        </div>
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo du site"
            width={200}
            height={150}
            className="mr-4"
          />
        </div>
        </Link>
          <h1 className="text-xl font-semibold leading-tight">
            Le papillon énergétique<br />
            <span className="text-sm font-normal">Prenez votre envol vers un mieux-être</span>
          </h1>


        <div className="hidden lg:flex space-x-4">
          <Link href="/avis" className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-lg transition-colors">
            Avis
          </Link>
          <Link href="/prestations" className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-lg transition-colors">
            Prestation / Tarif
          </Link>
          <Link href="/contact" className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-lg transition-colors">
            Contact
          </Link>
        </div>

        <button 
          onClick={toggleMenu}
          className="lg:hidden flex flex-col space-y-1 p-2"
          aria-label="Menu"
        >
          <div className={`w-6 h-0.5 bg-purple-800 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-purple-800 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-purple-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleMenu}>
          <div 
            style={{ backgroundColor: '#E9BAF1' }} 
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
                  <h2 className="text-lg font-semibold">Le papillon énergétique</h2>
                  <p className="text-xs">Prenez votre envol vers un mieux-être</p>
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
                href="/avis" 
                className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-lg text-center transition-colors"
                onClick={toggleMenu}
              >
                Avis
              </Link>
              <Link 
                href="/prestations" 
                className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-lg text-center transition-colors"
                onClick={toggleMenu}
              >
                Prestation / Tarif
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