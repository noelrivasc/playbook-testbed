const { defineConfig } = require('cypress');
const fs = require('node:fs');

const instance_id = fs.readFileSync('playbook/instance-id', 'utf8');
console.log(`https://playbook-${instance_id}.ddev.site`);

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `https://playbook-${instance_id}.ddev.site`,
  },
});
