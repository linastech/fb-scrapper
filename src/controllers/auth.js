const authPage = require('../pages/auth');
const cookies = require('../utils/cookies');

async function handleLogin(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        await authPage.init(browser);
        await authPage.openHome();
        await authPage.acceptCookies();
        await authPage.login();
        
        cookies.saveCookies(authPage.pageInstance);
        authPage.pageInstance.close();
    }
    catch(err){
        console.log("Error in auth controller => ", err);
    }
}

module.exports = (browserInstance) => handleLogin(browserInstance)