import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onNavigate
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight' && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !images.length) return null;

  const current = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-all animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
        aria-label="Tutup preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + images.length) % images.length);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-indigo-600 transition-all cursor-pointer"
          aria-label="Gambar sebelumnya"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % images.length);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-indigo-600 transition-all cursor-pointer"
          aria-label="Gambar selanjutnya"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main modal content */}
      <div className="relative z-10 max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center">
        <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl max-h-[75vh] flex items-center justify-center">
          <img
            src={current.url}
            alt={current.title || 'Screenshot Project'}
            className="max-h-[75vh] w-auto object-contain select-none"
          />
        </div>

        {/* Caption bar */}
        <div className="mt-3 text-center max-w-2xl px-4 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="font-semibold text-white text-sm sm:text-base">{current.title}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-mono">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          {current.caption && (
            <p className="text-xs sm:text-sm text-slate-400 line-clamp-2">{current.caption}</p>
          )}
        </div>
      </div>
    </div>
  );
}

