
import React, { useState } from 'react';

const ContactInfoCard = ({ icon, label, val, type, link }: { icon: string, label: string, val: string, type: string, link?: string }) => (
  <div className="group flex flex-col gap-6 p-8 rounded-2xl border border-white/10 bg-[#161616] hover:border-primary transition-all duration-300">
    <div className="flex items-center justify-between">
      <div className="text-primary material-symbols-outlined text-[36px]">{icon}</div>
      <span className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.3em] font-bold group-hover:text-primary transition-colors">{type}</span>
    </div>
    <div className="flex flex-col gap-1">
      <h2 className="text-white text-xl font-bold tracking-tight">{label}</h2>
      {link ? (
        <a href={link} className="text-gray-400 text-base font-mono break-all hover:text-primary transition-colors">{val}</a>
      ) : (
        <p className="text-gray-400 text-base font-mono break-all">{val}</p>
      )}
    </div>
  </div>
);

const Contact: React.FC = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [progress, setProgress] = useState(0);

  const startHandshake = () => {
    setIsConnecting(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
  };

  return (
    <div className="px-6 py-12 md:py-24 mx-auto max-w-[960px]">
      <div className="flex flex-col gap-4 mb-16 border-b border-primary/20 pb-8">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-primary text-xs font-mono tracking-[0.4em] uppercase font-bold">Protocol: Establish Connection</span>
        </div>
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight uppercase leading-none">
          Contact Protocol<span className="text-primary"> //</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <ContactInfoCard icon="mail" label="Correo Electrónico" val="dennyanalisis@gmail.com" type="Encrypted" link="mailto:dennyanalisis@gmail.com" />
        <ContactInfoCard icon="call" label="Teléfono" val="829-978-2579" type="Secure Line" />
        <ContactInfoCard icon="captive_portal" label="Canal de Enlaces" val="bento.me/dennybluesec" type="Bento" link="https://bento.me/dennybluesec" />
        <ContactInfoCard icon="location_on" label="Ubicación" val="Azua, Rep. Dom." type="Base" />
      </div>

      <div className="flex flex-col items-center gap-8">
        {!isConnecting ? (
          <button 
            onClick={startHandshake}
            className="group relative flex min-w-[280px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-16 px-10 bg-primary hover:bg-white text-black gap-4 text-base font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(153,153,153,0.2)]"
          >
            <span className="material-symbols-outlined text-[28px]">handshake</span>
            <span className="uppercase tracking-widest">Iniciar Handshake</span>
          </button>
        ) : (
          <div className="w-full max-w-md flex flex-col gap-4">
            <div className="flex justify-between font-mono text-[10px] text-primary uppercase font-bold">
              <span>Establishing secure connection...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/10">
              <div 
                className="bg-primary h-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            {progress === 100 && (
              <p className="text-green-500 font-mono text-center text-xs animate-pulse">
                [SUCCESS] Connection established. Canales abiertos.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
