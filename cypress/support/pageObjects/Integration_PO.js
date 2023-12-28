/// <reference types="cypress-xpath" />

import BaseActions from "./BaseActions"
import { threeSeconds, fiveSeconds, eightSeconds, tenSeconds } from '../../support/utils'

class Integration {
    linkIntegrationpage = "div#nav-syncs-container div > div"
    linkHome = "#nav-home-container";
    cardLinkTerraformCloud = "div#app div.row.pa-4 > div:nth-child(5) > div"
    inputBoxEndpointUrl = "input[context='endpointUrl']"
    inputBoxhmac = "div#app div:nth-child(4) > div.custom-inputbox-container > div.custom-inputbox__input-container > input"
    btnclose = "div#Close-0"


    /*----------------------------------------------------------------------------------------------
        method name = clickHomeLink
        description = This method is used to click home link on left panel
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/
    clickHomeLink() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.linkHome, true)
    }
    /*----------------------------------------------------------------------------------------------
        method name = clickIntegrationsLink
        description = This method is used to click integrations link on left panel
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/
    clickIntegrationsLink() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.linkIntegrationpage, true)
    }
    /*----------------------------------------------------------------------------------------------
        method name = clickIntegrationsLink
        description = This method is used to click integrations link on left panel
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/
    clickIntegrationsLink() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.linkIntegrationpage, true)
    }
    /*----------------------------------------------------------------------------------------------
        method name = clickCardTeraformCloud
        description = This method is used to click teraform card  
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/
    clickCardTeraformCloud() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.cardLinkTerraformCloud, true)
    }
    /*----------------------------------------------------------------------------------------------
        method name = fillDataInTeraformPopUp
        description = This method is used to fill the url data into the teraform form  
        parameter = The Parameter value is picked from Integration.json file
        return value = null
    ------------------------------------------------------------------------------------------------*/

    setUrlInTeraformPopUp(urlEndPointName) {
        cy.get(this.inputBoxEndpointUrl).type(urlEndPointName, { force: true })
        cy.wait(eightSeconds)
    }
    /*----------------------------------------------------------------------------------------------
        method name = fillDataInTeraformPopUp
        description = This method is used to fill the HMAC data into the teraform form  
        parameter = The Parameter value is picked from Integration.json file
        return value = null
    ------------------------------------------------------------------------------------------------*/
    setHmacInTeraformPopUp(textBoxHAMC) {
        cy.get(this.inputBoxhmac).type(textBoxHAMC, { force: true })

    }
    /*----------------------------------------------------------------------------------------------
        method name = validateTeraformPopUp
        description = This method is used to validate HMAC field value is not null.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/
    validateTeraformPopUpHmac() {
        cy.get(this.inputBoxhmac).invoke('val').then((hmactext) => {
            expect(hmactext).to.not.be.empty
        })
    }
    /*----------------------------------------------------------------------------------------------
        method name = validateTeraform
        description = This method is used to validate HMAC field value is not null.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/
    validateTeraformPopUpEndPointUrl() {
        cy.get(this.inputBoxEndpointUrl).invoke('val').then(urltext =>
            expect(urltext).contains('https://cloud.tenable.com/cns/external/api/application/trigger/terraform-cloud'))
    }
    /*----------------------------------------------------------------------------------------------
        method name = closeTeraformPopUp
        description = This method is used to close the Teraform popup
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/
    closeTeraformPopUp() {
        cy.get(this.btnclose).click()
    }
}

export default Integration