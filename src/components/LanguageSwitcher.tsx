import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SUPPORTED_LANGUAGES, type Language, buildLanguagePath } from '@/utils/language';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const languageLabels: Record<string, string> = {
    en: 'EN',
    es: 'ES',
    pt: 'PT',
    hi: 'HI',
  };

  const handleLanguageChange = (lang: Language) => {
    i18n.changeLanguage(lang);
    
    // Preserve query params (including UTMs)
    const search = window.location.search;
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.split('/').slice(2).join('/');
    
    navigate(buildLanguagePath(lang, '/' + pathWithoutLang) + search);
  };

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[90px] bg-background/50 backdrop-blur-sm border-border hover:bg-background/70 transition-colors">
        <SelectValue>
          {languageLabels[i18n.language] || 'EN'}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {SUPPORTED_LANGUAGES.map((lang) => (
          <SelectItem key={lang} value={lang}>
            {languageLabels[lang]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
