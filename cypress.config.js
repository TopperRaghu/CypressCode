const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  env: {
   url:"https://rahulshettyacademy.com",
    url1:"https://naveenautomationlabs.com",
    logoutUrl:"https://naveenautomationlabs.com/opencart/index.php?route=account/logout"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
