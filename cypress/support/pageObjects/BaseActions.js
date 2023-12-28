import ProjectConnection from "../pageObjects/ProjectConnection_PO"
import { fiveSeconds } from "../utils"

class BaseActions {

    /*----------------------------------------------------------------------------------------------
        method name = goBackInBrowser
        description = This method is used to go back in browser
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    goBackInBrowser() {
        cy.go('back')
    }

    /*----------------------------------------------------------------------------------------------
        method name = waitForTime
        description = This method is used to wait for 5 seconds.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    waitForTime() {
        cy.wait(5000)
    }

    /*----------------------------------------------------------------------------------------------
        method name = DynamicWaitWithContains
        description = This method is used to wait dynamically for the text to match.
        Parameters
            value = locator to be passed, 
            match = string to be match with the element text
        return value = null
    ------------------------------------------------------------------------------------------------*/

    DynamicWaitWithContains(value, match) {
        return (cy.get("body").then($body => {
            if ($body.find(value).length > 0 && this.flag < 60) {
                return (cy.get(value).then(text => {
                    if (text.text().includes(match)) {
                        return true
                    } else if (this.flag < 60) {
                        this.flag++
                        cy.wait(1000)
                        this.DynamicWaitWithContains(value, match)
                    }
                }))
            } else if (this.flag < 60) {
                this.flag++
                cy.wait(1000)
                this.DynamicWaitWithContains(value, match)
            }
        }))
    }

    /*----------------------------------------------------------------------------------------------
        method name = checkElementTextPresence
        description = This method is used to verify expected text presence in list of elements text.
        Parameters
            element = locator to be passed for which presence to be check, 
            textMatch = text to be passed for which element text to be matched
        return value = true/false
    ------------------------------------------------------------------------------------------------*/

    checkElementTextPresence(element, textMatch) {
        return new Promise((resolve, reject) => {
            var isExists = false;
            var result = cy.get(element)
            cy.get(element).each(el => {
                if (el.text().trim().toLowerCase() === textMatch.trim().toLowerCase()) {
                    isExists = true;
                    return false;
                }
            }).then(() => {
                resolve(isExists)
            })
        })
    }

    /*----------------------------------------------------------------------------------------------
        method name = dynamicWait
        description = This method is used to wait dynamically for element presence
        Parameters
            value = value of the locator to be passed, 
            eql = time to be wait for
        return value = null
    ------------------------------------------------------------------------------------------------*/

    dynamicWait(value, eql) {
        return (this.isVisible(value, eql).then(element => {
            if (element == false && this.timeout != 60000) {
                cy.wait(this.timeout);
                this.timeout += this.timeout + 10000;
                this.dynamicWait(value, eql)
            }
        }))
    }

    /*----------------------------------------------------------------------------------------------
        method name = isVisible
        description = This method is used to check if element is visible
        Parameters
            element = value of the locator to be passed, 
            eql = time to be wait for
        return value = true/false
    ------------------------------------------------------------------------------------------------*/

    isVisible(element, eql) {
        return (cy.get(element).eq(eql).then(($el) => {
            return Cypress.dom.isVisible($el)
        }))
    }

    /*----------------------------------------------------------------------------------------------
        method name = getRandomInt
        description = This method is used to get random integer value
        Parameters
            max = maximum range of the random integer to be created
        return value = integer value
    ------------------------------------------------------------------------------------------------*/

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickTheElement
        description = This method is used to click the element
        Parameters
            element = locator of the element, 
            isCss = boolean value for the locator type, if it is css type its value to be true
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickTheElement(element, isCss) {
        if (isCss) {
            return cy.get(element).then(() => { console.log("button is clicked") }).click({ force: true })
        } else {
            return cy.xpath(element).then(() => { console.log("button is clicked") }).click({ force: true })
        }
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterTheValue
        description = This method is used to enter the value in inputbox
        Parameters
            element = locator of the element, 
            isCss = boolean value for the locator type, if it is css type its value to be true
            value = enter the value in the element
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterTheValue(value, isCss, element) {
        if (isCss) {
            return cy.get(element).then(() => { console.log("value is entered") }).type(value)
        } else {
            return cy.xpath(element).then(() => { console.log("value is entered") }).type(value)
        }
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyTextExists
        description = This method is used to verify the text exists
        Parameters
            string = text to verify presence, 
            element = locator of the element to verify
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyTextExists(string, element) {
        cy.get(element).should('include.text', string)
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyTextDoesNotExist
        description = This method is used to verify the text does not exist
        Parameters
            string = text to verify presence, 
            element = locator of the element to verify
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyTextDoesNotExist(string, element) {
        cy.get(element).should('not.contain', string)
    }

    /*----------------------------------------------------------------------------------------------
        method name = getValueEditBox
        description = This method is used to get the value of the element on UI
        Parameters
            element = locator of the element to verify
        return value = value
    ------------------------------------------------------------------------------------------------*/

    getValueEditBox(element) {
        return (cy.get(element).then(($text) => {
            return $text.text().trim()
        }))
    }

    /*----------------------------------------------------------------------------------------------
        method name = traverseThroughTable
        description = This method is used to traverse through the table and find text.
        Parameters
            string = text to verify presence, 
            element = locator of the element to verify
            rightArrowElement = locator of the right arrow, 
            maxCount = maximum count it should go right
        return value = null
    ------------------------------------------------------------------------------------------------*/

    traverseThroughTable(elementName, string, rightArrowElement, maxCount, count = 0) {
        cy.xpath(rightArrowElement).click({ force: true })
        this.checkElementTextPresence(elementName, string).then((result2) => {
            if (result2) {
                cy.get(elementName).should('include.text', string)
            } else {
                if (count < maxCount) {
                    this.traverseThroughTable(elementName, string, rightArrowElement, maxCount, count + 1)
                }
            }
        })
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyTextInTable
        description = This method is used to verify the provided text in table.
        Parameters
            string = text to verify presence, 
            elementName = locator of the element to verify
            rightArrowElement = locator of the right arrow,
            paginationLocator = locator of the pagination element
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyTextInTable(elementName, paginationLocator, string, rightArrowElement) {
        this.checkElementTextPresence(elementName, string).then((result) => {
            if (result) {
                cy.get(elementName).should('include.text', string)
            } else {
                cy.get(paginationLocator).then(($text) => {
                    let elementText = $text.text().trim()
                    cy.log(elementText);
                    const myArray = elementText.split("of");
                    let word2 = myArray[1];
                    let word1 = myArray[0];
                    const myArray2 = word1.split("-");
                    let word3 = myArray2[1];
                    let maxCount = parseInt(word2) / parseInt(word3)
                    this.traverseThroughTable(elementName, string, rightArrowElement, maxCount)
                })
            }
        });
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifySelectedValueInDropdown
        description = This method is used to verify selected dropdown value by text.
        Parameters
            value = text to verify presence, 
            element = locator of the element to verify
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifySelectedValueInDropdown(element, value) {
        cy.get(element).select(value).should('have.value', value)
    }

    /*----------------------------------------------------------------------------------------------
        method name = selectValueInDropdown
        description = This method is used to select the dropdown value by text.
        Parameters
            value = text to verify presence, 
            element = locator of the element to verify
        return value = null
    ------------------------------------------------------------------------------------------------*/

    selectValueInDropdown(element, value) {
        cy.get(element).select(value)
    }

    /*----------------------------------------------------------------------------------------------
        method name = selectValueInDropdownByIndex
        description = This method is used to select the dropdown value by index.
        Parameters
            index = select dropdown value by index, 
            element = locator of the element to verify
        return value = null
    ------------------------------------------------------------------------------------------------*/

    selectValueInDropdownByIndex(element, index) {
        cy.get(element).select(index)
    }

    /*----------------------------------------------------------------------------------------------
        method name = saveDialog
        description = TO-DO
        parameter = TO-DO
        return value = TO-DO
    ------------------------------------------------------------------------------------------------*/

    saveDialog() {
        //TO-DO
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyObjectExists
        description = This method is used to verify if object exists.
        Parameters
            element = locator of the element to verify
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyObjectExists(element) {
        cy.get(element).should('be.visible')
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyObjectNotExists
        description = This method is used to verify if object does not exist.
        Parameters
            element = locator of the element to verify
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyObjectNotExists(element) {
        cy.get(element).should('not.exist')
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyObjectIsReadOnly
        description = This method is used to verify if object is read only.
        Parameters
            element = locator of the element to verify, 
            elementType = type of the element
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyObjectIsReadOnly(element, elementType) {
        cy.get(element).find(elementType).should('have.class', 'disabled')
    }

    /*----------------------------------------------------------------------------------------------
        method name = openConnectionPopup
        description = This method is used to click + icon and open the popup for creating project.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    openConnectionPopup() {
        const projectConnection = new ProjectConnection
        this.dynamicWait(projectConnection.linkAddConnection, 0)
        cy.get(projectConnection.leftPanelContainer).eq(0).invoke("addClass", ".menu-container active")
    }

}
export default BaseActions