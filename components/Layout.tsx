
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ChatAssistant from './ChatAssistant';

const Layout: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-dark text-white">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <Outlet />
      </main>
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <ChatAssistant />
        <a 
          href="https://wa.me/8299782579" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 group"
          title="WhatsApp Contact"
        >
          <span className="material-symbols-outlined text-white text-[28px]">message</span>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
