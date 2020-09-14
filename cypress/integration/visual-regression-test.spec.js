/// <reference types="cypress" />

import { browser, phpTravels } from '../support/globalConstants.js'
import { phpTravelsElements } from '../support/phpTravelsElements.js'

const isBaseline = Cypress.env('isBaseline')
const baselineURL = phpTravels.adminPageBaselineUrl
const testURL = phpTravels.adminPageTestUrl

const snapshotPage = (testURL, fileName, browserName = browser) => {
  cy.visit(testURL)
  cy.matchImageSnapshot(`/${browserName}/${fileName}`, {
    blackout: [phpTravelsElements.promoHeader]
  })
}

describe(`Visual Regression with baseline (${browser})`, () => {
  it(`This test assumes running baseline image is existing `, () => {
    snapshotPage(testURL, 'image-1')
  })
})

describe(`Visual Comparison between baseURL vs testURL (${browser})`, () => {
  if (isBaseline) {
    it(`Creating Baseline Image `, () => {
      snapshotPage(baselineURL, 'image-2')
    })
  }
  it(`Testing with TestURL `, () => {
    snapshotPage(testURL, 'image-2')
  })
})
