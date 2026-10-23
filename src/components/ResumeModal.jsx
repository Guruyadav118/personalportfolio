import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, FileText, CheckCircle2, Info, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, skills, experience } = portfolioData;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0c1222] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                  Guru Prasanna — Resume
                </h3>
                <span className="text-xs text-slate-500">
                  Document Preview & Direct PDF Download
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Preview */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300">
            
            {/* Quick summary card */}
            <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <p className="font-heading font-bold text-base text-slate-900 dark:text-white">
                {personal.name}
              </p>
              <p className="text-xs text-indigo-600 dark:text-cyan-400 font-medium">
                {personal.headline}
              </p>
              <p className="text-xs text-slate-500">
                Email: {personal.email} • Location: {personal.location}
              </p>
            </div>

            {/* Academic Snapshot */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Education
              </h4>
              <ul className="space-y-2 text-xs">
                {education.map((edu) => (
                  <li key={edu.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">{edu.degree}</span>
                    <span className="text-slate-500">{edu.institution} ({edu.period})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Internship Snapshot */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Internship Experience
              </h4>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 block">
                  {experience[0].role} — {experience[0].organization}
                </span>
                <span className="text-slate-500 block mb-1">{experience[0].duration}</span>
                <p className="text-slate-600 dark:text-slate-400">{experience[0].description}</p>
              </div>
            </div>

            {/* Placeholder info alert */}
            <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/50 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">
                  Resume File Location:
                </span>
                <p className="mt-0.5">
                  The actual file is served from <code className="font-mono bg-cyan-100 dark:bg-cyan-900/40 px-1 py-0.5 rounded">/public/Guru_Prasanna_Resume.pdf</code>. Clicking "Download PDF" below downloads this file directly.
                </p>
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              Close
            </button>

            <a
              href="/Guru_Prasanna_Resume.pdf"
              download="Guru_Prasanna_Resume.pdf"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-purple-500 rounded-xl shadow-md shadow-indigo-600/25 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
