import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  Mail,
  CheckCircle2,
  Copy,
  Check,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function RecruiterBanner() {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  const data = portfolioData[language] || portfolioData.en;
  const rb = data.recruiterBanner;
  const personalInfo = data.personalInfo;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-50/90 via-white to-purple-50/90 dark:from-indigo-950/80 dark:via-slate-900 dark:to-slate-950 border border-indigo-200 dark:border-indigo-500/30 p-6 sm:p-8 lg:p-10 shadow-xl shadow-indigo-500/5 dark:shadow-indigo-500/10 backdrop-blur-xl transition-colors">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6 lg:gap-8">
        <div className="space-y-3.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{rb.badge}</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {rb.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {rb.desc}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              {rb.check1}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              {rb.check2}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              {rb.check3}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href={personalInfo.cvUrl}
            download="Ridwan Malik CV.pdf"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02] cursor-pointer whitespace-nowrap"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>{rb.downloadCv}</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 hover:border-slate-400 transition-all cursor-pointer shadow-sm whitespace-nowrap"
            title="Copy Email to Clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-emerald-600 dark:text-emerald-400">{rb.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                <span>{rb.copyEmail}</span>
              </>
            )}
          </button>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/90 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all whitespace-nowrap"
          >
            <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span>{rb.sendMessage}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
