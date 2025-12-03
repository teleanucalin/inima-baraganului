import { test, expect } from '@playwright/test';

/**
 * Homepage E2E Tests
 *
 * Testează funcționalitatea principală a paginii de home
 */
test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    // Navighează la homepage înainte de fiecare test
    await page.goto('/');
  });

  test('should load successfully', async ({ page }) => {
    // Verifică că pagina se încarcă
    await expect(page).toHaveTitle(/Inima Bărăganului/i);
  });

  test('should display hero section', async ({ page }) => {
    // Verifică că hero section este vizibil
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();
    await expect(heroHeading).toContainText(/Inima Bărăganului/i);
  });

  test('should have working navigation', async ({ page }) => {
    // Verifică că navbar există
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // Verifică că există link-uri de navigare
    await expect(page.getByRole('link', { name: /despre noi/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /membri/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /proiecte/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
  });

  test('should navigate to About page', async ({ page }) => {
    // Click pe link "Despre Noi"
    await page.getByRole('link', { name: /despre noi/i }).first().click();

    // Verifică că URL-ul s-a schimbat
    await expect(page).toHaveURL(/despre-noi/);
  });

  test('should navigate to Members page', async ({ page }) => {
    // Click pe link "Membri"
    await page.getByRole('link', { name: /membri/i }).first().click();

    // Verifică că URL-ul s-a schimbat
    await expect(page).toHaveURL(/membri/);
  });

  test('should navigate to Projects page', async ({ page }) => {
    // Click pe link "Proiecte"
    await page.getByRole('link', { name: /proiecte/i }).first().click();

    // Verifică că URL-ul s-a schimbat
    await expect(page).toHaveURL(/proiecte/);
  });

  test('should navigate to Contact page', async ({ page }) => {
    // Click pe link "Contact"
    await page.getByRole('link', { name: /contact/i }).first().click();

    // Verifică că URL-ul s-a schimbat
    await expect(page).toHaveURL(/contact/);
  });

  test('should display statistics section', async ({ page }) => {
    // Scroll la secțiunea stats
    const statsSection = page.locator('section').filter({ hasText: /membri/i }).first();
    await statsSection.scrollIntoViewIfNeeded();

    // Verifică că stats sunt vizibile
    await expect(statsSection).toBeVisible();
  });

  test('should have footer with legal links', async ({ page }) => {
    // Scroll la footer
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();

    // Verifică că footer este vizibil
    await expect(footer).toBeVisible();

    // Verifică link-uri legale
    await expect(page.getByRole('link', { name: /politica de confidențialitate/i })).toBeVisible();
  });
});

/**
 * Responsive Tests
 */
test.describe('Homepage Responsive', () => {
  test('should be mobile friendly', async ({ page }) => {
    // Setează viewport mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Verifică că conținutul este vizibil
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();

    // Verifică că navbar funcționează pe mobile
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should be tablet friendly', async ({ page }) => {
    // Setează viewport tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    // Verifică că conținutul este vizibil
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();
  });
});
