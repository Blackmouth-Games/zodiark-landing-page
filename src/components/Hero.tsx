import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { tracker } from '@/utils/tracker';
import oracleHero from '@/assets/oracle-hero.png';
import zodiarkLogo from '@/assets/zodiark-logo.svg';

const TELEGRAM_BOT_URL = 'https://t.me/zodiark_astral_awakening_bot';

export const Hero = () => {
  const { t } = useTranslation();

  const handleCtaClick = () => {
    tracker.trackEvent('lp_click_button');
    window.open(TELEGRAM_BOT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        {/* Logo */}
        <img
          src={zodiarkLogo}
          alt="Zodiark"
          className="w-64 md:w-96 mb-8 animate-glow"
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
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-cosmic animate-glow transition-all hover:scale-105"
        >
          {t('hero.cta')}
        </Button>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
