# Zodiark Landing Page - Implementation Notes

## ✅ Completed Features

### Core Functionality
- [x] React + TypeScript + Vite project structure
- [x] TailwindCSS with cosmic theme design system
- [x] Multi-language routing (/en, /es, /pt)
- [x] i18next localization with JSON resources
- [x] UTM parameter capture and persistence
- [x] lkTracker integration with all required events
- [x] Cookie consent banner with tracking
- [x] Responsive mobile-first design
- [x] SEO meta tags, sitemap, robots.txt
- [x] Netlify deployment configuration

### Pages Implemented
- [x] Landing Page (Hero with Oracle art, CTAs, social links)
- [x] Thank You Page
- [x] Language switcher component
- [x] Cookie banner with consent tracking

### Analytics Events Integrated
- [x] `lp_page_view` - Landing page load
- [x] `lp_click_button` - Primary CTA click
- [x] `show_cookies` - Cookie banner shown
- [x] `accept_cookies` - Cookie consent accepted
- [x] `typ_page_view` - Thank You page load
- [x] `typ_go_service` - TYP service button click
- [x] `typ_cancel` - TYP cancel button click
- [x] Event idempotency guards (prevents duplicates)

### Design System
- [x] Cosmic color palette (deep space blues, fiery oranges, purples)
- [x] Custom gradients and glows
- [x] Float and glow animations
- [x] Enhanced button variants
- [x] Backdrop blur effects
- [x] Shadow utilities (cosmic, glow)

## 🔧 Required Configuration

### 1. lkTracker Script URL (CRITICAL)
**File**: `index.html` (line ~35)

Replace the placeholder URL with the agency-provided script:
```html
<script 
  id="lktracker-script" 
  src="REPLACE_WITH_AGENCY_PROVIDED_URL" 
  async
></script>
```

Current placeholder: `https://lktrack.com/adserver/api/v1/lk-tracker/lk-tracker-min.js`

### 2. Domain Configuration
**Files to update when domain is known**:
- `index.html` - Update canonical URL and OG tags
- `public/sitemap.xml` - Replace `https://zodiark.com` with actual domain
- `public/robots.txt` - Update sitemap URL

### 3. Brand Assets
**Current**: Uploaded Oracle hero image and Zodiark logo are integrated
**Optional**: Add favicon and OG image to `public/` folder:
- `public/favicon.ico`
- `public/og-image.png` (1200x630px recommended)

### 4. Localization Refinement
**Files**: `src/locales/en.json`, `es.json`, `pt.json`

Current translations are functional placeholders. Marketing team should review and refine all copy.

## 📦 Deployment Checklist

### Before First Deploy
- [ ] Update lkTracker script URL in `index.html`
- [ ] Review and update translations in `src/locales/`
- [ ] Add favicon and OG image to `public/`
- [ ] Update domain references in SEO files
- [ ] Test all language routes locally
- [ ] Verify UTM tracking with test parameters
- [ ] Test cookie banner functionality

### Netlify Setup
1. Connect GitHub repository
2. Netlify will auto-detect build settings from `netlify.toml`
3. No environment variables required for initial deploy
4. Deploy and test all routes

### Post-Deploy Testing
- [ ] Test all three language routes: `/en`, `/es`, `/pt`
- [ ] Verify UTM parameters are captured (test with `?utm_source=test`)
- [ ] Check lkTracker events in browser console
- [ ] Test language switcher preserves UTMs
- [ ] Verify Thank You page navigation
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target >90 scores)

## 🔍 Testing UTM Tracking

Test URL format:
```
https://yourdomain.com/en?utm_source=facebook&utm_medium=cpc&utm_campaign=launch
```

Check browser localStorage for stored UTMs:
```javascript
localStorage.getItem('utm')
```

## 🎨 Customization Guide

### Changing Colors
Edit `src/index.css` - all colors use HSL format:
```css
--primary: 31 100% 50%;  /* Orange accent */
--background: 222 47% 7%; /* Dark space blue */
```

### Adding New Translations
Add key-value pairs to all three locale files:
```json
{
  "newSection": {
    "title": "Your Title",
    "description": "Your description"
  }
}
```

Use in components:
```tsx
const { t } = useTranslation();
<h2>{t('newSection.title')}</h2>
```

## 🐛 Known Limitations / Future Enhancements

### Not Implemented (Out of Scope)
- Analytics dashboard UI
- Email capture form
- Multi-step onboarding flow
- Video backgrounds
- Advanced animations beyond float/glow

### Optional Enhancements
- [ ] Add Google Analytics 4 integration
- [ ] Implement A/B testing framework
- [ ] Add loading states for transitions
- [ ] Enhance accessibility (ARIA labels, skip links)
- [ ] Add more social share options
- [ ] Implement automatic TYP redirect (currently manual click)

## 📊 Performance Targets

Based on Lighthouse audit:
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

Current optimizations:
- Lazy image loading
- ES6 module imports for assets
- Minimal bundle size
- Preconnect to tracker domain
- Async script loading

## 🔗 External Dependencies

### NPM Packages Added
- `i18next` - Internationalization framework
- `react-i18next` - React bindings for i18next

All other dependencies were pre-configured in the Lovable starter.

## 📝 Code Quality

### TypeScript
- Strict mode enabled
- All utilities and components fully typed
- No `any` types used

### Structure
- Components in `src/components/`
- Pages in `src/pages/`
- Utilities in `src/utils/`
- Locales in `src/locales/`
- Assets in `src/assets/`

### Best Practices
- Idempotent event tracking
- Error handling for localStorage
- Safe window object access
- Accessibility considerations
- Mobile-first responsive design

## 🆘 Troubleshooting

### lkTracker events not firing
- Check browser console for `[lkTracker]` logs
- Verify script URL is correct in `index.html`
- Check `window.lkTracker` object exists
- Allow time for script to load (queue system in place)

### UTMs not persisting
- Check localStorage is enabled
- Verify UTM parameters in URL are correctly formatted
- Check browser console for errors

### Language switching issues
- Ensure URL format is `/{lang}/path`
- Check i18n is initialized before rendering
- Verify locale JSON files are loading

### Build errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

## 📧 Support Contacts

- **Technical Issues**: Development team
- **Content/Translations**: Marketing team
- **Analytics Setup**: Agency team
- **Deployment**: DevOps team

---

**Project Status**: ✅ Production Ready (pending configuration)
**Last Updated**: 2025-01-01
**Version**: 1.0.0
