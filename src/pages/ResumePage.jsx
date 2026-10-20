import React from 'react';
import {
  Download,
  ExternalLink,
  Printer,
  Mail,
  MapPin,
  Phone,
  Award,
  FileText
} from 'lucide-react';
import { LinkedinIcon } from '../components/Icons';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function ResumePage() {
  const { language } = useLanguage();
  const data = portfolioData[language] || portfolioData.en;
  const personalInfo = data.personalInfo;
  const experiences = data.experiences;
  const education = data.education;
  const certifications = data.certifications;
  const ui = data.ui;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md print:hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <FileText className="w-4 h-4" />
            <span>{ui.resumeOfficialNote}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
            {language === 'en' ? 'Interactive Curriculum Vitae — Ridwan Malik' : 'Resume Interaktif Ridwan Malik'}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {ui.atsFriendlyNote}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={personalInfo.cvUrl}
            download="CV-Ridwan-Malik.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/30"
          >
            <Download className="w-4 h-4" />
            <span>{ui.downloadPdfOriginal}</span>
          </a>

          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all"
            title="Open PDF directly in new tab"
          >
            <ExternalLink className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>{ui.openPdfNewTab}</span>
          </a>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all cursor-pointer"
            title="Print resume"
          >
            <Printer className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            <span>{ui.printResume}</span>
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-2xl p-8 sm:p-12 text-slate-800 dark:text-slate-200 space-y-10 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
        {/* Header Block */}
        <div className="border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-8 space-y-4">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white print:text-black tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <div className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400 print:text-indigo-700 tracking-wider uppercase font-mono">
              FULLSTACK DEVELOPER
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 print:text-slate-600">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 print:text-slate-700" />
              <span>{personalInfo.fullAddress}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-700 pt-1">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 print:text-slate-700" />
              <span>{personalInfo.email}</span>
            </a>
            <span className="text-slate-400">|</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 print:text-slate-700" />
              <span>{personalInfo.phone}</span>
            </span>
            <span className="text-slate-400">|</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 print:text-slate-700" />
              <span>linkedin.com/in/ridwan-malik-908499152</span>
            </a>
          </div>
        </div>

        {/* Section 1: Ringkasan Profesional */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">
            {ui.profSummary}
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 print:text-slate-800 leading-relaxed text-justify">
            {personalInfo.aboutSummary}
          </p>
        </div>

        {/* Section 2: Pengalaman Profesional */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">
            {ui.profExperience}
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white print:text-black">
                      {exp.company} – {exp.role}
                    </h3>
                    <div className="text-xs text-indigo-600 dark:text-indigo-300 print:text-slate-600 font-semibold">
                      {exp.period} ({exp.status})
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 print:text-slate-500 font-mono">
                    {exp.location}
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-800 list-disc list-outside pl-4 leading-relaxed">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>

                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 print:bg-slate-100 border border-indigo-200 dark:border-indigo-500/20 print:border-slate-300 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 print:text-slate-900">
                  <strong>{ui.keyAchievement}</strong> {exp.achievement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Pendidikan */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">
            {ui.educationTitle}
          </h2>
          {education.map((edu, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">
                  {edu.institution}
                </span>{' '}
                — {edu.degree}
              </div>
              <div className="text-xs font-mono text-slate-500 print:text-slate-600">
                {edu.period}
              </div>
            </div>
          ))}
        </div>

        {/* Section 4: Kemampuan Teknis */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">
            {ui.technicalSkillsTitle}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 print:bg-slate-100 border border-slate-200 dark:border-slate-800 print:border-slate-200">
              <strong className="text-slate-900 dark:text-white print:text-black">Backend:</strong> PHP (Laravel), Node.js, Express.js, Python (FastAPI)
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 print:bg-slate-100 border border-slate-200 dark:border-slate-800 print:border-slate-200">
              <strong className="text-slate-900 dark:text-white print:text-black">Frontend:</strong> React.js, Vue.js, Tailwind CSS, HTML5, CSS3
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 print:bg-slate-100 border border-slate-200 dark:border-slate-800 print:border-slate-200">
              <strong className="text-slate-900 dark:text-white print:text-black">Database:</strong> MySQL, PostgreSQL 18, MongoDB, Qdrant Vector DB
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 print:bg-slate-100 border border-slate-200 dark:border-slate-800 print:border-slate-200">
              <strong className="text-slate-900 dark:text-white print:text-black">DevOps & Cloud:</strong> Docker, Linux Server, Alibaba Cloud
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 print:bg-slate-100 border border-slate-200 dark:border-slate-800 print:border-slate-200">
              <strong className="text-slate-900 dark:text-white print:text-black">Workflow & AI:</strong> Temporal Server, Gemini API, Local Qwen SLM
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 print:bg-slate-100 border border-slate-200 dark:border-slate-800 print:border-slate-200">
              <strong className="text-slate-900 dark:text-white print:text-black">Methodology:</strong> Agile/Scrum, Git Code Review, Granular RBAC
            </div>
          </div>
        </div>

        {/* Section 5: Sertifikat */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-900 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-1">
            {ui.certificationsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {certifications.map((c, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 print:bg-slate-100 border border-slate-200 dark:border-slate-800 print:border-slate-200 flex items-start gap-2">
                <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white print:text-black">{c.title}</strong> ({c.credential}) — {c.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
