# Zodiark: Astral Awakening - Landing Page

Production-ready React landing page with multilingual support (EN/ES/PT), UTM tracking, and agency analytics integration.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd zodiark-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will run at `http://localhost:8080`

## 🌍 Multi-Language Support

The app supports three languages with URL-based routing:
- English: `/en`
- Spanish: `/es`
- Portuguese: `/pt`

### Adding/Modifying Translations

Edit the JSON files in `src/locales/`:
- `en.json` - English translations
- `es.json` - Spanish translations
- `pt.json` - Portuguese translations

Example structure:
```json
{
  "hero": {
    "headline": "Your headline text",
    "subheadline": "Your subheadline",
    "cta": "Button text"
  }
}
```

## 📊 Analytics Integration

### lkTracker Setup

**IMPORTANT**: Replace the tracker script URL in `index.html`:

```html
<!-- Line 35 in index.html -->
<script 
  id="lktracker-script" 
  src="REPLACE_WITH_AGENCY_PROVIDED_URL" 
  async
></script>
```

### Tracked Events

The following events are automatically tracked:
- `lp_page_view` - Landing page loaded
- `lp_click_button` - Primary CTA clicked
- `show_cookies` - Cookie banner displayed
- `accept_cookies` - User accepted cookies
- `typ_page_view` - Thank You page loaded
- `typ_go_service` - User clicked "Go to service"
- `typ_cancel` - User clicked cancel

## 🔗 UTM Tracking

UTM parameters are automatically captured and stored:
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

Parameters are:
- Stored in localStorage on first visit
- Preserved when navigating to Thank You page
- NOT appended to external links (Telegram, social media)

## 🎨 Brand Assets

### Updating Images

Place brand assets in `src/assets/`:
- `oracle-hero.png` - Hero background image
- `zodiark-logo.svg` - Main logo

Images are imported as ES6 modules for optimal bundling.

## 🚢 Deployment

### Deploy to Netlify

#### Option 1: Via GitHub (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy site"

#### Option 2: Manual Deploy

```bash
# Build the project
npm run build

# Deploy the dist/ folder to Netlify
```

### Build Configuration

Already configured in `netlify.toml`:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Redirects**: SPA fallback configured

## 🔧 Configuration

### Environment Variables (Optional)

Create `.env` file for custom configuration:
```env
# Not currently used, but reserved for future features
# VITE_TYP_AUTO_REDIRECT=true
```

### Customizing Theme

Edit design tokens in `src/index.css`:
```css
:root {
  --primary: 31 100% 50%;      /* Orange accent */
  --background: 222 47% 7%;     /* Dark space blue */
  --foreground: 38 100% 98%;    /* Light text */
  /* ... more tokens ... */
}
```

## 📦 Project Structure

```
src/
├── assets/              # Images, logos
├── components/          # React components
│   ├── CookieBanner.tsx
│   ├── Hero.tsx
│   ├── LanguageSwitcher.tsx
│   ├── SocialLinks.tsx
│   └── TrackerProvider.tsx
├── i18n/                # i18next configuration
├── locales/             # Translation files (en/es/pt)
├── pages/               # Page components
│   ├── Landing.tsx
│   └── ThankYou.tsx
├── utils/               # Utilities
│   ├── language.ts
│   ├── tracker.ts
│   └── utm.ts
├── App.tsx              # Main app with routing
└── main.tsx             # Entry point
```

## 🧪 Quality Checks

### Build Test
```bash
npm run build
```

Should complete without errors.

### Type Check
```bash
npm run type-check
```

### Lint
```bash
npm run lint
```

## 🔒 SEO & Meta Tags

- ✅ Dynamic titles and descriptions per language
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Sitemap.xml at `/sitemap.xml`
- ✅ Robots.txt at `/robots.txt`
- ✅ Semantic HTML structure

## 📱 Responsive Design

Fully responsive with mobile-first approach:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

MIT License - feel free to use for your projects.

## 🆘 Support

For issues or questions:
1. Check the code comments in relevant files
2. Review this README
3. Check the Lovable project documentation
4. Contact the development team

## 🔗 Important Links

- **Telegram Bot**: https://t.me/zodiark_astral_awakening_bot
- **Community**: https://t.me/ZodiarkAstralApp
- **Discord**: https://discord.gg/BjkHn92HCP
- **X (Twitter)**: https://x.com/Zodiark_app

---

Built with ❤️ using React + Vite + TypeScript + TailwindCSS
