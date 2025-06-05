'use client';

import Link from 'next/link';

function Footer() {
  return (
    <footer  className="p-6 mt-auto bg-[#E9BAF1]">
      <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 lg:items-start">
        
        <div className="text-sm text-center lg:text-left">
          <p className="font-semibold mb-2">Horaires :</p>
          <p>Lundi 9h30-19h</p>
          <p>Mardi 9h30-19h</p>
          <p>Mercredi 9h30-19h</p>
          <p>Jeudi 9h30-19h</p>
          <p>Vendredi 9h30-19h</p>
          <p>Samedi 14h-19h</p>
          <p>Dimanche fermé</p>
        </div>

        {/* Carte Google Maps */}
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22981.63234543765!2d3.683329162820541!3d43.944798349466254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b3f65edf120aff%3A0xe6bd9599519b403a!2s34190%20Ganges!5e0!3m2!1sfr!2sfr!4v1748703449586!5m2!1sfr!2sfr"
            width="150"
            height="100"
            className="lg:w-[250px] lg:h-[180px]"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Réseaux sociaux et mentions légales */}
        <div className="flex flex-col items-center space-y-4 lg:flex-row lg:items-end lg:justify-between lg:space-y-0">
          
          {/* Réseaux sociaux */}
          <div className="flex space-x-4 lg:order-2">
            <Link href="https://www.facebook.com/profile.php?id=100090974845558&locale=fr_FR" target="_blank" className="hover:opacity-70 transition-opacity">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm lg:text-base font-bold">f</span>
              </div>
            </Link>
            <Link href="https://www.instagram.com/vanessagoujon25/" target="_blank" className="hover:opacity-70 transition-opacity">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm lg:text-base font-bold">@</span>
              </div>
            </Link>
          </div>

          {/* Mentions légales */}
          <div className="text-center lg:text-left lg:order-1 text-xs">
            <p>© 2025 Le Papillon Énergétique</p>
            <p>Tous droits réservés</p>
            <p className="mt-2">Site conçu par</p>
            <p>Clément</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;