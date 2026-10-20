import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  CheckCircle2,
  Cpu,
  Workflow,
  TrendingUp
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import LightboxModal from '../components/LightboxModal';
import RecruiterBanner from '../components/RecruiterBanner';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const { language } = useLanguage();
  const data = portfolioData[language] || portfolioData.en;
  const projects = data.projects;
  const ui = data.ui;

  const project = projects.find((p) => p.id === id);

  const [activeTab, setActiveTab] = useState('star'); // 'star' | 'features' | 'tech'
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Find next project for bottom navigation
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Breadcrumb & Back */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{ui.backToProjects}</span>
        </Link>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <span>{ui.caseStudyLabel}</span>
          <span>/</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">{project.name}</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
            {project.category}
          </span>
          {project.client && (
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
              {ui.clientLabel} {project.client}
            </span>
          )}
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
            {language === 'en' ? 'Enterprise Architecture' : 'Arsitektur Enterprise'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {project.name}
        </h1>
        <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
          {project.tagline}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <div>
            <span className="text-slate-500">{ui.roleLabel}</span>{' '}
            <strong className="text-slate-900 dark:text-white">{project.role}</strong>
          </div>
          <div>
            <span className="text-slate-500">{ui.focusLabel}</span>{' '}
            <strong className="text-indigo-600 dark:text-indigo-300">End-to-End Fullstack & Architecture</strong>
          </div>
          <div>
            <span className="text-slate-500">{ui.statusLabel}</span>{' '}
            <strong className="text-emerald-600 dark:text-emerald-400">Production Deployed</strong>
          </div>
        </div>
      </div>

      {/* Main Visual Gallery Showcase */}
      <div className="space-y-4 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xl">
        {/* Active Large Display */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer group shadow-xl"
        >
          <img
            src={project.screenshots[selectedImageIndex].url}
            alt={project.screenshots[selectedImageIndex].title}
            className="w-full h-full object-contain bg-slate-950 group-hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-bold border border-slate-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye className="w-4 h-4 text-indigo-400" />
              {ui.galleryZoomTip}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between">
            <div>
              <div className="font-semibold text-white text-sm">
                {project.screenshots[selectedImageIndex].title}
              </div>
              <div className="text-xs text-slate-400 line-clamp-1">
                {project.screenshots[selectedImageIndex].caption}
              </div>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 shrink-0">
              {selectedImageIndex + 1} / {project.screenshots.length}
            </span>
          </div>
        </div>

        {/* Thumbnail Carousel Picker */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {project.screenshots.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={`aspect-video rounded-xl overflow-hidden border p-0.5 transition-all cursor-pointer relative ${
                selectedImageIndex === idx
                  ? 'border-indigo-600 dark:border-indigo-500 ring-2 ring-indigo-500/30'
                  : 'border-slate-300 dark:border-slate-800 hover:border-slate-400 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={s.url}
                alt={s.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Case Study Tabbed Content */}
      <div className="space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('star')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'star'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>{ui.starTab}</span>
          </button>

          <button
            onClick={() => setActiveTab('features')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'features'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
            }`}
          >
            <Workflow className="w-4 h-4" />
            <span>{ui.featuresTab}</span>
          </button>

          <button
            onClick={() => setActiveTab('tech')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'tech'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>{ui.techTab}</span>
          </button>
        </div>

        {/* Tab 1: STAR Breakdown */}
        {activeTab === 'star' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-500/20 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200">
              {ui.starInfo}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Situation */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold text-xs">
                    S
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Situation</h3>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.star.situation}
                </p>
              </div>

              {/* Task */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-xs">
                    T
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Task</h3>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.star.task}
                </p>
              </div>

              {/* Action */}
              <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
                    A
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Action (Architecture & Implementation)
                  </h3>
                </div>
                <div className="space-y-3">
                  {project.star.action.map((act, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-slate-900 border border-emerald-300 dark:border-emerald-500/30 space-y-3 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-xs">
                    R
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Result & Business Value</h3>
                </div>
                <p className="text-sm sm:text-base text-emerald-900 dark:text-emerald-200 leading-relaxed font-semibold">
                  {project.star.result}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Architectural Pillars & Features */}
        {activeTab === 'features' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-sm transition-all space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{feat.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Tech Stack & System Engineering */}
        {activeTab === 'tech' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                {ui.techTab}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {language === 'en'
                  ? 'Each technology layer was chosen to balance ultra-low latency, data integrity, security boundaries, and enterprise maintainability.'
                  : 'Setiap layer dipilih untuk mencapai keseimbangan antara keandalan sistem, latency respons sub-detik, isolasi data, dan efisiensi pemeliharaan jangka panjang.'}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                {project.techStack.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recruiter Callout */}
      <RecruiterBanner />

      {/* Bottom Project Navigator */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{ui.backToProjects}</span>
        </Link>

        <Link
          to={`/projects/${nextProject.id}`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 group"
        >
          <span>{ui.nextProjectLabel} {nextProject.name}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={project.screenshots}
        currentIndex={selectedImageIndex}
        onNavigate={(newIdx) => setSelectedImageIndex(newIdx)}
      />
    </div>
  );
}
