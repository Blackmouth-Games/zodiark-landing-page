import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/Hero';
import { TrackerProvider } from '@/components/TrackerProvider';
import { CookieBanner } from '@/components/CookieBanner';

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <TrackerProvider eventName="lp_page_view">
      <div className="h-[100svh] flex flex-col overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <Hero />
        </main>

        {/* Footer */}
        <footer className="relative bg-card/50 backdrop-blur-lg border-t border-border py-3">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
              {/* Social Links */}
              <div className="flex gap-4 items-center">
                <a
                  href="https://t.me/ZodiarkAstralApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Telegram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-1.018 4.498-1.438 5.965-.177.62-.527.826-.864.846-.734.067-1.292-.485-2.003-.95-.111-.072-2.124-1.357-2.866-1.978-.215-.18-.464-.54-.008-.966.36-.337 2.552-2.34 3.691-3.426.124-.118.062-.278-.062-.278-.248 0-.433.122-1.363.777-1.234.87-2.531 1.693-3.048 2.023-.577.368-1.05.435-1.677.337-.737-.115-1.41-.267-2.046-.482-.842-.284-1.51-.435-1.45-1.377.035-.543.623-1.098 1.764-1.663 4.488-1.963 7.487-3.255 9-3.878 4.273-1.784 5.163-2.097 5.739-2.106.127-.002.412.029.596.177.155.125.198.294.218.414.02.12.045.394.025.608z"/>
                  </svg>
                </a>
                <a
                  href="https://discord.gg/BjkHn92HCP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Discord"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/Zodiark_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@ZodiarkApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              
              {/* Copyright */}
              <p className="text-xs text-muted-foreground text-center">{t('footer.rights')}</p>
            </div>
          </div>
        </footer>

        {/* Cookie Banner */}
        <CookieBanner />
      </div>
    </TrackerProvider>
  );
};
