
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('On click Draw button shows bots', async () => {
    const draw = await driver.findElement(By.id('choices'))
    const bots = await draw.isDisplayed()
    expect(bots).toBe(true)
    await driver.sleep(2000)
})

test('Add to Duo displays player-duo', async () => {
    const addTo = await driver.findElement(By.id('player-duo'))
    const yourDuo = await addTo.isDisplayed()
    expect(yourDuo).toBe(true)
    await driver.sleep(2000)
})