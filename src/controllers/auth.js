import loginPage from '@pages/loginPage';
import { saveCookies } from '@utils/cookies';

const authentication = async (browserInstance) => {
  try{
    await loginPage.init(browserInstance);
    await loginPage.openHome();
    await loginPage.acceptCookies();
    await loginPage.login();
    await saveCookies(loginPage.pageInstance);
    loginPage.pageInstance.close();
  }
  catch(err){
    console.log("Error in auth controller => ", err);
  }
}

export {
  authentication
}
