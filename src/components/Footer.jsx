import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  MapPin,
  Download,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const data = portfolioData[language] || portfolioData.en;
  const personalInfo = data.personalInfo;
  const ui = data.ui;

  return (
    <footer className="relative bg-slate-100/90 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 overflow-hidden transition-colors">
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/60">
          {/* Col 1: Brand & Role */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 overflow-hidden">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[9px] overflow-hidden flex items-center justify-center">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{personalInfo.name}</h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{personalInfo.role}</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {personalInfo.aboutSummary}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                {personalInfo.statusBadge}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300">
              {language === 'en' ? 'Page Navigation' : 'Navigasi Halaman'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {data.nav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300">
              {language === 'en' ? 'Contact & Documents' : 'Kontak & Dokumen'}
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors group"
              >
                <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                <span className="truncate">{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors group"
              >
                <LinkedinIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>{personalInfo.location}</span>
              </div>

              <div className="pt-2">
                <a
                  href={personalInfo.cvUrl}
                  download="Ridwan Malik CV.pdf"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-50 dark:bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-600/30 border border-indigo-200 dark:border-indigo-500/30 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} {personalInfo.name}. {ui.copyright}</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              {ui.builtWith}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
