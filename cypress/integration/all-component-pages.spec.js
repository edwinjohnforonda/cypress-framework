/// <reference types="cypress" />

const browser = Cypress.browser.name;
const baselineURL = Cypress.env('testAppBaselineUrl') ;
const testURL = Cypress.env('testAppTestUrl') ;
const isBaseline = Cypress.env('isBaseline') ;

const routes = [
  "accountnumber",
  "alerts",
  "alerttexts",
  "autosuggest", 
  "buttons",
  "button-group",
  "more-buttons",
  "checkbox",
  "choicegroup",
  "container",
  "creditcard",
  "date-picker",
  "date-picker-input",
  "date-picker-input-separate-package",
  "date-picker-input-modal-form",
  "date-picker-input-modal-form-separate-package",
  "description-list",
  "fieldset",
  "fieldwrapper",
  "file-selector",
  "flybuys",
  "footer-navigation",
  "form",
  "formatted-input",
  "header-navigation",
  "heading",
  "icon-input",
  "input",
  "input-group",
  "ird-number",
  "layout",
  "loading-indicator",
  "modal",
  "modal-no-header",
  "navigation-drawer",
  "number-input",
  "paragraph",
  "placeholder-image",
  "radio",
  "inlineselect",
  "select",
  "slider",
  "split-merger",
  "sub",
  "sup",
  "switch",
  "table",
  "table-sorter",
  "text",
  "textarea",
  "text-highlighter",
  "text-link",
  "toggle-group",
  "transaction-rows",
];

describe(`All Test App Component Pages (${browser})`, () => {
  routes.forEach(route => {
    if (isBaseline){  
      it(`${route} should render correctly in BNZ Theme - BASELINE`, () => {    
        cy.visit(`${baselineURL}${encodeURI(route)}`);
        cy.matchImageSnapshot(`/${browser}/${route}-Page-BNZ`);
      });
    }
    it(`${route} should render correctly in BNZ Theme - TEST`, () => {    
      cy.visit(`${testURL}${encodeURI(route)}`);
      cy.matchImageSnapshot(`/${browser}/${route}-Page-BNZ`);
    });
  });

    if (isBaseline){  
      it(`Forms in Modals should render correctly in BNZ Theme  - BASELINE`, () => {
        //Error Trapping
        Cypress.on('uncaught:exception', (err, runnable) => {
          expect(err.message).to.include('ResizeObserver');
          return false
        })
  
        cy.visit(`${baselineURL}modal-header-form`);
        cy.matchImageSnapshot(`/${browser}/modal-header-form-Page-BNZ`);
  
        cy.viewport(400, 800);
        cy.matchImageSnapshot(`/${browser}/modal-header-form2-Page-BNZ`);
  
      });
    }

    it(`Forms in Modals should render correctly in BNZ Theme  - TEST`, () => {
      //Error Trapping
      Cypress.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('ResizeObserver');
        return false
      })

      cy.visit(`${testURL}modal-header-form`);
      cy.matchImageSnapshot(`/${browser}/modal-header-form-Page-BNZ`);

      cy.viewport(400, 800);
      cy.matchImageSnapshot(`/${browser}/modal-header-form2-Page-BNZ`);

    });

    if (isBaseline){  
      it(`Long Forms in Modals should render correctly in BNZ Theme - BASELINE`, () => {

        //Error Trapping
        Cypress.on('uncaught:exception', (err, runnable) => {
          expect(err.message).to.include('ResizeObserver');
          return false
        }) 
    
        cy.visit(`${baselineURL}modal-header-long-form`);
        cy.matchImageSnapshot(`/${browser}/modal-header-long-form-Page-BNZ`);
    
        cy.viewport(400, 800);
        cy.matchImageSnapshot(`/${browser}/modal-header-long-form2-Page-BNZ`);
      });
    }

  it(`Long Forms in Modals should render correctly in BNZ Theme - TEST`, () => {

    //Error Trapping
    Cypress.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('ResizeObserver');
      return false
    }) 

    cy.visit(`${testURL}modal-header-long-form`);
    cy.matchImageSnapshot(`/${browser}/modal-header-long-form-Page-BNZ`);

    cy.viewport(400, 800);
    cy.matchImageSnapshot(`/${browser}/modal-header-long-form2-Page-BNZ`);
  });




});






