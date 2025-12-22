import { defineConfig } from 'cypress';

export default defineConfig({
   e2e: {
      setupNodeEvents(on, config) {
         // implement node event listeners here
      }
   },
   env: {
      base_url: 'http://localhost:3000',
      user_account: 'bernardsapida1706@gmail.com',
      user_password: '@Password123'
   }
});
