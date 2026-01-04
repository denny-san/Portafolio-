
import React from 'react';

const Terminal: React.FC = () => {
  return (
    <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-xl overflow-hidden border border-[#333] bg-[#0a0a0a] shadow-2xl group grid-bg">
      <div className="absolute inset-0 flex flex-col p-4">
        <div className="flex items-center justify-between border-b border-[#333] pb-2 mb-4">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-gray-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-[10px] font-mono text-gray-500">bash — root@kali: ~</div>
        </div>
        <div className="flex-1 font-mono text-xs md:text-sm text-green-400 overflow-hidden relative">
          <div className="opacity-90 leading-relaxed">
            <p className="text-gray-500 mb-1">Last login: {new Date().toDateString()} on console</p>
            <p>> initiating_scan --target 192.168.1.105</p>
            <p className="text-blue-400">[INFO] Scan started at {new Date().toLocaleTimeString()} UTC</p>
            <p>[+] Port 22/tcp open (ssh)</p>
            <p>[+] Port 80/tcp open (http)</p>
            <p>[+] Port 443/tcp open (https)</p>
            <p className="text-gray-400 font-bold">[!] Vulnerability detected: CVE-2023-XXXX</p>
            <p>> analyzing_traffic --interface eth0</p>
            <p>Capturing packets...</p>
            <div className="my-4 p-3 border border-green-500/20 bg-green-500/5 rounded">
              <div className="flex justify-between text-[10px] text-gray-400 mb-2">
                <span className="uppercase tracking-widest font-bold">Traffic Volume</span>
                <span className="text-primary">HIGH</span>
              </div>
              <div className="w-full bg-[#333] h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[82%] shadow-[0_0_8px_rgba(153,153,153,0.5)]"></div>
              </div>
            </div>
            <p>> sys_alert: Intrusion detected in Sector 7G</p>
            <p>> counter_measures: ACTIVE</p>
            <p className="mt-2">> _<span className="animate-pulse bg-primary w-2 h-4 inline-block ml-1 align-middle"></span></p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none animate-scan"></div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
