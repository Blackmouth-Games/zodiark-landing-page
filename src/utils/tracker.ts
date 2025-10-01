/**
 * lkTracker Integration
 * Wrapper for agency tracking library
 */

declare global {
  interface Window {
    lkTracker?: {
      trackEvent: (eventName: string) => void;
    };
  }
}

type TrackerEvent =
  | 'lp_page_view'
  | 'lp_click_button'
  | 'lp_first_step'
  | 'accept_cookies'
  | 'show_cookies'
  | 'typ_page_view'
  | 'typ_go_service'
  | 'typ_cancel';

class TrackerService {
  private queue: TrackerEvent[] = [];
  private ready = false;
  private firedEvents = new Set<string>();

  constructor() {
    this.checkReadiness();
  }

  private checkReadiness = () => {
    if (window.lkTracker) {
      this.ready = true;
      this.flushQueue();
    } else {
      setTimeout(this.checkReadiness, 100);
    }
  };

  private flushQueue = () => {
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      if (event) {
        this.trackEventImmediate(event);
      }
    }
  };

  private trackEventImmediate = (eventName: TrackerEvent) => {
    if (window.lkTracker) {
      try {
        window.lkTracker.trackEvent(eventName);
        console.log('[lkTracker] Event fired:', eventName);
      } catch (error) {
        console.error('[lkTracker] Error firing event:', eventName, error);
      }
    }
  };

  /**
   * Track an event (with idempotency for page-level events)
   */
  trackEvent = (eventName: TrackerEvent, idempotent = false) => {
    // Prevent duplicate page-level events
    if (idempotent) {
      const key = `${eventName}_${window.location.pathname}`;
      if (this.firedEvents.has(key)) {
        console.log('[lkTracker] Event already fired (skipped):', eventName);
        return;
      }
      this.firedEvents.add(key);
    }

    if (this.ready) {
      this.trackEventImmediate(eventName);
    } else {
      this.queue.push(eventName);
    }
  };
}

export const tracker = new TrackerService();
