import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Building2, 
  Calendar, 
  Eye, 
  X, 
  Sparkles, 
  FileText, 
  Info,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            <Award className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
              Credentials & Courses
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-slate-900 dark:text-white">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500">Certifications</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Professional course accomplishments, technical workshops, and verified credentials gallery
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-900/5 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Certificate Preview Placeholder */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950/90 border border-slate-800 flex flex-col items-center justify-center p-6 text-center mb-5 group-hover:border-indigo-500/40 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400 mb-3 shadow-lg">
                    <Award className="w-7 h-7" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase mb-1">
                    Certificate Preview
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 max-w-xs">
                    {cert.title}
                  </p>
                  <span className="mt-3 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    {cert.status}
                  </span>
                </div>

                {/* Organization and Date */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="flex items-center gap-1 font-medium text-indigo-600 dark:text-cyan-400">
                    <Building2 className="w-3.5 h-3.5" />
                    {cert.organization}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* View Certificate Button */}
              <button
                onClick={() => setSelectedCert(cert)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 rounded-xl transition-all group-hover:border-indigo-500/30"
              >
                <Eye className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                <span>View Certificate</span>
              </button>

            </motion.div>
          ))}
        </div>

        {/* Helpful Tip Box */}
        <div className="mt-12 p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-800/40 max-w-3xl mx-auto flex items-start gap-3">
          <Info className="w-5 h-5 text-indigo-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-900 dark:text-white">
              Editable Certificate Data:
            </span>{' '}
            To link your verified certificates, simply place your certificate PDF or image in the <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 font-mono">public/</code> directory and update the entries in <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 font-mono">src/data/portfolioData.js</code>.
          </div>
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-lg bg-white dark:bg-[#0c1222] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 z-10 space-y-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Certificate Details
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Preview Graphic */}
              <div className="p-8 rounded-2xl bg-gradient-to-tr from-slate-950 to-indigo-950/80 border border-slate-800 text-center text-white space-y-3">
                <div className="w-12 h-12 mx-auto rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-cyan-400">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-base font-heading font-bold text-slate-100">
                  {selectedCert.title}
                </h4>
                <p className="text-xs text-slate-400">
                  Issued by: {selectedCert.organization} • {selectedCert.date}
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>{selectedCert.description}</p>
                <p className="text-indigo-600 dark:text-cyan-400 font-medium">
                  {selectedCert.credentialNote}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
