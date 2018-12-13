/* global page */

describe('Form', () => {
  beforeEach(async () => {
    await page.goto(`${process.env.APP_URL}/form`);
    await page.waitFor('[data-testid="FormRoot"]');
  })

  describe('Loaded', async () => {
    it('Logs in and redirects to root', async () => {  
      const emailTag = '[data-testid="FormEmail"]';
      const passwordTag = '[data-testid="FormPassword"]';
  
      await expect(page).toFill(emailTag, 'bingsteup@gmail.com');
      await expect(page).toFill(passwordTag, 'testtest');

      await expect(page).toClick('[data-testid="FormSubmit"]');
      
      await page.waitForNavigation({ waitUntil: 'networkidle2' })
      expect(page.url()).toBe(`${process.env.APP_URL}/`);
    }, 10000)
  })
})