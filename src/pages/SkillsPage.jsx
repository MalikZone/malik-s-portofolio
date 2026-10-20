import React, { useState } from 'react';
import {
  Code2,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  Layout,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import RecruiterBanner from '../components/RecruiterBanner';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck
};

export default function SkillsPage() {
  const { language } = useLanguage();
  const data = portfolioData[language] || portfolioData.en;
  const skillCategories = data.skillCategories;
  const ui = data.ui;

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.name === selectedCategory);

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
          <Code2 className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'Competency Matrix & Engineering Stack' : 'Matriks Kompetensi & Engineering Stack'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {language === 'en' ? 'Technical Competencies & Engineering Depth' : 'Keahlian Teknis & Kedalaman Rekayasa'}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {language === 'en'
            ? 'A comprehensive matrix forged through 5+ years of building production-grade web systems. Not just keywords, but technologies leveraged to deliver data integrity, high concurrency, and low latency.'
            : 'Kombinasi keahlian praktis yang diasah melalui 5+ tahun pengembangan produk enterprise. Bukan sekadar daftar keyword, melainkan teknologi yang saya gunakan secara mendalam untuk menangani beban produksi, keamanan data, dan kepuasan pengguna.'}
        </p>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800'
            }`}
          >
            {ui.allCategories} ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.name
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredCategories.map((cat, idx) => {
          const Icon = iconMap[cat.icon] || Code2;
          return (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-lg dark:shadow-xl transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{cat.name}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{cat.description}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {cat.skills.length} {ui.skillsCount}
                  </span>
                </div>

                {/* Skills List in this Category */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                          <span className="font-bold text-slate-900 dark:text-white text-sm">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {skill.years && (
                            <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
                              {skill.years}
                            </span>
                          )}
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              skill.level === 'Expert'
                                ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30'
                                : skill.level === 'Certified'
                                ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30'
                                : 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      {skill.note && (
                        <p className="text-xs text-slate-600 dark:text-slate-400 pl-4">{skill.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag note */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>{ui.productionTested}</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {ui.productionReady}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Architecture Competency Showcase */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-indigo-50/80 via-white to-purple-50/80 dark:from-slate-900 dark:via-indigo-950/40 dark:to-slate-900 border border-indigo-200 dark:border-indigo-500/30 space-y-6 shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{ui.advancedArchPatterns}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'en' ? 'Advanced Architectural Systems & State Machines' : 'Kesiapan Arsitektur Tingkat Lanjut'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {ui.advancedArchDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="font-bold text-slate-900 dark:text-white text-sm">Multi-Tenant Isolation</div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
              {language === 'en'
                ? 'Strict data isolation per tenant organization, schema routing, and tenant context middleware.'
                : 'Pemisahan data aman per organisasi, dynamic schema routing, dan kontrol izin berbasis tenant.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="font-bold text-slate-900 dark:text-white text-sm">Granular RBAC Matrix</div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
              {language === 'en'
                ? 'Dynamic 35+ permissions across 9 system modules with API endpoint guards and UI directive controls.'
                : 'Matriks 35+ permissions dinamis di 9 modul dengan perlindungan endpoint API dan UI guard.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="font-bold text-slate-900 dark:text-white text-sm">Temporal Workflow Orchestration</div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
              {language === 'en'
                ? 'Resilient state machines for long-running purchasing cascades, auto-retries, and discrepancy isolation.'
                : 'Proses bisnis panjang yang fault-tolerant, auto-retry, idempotent, dan tahan server reboot.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="font-bold text-slate-900 dark:text-white text-sm">Pragmatic AI & Vector RAG</div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
              {language === 'en'
                ? 'LLM/SLM integration (Qwen Vulkan / Gemini) and Qdrant semantic normalization with zero API runaway cost.'
                : 'Pemanfaatan model LLM/SLM dan Qdrant untuk otomasi operasional deterministik tanpa biaya API liar.'}
            </p>
          </div>
        </div>
      </section>

      {/* Recruiter Banner */}
      <RecruiterBanner />
    </div>
  );
}
