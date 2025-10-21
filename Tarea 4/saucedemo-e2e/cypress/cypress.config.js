const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-gpu', '--disable-dev-shm-usage');
          return launchOptions;
        }
      });

      return config;
    },
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'saucedemo-e2e-report',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true
  }
});
