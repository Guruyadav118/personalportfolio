import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  ArrowRight, 
  Mail, 
  ChevronDown, 
  Sparkles,
  Code2,
  Cpu,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Cycling animated titles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % personal.animatedTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [personal.animatedTitles.length]);

  // Floating tech badges data
  const techBadges = [
    { name: 'React', color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30', pos: '-top-4 left-6', delay: 0 },
    { name: 'Python', color: 'from-yellow-500/20 to-blue-500/20 text-yellow-400 border-yellow-500/30', pos: 'top-16 -right-6', delay: 1 },
    { name: 'JavaScript', color: 'from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-500/30', pos: 'bottom-24 -left-8', delay: 2 },
    { name: 'HTML5', color: 'from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30', pos: '-bottom-4 left-16', delay: 1.5 },
    { name: 'CSS3', color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30', pos: 'top-40 -left-6', delay: 0.5 },
    { name: 'Git', color: 'from-red-500/20 to-orange-500/20 text-red-400 border-red-500/30', pos: 'bottom-16 -right-6', delay: 2.5 },
  ];

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      const navHeight = 72;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic ambient backdrop glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions and Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Small introduction badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                {personal.greeting}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">• Open to Internships</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Guru{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500">
                Prasanna
              </span>
            </h1>

            {/* Main Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-slate-700 dark:text-slate-200">
              {personal.headline}
            </h2>

            {/* Animated Dynamic Text Container */}
            <div className="flex items-center justify-center lg:justify-start gap-2 h-10 text-lg sm:text-xl font-medium">
              <span className="text-slate-500 dark:text-slate-400">Passionate about:</span>
              <div className="relative overflow-hidden h-9 flex items-center">
                <motion.span
                  key={currentTitleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 dark:from-cyan-300 dark:to-indigo-300"
                >
                  {personal.animatedTitles[currentTitleIndex]}
                </motion.span>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Guru_Prasanna_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <Download className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-2">
                Connect:
              </span>
              
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-white bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-0.5"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-white bg-slate-100 dark:bg-slate-900/80 hover:bg-[#0077b5] dark:hover:bg-[#0077b5] border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label="Email Guru Prasanna"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-white bg-slate-100 dark:bg-slate-900/80 hover:bg-rose-600 dark:hover:bg-rose-600 border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image, Glowing Aura & Floating Tech Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative py-6"
          >
            {/* Ambient rotating gradient aura */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-purple-600/30 blur-2xl animate-spin-slow pointer-events-none" />

            {/* Profile Card Container */}
            <div className="relative group">
              
              {/* Animated subtle outer border ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl opacity-75 blur-sm group-hover:opacity-100 transition duration-700 animate-pulse" />
              
              {/* Inner card containing the profile image */}
              <div className="relative w-64 sm:w-80 md:w-84 aspect-[4/5] rounded-3xl overflow-hidden bg-slate-950 border border-slate-700/60 shadow-2xl">
                <img
                  src={personal.avatarUrl}
                  alt="Guru Prasanna - Aspiring Software Developer & AI/ML Student"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Bottom badge overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-center">
                  <p className="text-xs font-semibold text-slate-200 font-heading">
                    Guru Prasanna
                  </p>
                  <p className="text-[11px] text-cyan-400 font-medium">
                    B.Tech AI & ML • Class of 2027
                  </p>
                </div>
              </div>

              {/* Floating Technology Badges */}
              {techBadges.map((badge, idx) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + badge.delay * 0.2, duration: 0.5 }}
                  className={`absolute ${badge.pos} hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl backdrop-blur-md bg-slate-900/90 border shadow-lg ${badge.color} text-xs font-semibold tracking-wide pointer-events-none animate-float`}
                  style={{ animationDelay: `${badge.delay}s` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  <span>{badge.name}</span>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator at bottom */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-semibold tracking-widest uppercase">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 group-hover:border-indigo-500 dark:group-hover:border-cyan-400 flex items-start justify-center p-1.5 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-indigo-500 dark:group-hover:bg-cyan-400"
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
