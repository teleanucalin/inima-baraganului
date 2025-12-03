import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration pentru Inima Bărăganului
 *
 * Testing cross-browser pentru:
 * - Desktop: Chrome, Firefox, Safari
 * - Mobile: iOS Safari, Android Chrome
 */
export default defineConfig({
  // Directorul pentru teste E2E
  testDir: './tests/e2e',

  // Rulează testele în paralel
  fullyParallel: true,

  // Fail build-ul în CI dacă există teste cu .only
  forbidOnly: !!process.env.CI,

  // Retry pe fail în CI
  retries: process.env.CI ? 2 : 0,

  // Workers: 1 în CI (stable), paralel local
  workers: process.env.CI ? 1 : undefined,

  // Reporter: HTML pentru review local
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use: {
    // Base URL pentru teste
    baseURL: 'http://localhost:3000',

    // Trace pentru debugging
    trace: 'on-first-retry',

    // Screenshot doar la fail
    screenshot: 'only-on-failure',

    // Video doar la fail
    video: 'retain-on-failure',
  },

  // Configurări pentru browsere
  projects: [
    // Desktop Browsers
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 }
      },
    },
    {
      name: 'Desktop Firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 }
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 }
      },
    },

    // Mobile Browsers
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 13'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },

    // Tablet
    {
      name: 'iPad Pro',
      use: { ...devices['iPad Pro'] },
    },
  ],

  // Start dev server înainte de teste
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000, // 2 minute pentru start
  },
});
