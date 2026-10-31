import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { DataPlayground } from './components/DataPlayground';
import { Journey } from './components/Journey';
import { GithubIntegration } from './components/GithubIntegration';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { EasterEggModal } from './components/EasterEggModal';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text relative selection:bg-purple-600/40 selection:text-white">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Floating Navbar */}
      <Navbar
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenEasterEgg={() => setIsEasterEggOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section with 3D Neural Sphere */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 01 About Section */}
        <About />

        {/* 02 Technical Skills Section */}
        <Skills />

        {/* 03 Innovation Projects Section */}
        <Projects />

        {/* 04 Interactive Data Playground */}
        <DataPlayground />

        {/* 05 Verified Journey & Milestones */}
        <Journey />

        {/* GitHub Live Integration */}
        <GithubIntegration />

        {/* 06 Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenEasterEgg={() => setIsEasterEggOpen(true)}
      />

      <EasterEggModal
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />
    </div>
  );
};

export default App;
