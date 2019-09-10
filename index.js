const puppeteer = require('puppeteer');
module.exports = async (proc) => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--bwsi',
            '--disable-infobars', 
            '--disable-session-crashed-bubble', 
            '--noerrdialogs', 
            // '--window-size=800,600', 
            // '--windows10-custom-titlebar',
            '--kiosk',
            '--app=http://localhost:3000'],
        appMode: true,
    });
    browser.addListener('disconnect',function(){
        console.log('closed');
    });
    // const page = await browser.newPage();
    // await page.goto('http://localhost:3000');
};