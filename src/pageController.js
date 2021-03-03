const pageScraper = require('./pageScraper');

async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        await pageScraper.loadCookies(browser);
        await pageScraper.openHome();
        await pageScraper.acceptCookies();
        await pageScraper.login();
        await pageScraper.saveCookies();
    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)