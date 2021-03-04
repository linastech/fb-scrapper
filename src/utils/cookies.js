import fs from 'fs';

const getCookies = () => {
  let cookies;

  if(fs.existsSync(process.env.COOKIES_PATH)) {
    const cookiesJSON = fs.readFileSync(process.env.COOKIES_PATH, 'utf8');
    cookies = JSON.parse(cookiesJSON);
  }else{
    cookies = [];
  }

  return cookies;
}

const saveCookies = async(pageInstance) => {
  const cookies = await pageInstance.cookies();
  const cookieJson = JSON.stringify(cookies);

  fs.writeFileSync(process.env.COOKIES_PATH, cookieJson);
}

export {
  getCookies,
  saveCookies
}
