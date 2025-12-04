# 🔍 PROMPT EXPERT PENTRU AUDIT COMPLET - INIMA BĂRĂGANULUI

> **Tip aplicație**: Next.js 15 Frontend Application (React 19, TypeScript 5, Tailwind CSS)
> **Scop**: Audit complet pentru optimizare, best practices, și pregătire pentru dezvoltare viitoare
> **Data audit**: 2025-12-03
>
> **🎯 Tool-uri disponibile pentru audit:**
> - ✅ **Playwright E2E Testing** - Instalat și configurat (Chrome, Firefox, Safari)
> - ✅ **3 MCP Servers Custom** - GitHub, Filesystem, Memory (toate testate ✓)
> - ✅ **Testing Infrastructure** - 2 test suites deja create (homepage + contact)

---

## MISIUNE GENERALĂ

Efectuează un **audit complet și exhaustiv** al aplicației Next.js "Inima Bărăganului", analizând fiecare aspect tehnic, de performanță, securitate, accesibilitate, SEO, și experiență utilizator. Identifică:
- ✅ Ce funcționează excelent și trebuie menținut
- ⚠️ Ce poate fi îmbunătățit
- 🔴 Ce trebuie rezolvat urgent
- 🚀 Oportunități de optimizare și modernizare

Pentru fiecare problemă identificată, oferă:
1. **Severitate**: Critical / High / Medium / Low
2. **Impact**: Performanță / Securitate / UX / SEO / Mentenanță
3. **Soluție concretă** cu cod exemplu
4. **Effort estimat**: 5min / 30min / 2h / 1zi

---

## 📋 CATEGORII DE AUDIT

### 1. 🏗️ ARHITECTURĂ ȘI STRUCTURĂ

**Analizează:**
- [ ] Organizarea folderelor și fișierelor (App Router structure)
- [ ] Separarea concernurilor (components/lib/app)
- [ ] Naming conventions (consistency)
- [ ] Code colocation (sunt componentele lângă pagini unde ar trebui?)
- [ ] Import paths și aliases (`@/*`)
- [ ] Structura de componente (atomic design?)
- [ ] Data management (lib/data.ts ca single source of truth)
- [ ] Type definitions (types.ts lipsa?)

**Întrebări cheie:**
- Este structura scalabilă pentru adăugarea de noi features?
- Sunt duplicate de cod care ar trebui abstrase?
- Ar beneficia aplicația de un folder `/features` sau `/modules`?
- Ar trebui `lib/data.ts` să fie împărțit în mai multe fișiere?

---

### 2. ⚛️ REACT ȘI NEXT.JS BEST PRACTICES

**Analizează:**
- [ ] Server Components vs Client Components (sunt folosite corect?)
- [ ] `use client` directives (sunt necesare toate?)
- [ ] React 19 features (sunt folosite optimal - Suspense, Transitions, etc.?)
- [ ] Next.js 15 features (Turbopack, Partial Prerendering, etc.)
- [ ] Metadata API (SEO optimization)
- [ ] Image optimization (`next/image` usage)
- [ ] Font optimization (Google Fonts loading strategy)
- [ ] Link prefetching și navigation
- [ ] Dynamic imports și code splitting
- [ ] Error boundaries (lipsesc?)
- [ ] Loading states (loading.tsx files?)
- [ ] Not-found pages (not-found.tsx?)

**Întrebări cheie:**
- Sunt paginile marcate corect ca Server/Client Components?
- Poate fi îmbunătățit Time to First Byte (TTFB)?
- Sunt imaginile optimizate (format, sizing, lazy loading)?
- Există route handlers care ar putea fi adăugate (API routes)?

---

### 3. 🎨 UI/UX ȘI DESIGN SYSTEM

**Analizează:**
- [ ] Consistența design system-ului
- [ ] Tailwind CSS usage (best practices, no inline complexity)
- [ ] Color palette și contrast ratios (WCAG AA/AAA)
- [ ] Typography scale și hierarchy
- [ ] Spacing și layout consistency
- [ ] Component variants (Button, Card, etc.)
- [ ] Dark mode implementation (există, funcționează?)
- [ ] Responsive design (mobile-first approach?)
- [ ] Touch targets (44x44px minimum?)
- [ ] Interactive states (hover, focus, active, disabled)
- [ ] Form UX (validation, error messages, success states)
- [ ] Loading spinners și skeleton screens
- [ ] Empty states și error pages

**Întrebări cheie:**
- Există inconsistențe vizuale între pagini?
- Ar beneficia aplicația de un storybook pentru componente?
- Sunt animațiile performante (60fps)?
- Este UX-ul intuitiv pentru utilizatori non-tehnici?

---

### 4. ♿ ACCESIBILITATE (A11Y)

**Analizează:**
- [ ] Semantic HTML (headings hierarchy, landmarks)
- [ ] ARIA attributes (roles, labels, descriptions)
- [ ] Keyboard navigation (tab order, focus management)
- [ ] Focus indicators (vizibili și clare)
- [ ] Screen reader compatibility
- [ ] Alt text pentru imagini
- [ ] Form labels și error announcements
- [ ] Color contrast (text/background)
- [ ] Skip links pentru navigation
- [ ] Live regions pentru dynamic content
- [ ] Language attribute (`lang="ro"`)

**Teste de rulat:**
- [ ] Lighthouse Accessibility Score
- [ ] axe DevTools scan
- [ ] Keyboard-only navigation test
- [ ] Screen reader test (VoiceOver pe Mac)

**Target**: WCAG 2.1 Level AA compliance minimum

---

### 5. 🚀 PERFORMANȚĂ ȘI OPTIMIZARE

**Analizează:**
- [ ] Bundle size (JavaScript, CSS)
- [ ] Code splitting strategy
- [ ] Tree shaking (unused exports)
- [ ] Lazy loading (components, images, fonts)
- [ ] Static vs Dynamic rendering
- [ ] ISR opportunities (Incremental Static Regeneration)
- [ ] Client-side JavaScript size
- [ ] CSS critical path
- [ ] Web Vitals (LCP, FID, CLS, INP)
- [ ] Resource hints (preload, prefetch, dns-prefetch)
- [ ] Third-party scripts (Google Fonts, analytics?)
- [ ] Compression (Brotli/Gzip)

**Benchmark:**
- [ ] Run Lighthouse audit (Performance score)
- [ ] WebPageTest analysis
- [ ] Next.js bundle analyzer
- [ ] Chrome DevTools Performance profiling

**Targets:**
- Lighthouse Performance Score: 90+
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- INP (Interaction to Next Paint): < 200ms

---

### 6. 🔒 SECURITATE

**Analizează:**
- [ ] Dependencies vulnerabilities (`npm audit`)
- [ ] Content Security Policy (CSP headers)
- [ ] XSS protection (input sanitization)
- [ ] CSRF protection (form submissions)
- [ ] Secure headers (X-Frame-Options, X-Content-Type-Options)
- [ ] HTTPS enforcement
- [ ] Cookie security (HttpOnly, Secure, SameSite)
- [ ] API route protection (dacă există)
- [ ] Environment variables handling
- [ ] Secrets management (.env files)
- [ ] Client-side exposure (API keys, tokens)
- [ ] Form validation (client + server side)
- [ ] Rate limiting (contact form abuse)
- [ ] GDPR compliance (cookie consent, privacy policy)

**Checks:**
- [ ] `npm audit` și `npm audit fix`
- [ ] Snyk scan
- [ ] OWASP Top 10 compliance

---

### 7. 🔍 SEO ȘI METADATA

**Analizează:**
- [ ] Title tags (unique, descriptive, 50-60 chars)
- [ ] Meta descriptions (compelling, 150-160 chars)
- [ ] Open Graph tags (social sharing)
- [ ] Twitter Card tags
- [ ] Canonical URLs
- [ ] Structured data (JSON-LD schema.org)
- [ ] XML sitemap
- [ ] robots.txt
- [ ] Favicon și app icons
- [ ] 404 page optimization
- [ ] Internal linking strategy
- [ ] URL structure (clean, semantic)
- [ ] Language tags (hreflang dacă e multilingual)

**Teste:**
- [ ] Google Rich Results Test
- [ ] Facebook Sharing Debugger
- [ ] Twitter Card Validator
- [ ] Screaming Frog crawl

---

### 8. 📱 RESPONSIVE ȘI CROSS-BROWSER

**Analizează:**
- [ ] Mobile-first approach
- [ ] Breakpoints consistency (sm, md, lg, xl, 2xl)
- [ ] Touch vs mouse interactions
- [ ] Viewport meta tag
- [ ] Responsive images (srcset, sizes)
- [ ] Responsive typography (clamp, fluid sizing)
- [ ] Mobile navigation (hamburger menu)
- [ ] Landscape orientation handling
- [ ] Tablet-specific layouts

**Device testing:**
- [ ] iPhone (Safari iOS)
- [ ] Android (Chrome)
- [ ] iPad
- [ ] Desktop (Chrome, Firefox, Safari, Edge)

**Breakpoint testing:**
- [ ] 320px (small mobile)
- [ ] 768px (tablet)
- [ ] 1024px (laptop)
- [ ] 1920px (desktop)

---

### 9. 🧪 TESTING ȘI QUALITY ASSURANCE

**✅ INSTALAT DEJA:**
- ✅ **Playwright E2E Testing** - Complet configurat
  - Browsere: Chrome, Firefox, Safari (toate instalate)
  - Device emulation: Desktop, Mobile (iPhone/Pixel), Tablet (iPad)
  - 2 test suites existente: `tests/e2e/homepage.spec.ts`, `tests/e2e/contact.spec.ts`
  - Scripts disponibile: `npm test`, `npm run test:ui`, `npm run test:headed`, `npm run test:debug`
  - Documentație: `tests/README.md`

**Analizează:**
- [ ] **E2E tests existente** - Rulează și verifică că toate testele trec
  ```bash
  npm test  # Ar trebui să treacă toate testele
  ```
- [ ] Coverage E2E - Sunt toate flow-urile critice testate?
  - [ ] Homepage navigation (✅ deja testat)
  - [ ] Contact form submission (✅ deja testat)
  - [ ] Membri page flow (⚠️ de adăugat)
  - [ ] Proiecte page cu grafice (⚠️ de adăugat)
  - [ ] Despre Noi storytelling (⚠️ de adăugat)
  - [ ] Footer links și legal pages (⚠️ de adăugat)
- [ ] Accessibility în E2E tests
  - [ ] Keyboard navigation (✅ parțial testat în contact.spec.ts)
  - [ ] Screen reader compatibility (⚠️ de adăugat cu @axe-core/playwright)
  - [ ] ARIA attributes validation (⚠️ de adăugat)
- [ ] Unit tests (⚠️ lipsesc)
  - Componente UI (Button, Card, Input, etc.)
  - Utility functions (lib/utils.ts)
  - Data transformations (dacă există)
- [ ] Integration tests (⚠️ lipsesc)
  - Form submissions cu validation
  - Component interactions
  - State management (dacă există)
- [ ] Visual regression tests (⚠️ recomandat)
  - Chromatic sau Percy pentru consistency UI
- [ ] TypeScript strict mode (verifică tsconfig.json)
- [ ] ESLint configuration și rules
  - Rulează `npm run lint` și verifică warnings/errors
- [ ] Prettier formatting (există config?)
- [ ] Husky pre-commit hooks (⚠️ recomandat)
  - Run tests înainte de commit
  - Lint și format înainte de push
- [ ] CI/CD pipeline (⚠️ recomandat)
  - GitHub Actions pentru Playwright tests
  - Auto-deploy la Vercel/Netlify
- [ ] Test coverage targets
  - E2E: Target 80%+ pentru user flows critice
  - Unit: Target 70%+ pentru componente și utils

**Action items identificate:**
1. **URGENT**: Rulează testele Playwright existente și verifică că trec toate
2. **HIGH**: Adaugă E2E tests pentru Members, Projects, About pages
3. **MEDIUM**: Setup unit testing cu Vitest + React Testing Library
4. **MEDIUM**: Integrează @axe-core/playwright pentru accessibility testing automat
5. **LOW**: Setup visual regression testing (Chromatic/Percy)

**Setup recomandat pentru viitor:**
- ✅ Playwright pentru E2E tests (DEJA INSTALAT!)
- ⚠️ Vitest pentru unit tests (DE ADĂUGAT)
- ⚠️ React Testing Library pentru component tests (DE ADĂUGAT)
- ⚠️ @axe-core/playwright pentru accessibility tests (DE ADĂUGAT)
- ⚠️ Chromatic pentru visual regression (DE ADĂUGAT)

---

### 10. 📊 ANALYTICS ȘI MONITORING

**Analizează:**
- [ ] Analytics setup (Google Analytics, Plausible, etc.)
- [ ] Event tracking (form submissions, button clicks)
- [ ] Error tracking (Sentry?)
- [ ] Performance monitoring (Vercel Analytics?)
- [ ] Conversion tracking
- [ ] User behavior analytics
- [ ] A/B testing infrastructure
- [ ] GDPR-compliant analytics

---

### 11. 🎯 CONȚINUT ȘI COPYWRITING

**Analizează:**
- [ ] Ortografie și gramatică (română corectă)
- [ ] Tone of voice consistency
- [ ] CTAs clarity și persuasiveness
- [ ] Content hierarchy (H1 → H6)
- [ ] Microcopy (button labels, errors, empty states)
- [ ] Legal content accuracy (GDPR, termeni)
- [ ] Contact information accuracy
- [ ] About us storytelling
- [ ] Member profiles (complete, engaging?)

---

### 12. 🔄 ANIMAȚII ȘI INTERACȚIUNI

**Analizează:**
- [ ] Framer Motion usage (optimizat?)
- [ ] Animation performance (GPU acceleration)
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [ ] Transition timing (natural easing)
- [ ] Scroll animations (IntersectionObserver usage)
- [ ] Hover effects (desktop-only?)
- [ ] Loading animations
- [ ] Micro-interactions

**Best practices:**
- Animații sub 300ms pentru feedback instant
- Evită animații pe scroll prea agresive
- Respectă `prefers-reduced-motion` media query

---

### 13. 📦 BUILD ȘI DEPLOYMENT

**Analizează:**
- [ ] Build errors/warnings
- [ ] Build time optimization
- [ ] Environment variables setup
- [ ] Production vs development configs
- [ ] Static export capability
- [ ] Docker container (dacă e nevoie)
- [ ] Deployment platform compatibility (Vercel, Netlify, etc.)
- [ ] CDN strategy
- [ ] Caching headers
- [ ] Asset optimization pipeline

**Test build:**
```bash
npm run build
npm run start
```

---

### 14. 📚 DOCUMENTAȚIE ȘI MENTENANȚĂ

**Analizează:**
- [ ] README.md (complete, up-to-date)
- [ ] Code comments (meaningful, not excessive)
- [ ] Component documentation (JSDoc?)
- [ ] API documentation (dacă există route handlers)
- [ ] Deployment guide
- [ ] Contributing guidelines
- [ ] Changelog
- [ ] License

---

### 15. 🌐 SPECIFIC PENTRU CONTEXT ROMÂNESC

**Analizează:**
- [ ] ANPC compliance (link în footer)
- [ ] SOL compliance (link în footer)
- [ ] GDPR România (ANSPDCP)
- [ ] Legal entity information (CUI, Reg. Com., Aviz)
- [ ] Romanian language specifics (diacritice, formatare date)
- [ ] Romanian holidays și business hours
- [ ] Lei (RON) currency formatting (dacă e relevant)
- [ ] Romanian address format

---

## 📈 OUTPUT AȘTEPTAT

### Format raport:

```markdown
# 🔍 RAPORT AUDIT COMPLET - INIMA BĂRĂGANULUI
Data: 2025-12-03

## EXECUTIVE SUMMARY
- ✅ Puncte forte: [X total]
- ⚠️ Îmbunătățiri recomandate: [Y total]
- 🔴 Probleme critice: [Z total]
- 📊 Overall Health Score: [X/100]

## DETALII PE CATEGORII

### 1. ARHITECTURĂ ȘI STRUCTURĂ
**Score: [X/10]**

#### ✅ Puncte forte
1. [Descriere] - Impact: [rating]

#### ⚠️ Îmbunătățiri
1. **[Titlu problemă]** - Severity: [level] | Impact: [area]
   - **Problema**: [descriere]
   - **Soluție**: [soluție concretă]
   - **Cod exemplu**:
   ```typescript
   // Bad
   [cod actual]

   // Good
   [cod îmbunătățit]
   ```
   - **Effort**: [estimare]
   - **Prioritate**: [1-5]

#### 🔴 Probleme critice
[Același format]

[... repeat pentru toate cele 15 categorii]

## 🎯 PLAN DE ACȚIUNE PRIORITIZAT

### 🔴 URGENT (0-3 zile)
1. [Task] - Impact: [descriere] - Effort: [X]

### 🟡 HIGH PRIORITY (1-2 săptămâni)
[...]

### 🟢 MEDIUM PRIORITY (1 lună)
[...]

### 🔵 LOW PRIORITY (backlog)
[...]

## 📊 METRICI ȘI BENCHMARK

### Lighthouse Scores
- Performance: [X/100]
- Accessibility: [X/100]
- Best Practices: [X/100]
- SEO: [X/100]

### Web Vitals
- LCP: [X]s
- FID: [X]ms
- CLS: [X]
- INP: [X]ms

### Bundle Analysis
- Total JS: [X] kB
- Total CSS: [X] kB
- Largest chunk: [X] kB

## 🚀 RECOMANDĂRI STRATEGICE

### Short-term (1-3 luni)
[Recomandări concrete]

### Long-term (3-12 luni)
[Viziune pentru evoluție]

## 📎 ANEXE
- [ ] Screenshot Lighthouse report
- [ ] Bundle analyzer output
- [ ] npm audit report
- [ ] ESLint report
```

---

## 🔌 MCP-URI DISPONIBILE PENTRU AUDIT

**AI ACCES LA 3 MCP SERVERS CUSTOM** (toate testate ✓ - 10/10 tests passed):

### 1. 🐙 GitHub MCP
**Funcționalități:**
- Git operations: `git/status`, `git/diff`, `git/log`
- GitHub operations: `pr/list`, `pr/create`, `pr/view`, `issue/list`, `repo/view`
- Wrapper peste GitHub CLI (deja instalat)

**Folosește pentru:**
- Verifică statusul git și uncommitted changes
- Analizează commit history pentru a înțelege evoluția proiectului
- Verifică dacă există PR-uri deschise sau issues
- Get repo info pentru context

**Exemple comenzi:**
```
"Arată-mi statusul git și ce fișiere au fost modificate"
"Care sunt ultimele 10 commit-uri?"
"Există PR-uri deschise pentru acest repo?"
```

---

### 2. 🗂️ Filesystem MCP
**Funcționalități:**
- List files: `fs/list`, `fs/listdir`
- Search in files: `fs/search`
- File stats: `fs/stats`
- Bulk operations: `fs/bulk-rename`
- **Security**: Path traversal protection, operations limitate la project root

**Folosește pentru:**
- Găsește rapid fișiere după pattern (toate `.tsx`, toate cu "Button", etc.)
- Search în conținutul fișierelor pentru patterns specifice
- Analizează structura de directoare
- Identify duplicate code sau naming inconsistencies

**Exemple comenzi:**
```
"Caută toate componentele TypeScript care conțin 'use client'"
"Lista toate fișierele în app/ directory"
"Găsește toate fișierele care importă 'framer-motion'"
"Caută TODO comments în cod"
```

---

### 3. 🧠 Memory MCP
**Funcționalități:**
- Store/get context: `memory/store-context`, `memory/get-context`
- Decision tracking: `memory/store-decision`, `memory/get-decisions`
- Pattern library: `memory/store-pattern`, `memory/get-patterns`
- Search memory: `memory/search`
- Export/import: `memory/export`, `memory/import`

**Folosește pentru:**
- Stochează deciziile arhitecturale pe măsură ce le descoperi în audit
- Reține patterns importante găsite în cod
- Build knowledge base despre aplicație
- Context persistent între sesiuni (dacă auditul durează mai mult)

**Exemple comenzi:**
```
"Reține că aplicația folosește Next.js 15 App Router cu Server Components"
"Stochează decizia: Am ales Tailwind CSS pentru styling, rationale: ..."
"Salvează pattern-ul: Toate componentele UI sunt în components/ui/"
"Ce decizii arhitecturale am identificat până acum?"
```

---

## 🚀 WORKFLOW DE AUDIT CU MCP-URI

**Recomandare pentru audit eficient:**

```
1. START AUDIT
   ↓
2. GitHub MCP: Get project context
   - git log pentru a vedea evoluția
   - git status pentru uncommitted work
   ↓
3. Filesystem MCP: Explorează structura
   - Lista toate componentele
   - Caută patterns în cod (use client, imports, etc.)
   - Identify files ce trebuie analizate
   ↓
4. READ & ANALYZE files importante
   - layout.tsx, page.tsx files
   - components/ui/*
   - lib/data.ts
   - Config files
   ↓
5. Memory MCP: Documentează findings
   - Store decisions pe măsură ce le găsești
   - Save patterns importante
   - Build context pentru raport final
   ↓
6. RUN AUTOMATED TESTS
   - npm test (Playwright E2E)
   - npm run lint (ESLint)
   - npm audit (Security)
   ↓
7. COMPILE REPORT
   - Memory MCP: Export all findings
   - Organizează în categorii
   - Prioritizează issues
```

---

## 🛠️ TOOL RECOMMENDATIONS

### Pentru audit folosește:

### **✅ DEJA DISPONIBILE (folosește-le ACUM!):**

1. **E2E Testing:**
   - ✅ **Playwright** - INSTALAT și configurat
     ```bash
     npm test              # Run toate testele
     npm run test:ui       # UI mode (recomandat)
     npm run test:headed   # Vezi browserul
     npm run test:debug    # Debug mode
     ```
   - ✅ Browsere: Chrome, Firefox, Safari
   - ✅ Device emulation: Desktop, Mobile, Tablet
   - 📚 Doc: `tests/README.md`

2. **MCP Servers:**
   - ✅ **GitHub MCP** - Git operations, PR/issue management
   - ✅ **Filesystem MCP** - File search, pattern matching, bulk ops
   - ✅ **Memory MCP** - Context storage, decision tracking
   - 📚 Doc: `.mcp-servers/README.md`

3. **Built-in Tools:**
   - ✅ **npm audit** - Security vulnerabilities
     ```bash
     npm audit
     ```
   - ✅ **ESLint** - Code quality
     ```bash
     npm run lint
     ```
   - ✅ **TypeScript compiler** - Type checking
     ```bash
     npx tsc --noEmit
     ```
   - ✅ **Next.js Build** - Production build check
     ```bash
     npm run build
     ```

---

### **⚠️ RECOMANDATE DE INSTALAT (pentru audit avansat):**

4. **Performance:**
   - Lighthouse CI (Chrome DevTools → Lighthouse tab)
   - WebPageTest (https://webpagetest.org)
   - Next.js Bundle Analyzer
     ```bash
     npm install --save-dev @next/bundle-analyzer
     ```
   - Chrome DevTools Performance profiling

5. **Accessibility:**
   - axe DevTools (Chrome extension)
   - WAVE (Chrome extension)
   - VoiceOver (MacOS built-in - Cmd+F5)
   - @axe-core/playwright (pentru automated a11y tests)
     ```bash
     npm install --save-dev @axe-core/playwright
     ```

6. **SEO:**
   - Google Search Console
   - Screaming Frog SEO Spider
   - Ahrefs Site Audit (dacă ai acces)

7. **Security:**
   - Snyk (pentru deep security scan)
     ```bash
     npx snyk test
     ```
   - OWASP ZAP (pentru security testing avansat)

8. **Code Quality:**
   - SonarQube sau SonarCloud (pentru static analysis avansat)
   - Prettier (pentru consistent formatting)
     ```bash
     npm install --save-dev prettier
     ```

9. **Visual Regression:**
   - Percy sau Chromatic (pentru UI consistency)
   - BrowserStack (pentru cross-browser manual testing)

---

## 💡 MINDSET PENTRU AUDIT

- **Fii critic dar constructiv**: Nu doar identifica probleme, oferă soluții
- **Prioritizează impact**: Focus pe ce aduce valoare reală utilizatorilor
- **Gândește scalabil**: Consideră cum va evolua aplicația în viitor
- **Context românesc**: Ține cont de specificul legal și cultural local
- **User-centric**: Pune experiența utilizatorului pe primul loc
- **Performanță contează**: Fiecare KB și milisecundă contează
- **Accesibilitate = standard**: Nu e optional, e obligatoriu

---

## ✅ CHECKLIST FINAL

Înainte de a considera auditul complet, verifică că ai acoperit:

### **📋 Categorii de audit:**
- [ ] Toate cele 15 categorii analizate în detaliu
- [ ] Fiecare categorie are score (X/10) și findings documentate

### **🔧 Tool-uri folosite:**
- [ ] **Playwright E2E tests** - Rulat și toate testele trec
  ```bash
  npm test  # Verifică că homepage și contact tests trec
  ```
- [ ] **GitHub MCP** - Folosit pentru git status, log, și repo context
- [ ] **Filesystem MCP** - Folosit pentru search patterns și code analysis
- [ ] **Memory MCP** - Folosit pentru a stoca findings și decisions
- [ ] **npm audit** - Rulat și vulnerabilități listate (dacă există)
- [ ] **ESLint** - Rulat (`npm run lint`) și warnings/errors documentate
- [ ] **TypeScript** - Check rulat (`npx tsc --noEmit`)
- [ ] **Lighthouse audit** - Rulat și scores documentate (Performance, A11y, SEO, Best Practices)

### **📊 Testing și validation:**
- [ ] E2E tests existente verificate (homepage.spec.ts, contact.spec.ts)
- [ ] Testing manual pe minimum 3 device types (desktop, mobile, tablet)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Accessibility testing (keyboard navigation, VoiceOver)
- [ ] Build de producție testat local
  ```bash
  npm run build && npm run start
  ```

### **📖 Code review:**
- [ ] Toate fișierele importante citite:
  - [ ] `app/layout.tsx`
  - [ ] `app/page.tsx`
  - [ ] `lib/data.ts`
  - [ ] `components/ui/*` (toate componentele)
  - [ ] `components/navbar.tsx`, `components/footer.tsx`
  - [ ] Config files: `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`

### **📝 Raport final:**
- [ ] Plan de acțiune prioritizat creat (Urgent / High / Medium / Low)
- [ ] Estimări de effort realiste (5min / 30min / 2h / 1zi)
- [ ] Code examples pentru top 10 îmbunătățiri
- [ ] Raport structurat și acționabil (urmează format-ul OUTPUT AȘTEPTAT)
- [ ] Executive summary cu Overall Health Score

### **🧠 Memory MCP (verificări finale):**
- [ ] Toate deciziile arhitecturale importante stocate în Memory MCP
- [ ] Patterns identificate salvate pentru referință viitoare
- [ ] Context complet exportat pentru documentație
  ```
  "Exportă toate findings din memory pentru raport final"
  ```

### **🎯 Deliverables:**
- [ ] Raport markdown complet cu toate secțiunile
- [ ] Screenshots Lighthouse report (Performance, A11y, SEO, Best Practices)
- [ ] npm audit output (dacă există vulnerabilități)
- [ ] ESLint report output
- [ ] Plan de acțiune prioritizat cu tasks concrete

---

## 🚀 START AUDIT WORKFLOW

**Pași recomandați:**

```bash
# 1. Setup initial - verifică că totul funcționează
npm test                    # Playwright tests
npm run lint                # ESLint
npm audit                   # Security
npx tsc --noEmit            # TypeScript

# 2. În chat cu Claude, începe auditul:
"Vreau să rulezi auditul complet folosind AUDIT_PROMPT.md.
Folosește GitHub MCP pentru context, Filesystem MCP pentru code analysis,
și Memory MCP pentru a stoca findings.
Începe cu categoria 1 (Arhitectură) și continuă sistematic prin toate cele 15 categorii."

# 3. Pe măsură ce auditul progresează, urmărește:
- Findings documentate în Memory MCP
- Code analysis cu Filesystem MCP
- Git context cu GitHub MCP
- Automated tests cu Playwright

# 4. La final:
"Exportă toate findings din Memory MCP și creează raportul final
urmând format-ul din OUTPUT AȘTEPTAT"
```

---

**START AUDIT NOW! 🚀**

**Timp estimat:** 45-90 minute pentru audit complet și comprehensiv
**Rezultat așteptat:** Raport detaliat cu minimum 50+ findings și recomandări acționabile
