import { useContext, useCallback } from 'react';
import { Language, getTranslations, Translations, getPhaseTranslation } from '@/services/translationService';
import { LanguageContext } from '@/contexts/LanguageContext';

export function useTranslation() {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }

  const { language, setLanguage, isLoading } = context;

  const t = getTranslations(language);

  const translatePhase = useCallback((phase: string) => {
    return getPhaseTranslation(phase, language);
  }, [language]);

  return {
    language,
    setLanguage,
    t: { ...t, language },
    translatePhase,
    isLoading,
  };
}
