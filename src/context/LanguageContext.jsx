import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      // Default is 'en' (English)
      return saved === 'id' ? 'id' : 'en';
    } catch (e) {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      document.documentElement.lang = language;
      localStorage.setItem('portfolio_lang', language);
    } catch (e) {}
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isEn: language === 'en' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

