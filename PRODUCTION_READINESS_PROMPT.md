# Production Readiness Implementation Plan
## Inima Bărăganului - Next.js Webapp

**Target Deployment:** Vercel (12-month maintenance-free operation)
**Current Status:** 75% production-ready
**Estimated Total Implementation Time:** 16-20 hours

---

## 📋 Overview

This document provides a phased implementation plan to make the Inima Bărăganului webapp fully production-ready for a 12-month deployment on Vercel. The plan focuses on compliance, accessibility, monitoring, and robustness without changing the core application logic or design.

### Current State Summary
- ✅ Next.js 15 with App Router, TypeScript, Tailwind CSS
- ✅ Security headers configured (CSP, HSTS, X-Frame-Options)
- ✅ Comprehensive GDPR privacy policy page
- ✅ Basic SEO and image optimization
- ✅ Responsive design with Framer Motion animations
- 🟡 Contact form exists but has no backend
- ❌ No cookie consent implementation
- ❌ No analytics or monitoring
- 🟡 Accessibility needs improvements
- 🟡 Testing framework ready but no tests written

---

## 🎯 Phase 1: EU Compliance & Cookie Consent
**Priority:** Critical | **Time:** 2-3 hours

### Goals
- Implement lightweight, non-intrusive cookie consent banner
- Ensure GDPR compliance for EU visitors
- Properly gate Google Maps and future analytics

### Implementation Tasks

#### 1.1 Install Cookie Consent Library
```bash
npm install vanilla-cookieconsent
```

**Why vanilla-cookieconsent?**
- Zero dependencies, lightweight (~15KB gzipped)
- GDPR/CCPA compliant out of the box
- Highly customizable styling
- No layout shift issues
- Works with Next.js App Router

#### 1.2 Create Cookie Consent Component
**File:** `/app/components/cookie-consent.tsx`

**Requirements:**
- Client-side only component (`'use client'`)
- Minimal height (40-50px), docked to bottom
- Dark green theme matching site colors (#1B4D3E)
- Romanian language
- Two buttons: "Accept toate" (Accept all) and "Doar necesare" (Essential only)
- Link to privacy policy page
- Must not cause layout shift (use fixed positioning with proper z-index)
- Store consent in localStorage
- Categorize cookies:
  - **Necesare (Essential):** Site functionality only
  - **Analitice (Analytics):** Google Analytics (if added)
  - **Funcționale (Functional):** Google Maps embed

#### 1.3 Integrate into Root Layout
**File:** `/app/layout.tsx`

Add cookie consent component to root layout, ensuring it:
- Loads after page hydration
- Doesn't block rendering
- Shows on first visit only
- Respects user's previous choice

#### 1.4 Gate Google Maps Behind Consent
**File:** `/app/contact/page.tsx`

Modify Google Maps embed to:
- Only load iframe after user accepts functional cookies
- Show placeholder with "Accept cookies to view map" message
- Provide alternative (text address) for users who decline

#### 1.5 Add Cookie Policy Section
**File:** `/app/politica-confidentialitate/page.tsx`

Add new section to existing privacy policy:
- List all cookies used (name, purpose, duration)
- Explain consent mechanism
- Link to manage cookie preferences

#### 1.6 Testing Checklist
- [ ] Banner appears on first visit
- [ ] Banner does not reappear after accepting
- [ ] "Essential only" choice blocks Google Maps
- [ ] "Accept all" choice enables Google Maps
- [ ] No console errors
- [ ] No layout shift when banner appears
- [ ] Mobile responsive (tested on iPhone & Android)
- [ ] Works across all browsers (Chrome, Firefox, Safari)

---

## 🎯 Phase 2: Accessibility (WCAG 2.1 AA Compliance)
**Priority:** Critical | **Time:** 3-4 hours

### Goals
- Achieve WCAG 2.1 Level AA compliance
- Make site usable for visually impaired, motor-impaired, and screen reader users
- Implement keyboard navigation throughout

### Implementation Tasks

#### 2.1 Keyboard Navigation & Focus Management

**Files to modify:**
- `/app/components/navbar.tsx`
- `/app/page.tsx` (hero section)
- `/app/contact/page.tsx` (form)
- All interactive components

**Requirements:**
- All interactive elements must be keyboard accessible (Tab, Enter, Escape)
- Visible focus indicators (outline: 2px solid #1B4D3E, offset: 2px)
- Skip-to-content link at top of page (visible on focus)
- Modal/overlay escape key handling
- Focus trap for navigation menu when open on mobile
- Logical tab order throughout pages

#### 2.2 Screen Reader Support

**ARIA Enhancements:**
- Add `aria-label` to icon-only buttons (social media links, menu toggle)
- Add `aria-live="polite"` to dynamic content areas (if any)
- Add `role="navigation"` to navbar
- Add `role="complementary"` to sidebar/aside sections
- Add `role="contentinfo"` to footer
- Add proper heading hierarchy check (h1 → h2 → h3, no skips)

**Specific Tasks:**
- Label all form inputs with associated `<label>` elements
- Add `aria-describedby` for form validation messages
- Add `aria-expanded` to collapsible elements
- Add `alt` text audit for all images (ensure descriptive, not "image" or "photo")

#### 2.3 Video Accessibility
**File:** `/app/page.tsx` (hero video)

- Add video controls (play/pause button)
- Add option to disable autoplay
- Add captions track (Romanian .vtt file)
- Add `prefers-reduced-motion` media query check
- Option to replace video with static image for users who prefer reduced motion

#### 2.4 Color Contrast Audit

**Check all text/background combinations:**
- Normal text: minimum 4.5:1 contrast ratio
- Large text (18pt+): minimum 3:1 contrast ratio
- Interactive elements: 3:1 against background

**Files to check:**
- Navbar text on header background
- Button text on button backgrounds
- Footer text on footer background
- Form labels and inputs

#### 2.5 Add Accessibility Statement
**New file:** `/app/accesibilitate/page.tsx`

Include:
- Conformance level (WCAG 2.1 AA)
- Known limitations
- Contact for accessibility issues
- Date of last audit
- Technologies relied upon (HTML5, CSS, JavaScript)

Link from footer.

#### 2.6 Implement Skip Link
**File:** `/app/layout.tsx`

Add at top of body:
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Sari la conținut
</a>
```

Add `id="main-content"` to main element in each page.

#### 2.7 Testing Checklist
- [ ] Navigate entire site using only keyboard (Tab, Enter, Escape)
- [ ] Test with screen reader (VoiceOver on macOS, NVDA on Windows)
- [ ] Run Lighthouse accessibility audit (score 90+)
- [ ] Test with browser zoom at 200%
- [ ] Test with Windows High Contrast mode
- [ ] Run axe DevTools accessibility checker (0 violations)
- [ ] Test with prefers-reduced-motion enabled

---

## 🎯 Phase 3: SEO & Discoverability
**Priority:** High | **Time:** 2-3 hours

### Goals
- Improve search engine visibility
- Implement Open Graph for social sharing
- Generate sitemap and robots.txt
- Add structured data for rich snippets

### Implementation Tasks

#### 3.1 Per-Page Metadata

**Files to modify:**
- `/app/despre-noi/page.tsx`
- `/app/membri/page.tsx`
- `/app/proiecte/page.tsx`
- `/app/contact/page.tsx`
- `/app/politica-confidentialitate/page.tsx`

**Add to each page:**
```typescript
export const metadata: Metadata = {
  title: "Page Title | Inima Bărăganului",
  description: "Specific page description (150-160 chars)",
  keywords: ["relevant", "keywords"],
  openGraph: {
    title: "Page Title",
    description: "Description for social sharing",
    url: "https://inima-baraganului.ro/page-path",
    siteName: "Inima Bărăganului",
    images: [
      {
        url: "https://inima-baraganului.ro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Description of image",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Title",
    description: "Description",
    images: ["https://inima-baraganului.ro/og-image.jpg"],
  },
  alternates: {
    canonical: "https://inima-baraganului.ro/page-path",
  },
};
```

#### 3.2 Create Open Graph Images

**Task:** Create social sharing images (1200x630px)
- Homepage OG image: Farm landscape or co-op logo
- About page OG image: Team photo
- Projects page OG image: Farm fields or equipment
- Contact page OG image: Map or contact graphic

**Location:** `/public/og-images/`

#### 3.3 Generate Sitemap
**New file:** `/app/sitemap.ts`

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://inima-baraganului.ro',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://inima-baraganului.ro/despre-noi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... add all pages
  ]
}
```

#### 3.4 Configure robots.txt
**New file:** `/app/robots.ts`

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://inima-baraganului.ro/sitemap.xml',
  }
}
```

#### 3.5 Add Structured Data (JSON-LD)
**File:** `/app/layout.tsx`

Add Organization schema:
```typescript
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Inima Bărăganului",
  "description": "Grup de Producători Recunoscut din inima Bărăganului",
  "url": "https://inima-baraganului.ro",
  "logo": "https://inima-baraganului.ro/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Str. Agricultorilor nr. 1",
    "addressLocality": "Comuna Gheorghe Doja",
    "addressRegion": "Ialomița",
    "postalCode": "920xxx",
    "addressCountry": "RO"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+40-xxx-xxx-xxx",
    "contactType": "Customer Service",
    "areaServed": "RO",
    "availableLanguage": "Romanian"
  }
};
```

Inject in `<head>`:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

#### 3.6 Testing Checklist
- [ ] All pages have unique titles and descriptions
- [ ] Open Graph tags validate on [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Twitter Card validates on [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] robots.txt accessible at `/robots.txt`
- [ ] Structured data validates on [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Lighthouse SEO score 90+

---

## 🎯 Phase 4: Contact Form Backend & Email Integration
**Priority:** High | **Time:** 2-3 hours

### Goals
- Make contact form functional
- Implement email delivery
- Add form validation and security
- Ensure GDPR compliance for form submissions

### Implementation Tasks

#### 4.1 Choose Email Service

**Options:**
1. **Resend** (Recommended for Vercel)
   - 100 emails/day free
   - React Email templates
   - Simple API

2. **SendGrid**
   - 100 emails/day free
   - Enterprise-grade

3. **AWS SES**
   - Pay-as-you-go
   - Requires AWS account

**Decision:** Use Resend (best Next.js integration)

#### 4.2 Install Dependencies
```bash
npm install resend react-email @react-email/components
```

#### 4.3 Create Email Template
**New file:** `/emails/contact-form-submission.tsx`

```tsx
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
} from '@react-email/components';

export default function ContactFormEmail({ name, email, phone, message }) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'sans-serif' }}>
        <Container>
          <Heading>Mesaj nou de contact - Inima Bărăganului</Heading>
          <Section>
            <Text><strong>Nume:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Telefon:</strong> {phone}</Text>
            <Text><strong>Mesaj:</strong></Text>
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
```

#### 4.4 Create API Route
**New file:** `/app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form-submission';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting (simple in-memory cache)
const submissionCache = new Map<string, number>();
const RATE_LIMIT = 3; // 3 submissions per hour per IP

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.ip || 'unknown';
    const now = Date.now();
    const hourAgo = now - 3600000;

    // Clean old entries
    for (const [key, timestamp] of submissionCache.entries()) {
      if (timestamp < hourAgo) submissionCache.delete(key);
    }

    // Check rate limit
    const recentSubmissions = Array.from(submissionCache.values())
      .filter(ts => ts > hourAgo)
      .length;

    if (recentSubmissions >= RATE_LIMIT) {
      return NextResponse.json(
        { error: 'Prea multe încercări. Vă rugăm așteptați.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, phone, message, gdprConsent } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Toate câmpurile obligatorii trebuie completate.' },
        { status: 400 }
      );
    }

    if (!gdprConsent) {
      return NextResponse.json(
        { error: 'Trebuie să fiți de acord cu politica de confidențialitate.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresa de email nu este validă.' },
        { status: 400 }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <noreply@inima-baraganului.ro>',
      to: [process.env.CONTACT_EMAIL || 'contact@inima-baraganului.ro'],
      subject: `Mesaj nou de contact de la ${name}`,
      react: ContactFormEmail({ name, email, phone, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Eroare la trimiterea mesajului. Vă rugăm încercați din nou.' },
        { status: 500 }
      );
    }

    // Log submission (for rate limiting)
    submissionCache.set(`${ip}-${now}`, now);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Eroare de server. Vă rugăm încercați mai târziu.' },
      { status: 500 }
    );
  }
}
```

#### 4.5 Update Contact Form Component
**File:** `/app/contact/page.tsx`

Add:
- Client-side validation
- Loading states
- Success/error messages
- GDPR consent checkbox
- Form submission handler
- Disable submit button during submission
- Clear form after successful submission

Example implementation:
```tsx
'use client';

const [isSubmitting, setIsSubmitting] = useState(false);
const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setMessage(null);

  const formData = new FormData(e.currentTarget);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
    gdprConsent: formData.get('gdpr'),
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage({ type: 'success', text: 'Mesaj trimis cu succes! Vă vom răspunde în curând.' });
      e.currentTarget.reset();
    } else {
      setMessage({ type: 'error', text: result.error || 'A apărut o eroare.' });
    }
  } catch (error) {
    setMessage({ type: 'error', text: 'Eroare de conexiune. Vă rugăm încercați din nou.' });
  } finally {
    setIsSubmitting(false);
  }
};
```

#### 4.6 Environment Variables

**Create:** `.env.local`
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=your-email@example.com
```

**Add to:** `.gitignore`
```
.env.local
.env*.local
```

**Document in:** `.env.example`
```
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=email@domain.com
```

#### 4.7 Configure Vercel Environment Variables

In Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add `RESEND_API_KEY` (get from resend.com)
3. Add `CONTACT_EMAIL` (your company email)

#### 4.8 Testing Checklist
- [ ] Form validation works (empty fields, invalid email)
- [ ] GDPR checkbox required
- [ ] Successful submission shows success message
- [ ] Failed submission shows error message
- [ ] Email received at configured address
- [ ] Email template renders correctly
- [ ] Rate limiting works (test 4+ submissions)
- [ ] Loading state displays during submission
- [ ] Form clears after success
- [ ] Works on mobile devices

---

## 🎯 Phase 5: Monitoring & Error Tracking
**Priority:** High | **Time:** 2-3 hours

### Goals
- Implement error tracking
- Add analytics with proper consent
- Monitor Core Web Vitals
- Set up logging for debugging

### Implementation Tasks

#### 5.1 Error Tracking with Sentry

**Install:**
```bash
npx @sentry/wizard@latest -i nextjs
```

**Configuration:**
- Follow wizard prompts
- Add Sentry DSN to environment variables
- Configure sample rate (10% for production to save quota)

**Files created:**
- `sentry.client.config.ts`
- `sentry.server.config.ts`
- `sentry.edge.config.ts`

**Customization:**
```typescript
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1, // 10% of transactions
  environment: process.env.NODE_ENV,
  beforeSend(event) {
    // Filter out non-critical errors
    if (event.level === 'warning') return null;
    return event;
  },
});
```

#### 5.2 Analytics with Google Analytics 4

**Install:**
```bash
npm install @next/third-parties
```

**File:** `/app/components/analytics.tsx`
```tsx
'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect, useState } from 'react';

export function Analytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    // Check cookie consent from Phase 1
    const cookieConsent = localStorage.getItem('cc_cookie');
    if (cookieConsent) {
      const consent = JSON.parse(cookieConsent);
      setConsent(consent.categories?.includes('analytics'));
    }
  }, []);

  if (!consent) return null;

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />;
}
```

**Add to:** `/app/layout.tsx`
```tsx
import { Analytics } from './components/analytics';

// In body:
<Analytics />
```

**Environment variable:**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### 5.3 Core Web Vitals Monitoring

**File:** `/app/components/web-vitals.tsx`
```tsx
'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });

  return null;
}
```

**Add to layout:**
```tsx
<WebVitals />
```

#### 5.4 Vercel Analytics (Built-in)

**Install:**
```bash
npm install @vercel/analytics
```

**Add to layout:**
```tsx
import { Analytics } from '@vercel/analytics/react';

// In body:
<Analytics />
```

**Benefits:**
- No cookie consent required (privacy-friendly)
- Pageview tracking
- Custom events
- Free on all Vercel plans

#### 5.5 Console Logging Strategy

**Create:** `/lib/logger.ts`
```typescript
type LogLevel = 'info' | 'warn' | 'error';

export const logger = {
  info: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[INFO] ${message}`, data || '');
    }
  },
  warn: (message: string, data?: any) => {
    console.warn(`[WARN] ${message}`, data || '');
  },
  error: (message: string, error?: any) => {
    console.error(`[ERROR] ${message}`, error || '');

    // Send to Sentry in production
    if (process.env.NODE_ENV === 'production' && typeof Sentry !== 'undefined') {
      Sentry.captureException(error || new Error(message));
    }
  },
};
```

**Use throughout codebase:**
```typescript
import { logger } from '@/lib/logger';

try {
  // ... code
} catch (error) {
  logger.error('Failed to process contact form', error);
}
```

#### 5.6 Testing Checklist
- [ ] Sentry captures client-side errors
- [ ] Sentry captures server-side errors
- [ ] Sentry dashboard shows errors with stack traces
- [ ] Google Analytics tracks pageviews (only after consent)
- [ ] Web Vitals appear in GA4
- [ ] Vercel Analytics dashboard shows traffic
- [ ] Error logging works in development
- [ ] Production errors sent to Sentry

---

## 🎯 Phase 6: Testing & Quality Assurance
**Priority:** Medium | **Time:** 3-4 hours

### Goals
- Write E2E tests for critical user flows
- Add accessibility testing
- Implement visual regression testing
- Set up CI/CD pipeline

### Implementation Tasks

#### 6.1 E2E Tests with Playwright

**Create:** `/tests/e2e/homepage.spec.ts`
```typescript
import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Inima Bărăganului/);
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('h1');
    await expect(hero).toBeVisible();
    await expect(hero).toContainText('Inima Bărăganului');
  });

  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/');

    // Test navigation
    await page.click('text=Despre Noi');
    await expect(page).toHaveURL(/despre-noi/);

    await page.click('text=Membri');
    await expect(page).toHaveURL(/membri/);

    await page.click('text=Proiecte');
    await expect(page).toHaveURL(/proiecte/);

    await page.click('text=Contact');
    await expect(page).toHaveURL(/contact/);
  });

  test('should show cookie consent on first visit', async ({ page, context }) => {
    // Clear cookies to simulate first visit
    await context.clearCookies();
    await page.goto('/');

    const cookieBanner = page.locator('[data-testid="cookie-consent"]');
    await expect(cookieBanner).toBeVisible();
  });
});
```

**Create:** `/tests/e2e/contact-form.spec.ts`
```typescript
import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display all form fields', async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('input[name="gdpr"]')).toBeVisible();
  });

  test('should show validation errors for empty fields', async ({ page }) => {
    await page.click('button[type="submit"]');

    // Should not submit
    await expect(page.locator('text=/Toate câmpurile/i')).toBeVisible();
  });

  test('should submit form successfully', async ({ page }) => {
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="phone"]', '0712345678');
    await page.fill('textarea[name="message"]', 'Test message');
    await page.check('input[name="gdpr"]');

    await page.click('button[type="submit"]');

    await expect(page.locator('text=/Mesaj trimis cu succes/i')).toBeVisible();
  });

  test('should respect rate limiting', async ({ page }) => {
    // Submit 4 times rapidly
    for (let i = 0; i < 4; i++) {
      await page.fill('input[name="name"]', 'Test User');
      await page.fill('input[name="email"]', 'test@example.com');
      await page.fill('textarea[name="message"]', 'Test message');
      await page.check('input[name="gdpr"]');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(1000);
    }

    await expect(page.locator('text=/Prea multe încercări/i')).toBeVisible();
  });
});
```

**Create:** `/tests/e2e/accessibility.spec.ts`
```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('homepage should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should be fully keyboard navigable', async ({ page }) => {
    await page.goto('/');

    // Tab through navigation
    await page.keyboard.press('Tab');
    await expect(page.locator('a[href="/"]')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.locator('a[href="/despre-noi"]')).toBeFocused();
  });

  test('should have skip link', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');

    const skipLink = page.locator('a:has-text("Sari la conținut")');
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();
  });
});
```

**Install accessibility testing:**
```bash
npm install --save-dev @axe-core/playwright
```

#### 6.2 Visual Regression Testing

**Update:** `playwright.config.ts`
```typescript
export default defineConfig({
  expect: {
    toHaveScreenshot: {
      maxDiffPixels: 100,
    },
  },
  // ... rest of config
});
```

**Create:** `/tests/e2e/visual-regression.spec.ts`
```typescript
import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test('homepage should match screenshot', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
    });
  });

  test('contact page should match screenshot', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).toHaveScreenshot('contact.png', {
      fullPage: true,
    });
  });
});
```

**Generate baseline screenshots:**
```bash
npm run test -- --update-snapshots
```

#### 6.3 CI/CD Pipeline with GitHub Actions

**Create:** `.github/workflows/ci.yml`
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Build application
        run: npm run build

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Run E2E tests
        run: npm test

      - name: Upload test results
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30

  lighthouse:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.12.x
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}

  deploy:
    needs: [test, lighthouse]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v4

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

#### 6.4 Lighthouse CI Configuration

**Create:** `.lighthouserc.json`
```json
{
  "ci": {
    "collect": {
      "startServerCommand": "npm run build && npm start",
      "url": [
        "http://localhost:3000",
        "http://localhost:3000/despre-noi",
        "http://localhost:3000/contact"
      ],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.9}]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

#### 6.5 Testing Checklist
- [ ] All E2E tests pass locally
- [ ] Accessibility tests pass (0 violations)
- [ ] Visual regression baselines created
- [ ] CI/CD pipeline runs on push to main
- [ ] Lighthouse CI scores meet thresholds (90+)
- [ ] Tests run in all configured browsers
- [ ] Mobile tests pass (iPhone, Android)
- [ ] Tablet tests pass (iPad)

---

## 🎯 Phase 7: Performance & Final Optimizations
**Priority:** Medium | **Time:** 2-3 hours

### Goals
- Optimize asset loading
- Implement caching strategies
- Reduce bundle size
- Fine-tune for 100% Lighthouse scores

### Implementation Tasks

#### 7.1 Image Optimization Audit

**Files to check:**
- `/app/page.tsx` (hero images)
- `/app/despre-noi/page.tsx`
- `/app/membri/page.tsx`

**Ensure all images:**
- Use Next.js `<Image>` component
- Have explicit `width` and `height` attributes
- Use `priority` prop for above-the-fold images
- Use `loading="lazy"` for below-the-fold images
- Use appropriate `sizes` prop for responsive images
- Use WebP format when possible

**Example:**
```tsx
<Image
  src="/hero-image.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority
  sizes="100vw"
  quality={85}
/>
```

#### 7.2 Video Optimization

**File:** `/app/page.tsx` (hero video)

**Tasks:**
- Convert to multiple formats (WebM, MP4)
- Create compressed versions (720p max for hero)
- Add poster image (first frame)
- Implement lazy loading
- Add preload hint only for critical video

**Example:**
```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  poster="/video-poster.jpg"
  preload="metadata"
  className="..."
>
  <source src="/hero-video-720p.webm" type="video/webm" />
  <source src="/hero-video-720p.mp4" type="video/mp4" />
</video>
```

#### 7.3 Font Optimization

**File:** `/app/layout.tsx`

Current implementation is good, but verify:
- Font display strategy: `display: 'swap'`
- Subset Latin characters only
- Preload critical font files

**Check:**
```tsx
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
```

#### 7.4 Bundle Analysis

**Install:**
```bash
npm install --save-dev @next/bundle-analyzer
```

**Update:** `next.config.ts`
```typescript
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  // ... existing config
});
```

**Run analysis:**
```bash
ANALYZE=true npm run build
```

**Check for:**
- Duplicate dependencies
- Large libraries that could be replaced
- Unused exports
- Tree-shaking opportunities

#### 7.5 Caching Strategy

**Update:** `next.config.ts`
```typescript
export default {
  // ... existing config
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Keep existing security headers
      // ...
    ];
  },
};
```

#### 7.6 Third-Party Script Optimization

**File:** `/app/layout.tsx`

Use Next.js `<Script>` component for all third-party scripts:

```tsx
import Script from 'next/script';

// For non-critical scripts:
<Script
  src="https://example.com/script.js"
  strategy="lazyOnload"
/>

// For critical scripts:
<Script
  src="https://example.com/critical.js"
  strategy="afterInteractive"
/>
```

#### 7.7 Database Query Optimization (Future)

**Current state:** All data hardcoded in `/lib/data.ts`

**If database added later:**
- Implement Redis caching for frequently accessed data
- Use Vercel Edge Config for configuration data
- Consider ISR (Incremental Static Regeneration) for semi-dynamic pages

**Create:** `/lib/cache.ts`
```typescript
// Placeholder for future caching layer
export const cache = {
  get: async (key: string) => {
    // Implement Redis or Vercel KV
  },
  set: async (key: string, value: any, ttl: number) => {
    // Implement caching
  },
};
```

#### 7.8 Reduce JavaScript Bundle

**Tasks:**
- Audit Framer Motion usage (ensure only required features imported)
- Replace Recharts with lighter alternative if charts are simple
- Dynamic import for heavy components

**Example:**
```tsx
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/heavy-chart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false,
});
```

#### 7.9 Preload Critical Resources

**File:** `/app/layout.tsx`

Add preload links for critical resources:
```tsx
<head>
  <link
    rel="preload"
    href="/hero-video.mp4"
    as="video"
    type="video/mp4"
  />
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  />
  <link
    rel="dns-prefetch"
    href="https://maps.googleapis.com"
  />
</head>
```

#### 7.10 Final Lighthouse Audit

**Run on all pages:**
```bash
npm run build
npm start
```

**Test pages:**
- `/` (homepage)
- `/despre-noi`
- `/membri`
- `/proiecte`
- `/contact`

**Target scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Common issues to fix:**
- Reduce unused JavaScript
- Eliminate render-blocking resources
- Properly size images
- Ensure text remains visible during webfont load
- Avoid enormous network payloads

#### 7.11 Testing Checklist
- [ ] All images optimized (WebP where possible)
- [ ] Video files compressed and multi-format
- [ ] Bundle size < 300KB (gzipped)
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3.8s
- [ ] All Lighthouse scores 90+
- [ ] Mobile performance optimized
- [ ] Caching headers configured correctly

---

## 🚀 Deployment Checklist

### Pre-Deployment

- [ ] All 7 phases completed
- [ ] All tests passing (E2E, accessibility, visual)
- [ ] Lighthouse scores meet targets
- [ ] Environment variables configured in Vercel
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Error tracking (Sentry) configured
- [ ] Analytics configured (GA4 + Vercel)
- [ ] Contact form tested end-to-end
- [ ] Cookie consent tested on all browsers
- [ ] Privacy policy reviewed and up-to-date

### Deployment Steps

1. **Merge all changes to main branch:**
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```

2. **Vercel will auto-deploy** (if connected to GitHub)

3. **Manual deployment (if needed):**
   ```bash
   npm run build
   vercel --prod
   ```

4. **Post-deployment smoke tests:**
   - [ ] Homepage loads
   - [ ] All navigation links work
   - [ ] Contact form submits successfully
   - [ ] Cookie consent appears on first visit
   - [ ] Google Maps loads after consent
   - [ ] No console errors
   - [ ] No Sentry errors in dashboard

### Monitoring Setup (First Week)

- [ ] Check Sentry daily for errors
- [ ] Monitor Google Analytics for traffic patterns
- [ ] Check Vercel Analytics for performance metrics
- [ ] Review contact form submissions
- [ ] Check email delivery success rate
- [ ] Monitor Core Web Vitals in Search Console

### Long-Term Maintenance (12 Months)

**Monthly:**
- Review Sentry error logs (5 min)
- Check Google Analytics traffic (5 min)
- Check contact form submissions (2 min)

**Quarterly:**
- Run Lighthouse audit
- Update dependencies (`npm outdated && npm update`)
- Review and rotate API keys if needed

**Yearly:**
- Renew SSL certificate (auto on Vercel)
- Review privacy policy for legal changes
- Update copyright year in footer
- Full security audit

---

## 📊 Success Metrics

### Technical Metrics
- Lighthouse Performance: **95+**
- Lighthouse Accessibility: **100**
- Lighthouse Best Practices: **100**
- Lighthouse SEO: **100**
- Time to Interactive: **< 3.5s**
- First Contentful Paint: **< 1.5s**
- Cumulative Layout Shift: **< 0.1**

### Business Metrics
- Contact form submission rate: **2-5%** of visitors
- Average session duration: **> 2 minutes**
- Bounce rate: **< 50%**
- Mobile traffic: **40-60%** of total

### Compliance Metrics
- GDPR compliance: **100%**
- WCAG 2.1 AA compliance: **100%**
- Zero critical accessibility violations
- Cookie consent acceptance rate: **Track but don't optimize** (ethical)

---

## 🛠️ Tools & Resources

### Development
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

### Testing
- [Playwright Docs](https://playwright.dev)
- [Axe Accessibility Testing](https://www.deque.com/axe/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Compliance
- [GDPR Compliance Checklist](https://gdpr.eu/checklist/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Cookie Consent Best Practices](https://www.cookiebot.com/en/gdpr-cookies/)

### Monitoring
- [Sentry Documentation](https://docs.sentry.io)
- [Google Analytics 4 Docs](https://support.google.com/analytics)
- [Vercel Analytics](https://vercel.com/analytics)

### Email
- [Resend Documentation](https://resend.com/docs)
- [React Email Documentation](https://react.email/docs)

---

## 🎯 Implementation Order Summary

**Critical Path (Must complete before deployment):**
1. Phase 1: Cookie Consent
2. Phase 4: Contact Form
3. Phase 2: Accessibility (at least basic compliance)
4. Phase 3: SEO (at least per-page metadata)

**Post-Launch (Can be added after deployment):**
5. Phase 5: Monitoring (recommended within first week)
6. Phase 6: Testing (improves confidence but not blocking)
7. Phase 7: Performance optimization (incremental improvements)

---

## 📝 Notes & Assumptions

- **No logic changes:** All implementations preserve existing functionality and design
- **Romanian language:** All user-facing text in Romanian
- **Mobile-first:** All features work on mobile, tablet, and desktop
- **Vercel hosting:** Optimized for Vercel Edge Network
- **No database:** Current architecture uses hardcoded data (can be extended later)
- **EU focus:** GDPR compliance is priority (CCPA compatible as bonus)
- **12-month target:** Low-maintenance operation for one year

---

## 🤝 Support & Escalation

If you encounter issues during implementation:

1. **Check Vercel logs:** `vercel logs [deployment-url]`
2. **Review Sentry errors:** Dashboard → Issues
3. **Test locally first:** Always test changes in development
4. **Rollback if needed:** Vercel allows instant rollback to previous deployment
5. **Check documentation:** Most issues are documented in linked resources

---

## ✅ Final Checklist

Before marking production-ready:

- [ ] All 7 phases implemented
- [ ] Cookie consent banner functional
- [ ] Contact form sends emails
- [ ] Accessibility score 90+
- [ ] SEO metadata on all pages
- [ ] Sitemap and robots.txt generated
- [ ] Analytics tracking (with consent)
- [ ] Error tracking configured
- [ ] E2E tests written and passing
- [ ] Lighthouse scores meet targets
- [ ] Mobile responsive verified
- [ ] Cross-browser tested
- [ ] Performance optimized
- [ ] Deployed to Vercel
- [ ] Domain configured (if custom)
- [ ] SSL certificate active
- [ ] Environment variables set
- [ ] Monitoring dashboards configured
- [ ] Documentation updated
- [ ] Team trained on monitoring

---

**Document Version:** 1.0
**Last Updated:** 2025-12-23
**Prepared for:** Inima Bărăganului Agricultural Cooperative
**Target Platform:** Vercel
**Framework:** Next.js 15

**Estimated Total Implementation Time:** 16-20 hours
**Estimated Cost (Third-party services):** €0-20/month
- Resend: Free tier (100 emails/day)
- Sentry: Free tier (5K events/month)
- Google Analytics: Free
- Vercel: Free tier (Hobby plan)

---

*This document is a living guide. Update as you complete phases and discover new requirements.*
