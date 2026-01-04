
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Protocol initialized. How can I assist you with your security query today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      // Fix: Standardized initialization with direct process.env.API_KEY usage
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are a cybersecurity expert assistant for Denny Sánchez's portfolio. You answer technical questions about SOC analysis, malware, and network security. Be concise and professional.",
        },
      });

      // Fix: Directly accessing .text property of GenerateContentResponse
      const botText = response.text || "Connection timeout. Please retry protocol.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "Error: Secure communication channel interrupted." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 h-[500px] bg-[#161616] border border-primary/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 border-b border-white/10 bg-primary/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">terminal</span>
              <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">SEC_ASSISTANT v1.0</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg ${m.role === 'user' ? 'bg-primary text-black' : 'bg-white/5 text-gray-300 border border-white/10'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 text-primary border border-primary/20 p-2 rounded-lg animate-pulse">
                  Analyzing...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-black/40 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query system..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs font-mono text-white focus:outline-none focus:border-primary transition-all"
            />
            <button 
              onClick={handleSend}
              className="bg-primary hover:bg-gray-400 text-black p-2 rounded-lg transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group ${isOpen ? 'bg-white text-black' : 'bg-primary text-black hover:shadow-[0_0_30px_rgba(153,153,153,0.4)]'}`}
      >
        <span className="material-symbols-outlined text-[28px]">{isOpen ? 'close' : 'support_agent'}</span>
      </button>
    </div>
  );
};

export default ChatAssistant;
