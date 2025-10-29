import { useTranslation } from 'react-i18next';
import oracleHero from '@/assets/oracle-hero.png';
import zodiarkLogo from '@/assets/zodiark-logo.svg';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export const Hero = () => {
  const { t } = useTranslation();

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
          className="w-80 md:w-[28rem] mb-4 md:mb-6"
        />

        {/* Headline */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-glow max-w-5xl leading-tight">
          {t('hero.headline')}
        </h1>

        {/* Subheadline */}
        <p 
          className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-10 md:mb-14 max-w-2xl"
          dangerouslySetInnerHTML={{ __html: t('hero.subheadline') }}
        />
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
