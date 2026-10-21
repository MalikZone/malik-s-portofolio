import React from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  Sparkles,
  Award,
  GraduationCap,
  Download,
  Mail
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import RecruiterBanner from '../components/RecruiterBanner';

export default function AboutPage() {
  const { language } = useLanguage();
  const data = portfolioData[language] || portfolioData.en;
  const personalInfo = data.personalInfo;
  const education = data.education;
  const certifications = data.certifications;
  const ui = data.ui;

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
            <User className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Professional Profile & Core Values' : 'Profil Profesional & Filosofi Kerja'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'en' ? 'About' : 'Tentang'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-300 dark:to-cyan-300">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-lg text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
            {personalInfo.headline}
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {personalInfo.aboutSummary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={personalInfo.cvUrl}
              download="Ridwan Malik CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30"
            >
              <Download className="w-4 h-4" />
              <span>{ui.heroCtaCv}</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-slate-400 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>{ui.heroCtaContact}</span>
            </Link>
          </div>
        </div>

        {/* Quick Profile Snapshot Card */}
        <div className="lg:col-span-4">
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5">
            <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-1 shadow-2xl shadow-indigo-500/20 group">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center relative">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-md" title="Available for Opportunities" />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{personalInfo.name}</h3>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">{personalInfo.role}</p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Experience:</span>
                <span className="font-bold text-slate-900 dark:text-white">{personalInfo.experienceYears} Full-Time</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Current Role:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">Senior Fullstack Developer</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-bold text-slate-900 dark:text-white">{personalInfo.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Email:</span>
                <span className="font-mono text-indigo-600 dark:text-indigo-300 truncate max-w-[170px]">{personalInfo.email}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 w-full justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                {personalInfo.statusBadge}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== WORK PHILOSOPHY ===================== */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span>{ui.principlesTitle}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-sm transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
              01
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              {language === 'en' ? 'Tangible Business Impact' : 'Impact Bisnis Nyata'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'en'
                ? 'Technology is a multiplier. My focus is ensuring every architectural decision eliminates real operational friction and improves organizational bottom line.'
                : 'Teknologi hanyalah alat. Prioritas utama saya adalah memastikan setiap baris kode yang ditulis menyelesaikan friksi operasional nyata dan meningkatkan efisiensi organisasi.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-sm transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
              02
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              {language === 'en' ? 'Clean Architecture & Isolation' : 'Clean Architecture & Keamanan'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'en'
                ? 'Enforcing strict multi-tenant boundary isolation, granular role-based access, strict database foreign constraints, and resilient state machines.'
                : 'Menjunjung tinggi isolasi data (Multi-Tenant), sistem hak akses granular (RBAC), database constraints yang ketat, dan workflow fault-tolerant yang mudah dirawat.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-sm transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold">
              03
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              {language === 'en' ? 'Team Mentorship & Growth' : 'Mentoring & Peningkatan Tim'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'en'
                ? 'As a Senior Developer, success lies in coaching junior engineers, conducting constructive code reviews, and raising the collective engineering bar.'
                : 'Sebagai Senior Developer, kesuksesan bukan hanya tentang kode pribadi, tetapi membimbing rekan junior, menyelenggarakan code review konstruktif, dan menaikkan standar bersama.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-sm transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
              04
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              {language === 'en' ? 'Pragmatic & Grounded AI' : 'Penerapan AI yang Pragmatis'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'en'
                ? 'Integrating modern AI models (Gemini API & local Qwen SLMs) into concrete workflows (RAG, OCR, chat-to-action) without uncontrolled server overhead.'
                : 'Mengintegrasikan model AI (LLM / SLM lokal) secara terukur untuk otomasi tugas repetitif (chat-to-action, normalisasi data bahan baku) tanpa membebani biaya server.'}
            </p>
          </div>
        </div>
      </section>

      {/* ===================== EDUCATION & CERTIFICATIONS ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>{ui.educationTitle}</span>
            </h2>
          </div>

          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                <span>{edu.period}</span>
                <span>Bachelor's Degree</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold">{edu.institution}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 pt-1 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>{ui.certificationsTitle}</span>
            </h2>
          </div>

          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{cert.title}</h4>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-300">{cert.issuer} • {cert.year}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{cert.description}</div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 shrink-0">
                  {cert.credential}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recruiter Banner */}
      <RecruiterBanner />
    </div>
  );
}
