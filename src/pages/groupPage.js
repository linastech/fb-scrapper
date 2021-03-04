import { getCookies } from '@utils/cookies';

const groupPage = {
  url: 'https://www.facebook.com/actual4chan2/photos',
  async init(browserInstance){
    this.page = await browserInstance.newPage();
    await this.page.setCookie(...getCookies());

    console.log(`Opening new page: ${this.url}`);
    await this.page.goto(this.url);
  },
}

export default groupPage;
