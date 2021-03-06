import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import devices from 'puppeteer/DeviceDescriptors';

const storybookUrl = process.env.STORYBOOK_URL || 'http://localhost:9009';

const getScreenshotOptions = ({ _context, _url }) => ({
  fullPage: false,
})

for (let device of [null, 'iPhone 6']) {
  const customizePage = page => {
    return Promise.all([
      device && page.emulate(devices[device]),
      page.addStyleTag({ content: `* { transition-property: none !important; transform: none !important; animation: none !important;` }),
    ]);
  }
  
  const getMatchOptions = ({ context: { kind, story }, url }) => {
    return {
      failureThreshold: 0,
      failureThresholdType: 'percent',
    };
  };
  
  const beforeScreenshot = (page, { context: { kind, story }, url }) => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, 1500)
    );
  };
  
  initStoryshots({ suite: 'Image storyshots', test: imageSnapshot({ storybookUrl, getScreenshotOptions, beforeScreenshot, customizePage, getMatchOptions }) });
}
