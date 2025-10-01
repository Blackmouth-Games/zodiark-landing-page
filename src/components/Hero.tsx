import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { tracker } from '@/utils/tracker';
import oracleHero from '@/assets/oracle-hero.png';
import zodiarkLogo from '@/assets/zodiark-logo.svg';
import { SocialLinks } from '@/components/SocialLinks';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { MessageCircle, Users, Twitter, Youtube } from 'lucide-react';

const TELEGRAM_BOT_URL = 'https://t.me/zodiark_astral_awakening_bot';

export const Hero = () => {
  const { t } = useTranslation();

  const handleCtaClick = () => {
    tracker.trackEvent('lp_click_button');
    window.open(TELEGRAM_BOT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sparkles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="sparkles-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50" />
      
      {/* Hero image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <img
          src={oracleHero}
          alt="The Oracle - Zodiark Guardian"
          className="w-full h-full object-cover animate-float"
        />
      </div>

      {/* Language Switcher - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        {/* Logo */}
        <img
          src={zodiarkLogo}
          alt="Zodiark"
          className="w-64 md:w-96 mb-8"
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow max-w-5xl">
          {t('hero.headline')}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
          {t('hero.subheadline')}
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          onClick={handleCtaClick}
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-cosmic transition-all hover:scale-105 mb-12"
        >
          {t('hero.cta')}
        </Button>

        {/* Social Links - Bottom */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://t.me/ZodiarkAstralApp', '_blank', 'noopener,noreferrer')}
            className="gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            {t('nav.telegram')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://discord.gg/BjkHn92HCP', '_blank', 'noopener,noreferrer')}
            className="gap-2"
          >
            <Users className="w-5 h-5" />
            {t('nav.discord')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://x.com/Zodiark_app', '_blank', 'noopener,noreferrer')}
            className="gap-2"
          >
            <Twitter className="w-5 h-5" />
            {t('nav.x')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://www.youtube.com/@ZodiarkApp', '_blank', 'noopener,noreferrer')}
            className="gap-2"
          >
            <Youtube className="w-5 h-5" />
            {t('nav.youtube')}
          </Button>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
