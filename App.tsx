
import React, { useState } from 'react';
import { MY_PROJECTS, SOCIAL_LINKS } from './constants';
import ProjectCard from './components/ProjectCard';
import AISection from './components/AISection';

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-purple-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-pink-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pt-16 pb-24 relative z-10">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <img 
              src="https://picsum.photos/seed/profile/200" 
              alt="Profile" 
              className="relative w-32 h-32 rounded-full border-4 border-slate-900 object-cover shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl font-black mb-2 tracking-tight">
            Muhamad <span className="gradient-text">Arif</span>
          </h1>
          <p className="text-slate-400 text-lg font-medium mb-8">
            Digital Builder • UI/UX Enthusiast • Future Coder
          </p>

          {/* Social Links & Copy Link */}
          <div className="flex justify-center gap-4 flex-wrap">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.platform} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-white/10 hover:translate-y-[-2px] transition-all text-xl"
                title={link.platform}
              >
                {link.icon}
              </a>
            ))}
            <button 
              onClick={copyToClipboard}
              className="glass px-4 h-12 flex items-center justify-center rounded-2xl hover:bg-white/10 hover:translate-y-[-2px] transition-all text-sm font-bold gap-2 text-blue-400"
            >
              {copied ? '✅ Copied!' : '🔗 Copy Link'}
            </button>
          </div>
        </header>

        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="w-8 h-1 bg-blue-500 rounded-full mr-3"></span>
            My Future Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {MY_PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* AI Interaction Section */}
        <AISection />

        {/* Footer */}
        <footer className="text-center text-slate-600 text-sm mt-20 border-t border-slate-800 pt-8">
          <p>© {new Date().getFullYear()} • Crafted with ❤️ and Gemini API</p>
          <p className="mt-2 uppercase tracking-widest text-[10px]">Tap to discover more</p>
        </footer>
      </div>

      {/* Persistent CTA Button (Sticky) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-xs px-6">
        <a 
          href="https://wa.me/yournumber" 
          className="flex items-center justify-center w-full glass bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-2xl shadow-2xl border border-white/20 transition-all active:scale-95 group"
        >
          <span className="mr-2 group-hover:animate-bounce">👋</span>
          Let's Collaborate
        </a>
      </div>
    </div>
  );
};

export default App;
