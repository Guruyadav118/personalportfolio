import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  Code, 
  Sparkles, 
  ArrowRight, 
  User, 
  CheckCircle2, 
  Target 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  const iconMap = {
    GraduationCap,
    Calendar,
    Code,
    Sparkles
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navHeight = 72;
      const pos = contactSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 mb-3">
            <User className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
              Overview
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-slate-900 dark:text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">Me</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Getting to know my technical background, aspirations, and career ambitions
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-900/5 relative">
              {/* Profile Card Header with Real Photo */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200/60 dark:border-slate-800/60">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden ring-2 ring-indigo-500/40 shadow-md flex-shrink-0">
                  <img
                    src="/images/profile.jpg"
                    alt="Guru Prasanna"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white">
                    Guru Prasanna
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">
                    Aspiring Software Developer & AI/ML Student
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    SITAMS • B.Tech AI & ML (2023 – 2027)
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                <p>
                  {about.description}
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800/60">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Practical Web Applications</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>AI & Machine Learning Concepts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Continuous Learning & DSA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Collaborative Team Mindset</span>
                </div>
              </div>

              {/* Let's Connect Button */}
              <div className="pt-6">
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <span>Let's Connect</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 4 Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {about.infoCards.map((card, idx) => {
              const IconComponent = iconMap[card.icon] || Code;
              return (
                <div
                  key={card.id}
                  className={`p-5 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                    card.highlight
                      ? 'bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-purple-500/10 dark:from-indigo-950/40 dark:via-cyan-950/30 dark:to-purple-950/30 border-2 border-indigo-500/40 shadow-lg shadow-indigo-500/10'
                      : 'bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl ${
                      card.highlight 
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30' 
                        : 'bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-cyan-400'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {card.label}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white leading-tight">
                    {card.value}
                  </p>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {card.subtext}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
