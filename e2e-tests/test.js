// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const chrome = require('selenium-webdriver/chrome');


describe('E2E Test', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function () {
        let options = new chrome.Options();
        options.addArguments('--headless'); // Run in headless mode
        // create a detached driver
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build()
        // set the driver to be detached from the browser
        driver.manage().setTimeouts({ implicit: 0 })
        vars = {}
    })
    afterEach(async function () {
        await driver.quit();
    })

    it('Should add a task', async function () {
        await driver.get("http://localhost:3000/")
        await driver.manage().window().setRect({ width: 1510, height: 871 })
        await driver.findElement(By.css("input")).click()
        await driver.findElement(By.css("input")).sendKeys("this is a task")
        await driver.findElement(By.css("button:nth-child(2)")).click()
        await driver.findElement(By.css("button:nth-child(3)")).click()
        await driver.findElement(By.css("button:nth-child(4)")).click()
    })
})