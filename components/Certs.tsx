
import React, { useState } from 'react';
import { CertificationItem } from '../types';

const CERTS_DATA: (CertificationItem & { category: string })[] = [
  {
    title: "Analista de Seguridad SOC",
    issuer: "LetsDefend",
    year: "2025",
    id: "LD-83921",
    desc: "Formación especializada en procesos de SOC, respuesta a incidentes y monitoreo de amenazas.",
    icon: "verified_user",
    image: "/IMG/ANALISTA SOC.jpg",
    category: "SOC"
  },
  {
    title: "Analista de Malware",
    issuer: "LetsDefend",
    year: "2025",
    id: "LD-99210",
    desc: "Técnicas avanzadas de análisis de software malicioso y análisis de comportamiento.",
    icon: "bug_report",
    image: "/IMG/ANALISIS MALWARE.png",
    category: "Malware"
  },
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    year: "2022",
    id: "COMP-001",
    desc: "Certificación global que valida las habilidades básicas necesarias para funciones de seguridad.",
    icon: "badge",
    image: "/IMG/COMPTIA SEGURITY.png",
    category: "Fundamentos"
  },
  {
    title: "CompTIA CySA+",
    issuer: "CompTIA",
    year: "2024",
    id: "COMP-002",
    desc: "Certificación de Analista de Ciberseguridad enfocada en analítica de comportamiento.",
    icon: "analytics",
    image: "/IMG/COMPTIA CYSA.jpg",
    category: "SOC"
  },
  {
    title: "Ciberseguridad Fund.",
    issuer: "Google Skills",
    year: "2021",
    id: "CIS-101",
    desc: "Introducción completa a principios, tecnologías y procedimientos de ciberseguridad.",
    icon: "school",
    image: "/IMG/CIBERSEGURIDAD INTRO.png",
    category: "Fundamentos"
  },
  {
    title: "Fundamentos de Redes",
    issuer: "Cisco Networking",
    year: "2021",
    id: "CIS-102",
    desc: "Conocimientos fundamentales de protocolos de red, dispositivos y operaciones.",
    icon: "router",
    image: "/IMG/BASICO REDES.png",
    category: "Redes"
  }
];

const CertCard: React.FC<CertificationItem> = ({ title, issuer, year, id, desc, icon, image }) => (
  <article className="group flex flex-col bg-[#161616] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
    <div className="h-48 w-full overflow-hidden relative bg-black">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400')}
      />
    </div>
    <div className="flex flex-col flex-1 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-primary text-[20px]">{icon}</span>
        <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{issuer}</span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-xs text-gray-500 mb-6 leading-relaxed flex-1">{desc}</p>
      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono">
        <span className="text-gray-600">ID: {id}</span>
        <span className="text-primary font-bold">{year}</span>
      </div>
    </div>
  </article>
);

const Certs: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'SOC', 'Malware', 'Fundamentos', 'Redes'];
  
  const filteredCerts = filter === 'Todos' 
    ? CERTS_DATA 
    : CERTS_DATA.filter(c => c.category === filter);

  return (
    <div className="px-6 py-12 md:py-24 mx-auto max-w-[1200px]">
      <div className="flex flex-col mb-16 gap-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
          Credenciales <span className="text-primary">Técnicas</span>
        </h2>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-primary text-black' 
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => (
          <CertCard key={cert.id} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default Certs;
