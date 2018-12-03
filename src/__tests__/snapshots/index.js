import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import devices from 'puppeteer/DeviceDescriptors';
const storybookUrl = process.env.CI == 'true' ? `file://${__dirname}/../../../storybook-static` : 'http://localhost:9009';

const getScreenshotOptions = ({ _context, _url }) => ({
  fullPage: false,
})

const customizePage = page => {
  return page.emulate(devices['iPhone 6'])
}

const beforeScreenshot = page => {
  return page.addStyleTag({ content: `* { transition-property: none !important; transform: none !important; animation: none !important;` })
}

initStoryshots({ suite: 'Image storyshots', test: imageSnapshot({ storybookUrl, getScreenshotOptions, customizePage, beforeScreenshot }) });