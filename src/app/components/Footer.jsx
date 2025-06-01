'use client';

import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#E9BAF1' }} className="p-6 mt-auto">
      <div className="lg:hidden">
        <div className="flex flex-col space-y-6">

          <div className="text-sm">
             <div className="text-sm text-center">
            <p className="font-semibold mb-2">Horaires :</p>
            <p>Lundi 9h30-19h</p>
            <p>Mardi 9h30-19h</p>
            <p>Mercredi 9h30-19h</p>
            <p>Jeudi 9h30-19h</p>
            <p>Vendredi 9h30-19h</p>
            <p>Samedi 14h-19h</p>
            <p>Dimanche fermé</p>
          </div>
          </div>

          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46708.89!2d3.67!3d43.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b27d1e8f3c5b43%3A0x40819a5fd979b30!2s34190%20Ganges!5e0!3m2!1sfr!2sfr!4v1234567890!5m2!1sfr!2sfr"
              width="150"
              height="100"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex justify-center space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:opacity-70 transition-opacity">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">f</span>
              </div>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:opacity-70 transition-opacity">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">@</span>
              </div>
            </Link>
          </div>

          <div className="text-center text-xs">
            <p>© 2025 Le Papillon Énergétique</p>
            <p>Tous droits réservés</p>
            <p className="mt-2">Site conçu par</p>
            <p>Clément</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-8 items-start">

          <div className="text-sm">
            <p className="font-semibold mb-2">Horaires :</p>
            <p>Lundi 9h30-19h</p>
            <p>Mardi 9h30-19h</p>
            <p>Mercredi 9h30-19h</p>
            <p>Jeudi 9h30-19h</p>
            <p>Vendredi 9h30-19h</p>
            <p>Samedi 14h-19h</p>
            <p>Dimanche fermé</p>
          </div>

          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22981.63234543765!2d3.683329162820541!3d43.944798349466254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b3f65edf120aff%3A0xe6bd9599519b403a!2s34190%20Ganges!5e0!3m2!1sfr!2sfr!4v1748703449586!5m2!1sfr!2sfr"
              width="250"
              height="180"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex items-end justify-between">
            <div className="text-xs">
              <p>© 2025 Le Papillon Énergétique</p>
              <p>Tous droits réservés</p>
              <p className="mt-2">Site conçu par</p>
              <p>Clément</p>
            </div>
            
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="hover:opacity-70 transition-opacity">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">f</span>
                </div>
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:opacity-70 transition-opacity">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">@</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;