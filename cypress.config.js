const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8888/',
    supportFile: false,
  },
  rewrites: async () => [
  {
    source: "/public/myfile.html",
    destination: "/pages/api/myfile.js",
  },
],
});
