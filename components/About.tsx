
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="relative px-6 py-12 md:py-20 lg:py-24 mx-auto max-w-[1200px]">
      <div className="mb-12 border-l-4 border-primary pl-6 flex flex-col gap-2">
        <h3 className="text-primary text-sm font-mono tracking-[0.2em] uppercase">// SYSTEM PROFILE :: DETECTED</h3>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight uppercase">Sobre mí</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="relative group">
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary z-20"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-primary z-20"></div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#161616] border border-white/10 shadow-2xl">
              <img 
                src="/IMG/IMG DENNY.JPEG" 
                alt="Denny Sanchez Portrait" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
                onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600')}
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded border border-white/10">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono text-green-400 tracking-widest uppercase font-bold">Status: Online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center gap-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              Analista de Seguridad Informática apasionado por la defensa digital. Mi trayectoria se centra en el monitoreo constante, la respuesta rápida ante incidentes y el fortalecimiento de infraestructuras críticas.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Con dominio de herramientas SIEM como Splunk y Wazuh, y habilidades en análisis de tráfico de red, busco constantemente la excelencia técnica para mitigar riesgos en un panorama de amenazas en constante evolución.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/5 bg-white/5 hover:border-primary/20 transition-colors">
              <h4 className="text-primary font-mono text-[10px] uppercase tracking-widest mb-2 font-bold">Educación</h4>
              <p className="text-white text-sm font-bold">Ciberseguridad & Redes</p>
              <p className="text-gray-500 text-xs">Formación Continua Especializada</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/5 hover:border-primary/20 transition-colors">
              <h4 className="text-primary font-mono text-[10px] uppercase tracking-widest mb-2 font-bold">Especialidad</h4>
              <p className="text-white text-sm font-bold">Defensive Security (Blue Team)</p>
              <p className="text-gray-500 text-xs">SOC Operations & Malware Analysis</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://drive.google.com/drive/folders/1rG4kTjN6r2ibhOiB6AOv1-YULiR4MvWQ" 
              target="_blank" 
              className="flex-1 h-14 bg-primary text-black font-bold uppercase tracking-widest rounded flex items-center justify-center gap-2 hover:bg-white transition-all"
            >
              <span className="material-symbols-outlined">description</span>
              Descargar CV
            </a>
            <Link 
              to="/skills" 
              className="flex-1 h-14 border border-white/10 text-white font-bold uppercase tracking-widest rounded flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
            >
              <span className="material-symbols-outlined">shield</span>
              Mis Habilidades
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
