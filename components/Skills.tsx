
import React from 'react';
// Fix: Added missing Link import from react-router-dom
import { Link } from 'react-router-dom';
import { SkillItem } from '../types';

const SKILLS_DATA: SkillItem[] = [
  { title: "Análisis de Logs", desc: "Monitoreo de eventos Windows & Linux, correlación y análisis forense.", icon: "find_in_page", proficiency: 95, mainIcon: "description" },
  { title: "Operaciones SIEM", desc: "Experiencia en Splunk y Wazuh para gestión de eventos de seguridad.", icon: "visibility", proficiency: 90, mainIcon: "hub" },
  { title: "Defensa de Endpoints", desc: "Instalación y gestión de EDR, Antivirus y Firewalls.", icon: "admin_panel_settings", proficiency: 85, mainIcon: "shield" },
  { title: "Análisis de Red", desc: "Inspección profunda de paquetes usando Wireshark y tcpdump.", icon: "network_check", proficiency: 88, mainIcon: "router" },
  { title: "Gestión de Vulnerabilidades", desc: "Escaneo y mitigación usando Nmap, Nessus y OpenVAS.", icon: "track_changes", proficiency: 92, mainIcon: "radar" },
  { title: "Respuesta a Incidentes", desc: "Mitigación rápida de amenazas y protocolos de recuperación.", icon: "warning", proficiency: 80, mainIcon: "emergency_home" }
];

const SkillCard: React.FC<SkillItem> = ({ title, desc, icon, proficiency, mainIcon }) => (
  <div className="group relative flex flex-col p-8 rounded-xl border border-white/10 bg-[#161616] transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(153,153,153,0.15)]">
    <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[48px]">{mainIcon}</span>
    </div>
    <div className="mb-8">
      <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center text-primary mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
        <span className="material-symbols-outlined text-[30px]">{icon}</span>
      </div>
      <h3 className="text-white text-xl font-bold font-display uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
    <div className="mt-auto pt-6 border-t border-white/5">
      <div className="flex justify-between items-end mb-2">
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Dominio</span>
        <span className="text-[10px] font-mono text-primary font-bold">{proficiency}%</span>
      </div>
      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-primary h-full rounded-full shadow-[0_0_8px_rgba(153,153,153,0.3)] transition-all duration-1000 ease-out" 
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <div className="px-6 py-12 md:py-24 mx-auto max-w-[1200px]">
      <div className="flex flex-col max-w-4xl mb-16">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-[2px] w-12 bg-primary"></div>
          <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase">Competencias Técnicas</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase mb-8">
          Habilidades SOC<span className="text-primary">_</span>
        </h1>
        <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl">
          Arsenal tecnológico especializado en operaciones defensivas, detección de amenazas y mitigación de incidentes en entornos críticos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}

        {/* Specialized Lab Status Card */}
        <div className="group relative lg:col-span-2 flex flex-col md:flex-row gap-10 p-10 rounded-xl border border-white/10 bg-[#161616] hover:border-primary transition-all">
          <div className="absolute top-10 right-10 text-primary/10">
            <span className="material-symbols-outlined text-[120px]">terminal</span>
          </div>
          <div className="shrink-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
              <span className="material-symbols-outlined text-[56px]">laptop_chromebook</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white uppercase mb-4 tracking-tight group-hover:text-primary transition-colors">Kali Linux Labs</h3>
            <p className="text-gray-400 text-lg font-light mb-8 max-w-lg">
              Entornos controlados avanzados para pruebas de penetración, análisis forense y auditorías de seguridad.
            </p>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mt-auto">
              <div className="bg-primary h-full rounded-full" style={{ width: "88%" }}></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Disponibilidad Global</span>
              <span className="text-[10px] font-mono text-primary font-bold">88%</span>
            </div>
          </div>
        </div>

        {/* Contact/Hire CTA Card */}
        <div className="flex flex-col items-center justify-center p-10 rounded-xl border border-primary/30 bg-primary/5 text-center transition-all hover:bg-primary/10">
          <span className="material-symbols-outlined text-primary text-5xl mb-6">verified_user</span>
          <h3 className="text-white text-xl font-bold uppercase mb-3 tracking-tight">¿Listo para Asegurar?</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Disponible para roles SOC a tiempo completo y proyectos de auditoría de seguridad.
          </p>
          <Link to="/contact" className="w-full rounded bg-primary py-3 px-6 text-black font-bold uppercase text-sm tracking-widest hover:bg-gray-400 transition-colors">
            Iniciar Protocolo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
