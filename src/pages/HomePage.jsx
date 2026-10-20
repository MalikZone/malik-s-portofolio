import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  Mail,
  CheckCircle2,
  Sparkles,
  Layers,
  Terminal,
  TrendingUp,
  Clock,
  Eye
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import RecruiterBanner from '../components/RecruiterBanner';
import LightboxModal from '../components/LightboxModal';

export default function HomePage() {
  const { language } = useLanguage();
  const data = portfolioData[language] || portfolioData.en;
  const personalInfo = data.personalInfo;
  const projects = data.projects;
  const experiences = data.experiences;
  const ui = data.ui;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeProjectImages, setActiveProjectImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images, index = 0) => {
    setActiveProjectImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 pb-8 overflow-hidden">
        {/* Ambient decorative lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Recruiter Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-slate-900/90 border border-indigo-200 dark:border-indigo-500/30 text-xs font-semibold text-slate-800 dark:text-slate-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 -ml-4" />
                <span className="font-bold text-indigo-600 dark:text-indigo-300">{ui.heroStatus}</span>
                <span>{ui.heroRoleBadge}</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                  {ui.heroGreeting}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-300">
                    {personalInfo.name}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-700 dark:text-slate-300">
                  {personalInfo.role}
                </p>
              </div>

              {/* Pitch */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {personalInfo.headline} {personalInfo.aboutSummary.slice(0, 160)}...
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 text-left max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>React.js, Vue.js, Node.js, Laravel, Python</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Multi-Tenant RBAC & Geofencing</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Temporal Server & 3-Way Matching</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Alibaba Cloud & Kominfo AI Certified</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/25 hover:scale-[1.02] transition-all"
                >
                  <span>{ui.heroCtaProjects}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={personalInfo.cvUrl}
                  download="CV-Ridwan-Malik.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 hover:border-indigo-500/50 transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>{ui.heroCtaCv}</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900/60 border border-slate-300 dark:border-transparent dark:hover:border-slate-800 transition-all"
                >
                  <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>{ui.heroCtaContact}</span>
                </Link>
              </div>
            </div>

            {/* Right Card / Interactive Terminal & Avatar Mockup */}
            <div className="lg:col-span-5 space-y-4">
              {/* Profile Card Snippet */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl group hover:border-indigo-500/40 transition-all">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-0.5 bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 shadow-lg shadow-indigo-500/20 shrink-0">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top rounded-[14px]"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-sm" title="Active & Available" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg truncate">
                      {personalInfo.name}
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 truncate mt-0.5">
                    {personalInfo.role}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Jakarta, ID • {personalInfo.experienceYears}
                  </p>
                </div>
              </div>

              {/* Terminal Window Mockup */}
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-5 text-slate-200 backdrop-blur-xl group hover:border-indigo-500/50 transition-all">
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>ridwan-malik.profile</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                    v4.0.0
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="pt-4 space-y-3 font-mono text-xs text-slate-300 leading-relaxed">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span> = {'{'}
                  </div>

                  <div className="pl-4 space-y-1 text-slate-300">
                    <div>
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.name}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">currentRole:</span>{' '}
                      <span className="text-emerald-300">"Senior Fullstack Developer"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">company:</span>{' '}
                      <span className="text-emerald-300">"PT Teltics Media"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">experience:</span>{' '}
                      <span className="text-amber-300">"{personalInfo.experienceYears} Full-Time"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">primaryStacks:</span> [
                      <span className="text-indigo-300">"React"</span>,{' '}
                      <span className="text-indigo-300">"Node.js"</span>,{' '}
                      <span className="text-indigo-300">"Laravel"</span>,{' '}
                      <span className="text-indigo-300">"Python"</span>
                      ],
                    </div>
                    <div>
                      <span className="text-slate-400">architecturePillars:</span> [
                      <span className="text-cyan-300">"Multi-Tenant"</span>,{' '}
                      <span className="text-cyan-300">"Temporal Workflows"</span>,{' '}
                      <span className="text-cyan-300">"AI/RAG"</span>
                      ],
                    </div>
                    <div>
                      <span className="text-slate-400">status:</span>{' '}
                      <span className="text-emerald-400">"Ready for Impact & Leadership"</span>
                    </div>
                  </div>

                  <div>{'}'};</div>

                  <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                    <span className="text-indigo-400 flex items-center gap-1 font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      Proven: +40% Workflow Efficiency
                    </span>
                    <span className="text-slate-500">Jakarta, ID</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== KEY METRICS STRIP ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.keyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-300 dark:to-cyan-300 group-hover:scale-105 transition-transform origin-left">
                {metric.value}
              </div>
              <div className="mt-2 text-sm font-bold text-slate-900 dark:text-white">{metric.label}</div>
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-normal">{metric.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FEATURED PROJECTS ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
              <Layers className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Flagship Case Studies & Engineering' : 'Studi Kasus & Portofolio Unggulan'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'en' ? 'Enterprise Production Systems' : 'Proyek Berdampak Skala Enterprise'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              {language === 'en'
                ? 'Two production systems designed with modern architectures, resolving real operational friction through AI automation and industry-grade workflows.'
                : 'Dua sistem produksi yang dirancang dengan arsitektur modern, menyelesaikan masalah operasional riil dengan otomatisasi AI dan alur kerja berstandar industri.'}
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 group"
          >
            <span>{ui.viewAllProjects}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 overflow-hidden shadow-md dark:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image Preview with Overlay Action */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 backdrop-blur-md border border-slate-700 text-indigo-300">
                    {project.category}
                  </span>
                </div>

                {/* Quick Screenshot count & preview trigger */}
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={() => openLightbox(project.screenshots, 0)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-700 hover:bg-indigo-600 hover:border-indigo-500 transition-all cursor-pointer"
                    title={ui.galleryZoomTip}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{project.screenshots.length} Screenshots</span>
                  </button>
                </div>

                {/* Bottom title overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                    <span className="font-bold text-slate-700 dark:text-slate-300">{ui.roleLabel}</span>
                    <span>{project.role}</span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>

                  {/* Highlights Bullet */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-900 dark:text-white">{feat.title}:</strong>{' '}
                          <span className="text-slate-600 dark:text-slate-400">{feat.desc.slice(0, 80)}...</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & CTA */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 6).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 6 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800/40 text-slate-500 dark:text-slate-400">
                        +{project.techStack.length - 6} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => openLightbox(project.screenshots, 0)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{ui.galleryZoomTip}</span>
                    </button>

                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/20 group/btn"
                    >
                      <span>{ui.readFullCaseStudy}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== EXPERIENCE SNAPSHOT ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
              <Clock className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Verified Career Trajectory' : 'Rekam Jejak Karir Profesional'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'en' ? 'Proven Industry Track Record' : 'Pengalaman Terbukti di Industri'}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              {language === 'en'
                ? 'Full-time commercial roles with end-to-end accountability for software architecture, team leadership, and production stability.'
                : 'Bekerja secara penuh waktu dengan tanggung jawab menyeluruh mulai dari arsitektur teknis, kepemimpinan tim, hingga pengoptimalan sistem produksi.'}
            </p>
          </div>

          <Link
            to="/experience"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
          >
            <span>{language === 'en' ? 'View Full Career Timeline & Certificates' : 'Lihat Timeline Detail & Sertifikat'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm dark:shadow-none space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                      {exp.status}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-1">{exp.company}</div>
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">{exp.period}</div>
              </div>

              {/* Achievement Callout */}
              <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/20 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 flex items-start gap-3">
                <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 dark:text-white">{ui.keyAchievement}</strong> {exp.achievement}
                </span>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-2">
                {exp.highlights.slice(0, 4).map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2 flex flex-wrap gap-2">
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== RECRUITER CTA BANNER ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RecruiterBanner />
      </section>

      {/* Lightbox Modal for Screenshots */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={activeProjectImages}
        currentIndex={currentImageIndex}
        onNavigate={(newIdx) => setCurrentImageIndex(newIdx)}
      />
    </div>
  );
}
