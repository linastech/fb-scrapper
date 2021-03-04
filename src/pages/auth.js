const cookies = require('../utils/cookies');

const scraperObject = {
  url: 'https://facebook.com',
  async init (browser){
    this.pageInstance = await browser.newPage();
    await this.pageInstance.setCookie(...cookies.getCookies());
  },
  async acceptCookies(){
    if(await this.pageInstance.$('button[data-cookiebanner=accept_button]') !== null){
      await this.pageInstance.evaluate(() => {
        document.querySelector('button[data-cookiebanner=accept_button]').click();
      });
    }
  },
  async openHome(){
    console.log(`Opening new page: ${this.url}`);

    await this.pageInstance.goto(this.url, {waitUntil: 'load'});
    // Wait for the required DOM to be rendered
    await this.pageInstance.waitForSelector('#facebook');
  },
  async login(){
    if(await this.pageInstance.$('.UIPage_LoggedOut') !== null){
      
      await this.pageInstance.type('#email', process.env.EMAIL);
      await this.pageInstance.type('#pass', process.env.PASSWORD);
      
      await this.pageInstance.click('button[name=login]');
      
      await this.pageInstance.waitForNavigation();
      
      console.log('Logged in, new page URL:', this.page.url());
    }
  }
}

module.exports = scraperObject;