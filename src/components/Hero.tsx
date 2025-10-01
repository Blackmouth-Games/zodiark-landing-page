import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { tracker } from '@/utils/tracker';
import oracleHero from '@/assets/oracle-hero.png';
import zodiarkLogo from '@/assets/zodiark-logo.svg';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ExternalLink } from 'lucide-react';

const TELEGRAM_BOT_URL = 'https://t.me/zodiark_astral_awakening_bot';

export const Hero = () => {
  const { t } = useTranslation();

  const handleCtaClick = () => {
    tracker.trackEvent('lp_click_button');
    window.open(TELEGRAM_BOT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden">
      {/* Fire sparks background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="fire-sparks-container">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="fire-spark"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * -10}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
                '--spark-size': `${4 + Math.random() * 6}px`
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50" />
      
      {/* Hero image - fixed, no animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <img
          src={oracleHero}
          alt="The Oracle - Zodiark Guardian"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Language Switcher - Top Right */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center text-center">
        {/* Logo */}
        <img
          src={zodiarkLogo}
          alt="Zodiark"
          className="w-64 md:w-80 mb-4 md:mb-6"
        />

        {/* Headline */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-glow max-w-5xl leading-tight">
          {t('hero.headline')}
        </h1>

        {/* Subheadline */}
        <p 
          className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl"
          dangerouslySetInnerHTML={{ __html: t('hero.subheadline') }}
        />

        {/* CTA Button - Enhanced */}
        <Button
          size="lg"
          onClick={handleCtaClick}
          className="group relative text-base md:text-lg px-8 py-5 md:px-10 md:py-7 bg-primary hover:bg-primary text-primary-foreground shadow-cosmic transition-all hover:scale-105 hover:shadow-glow overflow-hidden font-bold animate-glow"
        >
          <span className="relative z-10 flex items-center gap-2">
            {t('hero.cta')}
            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Button>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
