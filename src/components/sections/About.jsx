import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { KanjiWatermark } from '../common/KanjiWatermark';
import { personalData } from '../../data/personal';
import { Server, Shield, Brain, GitBranch, GraduationCap, Compass } from 'lucide-react';

export const About = () => {
  const pillars = [
    {
      icon: Server,
      code: '01',
      title: 'Resilient Backend Architecture',
      description: 'Designing transactional backend services with Java & Spring Boot, crafting clean REST APIs, and fine-tuning relational queries for low-latency throughput.'
    },
    {
      icon: Shield,
      code: '02',
      title: 'Practical Threat Defense',
      description: 'Hands-on exposure at MeshaSec Technologies analyzing real-world threat vectors, DAST vulnerability scanning, and hardening web application perimeters.'
    },
    {
      icon: Brain,
      code: '03',
      title: 'Intelligent Pattern Detection',
      description: 'Engineering machine learning classifiers for proactive phishing detection and anomalous pattern recognition across lexical, domain, and network features.'
    },
    {
      icon: GitBranch,
      code: '04',
      title: 'High-Velocity CI/CD Automation',
      description: 'Streamlining deployment lifecycles using Docker containerization and GitHub Actions pipelines to cut build and deployment durations to sub-20 seconds.'
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#000000]">
      <KanjiWatermark char="01" position="top-right" opacity={0.02} />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          sealCode="01"
          chapterNumber="CHAPTER 01"
          title="THE CHRONICLE"
          subtitle="The journey of a Full Stack Developer & Cybersecurity Enthusiast crafting resilient, high-throughput systems."
        />

        {/* Ancient Manuscript Parchment Frame in Black & White */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Manuscript Text */}
          <div className="lg:col-span-8 bg-[#09090B] border border-white/20 rounded-sm p-6 sm:p-10 relative shadow-2xl parchment-texture">
            {/* Top decorative border accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="absolute -top-3 left-4 px-3 py-0.5 bg-white text-black font-serif text-[10px] tracking-widest uppercase font-bold rounded-[1px] shadow-md">
              MANUSCRIPT RECORD
            </div>

            <div className="space-y-5 text-base sm:text-lg text-[#E4E4E7] font-editorial leading-relaxed pt-2">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-white first-letter:mr-2.5 first-letter:float-left first-letter:leading-none">
                {personalData.bio[0]}
              </p>
              <p className="text-[#A1A1AA]">
                {personalData.bio[1]}
              </p>
              <p className="text-[#A1A1AA]">
                {personalData.bio[2]}
              </p>
            </div>

            {/* Academic & Professional Inscription Seals */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-[#121214] border border-white/10 rounded-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#A1A1AA] uppercase">Degree CGPA</div>
                  <div className="font-serif text-sm font-bold text-white">9.55 / 10.0</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#121214] border border-white/10 rounded-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Shield size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#A1A1AA] uppercase">Industry Role</div>
                  <div className="font-serif text-sm font-bold text-white">Cybersecurity Intern</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#121214] border border-white/10 rounded-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <Compass size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#A1A1AA] uppercase">Primary Focus</div>
                  <div className="font-serif text-sm font-bold text-white">Full Stack Developer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Card & Pillars */}
          <div className="lg:col-span-4 bg-[#09090B] border border-white/15 rounded-sm p-6 flex flex-col justify-between relative shadow-xl">
            {/* Archival Photo Plate */}
            <div className="mb-6 relative group overflow-hidden rounded-sm border border-white/20">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#121214]">
                <img
                  src={`${import.meta.env.BASE_URL}images/naveen-headshot.jpg`}
                  alt="Nadella Venkata Sai Naveen"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-95 transition-all duration-500 group-hover:scale-105 group-hover:filter-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/90">
                  <span className="font-semibold tracking-wider">N. V. S. NAVEEN</span>
                  <span className="text-[#A1A1AA]">KL UNIVERSITY</span>
                </div>
              </div>
            </div>

            <div className="border-b border-white/10 pb-3 mb-4">
              <span className="font-mono text-xs text-[#A1A1AA] tracking-widest uppercase block">
                ENGINEERING PILLARS
              </span>
              <h3 className="font-serif text-lg font-bold text-white mt-0.5">
                Foundations of Craft
              </h3>
            </div>

            <div className="space-y-4">
              <div className="relative pl-6 border-l-2 border-white/60">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white" />
                <span className="text-xs font-mono text-white">ACADEMIC DISTINCTION</span>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Distinction throughout schooling (10.0 CGPA) into KL University (9.55 CGPA).
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-white/40">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white/60" />
                <span className="text-xs font-mono text-white">APPLIED SYSTEMS</span>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Production-grade full-stack architecture with Spring Boot & automated GitHub Actions.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-white/20">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white/40" />
                <span className="text-xs font-mono text-white">THREAT RESEARCH</span>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Cybersecurity research at MeshaSec Technologies analyzing datasets and attack surfaces.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-serif text-[#A1A1AA]">
              <span>AUTHENTIC RECORD</span>
              <span className="font-mono text-white/50 text-[10px]">VERIFIED // 2026</span>
            </div>
          </div>
        </div>

        {/* Four Foundational Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#09090B] border border-white/15 hover:border-white/50 p-6 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/90 group relative overflow-hidden"
              >
                <div className="w-8 h-1 bg-white mb-4 group-hover:w-16 transition-all duration-300" />

                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-sm bg-[#121214] border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-lg text-white/20 font-bold group-hover:text-white/60 transition-colors">
                    {pillar.code}
                  </span>
                </div>

                <h4 className="font-serif text-base font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
