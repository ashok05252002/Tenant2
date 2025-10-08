import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors duration-200"
      aria-label={t('common.language')}
    >
      <Globe size={16} />
      <span>{i18n.language === 'en' ? t('common.arabic') : t('common.english')}</span>
    </button>
  );
};

export default LanguageSwitcher;
