
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

const NAV_LINKS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Sobre mí', path: '/about' },
  { name: 'Habilidades', path: '/skills' },
  { name: 'Experiencia', path: '/experience' },
  { name: 'Certificaciones', path: '/certs' },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0F0F0F]/80 backdrop-blur-md px-6 py-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
            <span className="material-symbols-outlined text-[24px]">shield_lock</span>
          </div>
          <div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-tight uppercase">Denny Sánchez</h2>
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">SOC Analyst</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="h-10 flex items-center justify-center rounded bg-primary px-5 text-black text-sm font-bold uppercase transition-transform hover:scale-105 active:scale-95"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F0F0F] border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm font-medium ${
                location.pathname === link.path ? 'text-primary' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="h-10 flex items-center justify-center rounded bg-primary text-black text-sm font-bold uppercase"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
