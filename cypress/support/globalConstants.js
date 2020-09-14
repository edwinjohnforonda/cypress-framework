const browser = Cypress.browser.name

const phpTravels = {
  demoPageUrl: 'https://phptravels.com/demo/',
  adminPageBaselineUrl: 'https://www.phptravels.net/admin',
  adminPageTestUrl: 'https://www.phptravels.net/admin', // This is temp value Ideally baselineURL is different from testURL
  HomePageUr: 'https://www.phptravels.net/home'
}

export { browser, phpTravels }
