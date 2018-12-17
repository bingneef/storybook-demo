/* global page */

describe('App', () => {
  beforeEach(async () => {
    page.goto(process.env.APP_URL)
  })

  describe('Loading', async () => {
    it('Shows a loader', async () => {
      const testTag = '[data-testid="AppLoading"]';
  
      await page.waitFor(testTag);
      await expect(page).toMatchElement(testTag);
    }, 5000)
  });

  describe('Loaded', async () => {
    beforeEach(async () => {
      await page.waitFor('[data-testid="AppRoot"]');
    })

    it('Should show digital-code item when clicking .App-brand', async () => {  
      const testTag = '[data-testid="digital-code"]';

      await expect(page).not.toMatchElement(testTag);
      await expect(page).toClick('.App-brand')
      await expect(page).toMatchElement(testTag);
      await expect(page).toClick('.App-brand')
      await expect(page).not.toMatchElement(testTag);
    })

    it('Should render the content from graphql', async () => {
      const testTag = '[data-testid="content"]';
      
      let items = await page.$$(testTag);
      expect(items.length).toEqual(2);

      // This mock returns a single entry
      await page.goto(`${process.env.APP_URL}?testid=App-1`)
      await page.waitFor('[data-testid="AppRoot"]');

      items = await page.$$(testTag);
      expect(items.length).toEqual(1);
    })

    page.goto(process.env.APP_URL)
  })

  
})