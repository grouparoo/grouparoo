import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click [data-testid="cta"]
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/session/sign-in' }*/),
    page.click('[data-testid="cta"]')
  ]);

  // Click [placeholder="Email\ Address"]
  await page.click('[placeholder="Email\\ Address"]');

  // Fill [placeholder="Email\ Address"]
  await page.fill('[placeholder="Email\\ Address"]', 'demo@grouparoo.com');

  // Press Tab
  await page.press('[placeholder="Email\\ Address"]', 'Tab');

  // Fill [placeholder="Password"]
  await page.fill('[placeholder="Password"]', 'password');

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/setup' }*/),
    page.press('[placeholder="Password"]', 'Enter')
  ]);

  // Click text=Change your Grouparoo Cluster Name
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/settings/core' }*/),
    page.click('text=Change your Grouparoo Cluster Name')
  ]);

  // Click input[name="value"]
  await page.click('input[name="value"]');

  // Fill input[name="value"]
  await page.fill('input[name="value"]', 'My Happy Path');

  // Click text=Cluster: NameA way to identify this Grouparoo cluster. Will be displayed in the  >> button
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/settings/core' }*/),
    page.click('text=Cluster: NameA way to identify this Grouparoo cluster. Will be displayed in the  >> button')
  ]);

});