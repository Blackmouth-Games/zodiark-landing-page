import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/Hero';
import { TrackerProvider } from '@/components/TrackerProvider';

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
        <footer className="bg-card/50 backdrop-blur-lg border-t border-border py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <div className="flex gap-6">
                <a href="#" className="hover:text-foreground transition-colors">
                  {t('footer.privacy')}
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t('footer.terms')}
                </a>
              </div>
              <p>{t('footer.rights')}</p>
            </div>
          </div>
        </footer>
      </div>
    </TrackerProvider>
  );
};
