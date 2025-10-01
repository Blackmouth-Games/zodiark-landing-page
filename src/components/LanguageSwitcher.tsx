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
      <SelectTrigger className="w-[80px] bg-background/50 border-border">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {SUPPORTED_LANGUAGES.map((lang) => (
          <SelectItem key={lang} value={lang}>
            {lang.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
