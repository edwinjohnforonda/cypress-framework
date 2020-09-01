/// <reference types="cypress" />

import { browser, phpTravels } from '../support/globalConstants.js'

const testURL = phpTravels.adminPageUrl

describe(`Visual Regression with baseline (${browser})`, () => {
  it(`This test assumes running baseline image is existing `, () => {
    cy.visit(testURL);
    cy.matchImageSnapshot(`/${browser}/image-1`);
  })
})

describe(`Visual Comparison between baseURL vs testURL (${browser})`, () => {
  it(`This test assumes running baseline image is existing `, () => {
    cy.visit(testURL);
    cy.matchImageSnapshot(`/${browser}/image-1`);
  })
})
