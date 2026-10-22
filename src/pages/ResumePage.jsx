import React from 'react';
import {
  Download,
  ExternalLink,
  Printer,
  Mail,
  MapPin,
  Phone,
  FileText,
  Globe,
  Code2,
  Sparkles,
  CheckCircle2,
  Layers,
  Cpu,
  Database,
  Server,
  ShieldCheck
} from 'lucide-react';
import { LinkedinIcon } from '../components/Icons';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function ResumePage() {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const data = portfolioData[language] || portfolioData.en;
  const personalInfo = data.personalInfo;
  const ui = data.ui;

  const portfolioUrl = personalInfo.portfolioProjectsUrl || 'https://malik-s-portofolio.vercel.app/projects';

  const handleDownloadResume = () => {
    const previousTitle = document.title;
    // Set clean title so browser "Save as PDF" defaults to this filename
    document.title = isEn
      ? 'Ridwan Malik - Senior Fullstack Developer Resume'
      : 'Ridwan Malik - Resume Fullstack Developer';

    window.print();

    setTimeout(() => {
      document.title = previousTitle;
    }, 1000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 print:p-0 print:m-0 print:max-w-none print:space-y-0">
      {/* Top Action Header (Hidden during print) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md print:hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <FileText className="w-4 h-4" />
            <span>{isEn ? 'Official 1-Page Project & Skills Resume' : 'Resume Eksekutif 1 Lembar — Berfokus pada Proyek & Keahlian'}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
            {isEn ? 'Executive Resume — Ridwan Malik' : 'Resume Eksekutif — Ridwan Malik'}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {isEn
              ? 'Clean 1-page layout highlighting core enterprise engineering projects (Hadirin & Kerja Cerdas) and live portfolio link.'
              : 'Format 1 lembar bersih yang memuat & menekankan Proyek Unggulan (Hadirin & Kerja Cerdas) serta link portofolio resmi.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Main 1-Page PDF Download */}
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all shadow-md shadow-indigo-600/30 hover:scale-[1.02] cursor-pointer"
            title={isEn ? 'Download 1-page clean resume as PDF' : 'Download resume bersih 1 lembar sebagai PDF'}
          >
            <Download className="w-4 h-4" />
            <span>{isEn ? 'Download Resume (1 Page PDF)' : 'Download Resume (1 Lembar PDF)'}</span>
          </button>

          {/* Download Original Static PDF */}
          <a
            href={personalInfo.cvUrl}
            download="Ridwan Malik CV.pdf"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all"
            title={isEn ? 'Download original CV.pdf file' : 'Download file CV.pdf asli'}
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>{ui.downloadPdfOriginal}</span>
          </a>

          {/* Open Original Static PDF */}
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all"
            title={isEn ? 'Open original PDF in new tab' : 'Buka file PDF asli di tab baru'}
          >
            <ExternalLink className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>{ui.openPdfNewTab}</span>
          </a>

          {/* Print */}
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all cursor-pointer"
            title={isEn ? 'Print Resume' : 'Cetak Resume'}
          >
            <Printer className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>{ui.printResume}</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          MAIN 1-PAGE RESUME SHEET
          Engineered for exact 1-page A4 print without spillover
         ========================================================================= */}
      <div
        id="resume-sheet"
        className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-800 dark:text-slate-200 space-y-4 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none print:space-y-3.5 print:rounded-none"
      >
        {/* =======================================================================
            1. HEADER BLOCK
           ======================================================================= */}
        <div className="border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-3 flex items-start justify-between gap-4">
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white print:text-black tracking-tight uppercase">
                {personalInfo.name}
              </h1>
              <span className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 print:text-indigo-800 font-mono tracking-wider uppercase">
                • {isEn ? 'Senior Fullstack Developer & Software Architect' : 'Senior Fullstack Developer & Software Architect'}
              </span>
            </div>

            {/* Contact channels row */}
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 print:text-slate-700">
              <span className="flex items-center gap-1 font-medium">
                <MapPin className="w-3 h-3 text-indigo-600 dark:text-indigo-400 print:text-slate-800 shrink-0" />
                <span>{personalInfo.location}</span>
              </span>
              <span className="text-slate-300 dark:text-slate-700 print:text-slate-400">|</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-3 h-3 text-indigo-600 dark:text-indigo-400 print:text-slate-800 shrink-0" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700 print:text-slate-400">|</span>
              <span className="flex items-center gap-1 font-medium">
                <Phone className="w-3 h-3 text-indigo-600 dark:text-indigo-400 print:text-slate-800 shrink-0" />
                <span>{personalInfo.phone}</span>
              </span>
              <span className="text-slate-300 dark:text-slate-700 print:text-slate-400">|</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon className="w-3 h-3 text-indigo-600 dark:text-indigo-400 print:text-slate-800 shrink-0" />
                <span>linkedin.com/in/ridwan-malik-908499152</span>
              </a>
            </div>

            {/* MANDATORY LIVE PORTFOLIO & PROJECTS LINK */}
            <div className="pt-0.5 flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
              <Globe className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 print:text-indigo-700 shrink-0" />
              <span className="font-semibold text-slate-900 dark:text-white print:text-black">
                {isEn ? 'Live Projects & Portfolio Website:' : 'Website Portofolio & Proyek Live:'}
              </span>
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-indigo-600 dark:text-indigo-400 print:text-indigo-800 underline decoration-indigo-400 hover:text-indigo-500 break-all"
              >
                {portfolioUrl}
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-indigo-500/30 dark:border-indigo-500/50 shadow-md shrink-0 print:border-slate-400 print:w-16 print:h-16">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* =======================================================================
            2. EXECUTIVE PROFESSIONAL SUMMARY
           ======================================================================= */}
        <div className="space-y-0.5">
          <p className="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 print:text-slate-800 leading-relaxed text-justify">
            <strong className="text-slate-900 dark:text-white print:text-black font-semibold">
              {isEn ? 'Professional Summary: ' : 'Ringkasan Profesional: '}
            </strong>
            {isEn
              ? 'Senior Fullstack Developer & Software Architect with 5+ years of full-time professional experience engineering high-performance B2B SaaS platforms, resilient microservices, and AI workflow orchestration. Proficient across JavaScript (React.js, Vue.js, Node.js), PHP (Laravel), Python (FastAPI, Temporal Server), and relational/vector databases (MySQL, PostgreSQL 18, Qdrant). Proven track record leading developer squads, establishing modern CI/CD deployment standards, and delivering high-impact business automation.'
              : 'Senior Fullstack Developer & Software Architect dengan 5+ tahun pengalaman kerja profesional membangun platform B2B SaaS skalabel, microservices tahan gangguan, dan orkestrasi alur kerja AI. Mahir dalam JavaScript (React.js, Vue.js, Node.js), PHP (Laravel), Python (FastAPI, Temporal Server), serta database relasional & vektor (MySQL, PostgreSQL 18, Qdrant). Terbukti memimpin squad pengembang, menerapkan standarisasi CI/CD, dan menghasilkan efisiensi bisnis terukur.'}
          </p>
        </div>

        {/* =======================================================================
            3. FEATURED ENTERPRISE PROJECTS (EMPHASIZED ACROSS FULL WIDTH)
           ======================================================================= */}
        <div className="space-y-3">
          {/* Section Header with Spacious Breadth */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-indigo-200/80 dark:border-slate-800 print:border-slate-300 pb-1.5 gap-1">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 print:text-indigo-800 shrink-0" />
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 print:text-indigo-900">
                {isEn ? 'Featured Enterprise Projects' : 'Proyek Rekayasa Unggulan'}
              </h2>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 print:text-slate-600 hidden sm:inline">
                ({isEn ? 'End-to-End Architecture & Production Implementations' : 'Arsitektur End-to-End & Implementasi Produksi Nyata'})
              </span>
            </div>

            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 print:text-indigo-800 hover:underline flex items-center gap-1 shrink-0"
              title="Explore full projects showcase"
            >
              <Globe className="w-3.5 h-3.5 shrink-0" />
              <span>{isEn ? 'Live Showcase:' : 'Demo Live:'} malik-s-portofolio.vercel.app/projects</span>
              <ExternalLink className="w-3 h-3 print:hidden shrink-0" />
            </a>
          </div>

          {/* -------------------------------------------------------------------
              PROJECT 1: HADIRIN
             ------------------------------------------------------------------- */}
          <div className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-950/50 print:bg-slate-50/50 border border-slate-200 dark:border-slate-800 print:border-slate-300 space-y-2">
            {/* Header row: Title, Category, Role */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-0.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-slate-900 dark:text-white print:text-black">
                  1. Hadirin
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 print:bg-slate-200 print:text-black">
                  B2B SaaS / Workforce Management AI
                </span>
              </div>
              <div className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 print:text-slate-800 font-semibold">
                Role: Full-Stack Developer & Product Architect
              </div>
            </div>

            {/* Tagline */}
            <div className="text-xs font-medium text-slate-800 dark:text-slate-200 print:text-black">
              {isEn
                ? 'AI-Powered Multi-Tenant Workforce & Smart Attendance SaaS Platform'
                : 'Platform Manajemen Tenaga Kerja & Presensi Cerdas Multi-Tenant Berbasis AI'}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 text-[9.5px] font-mono">
              {['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'Gemini API', 'Geofencing', 'Dynamic Roster', 'Granular RBAC'].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 print:bg-white text-slate-700 dark:text-slate-300 print:text-black border border-slate-200 dark:border-slate-800 print:border-slate-300 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Architectural & Feature Bullets */}
            <ul className="text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 print:text-slate-800 space-y-1 list-disc pl-4 leading-relaxed">
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">
                  {isEn ? 'Multi-Tenant Isolation & Granular RBAC: ' : 'Isolasi Multi-Tenant & Granular RBAC: '}
                </strong>
                {isEn
                  ? 'Architected strict organization-level data segregation with a flexible matrix of 35+ permissions across 9 core modules to ensure complete authority segregation.'
                  : 'Membangun arsitektur isolasi data per tenant dengan 35+ permissions dinamis di 9 modul sistem untuk fleksibilitas hak akses dan kepatuhan tata kelola.'}
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">
                  {isEn ? 'Smart Geofenced Attendance & Overnight Roster: ' : 'Presensi Geofencing & Shift Lintas Malam: '}
                </strong>
                {isEn
                  ? 'Engineered accurate GPS radius validation combined with an advanced shift roster algorithm handling cross-midnight overnight schedules (e.g. 22:00–06:00 next day) without duplicate clock-in collisions.'
                  : 'Validasi presensi radius GPS akurat dan engine penjadwalan shift dinamis yang menangani jadwal kerja lintas malam (cross-midnight) tanpa tabrakan log absensi.'}
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">
                  {isEn ? 'AI Workforce Co-Pilot: ' : 'AI Workforce Co-Pilot: '}
                </strong>
                {isEn
                  ? 'Integrated Gemini API for natural language conversational leave requests (Chat-to-Action), automated team capacity impact analysis for supervisors, and tenant HR policy Q&A assistant.'
                  : 'Integrasi LLM (Gemini API) untuk pengajuan izin via percakapan natural (Chat-to-Action), simulasi dampak kapasitas tim saat review izin, dan asisten SOP HR tenant.'}
              </li>
            </ul>

            {/* Impact Callout */}
            <div className="text-[10.5px] p-2 rounded-lg bg-indigo-50/80 dark:bg-indigo-950/40 print:bg-slate-100 border border-indigo-200/60 dark:border-indigo-500/20 print:border-slate-300 text-indigo-950 dark:text-indigo-200 print:text-black font-medium leading-tight flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 print:text-black shrink-0 mt-0.5" />
              <span>
                <strong>{isEn ? 'Verified Impact: ' : 'Dampak Bisnis Terbukti: '}</strong>
                {isEn
                  ? 'Automated 70% of manual attendance operations, eliminated buddy-punching, and provided leadership with a real-time executive presence dashboard.'
                  : 'Mengotomasi 70% beban administrasi absensi manual, mengeliminasi kecurangan absensi, dan memberi visibilitas real-time bagi manajemen perusahaan.'}
              </span>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              PROJECT 2: KERJA CERDAS
             ------------------------------------------------------------------- */}
          <div className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-950/50 print:bg-slate-50/50 border border-slate-200 dark:border-slate-800 print:border-slate-300 space-y-2">
            {/* Header row: Title, Category, Role & Client */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-0.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-slate-900 dark:text-white print:text-black">
                  2. Kerja Cerdas
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 print:bg-slate-200 print:text-black">
                  AI & Workflow Orchestration / Supply Chain
                </span>
              </div>
              <div className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 print:text-slate-800 font-semibold">
                Client: PT AKM Group | Role: Full-Stack & Workflow Architect
              </div>
            </div>

            {/* Tagline */}
            <div className="text-xs font-medium text-slate-800 dark:text-slate-200 print:text-black">
              {isEn
                ? 'End-to-End Intelligent Procurement Orchestration Platform'
                : 'Platform Orkestrasi Pengadaan Cerdas & Supply Chain End-to-End'}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 text-[9.5px] font-mono">
              {['Python 3.12', 'Temporal Server', 'FastAPI', 'PostgreSQL 18', 'Qdrant Vector DB', 'FastEmbed BGE-M3', 'Local Qwen SLM', 'Computer Vision OCR'].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 print:bg-white text-slate-700 dark:text-slate-300 print:text-black border border-slate-200 dark:border-slate-800 print:border-slate-300 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Architectural & Feature Bullets */}
            <ul className="text-[10.5px] sm:text-[11px] text-slate-700 dark:text-slate-300 print:text-slate-800 space-y-1 list-disc pl-4 leading-relaxed">
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">
                  {isEn ? 'Conversational Ingestion & Semantic Normalization: ' : 'Intake Telegram & Normalisasi Semantik RAG: '}
                </strong>
                {isEn
                  ? 'Engineered a Telegram Bot API gateway paired with FastEmbed BGE-M3 (1024-dim) and Qdrant Vector DB to resolve colloquial kitchen slang into 650+ standardized Master SKUs without hallucinated routing.'
                  : 'Gateway Telegram Bot dipadukan dengan FastEmbed BGE-M3 (1024-dim) & Qdrant Vector DB untuk memetakan singkatan bahan baku informal dapur ke 650+ Master SKU katalog resmi.'}
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">
                  {isEn ? 'Local SLM on Vulkan GPU: ' : 'Ekstraksi Local SLM di Akselerasi GPU Vulkan: '}
                </strong>
                {isEn
                  ? 'Deployed localized, quantized Qwen SLM (GGUF via llama.cpp accelerated on Vulkan GPU) for zero-API-cost structured Purchase Request (PR) extraction with strict Segregation of Duties (SoD).'
                  : 'Menjalankan model Qwen SLM terkuantisasi (GGUF via llama.cpp) pada GPU Vulkan lokal untuk ekstraksi Purchase Request terstruktur tanpa biaya API dan tanpa kebocoran data keluar.'}
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">
                  {isEn ? 'Temporal Orchestration & OCR 3-Way Line Matching: ' : 'Orkestrasi Temporal Server & OCR 3-Way Line Matching: '}
                </strong>
                {isEn
                  ? 'Adopted Temporal Server to orchestrate fault-tolerant long-running workflows (purchase approval, partial shipments, discrepancy holds) and Computer Vision OCR to automatically reconcile Chat PR ↔ PO ↔ Goods Receipt.'
                  : 'Temporal Server mengelola proses bisnis jangka panjang (approval, penerimaan parsial, hold pembayaran cacat) dan Vision OCR membaca nota fisik untuk rekonsiliasi 3-way otomatis.'}
              </li>
            </ul>

            {/* Impact Callout */}
            <div className="text-[10.5px] p-2 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/40 print:bg-slate-100 border border-emerald-200/60 dark:border-emerald-500/20 print:border-slate-300 text-emerald-950 dark:text-emerald-200 print:text-black font-medium leading-tight flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 print:text-black shrink-0 mt-0.5" />
              <span>
                <strong>{isEn ? 'Verified Impact: ' : 'Dampak Bisnis Terbukti: '}</strong>
                {isEn
                  ? 'Closed operational variance leaks to near-zero, eliminated 100% of lost orders across multi-brand F&B outlets, and reduced invoice reconciliation from days to seconds.'
                  : 'Menutup kebocoran biaya (variance leak) mendekati nol, mengeliminasi 100% pesanan hilang di puluhan outlet F&B, dan memangkas waktu rekonsiliasi faktur dari berhari-hari menjadi hitungan detik.'}
              </span>
            </div>
          </div>
        </div>

        {/* =======================================================================
            4. CORE TECHNICAL COMPETENCIES (STRUCTURED FULL-WIDTH GRID)
           ======================================================================= */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center gap-1.5 border-b border-indigo-200/80 dark:border-slate-800 print:border-slate-300 pb-1">
            <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 print:text-indigo-800" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 print:text-indigo-900">
              {isEn ? 'Core Technical Competencies' : 'Keahlian Teknis Utama'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-2 text-[10.5px] sm:text-[11px] leading-snug">
            <div className="p-2 rounded-lg bg-slate-50/80 dark:bg-slate-950/70 print:bg-slate-100 border border-slate-200 dark:border-slate-800/80 print:border-slate-200">
              <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white print:text-black mb-0.5">
                <Server className="w-3 h-3 text-indigo-600 dark:text-indigo-400 print:text-slate-700" />
                <span>Backend Engineering</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                Node.js, Express.js, PHP (Laravel), Python (FastAPI), RESTful Architecture, API Gateway
              </p>
            </div>

            <div className="p-2 rounded-lg bg-slate-50/80 dark:bg-slate-950/70 print:bg-slate-100 border border-slate-200 dark:border-slate-800/80 print:border-slate-200">
              <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white print:text-black mb-0.5">
                <Layers className="w-3 h-3 text-indigo-600 dark:text-indigo-400 print:text-slate-700" />
                <span>Frontend Architecture</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                React.js, Vue.js, Tailwind CSS, HTML5, CSS3, Vite, Single Page Applications, Responsive Design
              </p>
            </div>

            <div className="p-2 rounded-lg bg-slate-50/80 dark:bg-slate-950/70 print:bg-slate-100 border border-slate-200 dark:border-slate-800/80 print:border-slate-200">
              <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white print:text-black mb-0.5">
                <Database className="w-3 h-3 text-indigo-600 dark:text-indigo-400 print:text-slate-700" />
                <span>Databases & Vector Storage</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                MySQL, PostgreSQL 18, MongoDB, Qdrant Vector DB, ACID, Query Tuning, Index Optimization
              </p>
            </div>

            <div className="p-2 rounded-lg bg-slate-50/80 dark:bg-slate-950/70 print:bg-slate-100 border border-slate-200 dark:border-slate-800/80 print:border-slate-200">
              <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white print:text-black mb-0.5">
                <Cpu className="w-3 h-3 text-indigo-600 dark:text-indigo-400 print:text-slate-700" />
                <span>AI & Workflow Orchestration</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                Temporal Server, Gemini API, Local Qwen SLM (llama.cpp/Vulkan), Computer Vision OCR, FastEmbed RAG
              </p>
            </div>

            <div className="p-2 rounded-lg bg-slate-50/80 dark:bg-slate-950/70 print:bg-slate-100 border border-slate-200 dark:border-slate-800/80 print:border-slate-200 sm:col-span-2 lg:col-span-2 print:col-span-2">
              <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white print:text-black mb-0.5">
                <ShieldCheck className="w-3 h-3 text-indigo-600 dark:text-indigo-400 print:text-slate-700" />
                <span>DevOps, Security & Governance</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                Docker Containerization, Linux Server (Nginx, SSL/TLS, Cron), CI/CD Deployment Pipelines, Dynamic Granular RBAC, Segregation of Duties (SoD), Agile/Scrum
              </p>
            </div>
          </div>
        </div>

        {/* =======================================================================
            5. BOTTOM CALLOUT (OFFICIAL PORTFOLIO LINK)
           ======================================================================= */}
        <div className="p-2 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/30 print:bg-slate-100 border border-indigo-200/80 dark:border-indigo-800/40 print:border-slate-300 text-xs flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <span className="text-slate-700 dark:text-slate-300 print:text-black">
            {isEn
              ? 'Explore full interactive architecture diagrams, live workflows, and high-resolution screenshots at:'
              : 'Eksplorasi demo interaktif, diagram arsitektur sistem, dan screenshot resolusi tinggi di:'}
          </span>
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-700 dark:text-indigo-400 print:text-indigo-900 underline whitespace-nowrap hover:text-indigo-600 flex items-center gap-1"
          >
            <span>https://malik-s-portofolio.vercel.app/projects</span>
            <ExternalLink className="w-3 h-3 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}
