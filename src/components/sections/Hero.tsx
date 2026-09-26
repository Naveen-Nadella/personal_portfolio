import React from 'react';
import { RedSeal } from '../common/RedSeal';
import { personalData } from '../../data/personal';
import { soundEngine } from '../../utils/audio';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { Mail, Phone, ArrowDown, Download, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    soundEngine.playBrushSwipe();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#000000]"
    >
      {/* Background Decorative Monogram Watermark */}
      <div
        aria-hidden="true"
        className="absolute right-4 md:right-16 top-1/4 select-none pointer-events-none font-serif font-black text-[140px] md:text-[260px] leading-none text-white opacity-[0.02]"
      >
        NN
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Typography & Action CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Architectural monogram seal badge + banner */}
          <div className="flex items-center gap-3.5 mb-6">
            <RedSeal char="NN" size="md" />
            <div className="flex items-center gap-2 px-3 py-1 bg-[#121214] border border-white/15 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-xs text-[#E4E4E7] tracking-wider uppercase">
                KL University • CGPA {personalData.cgpa.split('/')[0].trim()}
              </span>
            </div>
            <span className="hidden sm:inline-block font-mono text-xs text-[#71717A] tracking-widest uppercase">
              ARCHIVE // 2026
            </span>
          </div>

          {/* Subheading Greeting */}
          <p className="font-serif text-xs sm:text-sm tracking-[0.25em] text-[#A1A1AA] uppercase mb-2">
            HELLO, I AM
          </p>

          {/* Candidate Name in Hero Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4">
            <span className="block">{personalData.name.split(' ')[0]}</span>
            <span className="silver-gradient-text block font-extrabold">
              {personalData.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          {/* Professional Focus Title */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base font-serif tracking-wide text-[#A1A1AA] mb-6">
            <span className="text-white font-semibold">Full Stack Developer</span>
            <span className="text-white/40 font-bold">•</span>
            <span className="text-white font-semibold">Cybersecurity Enthusiast</span>
          </div>

          {/* Quote / Tagline */}
          <blockquote className="border-l-2 border-white pl-4 py-1 mb-8 text-[#A1A1AA] text-base sm:text-lg font-editorial italic leading-relaxed max-w-xl">
            "{personalData.tagline}"
          </blockquote>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            {/* View Work CTA */}
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3 rounded-sm bg-white hover:bg-[#E4E4E7] text-black font-serif text-sm tracking-widest uppercase font-bold transition-all duration-300 shadow-xl shadow-white/5 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>VIEW ARTIFACTS</span>
              <ArrowUpRight size={16} className="text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Download Resume Button */}
            <a
              href="/Nadella_Naveen.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-sm bg-[#121214] hover:bg-[#1C1C20] border border-white/20 hover:border-white text-white font-serif text-sm tracking-widest uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-md"
            >
              <Download size={16} className="text-white/70 group-hover:-translate-y-0.5 transition-transform" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          {/* Social Links & Direct Contact Channels */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A1A1AA]">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2.5 rounded-sm bg-[#09090B] border border-white/10 hover:border-white/30"
            >
              <GithubIcon size={14} className="text-white/80" />
              <span>GitHub</span>
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2.5 rounded-sm bg-[#09090B] border border-white/10 hover:border-white/30"
            >
              <LinkedinIcon size={14} className="text-white/80" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2.5 rounded-sm bg-[#09090B] border border-white/10 hover:border-white/30"
            >
              <Mail size={14} className="text-white/80" />
              <span className="hidden sm:inline">{personalData.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a
              href={`tel:${personalData.phone}`}
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2.5 rounded-sm bg-[#09090B] border border-white/10 hover:border-white/30"
            >
              <Phone size={14} className="text-white/80" />
              <span>{personalData.phone}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Portrait Composition with Concentric Geometry */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-80 sm:w-[420px] h-[480px] sm:h-[540px] flex items-center justify-center group">
            {/* Background Circular Ensō & Geometric Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-dashed border-white/15 animate-spin-slow duration-[120s] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-white/10 pointer-events-none" />

            {/* Subtle Silver Glow behind portrait */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />

            {/* Ensō Calligraphic Brush Circle */}
            <svg
              viewBox="0 0 300 300"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 text-white/40 fill-none stroke-current pointer-events-none"
              style={{ filter: 'drop-shadow(0 0 16px rgba(255,255,255,0.06))' }}
            >
              <circle
                cx="150"
                cy="150"
                r="120"
                strokeWidth="10"
                strokeDasharray="620 90"
                strokeLinecap="round"
                transform="rotate(-40 150 150)"
                opacity="0.75"
              />
              <circle
                cx="150"
                cy="150"
                r="105"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                opacity="0.3"
              />
            </svg>

            {/* Naveen's Studio Portrait Cutout */}
            <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden pb-4">
              <img
                src="/images/naveen-cutout.png"
                alt="Nadella Venkata Sai Naveen"
                className="w-auto h-[440px] sm:h-[490px] max-w-full object-contain filter drop-shadow-[0_10px_35px_rgba(255,255,255,0.12)] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="eager"
              />

              {/* Bottom gradient fade so portrait seamlessly melts into the background */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#000000] via-[#000000]/70 to-transparent pointer-events-none" />
            </div>

            {/* Floating Floating Badge 1: Academic Distinction (Top-Right) */}
            <div className="absolute top-8 -right-2 sm:-right-4 z-20 p-2.5 sm:p-3 bg-[#0A0A0C]/90 border border-white/20 rounded-sm shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-500 max-w-[190px]">
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#A1A1AA] uppercase">
                <Award size={12} className="text-white" />
                <span>ACADEMIC MERIT</span>
              </div>
              <div className="font-serif text-xs sm:text-sm font-bold text-white mt-0.5">
                9.55 CGPA • Top Rank
              </div>
              <div className="text-[9px] font-mono text-[#71717A] mt-0.5">
                KL UNIVERSITY
              </div>
            </div>

            {/* Floating Badge 2: Cybersecurity & AI Research (Bottom-Left) */}
            <div className="absolute bottom-16 -left-2 sm:-left-6 z-20 p-2.5 sm:p-3 bg-[#0A0A0C]/90 border border-white/20 rounded-sm shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-left-4 duration-500 max-w-[220px]">
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#A1A1AA] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <ShieldCheck size={12} className="text-white" />
                <span>CYBERSECURITY INTERN</span>
              </div>
              <div className="font-serif text-xs sm:text-sm font-bold text-white mt-0.5">
                Research & AI Training
              </div>
              <div className="text-[9px] font-mono text-[#71717A] mt-0.5">
                MESHASEC TECHNOLOGIES
              </div>
            </div>

            {/* Central Bottom Plaque: Monogram & Identity */}
            <div className="absolute -bottom-3 inset-x-auto z-20 px-4 py-1.5 bg-[#09090B] border-2 border-white/30 rounded-sm shadow-2xl flex items-center gap-2.5 backdrop-blur-md">
              <RedSeal char="NN" size="sm" rotate={false} />
              <div className="text-left">
                <span className="font-serif text-xs font-bold text-white tracking-widest block">
                  NADELLA NAVEEN
                </span>
                <span className="font-mono text-[9px] text-[#A1A1AA] tracking-wider block">
                  FULL STACK DEVELOPER • CYBERSECURITY ENTHUSIAST
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <button
        onClick={() => handleScrollTo('about')}
        className="absolute bottom-6 inset-x-0 mx-auto w-fit flex flex-col items-center gap-1.5 text-[#A1A1AA] hover:text-white transition-colors cursor-pointer group select-none z-10"
        aria-label="Scroll to Chronicle"
      >
        <span className="font-serif text-[10px] tracking-[0.3em] uppercase">SCROLL TO CHRONICLE</span>
        <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform text-white/70" />
      </button>
    </section>
  );
};
