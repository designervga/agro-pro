import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  use: {
    viewport: { width: 1280, height: 900 },
  },
  reporter: [['list'], ['html', { open: 'never' }]],
});


