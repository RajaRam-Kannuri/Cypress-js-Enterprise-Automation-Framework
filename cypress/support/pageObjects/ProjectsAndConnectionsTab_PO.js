/// <reference types="cypress-xpath" />

import BaseActions from "./BaseActions"
import { threeSeconds, fiveSeconds, eightSeconds, tenSeconds, seventySeconds, thirtySeconds } from '../utils'
import 'cypress-wait-until';
import ProjectConnection from "../../support/pageObjects/ProjectConnection_PO"
import ProjectRepository from "./ProjectRepository_PO";



class ProjectConnectionsTab {
    tabProjectAndConnection = ":nth-child(2) > .plain > .custom-tab-main-block > .custom-tab-text-block > .custom-tab-text"
    repositoryTab = '[data-cy="Repositories"] > .custom-tab-wrapper > .common-card-row > .common-card-icon-container > div > .svg-icon'
    repoRefreshButton = "button[data-cy='repository-refresh-btn']"
    repositoryCheckBox = '#repo > div > div.repos-grid-data-container > div.repos-grid-title-background > div > div.repos-container > div:nth-child(1) > div > div'
    repoDelete = "//div[@class='hyperlink-action-text mr-12-px'][normalize-space()='Delete']"
    toastMsgRepoDelete = '.Vue-Toastification__toast'
    checkboxFirstRepo = "//div[@id='0_row']//div[@class='repos-container']//div[@class='cloud-setup__list-checkbox header']"
    checkboxSecondRepo = "//div[@id='1_row']//div[@class='repos-container']//div[@class='cloud-setup__list-checkbox header']"
    locatorFirstrowRepo = "div[id='0_row'] div[class='repos-grid-project-body-container'] div:nth-child(1) div:nth-child(1)"
    btnDeleteFromPopup = '[data-cy="btn-delete"]'
    btnSortRepoNames = '.alerts-sort-icon-container > .v-icon'
    locatorTable = 'div#repo div.repos-grid-data-container'
    linkAssignProjet = "div#repo div.global-repo-filter-chip-wrapper > div:nth-child(2)"
    chkboxSelectAll = "div[class='repos-container'] div div[class='cloud-setup__list__checkbox-container'] div[class='cloud-setup__list-checkbox header']"
    CheckBoxAssign = "div[class='button_box_style continue_button_color'] div[class='button_text']"
    inputBoxSearch = "#searchTextSearch"
    textcolumnproject = "div[class='repos-project-container']"
    locatorRightArrow = "//div[@id='repo']//i[contains(text(),'chevron_right')]"
    locatorPaginationcount = "div[class='global-repo-grid-search-bar-row'] div[class='global-paginations-grid-results-text']"

    repositoryTabValidateDelete() {
        cy.wait(eightSeconds)
        this.clickLink(this.tabProjectAndConnection)
        cy.get(this.tabProjectAndConnection).click({ force: true })
        cy.wait(5000)
        cy.get(this.repositoryTab).click({ force: true })
        cy.wait(threeSeconds)
        cy.xpath(this.checkboxFirstRepo).click({ force: true })
        this.validateProjectAssignmentToRepository()
    }
    clickLink(element) {
        cy.get(element).click({ force: true })
    }

    validateProjectAssignmentToRepository() {
        cy.get(this.chkboxSelectAll).click({ force: true })
        cy.xpath(this.repoDelete).click({ force: true })
        cy.get("body").then($body => {
            if ($body.find(this.btnDeleteFromPopup).length > 0) {
                cy.get(this.btnDeleteFromPopup).then($header => {
                    if ($header.is(':visible')) {
                        cy.contains('Delete Repositorie(s)').should("be.visible")
                        cy.get(this.btnDeleteFromPopup).click({force : true})
                    }
                });
            } else {
                cy.log("The Delete PopUp does not exists")
            }
        });
    }

    repositoryTabValidateSorting() {
        cy.wait(eightSeconds)
        this.clickLink(this.tabProjectAndConnection)
        cy.get(this.tabProjectAndConnection).click({ force: true })
        cy.wait(5000)
        cy.get(this.repositoryTab).click({ force: true })
        cy.wait(threeSeconds)
        cy.get(this.btnSortRepoNames).click({ force: true })
        cy.get(this.locatorTable)
            .then(items => {
                const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get();
                const sortedItems = unsortedItems.slice().sort();
                expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
            });
    }
    repositoryTabAssignProjectforSingleRepo() {
        cy.wait(eightSeconds)
        this.clickLink(this.tabProjectAndConnection)
        cy.get(this.tabProjectAndConnection).click({ force: true })
        cy.wait(5000)
        cy.get(this.repositoryTab).click({ force: true })
        cy.wait(threeSeconds)
        cy.get(this.tabProjectAndConnection).click({ force: true })
        cy.wait(5000)
        cy.get(this.repositoryTab).click({ force: true })
        cy.xpath(this.checkboxFirstRepo).click({ force: true })
        cy.get(this.linkAssignProjet).click()
        cy.get(this.inputBoxSearch).type("BAT")
        cy.get(this.chkboxSelectAll).click({ force: true })
        cy.get(this.CheckBoxAssign).click({ force: true })
        cy.wait(1000)
        cy.get(this.toastMsgRepoDelete).contains('Repo/s assigned with').should((elem) => {
            expect(elem.text()).to.equal('Repo/s assigned with project/s successfully');
        })
        cy.wait(5000)
    }
    repositoryTabAssignProjectformultipleRepo() {
        cy.wait(eightSeconds)
        this.clickLink(this.tabProjectAndConnection)
        cy.get(this.tabProjectAndConnection).click({ force: true })
        cy.wait(5000)
        cy.get(this.repositoryTab).click({ force: true })
        cy.wait(threeSeconds)
        cy.get(this.tabProjectAndConnection).click({ force: true })
        cy.wait(5000)
        cy.get(this.repositoryTab).click({ force: true })
        cy.xpath(this.checkboxFirstRepo).click({ force: true })
        cy.xpath(this.checkboxSecondRepo).click({ force: true })
        cy.get(this.linkAssignProjet).click()
        cy.get(this.inputBoxSearch).type("BAT")
        cy.get(this.chkboxSelectAll).click({ force: true })
        cy.get(this.CheckBoxAssign).click({ force: true })
        cy.wait(threeSeconds)
        cy.get(this.toastMsgRepoDelete).contains('Repo/s assigned with').should((elem) => {
            expect(elem.text()).to.equal('Repo/s assigned with project/s successfully');
        })
    }
}


export default ProjectConnectionsTab