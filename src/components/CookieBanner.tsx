import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { tracker } from '@/utils/tracker';

const CONSENT_KEY = 'cookie_consent';

export const CookieBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
      tracker.trackEvent('show_cookies', true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'true');
    setVisible(false);
    tracker.trackEvent('accept_cookies');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card/95 backdrop-blur-lg border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          {t('cookies.banner')}
        </p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setVisible(false)}
          >
            {t('cookies.decline')}
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {t('cookies.accept')}
          </Button>
        </div>
      </div>
    </div>
  );
};
