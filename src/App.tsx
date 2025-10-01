import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { ThankYou } from "./pages/ThankYou";
import { CookieBanner } from "./components/CookieBanner";
import { initializeUtm } from "./utils/utm";
import { getLanguageFromQuery, buildLanguagePath, detectBrowserLanguage, type Language, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "./utils/language";
import { useTranslation } from 'react-i18next';
import './i18n/i18n';

const queryClient = new QueryClient();

// Language route wrapper
const LanguageRoute = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize UTM tracking
    initializeUtm();

    // Check for lang query param
    const queryLang = getLanguageFromQuery();
    if (queryLang && queryLang !== lang) {
      // Redirect to path-based language
      const search = window.location.search.replace(/[?&]lang=[^&]+/, '');
      navigate(buildLanguagePath(queryLang, window.location.pathname.replace(`/${lang}`, '')) + search, { replace: true });
      return;
    }

    // Set i18n language
    if (lang && SUPPORTED_LANGUAGES.includes(lang as Language)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, navigate]);

  return <>{children}</>;
};

// Auto-detect language redirect
const AutoLanguageRedirect = () => {
  const detectedLang = detectBrowserLanguage();
  return <Navigate to={buildLanguagePath(detectedLang)} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Root redirect to auto-detected language */}
          <Route path="/" element={<AutoLanguageRedirect />} />
          
          {/* Language-prefixed routes */}
          <Route path="/:lang" element={<LanguageRoute><Landing /></LanguageRoute>} />
          <Route path="/:lang/thank-you" element={<LanguageRoute><ThankYou /></LanguageRoute>} />
          
          {/* Catch-all redirect to default language */}
          <Route path="*" element={<Navigate to={buildLanguagePath(DEFAULT_LANGUAGE)} replace />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
