# 🧪 TESTING - INIMA BĂRĂGANULUI

Ghid complet pentru testing E2E cu Playwright

---

## 📦 CE AM INSTALAT

- **Playwright Test** - Framework modern E2E testing
- **Browsere**: Chromium, Firefox, WebKit (Safari)
- **Device Emulation**: Desktop + Mobile + Tablet

---

## 🚀 COMENZI RAPIDE

```bash
# Rulează toate testele (headless)
npm test

# UI Mode - development friendly
npm run test:ui

# Vezi browserul în timp real
npm run test:headed

# Debug mode (step-by-step)
npm run test:debug

# Vezi raportul HTML
npm run test:report
```

---

## 📁 STRUCTURA TESTELOR

```
tests/
├── e2e/
│   ├── homepage.spec.ts     # Teste pentru homepage
│   ├── contact.spec.ts      # Teste pentru contact form
│   └── [viitor]/
│       ├── members.spec.ts  # Teste pentru pagina membri
│       ├── projects.spec.ts # Teste pentru pagina proiecte
│       └── about.spec.ts    # Teste pentru despre noi
├── README.md               # Acest fișier
└── playwright-report/      # Rapoarte generate (gitignored)
```

---

## 🧪 TESTE EXISTENTE

### 1. Homepage Tests (`homepage.spec.ts`)

**Ce testăm:**
- ✅ Page load și title
- ✅ Hero section visibility
- ✅ Navigation links (toate paginile)
- ✅ Navigation functionality (click și redirect)
- ✅ Statistics section
- ✅ Footer cu legal links
- ✅ Responsive design (mobile + tablet)

**Rulează doar homepage tests:**
```bash
npx playwright test homepage
```

---

### 2. Contact Form Tests (`contact.spec.ts`)

**Ce testăm:**
- ✅ Form fields visibility
- ✅ Required fields validation
- ✅ Email format validation
- ✅ GDPR checkbox
- ✅ Form submission flow
- ✅ Contact information display
- ✅ Google Maps embed (dacă există)
- ✅ Accessibility (labels, keyboard navigation)

**Rulează doar contact tests:**
```bash
npx playwright test contact
```

---

## 🎯 BROWSERE TESTATE

| Browser | Desktop | Mobile | Tablet |
|---------|---------|--------|--------|
| **Chrome** | ✅ 1920x1080 | ✅ Pixel 5 | - |
| **Firefox** | ✅ 1920x1080 | - | - |
| **Safari** | ✅ 1920x1080 | ✅ iPhone 13 | ✅ iPad Pro |

---

## 📊 EXEMPLE DE RULEERI

### Test specific
```bash
# Doar homepage tests
npx playwright test homepage

# Doar contact tests
npx playwright test contact

# Un singur test
npx playwright test -g "should load successfully"
```

### Test pe browser specific
```bash
# Doar Chrome
npx playwright test --project="Desktop Chrome"

# Doar Safari mobile
npx playwright test --project="Mobile Safari"

# Doar Firefox
npx playwright test --project="Desktop Firefox"
```

### Test cu options
```bash
# Cu UI interactiv
npm run test:ui

# Cu browser vizibil
npm run test:headed

# Un singur worker (serial)
npx playwright test --workers=1

# Retry pe fail
npx playwright test --retries=2
```

---

## 🐛 DEBUGGING

### 1. UI Mode (RECOMANDAT)
```bash
npm run test:ui
```
- Vezi testele în timp real
- Time travel debugging
- Explorează locators
- Vezi network requests

### 2. Debug Mode
```bash
npm run test:debug
```
- Pause execution
- Step through code
- Inspect elements
- Playwright Inspector

### 3. Trace Viewer
```bash
# Rulează test cu trace
npx playwright test --trace on

# Vezi trace după fail
npx playwright show-trace trace.zip
```

---

## 📸 SCREENSHOTS ȘI VIDEOS

Configurate automat în `playwright.config.ts`:

- **Screenshots**: Doar la fail
- **Videos**: Doar la fail
- **Trace**: Doar la retry

Găsești în:
```
test-results/
├── [test-name]-[browser]/
│   ├── video.webm
│   ├── screenshot.png
│   └── trace.zip
```

---

## ✍️ SCRIE TESTE NOI

### Template pentru test nou

```typescript
import { test, expect } from '@playwright/test';

test.describe('Numele Paginii', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ruta-ta');
  });

  test('should do something', async ({ page }) => {
    // Arrange
    const element = page.locator('selector');

    // Act
    await element.click();

    // Assert
    await expect(page).toHaveURL(/expected-url/);
  });
});
```

### Best Practices

1. **Use meaningful test names**
   ```typescript
   // Good
   test('should redirect to members page when clicking Members link')

   // Bad
   test('test 1')
   ```

2. **Use built-in locators**
   ```typescript
   // Good
   page.getByRole('button', { name: /submit/i })
   page.getByLabel(/email/i)

   // Avoid
   page.locator('#submit-btn')
   ```

3. **Wait for elements automatically**
   ```typescript
   // Playwright auto-waits, nu e nevoie de sleep!
   await expect(element).toBeVisible();
   ```

4. **Test user behavior, not implementation**
   ```typescript
   // Good - testezi user flow
   await page.getByRole('button', { name: /contact/i }).click();
   await expect(page).toHaveURL(/contact/);

   // Bad - testezi implementation details
   expect(navigationState.isOpen).toBe(true);
   ```

---

## 🎨 TESTE PENTRU ACCESSIBILITY

Exemple din `contact.spec.ts`:

```typescript
test('should have proper labels', async ({ page }) => {
  // Toate input-urile trebuie să aibă labels asociate
  const nameInput = page.getByLabel(/nume/i);
  await expect(nameInput).toBeVisible();
});

test('should be keyboard navigable', async ({ page }) => {
  // Testează că poți naviga cu Tab
  await page.keyboard.press('Tab');
  // Verifică focus states
});
```

---

## 📈 CI/CD INTEGRATION

### GitHub Actions Example

```yaml
name: E2E Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Run tests
        run: npm test

      - name: Upload test report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/
```

---

## 📊 RAPOARTE

După rularea testelor, vezi raportul:

```bash
npm run test:report
```

Raportul HTML include:
- ✅ Pass/Fail status pentru fiecare test
- ⏱️ Durata de execuție
- 📸 Screenshots la fail
- 🎥 Video recordings
- 📊 Trace files pentru debugging

---

## 🔄 WORKFLOW RECOMANDAT

### Development
```bash
# 1. Scrie feature
# 2. Scrie test
# 3. Rulează în UI mode pentru rapid feedback
npm run test:ui

# 4. Când testul trece, rulează full suite
npm test
```

### Pre-commit
```bash
# Rulează toate testele înainte de commit
npm test

# Sau doar testele pentru pagina modificată
npx playwright test homepage
```

### Production Deployment
```bash
# Full test suite pe toate browserele
npm test

# Verifică raportul
npm run test:report
```

---

## 🆘 TROUBLESHOOTING

### Tests fail cu "Timeout"
```bash
# Crește timeout în playwright.config.ts
timeout: 60000 // 60 seconds
```

### Browser nu se deschide
```bash
# Re-instalează browsere
npx playwright install
```

### Port 3000 ocupat
```bash
# Schimbă portul în playwright.config.ts
baseURL: 'http://localhost:3001'
```

### Teste instabile (flaky)
```bash
# Adaugă retry-uri
retries: 2
```

---

## 📚 RESURSE

- **Playwright Docs**: https://playwright.dev
- **Best Practices**: https://playwright.dev/docs/best-practices
- **Locators Guide**: https://playwright.dev/docs/locators
- **Debugging Guide**: https://playwright.dev/docs/debug

---

## 🎯 NEXT STEPS

1. **Adaugă teste pentru celelalte pagini:**
   - [ ] `tests/e2e/members.spec.ts`
   - [ ] `tests/e2e/projects.spec.ts`
   - [ ] `tests/e2e/about.spec.ts`

2. **Adaugă accessibility tests cu @axe-core/playwright**
   ```bash
   npm install -D @axe-core/playwright
   ```

3. **Integrează în CI/CD** (GitHub Actions, Vercel, etc.)

4. **Visual regression testing** cu Percy sau Chromatic

---

**HAPPY TESTING! 🎉**
