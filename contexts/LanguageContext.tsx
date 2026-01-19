import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import { Language } from '@/services/translationService';

const LANGUAGE_STORAGE_KEY = '@moon_app_language';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => Promise<void>;
  isLoading: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadLanguage();
  }, []);

  const getDeviceLanguage = (): Language => {
    const deviceLocale = Localization.getLocales()[0]?.languageCode || 'en';
    
    // Map device language to supported languages
    const supportedLanguages: Language[] = ['en', 'es', 'fr', 'de', 'hi', 'zh', 'ja', 'it'];
    
    // Check if device language is directly supported
    if (supportedLanguages.includes(deviceLocale as Language)) {
      return deviceLocale as Language;
    }
    
    // Default to English if not supported
    return 'en';
  };

  const loadLanguage = async () => {
    try {
      const saved = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved && ['en', 'es', 'fr', 'de', 'hi', 'zh', 'ja', 'it'].includes(saved)) {
        setLanguageState(saved as Language);
      } else {
        // First install - detect and set device language
        const deviceLang = getDeviceLanguage();
        setLanguageState(deviceLang);
        await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, deviceLang);
      }
    } catch (error) {
      console.error('Failed to load language:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setLanguage = async (newLanguage: Language) => {
    try {
      await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
      setLanguageState(newLanguage);
    } catch (error) {
      console.error('Failed to save language:', error);
      throw error;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoading }}>
      {!isLoading && children}
    </LanguageContext.Provider>
  );
}
