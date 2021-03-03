const fs = require('fs');

const scraperObject = {
  url: 'https://facebook.com',
  async loadCookies (browser){
    this.page = await browser.newPage();

    if(fs.existsSync(process.env.COOKIES_PATH)) {
      const cookies = fs.readFileSync(process.env.COOKIES_PATH, 'utf8');
      const deserializedCookies = JSON.parse(cookies);

      await this.page.setCookie(...deserializedCookies);
    }
  },
  async saveCookies(){
    const cookies = await this.page.cookies();
    const cookieJson = JSON.stringify(cookies);
  
    fs.writeFileSync(process.env.COOKIES_PATH, cookieJson);
  },
  async acceptCookies(){
    if(await this.page.$('button[data-cookiebanner=accept_button]') !== null){
      await this.page.evaluate(() => {
        document.querySelector('button[data-cookiebanner=accept_button]').click();
      });
    }
  },
  async openHome(){
    console.log(`Navigating to ${this.url}...`);
    // Navigate to the selected page
    await this.page.goto(this.url);
    // Wait for the required DOM to be rendered
    await this.page.waitForSelector('#facebook');
  },
  async login(){
    if(await this.page.$('.UIPage_LoggedOut') !== null){
      
      await this.page.type('#email', process.env.EMAIL);
      await this.page.type('#pass', process.env.PASSWORD);
      
      await this.page.click('button[name=login]');
      
      await this.page.waitForNavigation();
      
      console.log('New Page URL:', this.page.url());
    }
  }
}

module.exports = scraperObject;