const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
    const page = await browser.newPage();
    await page.goto("https://www.youtube.com/watch?v=SvUTNuh2WRE");
    const title = await page.title();
    console.log("Page Title:", title);
    await browser.close();
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
