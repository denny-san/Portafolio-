
import React from 'react';
import { ExperienceItem } from '../types';

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Asistente de Soporte Técnico",
    company: "Centro de Formación Tecnológica",
    period: "2024 – Presente",
    icon: "router",
    tasks: [
      "Configuración de firewalls básicos y segmentación de redes.",
      "Análisis de tráfico de red sospechoso utilizando Wireshark.",
      "Ejecución de pruebas de penetración controladas en laboratorio con Kali Linux."
    ],
    tags: ["Firewall", "Wireshark", "Kali Linux"]
  },
  {
    role: "Auditoría de Redes Simulada",
    company: "Proyecto Académico Avanzado",
    period: "2023 – 2024",
    icon: "radar",
    tasks: [
      "Escaneo de puertos y descubrimiento de servicios con Nmap.",
      "Documentación técnica de vulnerabilidades y clasificación de riesgo (CVSS).",
      "Diseño e implementación de medidas de mitigación y hardening."
    ],
    tags: ["Nmap", "Vulnerability Mgmt", "Hardening"]
  },
  {
    role: "Practicante en Seguridad",
    company: "Simulación / Voluntariado",
    period: "Flexible",
    icon: "verified_user",
    tasks: [
      "Revisión y análisis de logs del sistema para detección de anomalías.",
      "Instalación y configuración de soluciones EDR y antivirus avanzados.",
      "Implementación de buenas prácticas de concientización en ciberseguridad."
    ],
    tags: ["Log Analysis", "EDR/AV", "Compliance"]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="px-6 py-12 md:py-24 mx-auto max-w-[1200px]">
      <div className="mb-16 relative">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Professional <span className="text-primary">Experience</span>
        </h1>
        <div className="h-1.5 w-32 bg-primary rounded-full mb-8"></div>
        <p className="text-gray-400 text-xl font-light max-w-2xl">
          Cronología de mi trayectoria en ciberseguridad defensiva, análisis de redes y gestión de vulnerabilidades.
        </p>
      </div>

      <div className="relative pl-4 md:pl-10 space-y-12">
        <div className="absolute left-[20px] md:left-[35px] top-0 bottom-0 w-px bg-white/10"></div>

        {EXPERIENCE_DATA.map((item, index) => (
          <div key={index} className="relative grid grid-cols-[40px_1fr] md:grid-cols-[70px_1fr] gap-6 group">
            <div className="flex flex-col items-center relative z-10 pt-2">
              <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#161616] border-2 border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(153,153,153,0.3)] transition-all duration-300">
                <span className="material-symbols-outlined text-primary md:!text-[32px]">{item.icon}</span>
              </div>
            </div>
            <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 md:p-10 hover:border-primary/50 transition-all shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{item.role}</h3>
                  <p className="text-primary font-mono text-sm uppercase tracking-widest font-bold">{item.company}</p>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded border border-white/10 text-xs text-gray-300 font-mono tracking-widest">
                  <span className="material-symbols-outlined !text-sm">calendar_month</span>
                  {item.period}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {item.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400 md:text-lg font-light leading-relaxed">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-1">terminal</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] border border-white/10 rounded-full bg-white/5 text-gray-400 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
