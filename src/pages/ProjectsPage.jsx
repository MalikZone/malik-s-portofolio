import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  ArrowRight,
  Eye,
  CheckCircle2,
  Cpu,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import LightboxModal from '../components/LightboxModal';
import RecruiterBanner from '../components/RecruiterBanner';

export default function ProjectsPage() {
  const { language } = useLanguage();
  const data = portfolioData[language] || portfolioData.en;
  const projects = data.projects;
  const ui = data.ui;

  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeProjectImages, setActiveProjectImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images, index = 0) => {
    setActiveProjectImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'saas') return project.category.toLowerCase().includes('saas');
    if (filter === 'ai') return project.category.toLowerCase().includes('ai');
    return true;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
          <Layers className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'Software Architecture & Case Studies' : 'Portofolio & Studi Kasus Rekayasa Perangkat Lunak'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {language === 'en' ? 'Production Systems & Solutions' : 'Sistem Produksi Nyata & Solusi Arsitektur'}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {language === 'en'
            ? 'Below are flagship enterprise applications engineered for B2B workforce operations and AI procurement orchestration. Each project features structured STAR methodology, in-depth architectural breakdowns, and visual walkthroughs.'
            : 'Berikut adalah proyek-proyek unggulan yang dirancang untuk kebutuhan B2B, otomatisasi pengadaan, dan tata kelola tenaga kerja. Setiap proyek dilengkapi studi kasus terstruktur dengan metode STAR, rincian arsitektur teknis, dan dokumentasi visual.'}
        </p>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800'
            }`}
          >
            {ui.allProjects} ({projects.length})
          </button>
          <button
            onClick={() => setFilter('saas')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'saas'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800'
            }`}
          >
            B2B SaaS & Attendance
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'ai'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800'
            }`}
          >
            AI & Workflow Orchestration
          </button>
        </div>
      </div>

      {/* Projects Detailed List */}
      <div className="space-y-16">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 overflow-hidden shadow-lg dark:shadow-2xl p-6 sm:p-8 lg:p-10 space-y-8 hover:border-indigo-500/40 transition-all"
          >
            {/* Top Info Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                    {project.category}
                  </span>
                  {project.client && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                      {ui.clientLabel} {project.client}
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                    {language === 'en' ? 'Production Enterprise' : 'Produksi / Enterprise'}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {project.name} —{' '}
                  <span className="text-slate-600 dark:text-slate-300 font-semibold text-xl sm:text-2xl">
                    {project.tagline}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-mono">
                  {ui.roleLabel} <strong className="text-slate-900 dark:text-white">{project.role}</strong>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30"
                >
                  <span>{ui.readFullCaseStudy}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Narrative & Screenshots Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Screenshots Gallery Box */}
              <div className="lg:col-span-7 space-y-4">
                <div
                  onClick={() => openLightbox(project.screenshots, 0)}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer group shadow-xl"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-bold border border-slate-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4 text-indigo-400" />
                      {ui.galleryZoomTip} ({project.screenshots.length})
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-[11px] text-slate-300 border border-slate-800">
                    {project.screenshots[0].title}
                  </div>
                </div>

                {/* Thumbnail strip */}
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {project.screenshots.map((s, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => openLightbox(project.screenshots, sIdx)}
                      className="aspect-video rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all bg-slate-950 cursor-pointer relative group"
                      title={s.title}
                    >
                      <img
                        src={s.url}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                      <span className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Problem, Solution & Highlights */}
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {language === 'en' ? 'Solution Overview' : 'Ringkasan Solusi'}
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.executiveSummary || project.overview}
                  </p>
                </div>

                {/* Key Features Bullet */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {ui.featuresTab}
                  </h4>
                  <div className="space-y-2">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white">{feat.title}</span>
                          <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-normal">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    {language === 'en' ? 'Technologies Applied' : 'Teknologi yang Digunakan'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recruiter Callout */}
      <RecruiterBanner />

      {/* Lightbox Modal */}
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
