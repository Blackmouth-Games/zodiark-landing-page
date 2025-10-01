import { useEffect } from 'react';
import { tracker } from '@/utils/tracker';

interface TrackerProviderProps {
  children: React.ReactNode;
  eventName: 'lp_page_view' | 'typ_page_view';
}

/**
 * Wraps pages to fire tracking events when loaded
 */
export const TrackerProvider = ({ children, eventName }: TrackerProviderProps) => {
  useEffect(() => {
    // Fire page view event when component mounts and i18n is ready
    const timer = setTimeout(() => {
      tracker.trackEvent(eventName, true);
    }, 100);

    return () => clearTimeout(timer);
  }, [eventName]);

  return <>{children}</>;
};
