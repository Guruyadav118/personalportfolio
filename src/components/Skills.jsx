import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  FileCode2, 
  Braces, 
  Layout, 
  Palette, 
  Atom, 
  Smartphone, 
  MousePointerClick, 
  Server, 
  Layers, 
  DatabaseZap, 
  Database, 
  Boxes, 
  GitBranch, 
  Laptop,
  CheckCircle,
  Wrench
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const iconMap = {
    Code2,
    Terminal,
    FileCode2,
    Braces,
    Layout,
    Palette,
    Atom,
    Smartphone,
    MousePointerClick,
    Server,
    Layers,
    DatabaseZap,
    Database,
    Boxes,
    GitBranch,
    Github: GithubIcon,
    Laptop
  };

  const categories = [
    { id: 'all', label: 'All Skills' },
    ...skills.categories.map(c => ({ id: c.id, label: c.name }))
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? skills.categories 
    : skills.categories.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      {/* Background glow */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            <Wrench className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
              Technical Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-slate-900 dark:text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Skills</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Categorized overview of programming languages, frameworks, and tools in my toolkit
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                    : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-900/5 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                    {category.name}
                  </h3>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {category.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const SkillIcon = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-500/30 transition-all group cursor-default"
                      >
                        <SkillIcon className="w-4 h-4 text-indigo-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                            {skill.category}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
