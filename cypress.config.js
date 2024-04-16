const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
            BASE_URL: "https://fajrin-nurhakim.vercel.app/",
            BASE_URL_DASHBOARD: "https://fajrin-nurhakim.vercel.app/dashboard",
        },
        viewportWidth: 1200,
        viewportHeight: 800,
        defaultCommandTimeout: 20000,
        requestTimeout: 20000,
    },
});
