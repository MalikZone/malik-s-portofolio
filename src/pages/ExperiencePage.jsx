import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Building2,
  MapPin,
  Download,
  Users
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import RecruiterBanner from '../components/RecruiterBanner';

export default function ExperiencePage() {
  const { language } = useLanguage();
  const data = portfolioData[language] || portfolioData.en;
  const experiences = data.experiences;
  const education = data.education;
  const certifications = data.certifications;
  const personalInfo = data.personalInfo;
  const ui = data.ui;

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'Professional Experience & Credentials' : 'Pengalaman Profesional & Kualifikasi'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {language === 'en' ? 'Verified Career Journey' : 'Perjalanan Karir & Pengalaman Teruji'}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {language === 'en'
            ? 'Over 5 years of full-time professional experience in the technology industry, architecting enterprise web systems, leading technical developer squads, and optimizing mission-critical production workloads.'
            : 'Lebih dari 5 tahun bekerja secara penuh waktu (full-time) di industri teknologi informasi, memimpin tim pengembang, merancang solusi sistem web berkinerja tinggi, dan berkontribusi langsung pada efisiensi operasional bisnis.'}
        </p>

        <div className="pt-2 flex items-center gap-3">
          <a
            href={personalInfo.cvUrl}
            download="Ridwan Malik CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Download Full CV (PDF)' : 'Download CV Lengkap (PDF)'}</span>
          </a>
        </div>
      </div>

      {/* ===================== WORK EXPERIENCE TIMELINE ===================== */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Building2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span>{ui.profExperience}</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 hover:border-indigo-500/40 transition-all shadow-lg dark:shadow-xl space-y-6"
            >
              {/* Header Box */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                      {exp.status}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-base font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col lg:items-end text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono gap-1">
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold">
                    <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievement Highlight */}
              <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-500/30 flex items-start gap-3.5">
                <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                    {ui.keyAchievement}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-semibold mt-0.5 leading-relaxed">
                    {exp.achievement}
                  </p>
                </div>
              </div>

              {/* Detailed Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {ui.responsibilitiesTitle}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Used */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  {ui.primaryTechInRole}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== EDUCATION & CERTIFICATIONS ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <span>{ui.educationTitle}</span>
            </h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono text-indigo-600 dark:text-indigo-400">
                  <span className="font-bold">{edu.period}</span>
                  <span className="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-semibold">
                    Bachelor's Degree
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{edu.institution}</p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Recruiter quick summary note */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-2 shadow-sm">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{ui.workStyleTitle}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {ui.workStyleDesc}
            </p>
          </div>
        </div>

        {/* Certifications Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <span>{ui.certificationsTitle}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-sm transition-all space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-mono font-bold">
                      {cert.year}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Credential: {cert.credential}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-500 font-mono border-t border-slate-200 dark:border-slate-800/80">
                  {cert.category}
                </div>
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
