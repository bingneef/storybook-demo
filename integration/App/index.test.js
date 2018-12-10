/* global page */

describe('App', () => {
  beforeEach(async () => {
    await page.goto(process.env.APP_URL)
    await page.waitFor('[data-testid="AppRoot"]');
  })

  it('Should show digital-code item when clicking .App-brand', async () => {
    const codeTag = '[data-testid="digital-code"]';

    await expect(page).not.toMatchElement(codeTag);
    await expect(page).toClick('.App-brand')
    await expect(page).toMatchElement(codeTag);
    await expect(page).toClick('.App-brand')
    await expect(page).not.toMatchElement(codeTag);
  }, 10000)
})