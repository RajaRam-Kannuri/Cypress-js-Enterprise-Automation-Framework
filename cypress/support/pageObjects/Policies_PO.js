/// <reference types="cypress-xpath" />

import BaseActions from "./BaseActions"

class Policies {

    linkPolicies = "div#nav-policies-container";
    gridPoliciesName = ".policies-grid-body-container .compliance-grid-body-text.link-class";
    locatorPagination = "div#policies div.global-paginations-grid-results-text";
    iconRightArrow = "//div[@id='policies']//i[contains(text(),'chevron_right')]";
    textboxSearchPolicies = "//input[@id='searchTextSearch policy']"
    textVersion = "div[class='policies-version-container'] div[class='policies-grid-linked-normal-text compliance-grid-body-text']"
    textprovider = "div[class='policies-provider-container'] div[class='policies-grid-linked-normal-text compliance-grid-body-text']"
    textSeverity = ".severityText.HIGH"
    textcategories = "div[class='policies-grid-project-body-container'] div[class='compliance-grid-body-text']"
    textPoliciesID = "div[class='policies-policy-type-container'] div[class='policies-grid-linked-normal-text compliance-grid-body-text']"
    btncloudProvider = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"
    checkboxCloudAws = "div#policies input#aws"
    textfirstRowAWS = "div[id='0_row'] div[class='policies-provider-container'] div[class='policies-grid-linked-normal-text compliance-grid-body-text']"
    checkboxCloudAzure = "//div[@id='policies']//div//div[@class='global-policies-search-container']//div[@class='global-policies-search-wrapper']//div[@class='global-policies-grid-search-background']//div[@class='global-filter-chip-body-container']//div[@class='multi-filter-json-dropdown-main-box']//div[@class='multi-filter-json-dropdown-wrapper']//div[@class='multi-filter-json-button-dropdown-content-wrapper']//div[@class='multi-filter-json-card-wrapper']//div[@class='multi-filter-json-card-container']//div[@class='multi-select-filter-menu-wrapper on-scrollbar']//div[@class='ms-json-menu-dropdown-content']//div//input[@id='azure']"
    checkboxCloudGCP = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > input:nth-child(1)"
    checkboxCloudkubernetes = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > input:nth-child(1)"
    /*----------------------------------------------------------------------------------------------
        method name = clickPoliciesLink
        description = This method is used to click policies link
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickPoliciesLink() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.linkPolicies, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyThePoliciesInTable
        description = This method is used to verify the policies text in table
        Parameters
            string = text to be passed in the policies table
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyThePoliciesInTable(string) {
        const baseAction = new BaseActions
        baseAction.verifyTextInTable(this.gridPoliciesName, this.locatorPagination, string, this.iconRightArrow)
    }

    verifySearchPolicy(string) {
        const baseAction = new BaseActions
        baseAction.enterTheValue(string, false, this.textboxSearchPolicies)
        baseAction.verifyTextExists(string, this.gridPoliciesName)
        baseAction.verifyTextExists("2", this.textVersion)
        baseAction.verifyTextExists("Azure", this.textprovider)
        baseAction.verifyTextExists("HIGH", this.textSeverity)
        baseAction.verifyTextExists("Infrastructure Security", this.textcategories)
        baseAction.verifyTextExists("AC_AZURE_0321", this.textPoliciesID)
    }
    verifyFiltersforPolicies() {
        //method under implementation
        const baseAction = new BaseActions
        // cy.get(this.btncloudProvider).click()
        // cy.get(this.checkboxCloudAws).click()
        // baseAction.verifyTextExists("AWS", this.textfirstRowAWS)
        // cy.get(this.btncloudProvider).click()
        // cy.xpath(this.checkboxCloudAzure).click()
        // baseAction.verifyTextExists("Azure", this.textfirstRowAWS)
        cy.get(this.btncloudProvider).click()
        cy.xpath(this.checkboxCloudGCP).click()
        baseAction.verifyTextExists("GCP", this.textfirstRowAWS)

    }
}
export default Policies