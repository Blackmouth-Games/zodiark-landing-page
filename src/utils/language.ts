/**
 * Language utilities
 */

export const SUPPORTED_LANGUAGES = ['en', 'es', 'pt', 'hi', 'fr', 'zh'] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: Language = 'en';

/**
 * Extract language from URL path
 */
export const getLanguageFromPath = (): Language => {
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];

  if (SUPPORTED_LANGUAGES.includes(firstSegment as Language)) {
    return firstSegment as Language;
  }

  return DEFAULT_LANGUAGE;
};

/**
 * Get language from query parameter
 */
export const getLanguageFromQuery = (): Language | null => {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');

  if (lang && SUPPORTED_LANGUAGES.includes(lang as Language)) {
    return lang as Language;
  }

  return null;
};

/**
 * Detect browser language
 */
export const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0].toLowerCase();
  
  if (SUPPORTED_LANGUAGES.includes(browserLang as Language)) {
    return browserLang as Language;
  }
  
  return DEFAULT_LANGUAGE;
};

/**
 * Build path with language prefix
 */
export const buildLanguagePath = (lang: Language, path: string = ''): string => {
  return `/${lang}${path}`;
};
