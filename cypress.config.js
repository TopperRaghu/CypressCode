const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  env: {
    url:"https://google.com",
    url1:"https://naveenautomationlabs.com",
    logoutUrl:"https://facebook.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
