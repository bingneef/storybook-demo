process.env.APP_URL = process.env.APP_URL || 'http://localhost:3000';

module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.test\\.js$',
}