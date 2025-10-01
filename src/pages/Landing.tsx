import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/Hero';
import { TrackerProvider } from '@/components/TrackerProvider';
import { CookieBanner } from '@/components/CookieBanner';

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <TrackerProvider eventName="lp_page_view">
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-1">
          <Hero />
        </main>

        {/* Footer */}
        <footer className="bg-card/50 backdrop-blur-lg border-t border-border py-6">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <p>{t('footer.rights')}</p>
            </div>
          </div>
        </footer>

        {/* Cookie Banner */}
        <CookieBanner />
      </div>
    </TrackerProvider>
  );
};
