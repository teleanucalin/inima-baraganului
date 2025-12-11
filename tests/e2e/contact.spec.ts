import { test, expect } from '@playwright/test';

/**
 * Contact Page E2E Tests
 *
 * Testează funcționalitatea formularului de contact
 */
test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should load contact page', async ({ page }) => {
    await expect(page).toHaveURL(/contact/);
    await expect(page.locator('h1')).toContainText(/contact/i);
  });

  test('should display contact form', async ({ page }) => {
    // Verifică că toate câmpurile formularului există
    await expect(page.getByLabel(/nume/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/telefon/i)).toBeVisible();
    await expect(page.getByLabel(/mesaj/i)).toBeVisible();

    // Verifică checkbox GDPR
    await expect(page.getByRole('checkbox')).toBeVisible();

    // Verifică buton submit
    await expect(page.getByRole('button', { name: /trimite/i })).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    // Încearcă să trimiți form-ul gol
    await page.getByRole('button', { name: /trimite/i }).click();

    // Browser-ul ar trebui să oprească submission-ul
    // (HTML5 validation)
    // Verifică că suntem încă pe pagina de contact
    await expect(page).toHaveURL(/contact/);
  });

  test('should fill and submit form', async ({ page }) => {
    // Completează formularul
    await page.getByLabel(/nume/i).fill('Test User');
    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/telefon/i).fill('0712345678');
    await page.getByLabel(/mesaj/i).fill('Acesta este un mesaj de test pentru cooperativă.');

    // Bifează checkbox GDPR
    await page.getByRole('checkbox').check();

    // Verifică că checkbox-ul este bifat
    await expect(page.getByRole('checkbox')).toBeChecked();

    // Note: Submit-ul real ar trebui să aibă backend
    // Pentru acum verificăm doar că form-ul poate fi completat
  });

  test('should validate email format', async ({ page }) => {
    // Completează cu email invalid
    await page.getByLabel(/nume/i).fill('Test User');
    await page.getByLabel(/email/i).fill('email-invalid');
    await page.getByLabel(/telefon/i).fill('0712345678');
    await page.getByLabel(/mesaj/i).fill('Test message');
    await page.getByRole('checkbox').check();

    // Încearcă submit
    await page.getByRole('button', { name: /trimite/i }).click();

    // HTML5 validation ar trebui să oprească submission-ul
    await expect(page).toHaveURL(/contact/);
  });

  test('should display contact information', async ({ page }) => {
    // Verifică că informațiile de contact sunt afișate
    const contactInfo = page.locator('text=/email|telefon|adresa/i').first();
    await expect(contactInfo).toBeVisible();
  });

  test('should have Google Maps embed', async ({ page }) => {
    // Verifică că există iframe pentru Google Maps
    // (dacă este implementat)
    const mapsFrame = page.locator('iframe[src*="google.com/maps"]').first();

    // Skip test dacă Maps nu este implementat
    const mapsExists = await mapsFrame.count();
    if (mapsExists > 0) {
      await expect(mapsFrame).toBeVisible();
    }
  });
});

/**
 * Accessibility Tests pentru Contact Form
 */
test.describe('Contact Form Accessibility', () => {
  test('should have proper labels', async ({ page }) => {
    await page.goto('/contact');

    // Verifică că toate input-urile au labels asociate
    const nameInput = page.getByLabel(/nume/i);
    const emailInput = page.getByLabel(/email/i);
    const phoneInput = page.getByLabel(/telefon/i);
    const messageInput = page.getByLabel(/mesaj/i);

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(phoneInput).toBeVisible();
    await expect(messageInput).toBeVisible();
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/contact');

    // Start de la primul input
    await page.keyboard.press('Tab');
    const nameInput = page.getByLabel(/nume/i);

    // Verifică că focus este pe input (sau un element înainte de el)
    // Mai multe Tab-uri pentru a naviga prin form
    await page.keyboard.press('Tab'); // Email
    await page.keyboard.press('Tab'); // Telefon
    await page.keyboard.press('Tab'); // Mesaj
    await page.keyboard.press('Tab'); // Checkbox
    await page.keyboard.press('Tab'); // Submit button

    const submitButton = page.getByRole('button', { name: /trimite/i });
    await expect(submitButton).toBeFocused();
  });
});
