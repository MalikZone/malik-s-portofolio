import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { LinkedinIcon } from '../components/Icons';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  const data = portfolioData[language] || portfolioData.en;
  const personalInfo = data.personalInfo;
  const ui = data.ui;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: language === 'en' ? 'Senior Fullstack Developer Opportunity' : 'Undangan Interview / Peluang Karir Senior Fullstack',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handlePresetSelect = (presetText, presetSubject) => {
    setFormData((prev) => ({
      ...prev,
      subject: presetSubject,
      message: presetText
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hello Ridwan,\n\nI am ${formData.name} from ${formData.company || 'our company'}.\n\n${formData.message}\n\nSender Email: ${formData.email}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
          <Mail className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'Initiate Discussion & Opportunities' : 'Hubungi & Mulai Diskusi'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {language === 'en' ? "Let's Build Great Systems Together" : 'Mari Bangun Solusi Bersama'}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {language === 'en'
            ? 'I am actively open to Senior Fullstack Developer, Tech Lead, and Cloud / SaaS Architectural consulting roles. Reach out via the form below or direct channels.'
            : 'Saya terbuka untuk peluang posisi Senior Fullstack Developer, Tech Lead, maupun konsultasi arsitektur sistem SaaS & AI. Silakan hubungi saya melalui form di bawah atau jalur langsung.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            {/* Profile Avatar Card Snippet */}
            <div className="flex items-center gap-3.5 pb-5 border-b border-slate-200 dark:border-slate-800">
              <div className="relative w-14 h-14 rounded-2xl p-0.5 bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 shrink-0 shadow-md">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top rounded-[14px]"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-sm" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base truncate">{personalInfo.name}</h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold truncate">{personalInfo.role}</p>
                <span className="inline-block text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                  ● Available for Hire
                </span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>{ui.quickContactChannels}</span>
            </h2>

            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                  <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  {ui.primaryEmail}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-mono text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors block truncate"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                <LinkedinIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                {ui.linkedinProf}
              </span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between font-bold text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors group"
              >
                <span>/in/ridwan-malik-908499152</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                  <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  {ui.contactNumber}
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1 cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                {personalInfo.phone}
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                {ui.currentLocation}
              </span>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {personalInfo.location} (DKI Jakarta, ID)
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                {ui.locationDesc}
              </div>
            </div>

            {/* SLA Note */}
            <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-500/20 text-xs text-indigo-900 dark:text-indigo-200 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span>{ui.slaNote}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Message Composer */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>{ui.sendMessageTitle}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {language === 'en'
                  ? 'Select a fast recruiter preset or draft your custom message.'
                  : 'Pilih template cepat di bawah atau tulis pesan kustom Anda sendiri.'}
              </p>
            </div>

            {/* Recruiter Presets */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {ui.presetPrompt}
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() =>
                    handlePresetSelect(
                      language === 'en'
                        ? 'Hello Ridwan, we reviewed your portfolio case studies (Hadirin & Kerja Cerdas). We have an open Senior Fullstack Developer position and would love to schedule an introductory call. Are you available?'
                        : 'Halo Ridwan, kami melihat profil dan studi kasus portofolio Anda (Hadirin & Kerja Cerdas). Kami memiliki posisi terbuka untuk Senior Fullstack Developer dan ingin mengundang Anda untuk sesi diskusi pengenalan (intro call). Apakah Anda bersedia?',
                      language === 'en' ? 'Senior Fullstack Developer Opportunity' : 'Peluang Karir: Senior Fullstack Developer'
                    )
                  }
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-indigo-50 dark:bg-slate-950 dark:hover:bg-indigo-600/20 border border-slate-200 hover:border-indigo-300 dark:border-slate-800 dark:hover:border-indigo-500/40 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition-all text-left cursor-pointer"
                >
                  {ui.presetSeniorRole}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handlePresetSelect(
                      language === 'en'
                        ? 'Hello Ridwan, I would like to consult on enterprise SaaS architecture, multi-tenant RBAC, and Temporal / AI workflow orchestration for our product roadmap.'
                        : 'Halo Ridwan, saya tertarik mendiskusikan arsitektur sistem B2B SaaS dan integrasi AI / Temporal workflow untuk roadmap produk tim kami.',
                      language === 'en' ? 'System Architecture Consulting & Discussion' : 'Diskusi Arsitektur Sistem & Kolaborasi'
                    )
                  }
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-indigo-50 dark:bg-slate-950 dark:hover:bg-indigo-600/20 border border-slate-200 hover:border-indigo-300 dark:border-slate-800 dark:hover:border-indigo-500/40 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition-all text-left cursor-pointer"
                >
                  {ui.presetArchDiscuss}
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">{ui.yourName}</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">{ui.yourEmail}</label>
                  <input
                    type="email"
                    required
                    placeholder="recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {ui.yourCompany}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Tech Global"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">{ui.subject}</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">{ui.messageBody}</label>
                <textarea
                  rows={5}
                  required
                  placeholder={
                    language === 'en'
                      ? 'Describe the role, project, or discussion agenda...'
                      : 'Ceritakan tentang peran, proyek, atau peluang yang ingin didiskusikan...'
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>{ui.sendViaEmail}</span>
              </button>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>
                    {ui.emailOpenedFeedback}{' '}
                    <strong>{personalInfo.email}</strong>.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
