/**
 * UTM Parameter Management
 * Handles parsing, storing, and retrieving UTM parameters
 */

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

const UTM_STORAGE_KEY = 'utm';

/**
 * Parse UTM parameters from URL
 */
export const parseUtmFromUrl = (): UtmParams => {
  const params = new URLSearchParams(window.location.search);
  const utm: UtmParams = {};

  const utmKeys: (keyof UtmParams)[] = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
  ];

  utmKeys.forEach((key) => {
    const value = params.get(key);
    if (value) {
      utm[key] = value;
    }
  });

  return utm;
};

/**
 * Save UTM parameters to localStorage
 */
export const saveUtm = (utm: UtmParams): void => {
  if (Object.keys(utm).length > 0) {
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
  }
};

/**
 * Get stored UTM parameters
 */
export const getUtm = (): UtmParams => {
  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

/**
 * Get all query parameters from current URL
 */
export const getAllQueryParams = (): Record<string, string> => {
  const params = new URLSearchParams(window.location.search);
  const allParams: Record<string, string> = {};
  
  params.forEach((value, key) => {
    allParams[key] = value;
  });
  
  return allParams;
};

/**
 * Append all query parameters to Telegram bot URL with start parameter
 */
export const appendParamsToTelegramUrl = (baseUrl: string): string => {
  const params = getAllQueryParams();
  if (Object.keys(params).length === 0) return baseUrl;

  const paramString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return `${baseUrl}?start=${paramString}`;
};

/**
 * Append UTM parameters to a URL (for internal navigation only)
 */
export const appendUtmToUrl = (url: string, utm?: UtmParams): string => {
  const utmToUse = utm || getUtm();
  if (Object.keys(utmToUse).length === 0) return url;

  const urlObj = new URL(url, window.location.origin);
  Object.entries(utmToUse).forEach(([key, value]) => {
    if (value) {
      urlObj.searchParams.set(key, value);
    }
  });

  return urlObj.pathname + urlObj.search;
};

/**
 * Initialize UTM tracking on app load
 */
export const initializeUtm = (): void => {
  const utm = parseUtmFromUrl();
  saveUtm(utm);
};
