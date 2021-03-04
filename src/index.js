import dotenv from 'dotenv/config';
import { startBrowser } from './browser.js';
import { authentication } from '@controllers/auth';
import { groupController } from '@controllers/group';

(async () => {
  //Start the browser and create a browser instance
  const browserInstance = await startBrowser();

  //handle authentication
  await authentication(browserInstance);
  //open group page to be scrapped
  await groupController(browserInstance);
})();
