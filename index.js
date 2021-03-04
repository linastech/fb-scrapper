require('dotenv').config();
const browserObject = require('./src/browser');
const authController = require('./src/controllers/auth');
const groupPageController = require('./src/controllers/groupPage');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

//handle authentication
authController(browserInstance);
//open group page to be scrapped
groupPageController(browserInstance);