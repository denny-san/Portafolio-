
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0F0F0F] text-gray-500 py-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="text-xs font-mono uppercase tracking-widest">© {new Date().getFullYear()} SOC ANALYST PORTFOLIO. ALL SYSTEMS NOMINAL.</p>
          <p className="text-[10px] text-gray-700">VERIFICADA CON DERECHO DE AUTOR</p>
        </div>
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/in/denny-sanchez-6910b537b/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wide hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://wa.me/8299782579" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wide hover:text-primary transition-colors">WhatsApp</a>
          <a href="https://www.instagram.com/denny.bluesec_/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wide hover:text-primary transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
