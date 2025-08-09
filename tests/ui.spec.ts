import { test, expect } from '@playwright/test';
import { pathToFileURL } from 'url';
import path from 'path';

const fileUrl = pathToFileURL(path.resolve('survey-jtbd.html')).href;

test.describe('Survey UI basics', () => {
  test('navigation and scale selection work', async ({ page }) => {
    await page.goto(fileUrl);

    // Go to Gains step (step 3 visually: Contato -> Soluções -> Ganhos)
    await page.click('#btnNext');
    await page.click('#btnNext');
    await expect(page.getByText('Ganhos desejados')).toBeVisible();

    // Click Importance = 4 for first row via the label (not the radio itself)
    await page.locator('#odi-gains tr:nth-of-type(1) td:nth-of-type(2) .radio-group label:nth-of-type(4) .checkmark').click();
    await expect(page.locator('input[name="gains-imp-0"][value="4"]')).toBeChecked();

    // Click Satisfaction = 5 for first row
    await page.locator('#odi-gains tr:nth-of-type(1) td:nth-of-type(3) .radio-group label:nth-of-type(5) .checkmark').click();
    await expect(page.locator('input[name="gains-sat-0"][value="5"]')).toBeChecked();

    // Progress bar should advance when navigating
    const widthBefore = await page.locator('#progBar').evaluate((el) => (el as HTMLElement).style.width);
    await page.click('#btnNext');
    const widthAfter = await page.locator('#progBar').evaluate((el) => (el as HTMLElement).style.width);
    expect(widthAfter).not.toBe(widthBefore);

    // Visual regression aid (artifact)
    await page.screenshot({ path: 'screenshots/gains.png', fullPage: true });
  });
});


