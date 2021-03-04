const cookies = require('../utils/cookies');

const scraperObject = {
  url: 'https://www.facebook.com/actual4chan2/photos',
  async init(browserInstance){
    const browser = await browserInstance;

    this.page = await browser.newPage();
    await this.page.setCookie(...cookies.getCookies());

    console.log(`Opening new page: ${this.url}`);
    await this.page.goto(this.url);
  },
}

module.exports = scraperObject;