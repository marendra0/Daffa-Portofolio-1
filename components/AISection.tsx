
import React, { useState } from 'react';
import { generateProjectIdeas } from '../services/geminiService';

const AISection: React.FC = () => {
  const [skills, setSkills] = useState('');
  const [ideas, setIdeas] = useState<{projectTitle: string, description: string}[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!skills.trim()) return;
    setLoading(true);
    try {
      const result = await generateProjectIdeas(skills);
      setIdeas(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-3xl p-8 mt-12 mb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <span className="mr-2">✨</span>
          Brainstorm with AI
        </h2>
        <p className="text-slate-400 mb-6 text-sm">
          Apa yang akan kubuat selanjutnya? Masukkan skill-ku dan biarkan AI memberikan ide.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="text" 
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Contoh: React, Tailwind, Python..."
            className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            {loading ? 'Thinking...' : 'Generate Ideas'}
          </button>
        </div>

        {ideas.length > 0 && (
          <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {ideas.map((idea, idx) => (
              <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                <h4 className="font-bold text-blue-400">{idea.projectTitle}</h4>
                <p className="text-sm text-slate-400 mt-1">{idea.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AISection;
