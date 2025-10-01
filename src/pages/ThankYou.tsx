import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TrackerProvider } from '@/components/TrackerProvider';
import { tracker } from '@/utils/tracker';
import zodiarkLogo from '@/assets/zodiark-logo.svg';

const TELEGRAM_BOT_URL = 'https://t.me/zodiark_astral_awakening_bot';

export const ThankYou = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoToService = () => {
    tracker.trackEvent('typ_go_service');
    window.open(TELEGRAM_BOT_URL, '_blank', 'noopener,noreferrer');
  };

  const handleCancel = () => {
    tracker.trackEvent('typ_cancel');
    navigate(-1);
  };

  return (
    <TrackerProvider eventName="typ_page_view">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Logo */}
          <img
            src={zodiarkLogo}
            alt="Zodiark"
            className="w-48 md:w-64 mx-auto animate-glow"
          />

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-glow">
            {t('thankYou.headline')}
          </h1>

          {/* Message */}
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('thankYou.message')}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={handleGoToService}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-cosmic"
            >
              {t('thankYou.cta')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleCancel}
              className="w-full sm:w-auto"
            >
              {t('thankYou.cancel')}
            </Button>
          </div>
        </div>
      </div>
    </TrackerProvider>
  );
};
