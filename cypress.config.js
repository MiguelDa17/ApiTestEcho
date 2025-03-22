const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://echo-serv.tbxnet.com", // URL base de la API
    reporter: "cypress-mochawesome-reporter", // Reporte JSON
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
