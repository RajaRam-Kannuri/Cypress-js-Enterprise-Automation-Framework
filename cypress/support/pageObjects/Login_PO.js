import { cyUtils } from '..';
import { threeSeconds, fiveSeconds, eightSeconds, tenSeconds,seventySeconds } from '../utils'
import BaseActions from "./BaseActions"


class Login {
    
    inputBoxPassword = "input[name='password']"
    inputBoxEmail = "input[placeholder='Email']"
    btnEmail = "i.mdi-email-outline"
    btnLogin = "button.primary"
    inputBoxEmail = "input[name='username']"
    btnSignIn = "//button[contains(text(),'Sign In')]"
    btnPopupGotIt = "//button[contains(text(),'Got It')]"
    btnHamburger = "button[data-tn-guide-id='Logo']"
    iconccn = ".user-initials-text"
    linkSignOut = "div[class='user-profile-menu-list'] div:nth-child(1) div:nth-child(2)"
    popOutIconCloudSecurity = "//div[contains(text(),'Cloud Security')]//following-sibling::div//div";
    tabProjectAndConnection = ":nth-child(2) > .plain > .custom-tab-main-block > .custom-tab-text-block > .custom-tab-text"

    /*----------------------------------------------------------------------------------------------
        method name = setPasswordValue
        description = This method is used to set password in the text box.
        Parameters
            value = password to be passed from the /config/<env-name>-config.json file
        return value = null
    ------------------------------------------------------------------------------------------------*/

    setPasswordValue(value){
        cy.get(this.inputBoxPassword).type(value)
        
    
    }
   

    /*----------------------------------------------------------------------------------------------
        method name = verifyUserIsSuccessfullyLogin
        description = This method is used to verify if user is able to successfully login.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyUserIsSuccessfullyLogin(){
        const baseAction = new BaseActions
        return baseAction.verifyObjectExists(this.tabProjectAndConnection)
    }

    /*----------------------------------------------------------------------------------------------
        method name = checkIfLoginButtonIsPresent
        description = This method is used to check login button presence.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    checkIfLoginButtonIsPresent() {
        cy.get(this.btnLogin).should('be.visible')
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickEmailButton
        description = This method is used to click email button.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickEmailButton() {
        cy.get(this.btnEmail).click()
    }
    verifySignout(){
        cy.get(this.iconccn).click()
        cy.get(this.linkSignOut).click()
    }

    /*----------------------------------------------------------------------------------------------
        method name = login
        description = This method is used to login into the application
        Parameters
            url = url is execution url passed from /config/<env-name>-config.json file
        return value = null
    ------------------------------------------------------------------------------------------------*/

    login(url){
        cy.wait(fiveSeconds)
        if(url.includes('tenable')){
            return new Promise((resolve, reject) => {
                cy.wait(fiveSeconds)
                cy.waitUntil(() => cy.get(this.inputBoxEmail).then($el => Cypress.dom.isVisible($el)), {timeout: tenSeconds});
                cy.get(this.inputBoxEmail).type(Cypress.env('qaUserName')).then(() => {
                    return cy.get(this.inputBoxPassword).type(Cypress.env('qaUserPassword'))
                }).then(() => {
                    return cy.xpath(this.btnSignIn).click()
                }).then(() => {
                    return cy.wait(eightSeconds);
                }).then(() => {
                    return cy.forceVisit('https://cloud.tenable.com/cns/newEnv/trends')
                }).then(() => {
                    return cy.wait(eightSeconds);
                }).then(() => {
                    return this.verifyUserIsSuccessfullyLogin(); 
                }).then(() => {
                    resolve()
                })
            })
        } else {
            return new Promise((resolve, reject) => {
                this.clickEmailButton();
                cy.get(this.inputBoxEmail).type(Cypress.env('qaUserPassword'))
                this.setPasswordValue(Cypress.env('qaUserPassword'))
                cy.get(this.btnLogin).click()
                cy.wait(eightSeconds);
                this.verifyUserIsSuccessfullyLogin();
                resolve()
            })
        }


    }
}
export default Login