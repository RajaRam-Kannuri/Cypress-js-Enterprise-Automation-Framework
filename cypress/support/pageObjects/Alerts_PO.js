/// <reference types="cypress-xpath" />

import BaseActions from "./BaseActions"
import { threeSeconds, fiveSeconds, eightSeconds, tenSeconds,seventySeconds } from '../../support/utils'

class Alerts {

    linkAlerts = "#nav-logs-container";
    btnProjectFilter = "div[data-cy='filter-Projects']";
    btnTypesFilter = "div[data-cy='filter-Types']";
    dropdownInfoType = "#INFO";
    dropdownValueSuccessType = "#SUCCESS"
    gridValueSummary = "div.alerts-grid-linked-normal-text"
    linkHome = "#nav-home-container";

    /*----------------------------------------------------------------------------------------------
        method name = clickHomeLink
        description = This method is used to click home link on left panel
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickHomeLink(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.linkHome, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickAlertsLink
        description = This method is used to click alerts link on left panel
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickAlertsLink(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.linkAlerts, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickProjectFilterButton
        description = This method is used to click project filter button on alerts page.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickProjectFilterButton(){
        const baseAction = new BaseActions
        
        return baseAction.clickTheElement(this.btnProjectFilter, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickProjectNameFilterValue
        description = This method is used to click project name on project filter dropdown on alerts page.
        Parameter
            projectName = name of the project

    ------------------------------------------------------------------------------------------------*/
    
    clickProjectNameFilterValue(projectName){
        const baseAction = new BaseActions
        return baseAction.clickTheElement("input[name='" + projectName + "']", true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickTypeFilterButton
        description = This method is used to click project type filter button on alerts page.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickTypeFilterButton(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnTypesFilter, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickInfoTypeFilterValue
        description = This method is used to select info type value from project type filter dropdown on alerts page.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickInfoTypeFilterValue(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.dropdownInfoType, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyAlertsLogValue
        description = This method is used to verify alerts log value
        Parameters
            alertValueFinish = text of the alert scan completion validation to be passed from .json file, 
            alertValueStart = text of the alert scan start validation to be passed from .json file
    ------------------------------------------------------------------------------------------------*/

    verifyAlertsLogValue(alertValueFinish, alertValueStart){
        cy.get(this.gridValueSummary).each(el => {
            expect(el.text().trim()).to.be.oneOf([
                alertValueFinish,
                alertValueStart
              ]);
        })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickSuccessTypeFilterValue
        description = This method is used to click success type filter value
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickSuccessTypeFilterValue(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.dropdownValueSuccessType, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = navigateToAlertAndVerifyLogs
        description = This method is used to navigate to alerts page and verify the scan creation and finish logs.
        Parameter
            projectName = name of the project, 
            scanFinishText = text of the alert scan completion validation to be passed from .json file, 
            scanCreationText = text of the alert scan start validation to be passed from .json file
        return value = null
    ------------------------------------------------------------------------------------------------*/

    navigateToAlertAndVerifyLogs(projectName, scanFinishText, scanCreationText) {
        this.clickAlertsLink()
        this.clickProjectFilterButton()
        this.clickProjectNameFilterValue(projectName)
        this.clickProjectFilterButton()
        this.clickTypeFilterButton()
        this.clickInfoTypeFilterValue()
        this.clickSuccessTypeFilterValue()
        this.clickTypeFilterButton()
        this.verifyAlertsLogValue(scanFinishText, scanCreationText)
    }
}
export default Alerts