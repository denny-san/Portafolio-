
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Terminal from './Terminal';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Defendiendo la infraestructura digital contra amenazas persistentes.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative px-6 py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-40 bg-center bg-cover mix-blend-luminosity pointer-events-none">
        <img 
          src="/IMG/DENNY IMG.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
          onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')}
        />
      </div>
      <div className="absolute top-1/4 -left-20 -z-10 h-[400px] w-[400px] bg-primary/10 blur-[100px] rounded-full opacity-30 animate-pulse pointer-events-none"></div>

      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            STATUS: ACTIVE DEPLOYMENT // ISAÍAS 41:10
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] uppercase">
              Seguridad <br />
              <span className="text-primary italic">Operacional</span>
            </h1>
            <div className="min-h-[60px]">
              <p className="text-xl md:text-2xl font-mono text-gray-200 border-l-2 border-primary pl-6 py-2 uppercase tracking-tight">
                {text}<span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-xl font-body">
            Analista SOC especializado en detección proactiva, análisis forense y respuesta a incidentes. Mi enfoque es transformar el ruido de la red en inteligencia de seguridad accionable.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              to="/certs" 
              className="group relative h-14 overflow-hidden rounded bg-primary px-10 flex items-center justify-center text-black text-sm font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(153,153,153,0.4)]"
            >
              <span className="mr-2 material-symbols-outlined">verified</span>
              Expedientes
            </Link>
            <Link 
              to="/contact" 
              className="h-14 flex items-center justify-center rounded border border-white/10 bg-white/5 px-10 text-white text-sm font-bold uppercase tracking-widest hover:border-primary/50 transition-all"
            >
              <span className="mr-2 material-symbols-outlined">terminal</span>
              Contacto
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default Hero;
