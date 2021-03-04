const groupPage = require('../pages/groupPage');

async function handleGroupPage(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        await groupPage.init(browser);
    }
    catch(err){
        console.log("Error in group page controller => ", err);
    }
}

module.exports = (browserInstance) => handleGroupPage(browserInstance);