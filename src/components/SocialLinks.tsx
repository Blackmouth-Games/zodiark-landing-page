import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { MessageCircle, Hash } from 'lucide-react';

const SOCIAL_LINKS = {
  telegram: 'https://t.me/ZodiarkAstralApp',
  discord: 'https://discord.gg/BjkHn92HCP',
  x: 'https://x.com/Zodiark_app',
};

export const SocialLinks = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        asChild
        className="hover:bg-primary/20 hover:text-primary"
      >
        <a
          href={SOCIAL_LINKS.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('nav.telegram')}
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        asChild
        className="hover:bg-primary/20 hover:text-primary"
      >
        <a
          href={SOCIAL_LINKS.discord}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('nav.discord')}
        >
          <Hash className="h-5 w-5" />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        asChild
        className="hover:bg-primary/20 hover:text-primary"
      >
        <a
          href={SOCIAL_LINKS.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('nav.x')}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </Button>
    </div>
  );
};
