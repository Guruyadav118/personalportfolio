import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Building2, 
  Calendar, 
  Award, 
  BookOpen, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 -left-36 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              Academic Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-slate-900 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Education</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Timeline of my formal academic qualifications and technical foundation
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Continuous vertical timeline center/side bar */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-700/30 transform -translate-x-1/2" />

          <div className="space-y-12">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Timeline Marker */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-[#070b14] shadow-md ${
                      item.isCurrent
                        ? 'bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white animate-pulse'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Spacer for Desktop opposite side */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-1/2 ${
                    isEven ? 'md:pr-10' : 'md:pl-10'
                  }`}>
                    <div className={`p-6 rounded-3xl backdrop-blur-xl border transition-all duration-300 hover:-translate-y-1 ${
                      item.isCurrent
                        ? 'bg-gradient-to-br from-white/90 via-indigo-50/40 to-cyan-50/30 dark:from-slate-900/80 dark:via-indigo-950/20 dark:to-cyan-950/20 border-indigo-400/50 dark:border-indigo-500/40 shadow-xl shadow-indigo-500/5'
                        : 'bg-white/70 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800/80 shadow-md'
                    }`}>
                      
                      {/* Badge / Year */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          item.isCurrent
                            ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>

                        <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                          {item.status}
                        </span>
                      </div>

                      {/* Degree */}
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white leading-snug">
                        {item.degree}
                      </h3>

                      {/* Specialization if available */}
                      {item.specialization && (
                        <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-300 mt-1">
                          {item.specialization}
                        </p>
                      )}

                      {/* Institution */}
                      <div className="flex items-center gap-2 mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <Building2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
