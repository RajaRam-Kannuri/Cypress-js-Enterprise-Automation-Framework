/// <reference types="cypress-xpath" />

import BaseActions from "./BaseActions"
import ProjectConnection_PO from "./ProjectConnection_PO"
import { threeSeconds, fiveSeconds, eightSeconds, tenSeconds, thirtySeconds,seventySeconds} from '../utils'
import Alerts from "./Alerts_PO"

class ProjectRepository {


    btnUpload = "div.gcp-credentials-button"
    repositoryTextInFlyout = "div.s-body div:nth-child(2).sidenav-data-wrapper div.s-value-text.pre-formatted"
    flyoutCloseIcon = "div.global-close-icon-container"
    toastAlertMessage = "div[role='alert']"
    searchBoxProjectConnection = "div#envs #searchText"
    searchBoxAwsConnectionProjectName = "div.global-repos-search-box-container #searchText"
    radioBtnServiceAccountCredentials  = "input[value='serviceCredentials']"
    checkBoxAzureSubscription = "div.mgmt-group__list-container div.mgmt-group__list__row-body div.mgmt-group__list-row:nth-child(1) div.mgmt-group__list-checkbox"
    searchBoxAzureProjectName = "div.connector__main-row div.step-content-container:nth-child(12) input#searchText"
    radioBtnAzurePublicCloud = "input[value='public']"
    linkGcpServiceAccount  = "//div[text()='GCP service account']"
    iconSettingsks8Repo = '[data-cy="repo-grid-row-1"] > [data-cy="grid-container"] > .row > .col-1 > .grid-text-data > .selected_workflow_color > div > .v-icon'
    btnContinueAzureVpc  = "#CONTINUE-5"
    linkAzureSubscription  = "//div[text()='Azure subscription']"
    radioBtnServicePrincipal = "input[value='servicePrincipal']"
    btnContinueRepositoryProjectName = "div#connect-step-4"
    radioBtnVersionControl = "#vc_radio_btn"
    btnContinueChooseWorkflow = "#continue_step_1 div"
    btnContinueVersionControlProvider  = "#continue-step-2 div.upper_case"
    searchBoxRepository ='#repo_coonection_grid > #search_box > .search > [data-cy="search-"]'
    checkBoxRepository = "div#repo_coonection_grid div.grid-text-data div[data-cy='checkbox']"
    btnContinueRepository = "#continue-step-3"
    searchBoxProject =".global-repos-search-box-container > .search > [data-cy=search-]"
    checkBoxProjectName = "div#accurics-grid-row-data div[data-cy='checkbox']"
    repositoryProjectNameContinueButton = "div#connect-step-4"
    linkRepository = "//div[text()='Repository']"
    projectRepositoryValue = 'div.env-row-body.on-scrollbar div.env-row:nth-child(1) div.project-provider-repo-container div:nth-child(3) div.project-repo-sub-text'
    btnTogglePlanBasedSetup = "div.v-input--selection-controls__input input"
    dropDownIacEngineType = "//div[contains(text(),'IaC engine type')]//following-sibling::div//input[@id='select-version']"
    dropDownIacEngineVersion = "//div[contains(text(),'Select terraform version')]//following-sibling::div//input[@id='select-version']"
    dropDownRemediationType = "#iacType"
    parameterPlanBasedSetupKey = "input[placeholder=' Enter or select']"
    parameterPlanBasedSetupValue = "textarea"
    btnSave = "//div[contains(text(),'Save')]"
    repoSettingsIcon ='[data-cy="repo-grid-row-0"] > [data-cy="grid-container"] > .row > .col-1 > .grid-text-data > .selected_workflow_color > div > .v-icon'
    failingPoliciesText = "div.env-policy-container div.envs-grid-linked-normal-text"
    resourcesText = "div.env-resources-container div.envs-grid-body-text"
    tabRepositories ="//div[@data-cy='Repositories']"
    btnProjectFilter = "//div[contains(@class,'global-repos-search-container')]//div[contains(text(),'Projects') and @class='multi-filter-json-dropdown-button-title-text']"
    gridRepoName = "div.repos-grid-main-text"
    repoStatus = "//div[contains(text(),'Status:')]//parent::div//parent::div//div[@class='s-value-text pre-formatted']"
    engineTypeValue = "//div[contains(text(),'IaC engine:')]//parent::div//parent::div//div[@class='s-value-text pre-formatted']"
    editIconSettings = "//div[contains(text(),'Settings:')]//parent::div//parent::div//div[@class='s-edit-icon']"
    btnSettingsCancel = "//div[contains(text(),'Cancel')]"
    repoFlyoutCloseIcon = "div.global-close-icon-container i"
    linkAddANewProject = "div.add_project_text"
    btnCreateProject = "//div[contains(text(),'CREATE PROJECT')]"
    plusIcon = "i.v-icon.notranslate.mdi.mdi-plus"
    checkBoxOnboardAll = "//div[contains(text(),'Onboard all')]//parent::div//div[@class='cloud-setup__list-checkbox header']"
    btnOnboardAll = "//div[contains(text(),'Onboard all') and @class=' button_text']"
    editRepositorysIcon ='//div[@data-cy="edit-Repositories"]'
    linkAddPublicRepo = ".repo_connection__add-title"
    btnAddCustomPopUp = "div#RepoConnectionVcChooseRepo div.modal-btn.primary"
    textBoxRepoUrlAddCustom = "div#RepoConnectionVcChooseRepo div:nth-child(2) > div.custom-inputbox__input-container > input"
    textBoxFolderPathAddCustom = "[data-cy='inputbox-repoFolder']"
    textBoxRepoNameAddCustom = "div#RepoConnectionVcChooseRepo div:nth-child(1) > div.custom-inputbox__input-container > input"
    checkBoxRepoEdit ='[data-cy="check-box-row-index-0"] > [data-cy="checkbox"]'
    btnSaveRepository ='[data-cy="projectReposDialog saveButton"] > .button_text'
    terraformVersion ="//div[text()='0.15.x']"
    repoSearch ='.global-repos-search-box-container > .search > [data-cy="search-"]'
    repoFailingPolicies ='.repos-issues-container > .repos-grid-body-container > .repos-grid-linked-normal-text'
    repoResources ='.repos-resources-container > .repos-grid-body-container > .repos-grid-linked-normal-text'

    

    clickRepoName(repositoryName) {
        const baseAction = new BaseActions
        return baseAction.clickTheElement("#repo_coonection_grid > #search_box > .search > [data-cy='"+repositoryName + "']", true)
        
    }

    searchRepos(repositoryName){
       cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.enterTheValue(repositoryName, true, this.repoSearch)
    }

    selectTerraformVersion(){
        cy.xpath(this.terraformVersion).click({force:true})
    }

    configureTheRepoPlanbased(iacEngineType, version, isPlanBasedSetup) {
        this.clickRepositorySettingsIcon()
        cy.wait(threeSeconds)
        this.clickIacEngineTypeDropdown()
        this.clickRepositoryConfigDropdownValue(iacEngineType)
        if(iacEngineType == "Terraform") {
            if(isPlanBasedSetup) {
                this.clickPlanBasedSetupToggleButton()
                this.clickIacEngineVersionDropdown()
                this.clickRepositoryConfigDropdownValue(version)
            }
            } 
           
        this.clickSaveButton()
    }

    onboardRepoWithPlanbasedRepoConfig(repositoryName, projectName, repoType, iacEngineType, version, remediationType, isPlanBasedSetup){
        this.navigateToRepositoryConnection(repositoryName, repoType)
        this.configureTheRepoPlanbased(iacEngineType, version, remediationType, isPlanBasedSetup)
        this.clickRepositoryContinueButton()
        this.searchProjectForRepositoryConnection(projectName)
    }
    
    navigateAndVerifyTheRepoWithProject(projectName) {
        const projectConnection = new ProjectConnection_PO
            this.clickRepositoriesTab()
            cy.wait(fiveSeconds)
            this.clickProjectFilterButton()
            cy.wait(eightSeconds)
            this.clickProjectNameFilterValue(projectName)
            this.clickRepositoriesNameInGrid()
            this.clickFlyoutCloseIcon()
            cy.wait(fiveSeconds)
            cy.get(projectConnection.refreshButton).click({force : true})
        }

        onboardMultiRepoConfig(repositoryName,repositoryName2, projectName, repoType, iacEngineType, version, remediationType, isPlanBasedSetup,
            parameterPlanBasedSetupKey, parameterPlanBasedSetupValue){
            this.navigateToRepositoryConnection(repositoryName, repoType)
            this.configureTheRepo(iacEngineType, version, remediationType, isPlanBasedSetup, parameterPlanBasedSetupKey, parameterPlanBasedSetupValue)
            this.clickRepositoryContinueButton()
            this.searchProjectForRepositoryConnection(projectName)
            cy.wait(fiveSeconds)
            this.navigateToRepository2Connection(repositoryName2, repoType)
            this.configureTheRepo(iacEngineType, version, remediationType, isPlanBasedSetup, parameterPlanBasedSetupKey, parameterPlanBasedSetupValue)
            this.clickRepositoryContinueButton()
            this.searchProjectForRepositoryConnection(projectName)
            }
            verifyTheMultiRepositoryConnection(projectName,repositoryName) {
                const projectConnection = new ProjectConnection_PO
                projectConnection.clickProjectAndConnectionTab()
                projectConnection.searchProject(projectName)
                this.verifyMultiRepositoryConnection()
                }
    
    /*-----------------------------------------------------------------------------------------------
    method name = clickEditRepositoryIcon
    description = This method is used to click editicon
    parameter = null
    return value = null
    --------------------------------------------------------------------------------------------------*/
   
    clickEditRepositoryIcon(){
        cy.xpath(this.editRepositorysIcon).click({force:true})
    }
   
 /*-----------------------------------------------------------------------------------------------
    method name = clickCheckBoxRepoEdit
    description = This method is used to click checkbox for select repository
    parameter = null
    return value = null
    --------------------------------------------------------------------------------------------------*/

    clickCheckboxRepoEdit(){
        cy.get(this.checkBoxRepoEdit).click({force:true})
    }

     /*-----------------------------------------------------------------------------------------------
    method name = clicksavebutton
    description = This method is used to click save button
    parameter = null
    return value = null
    --------------------------------------------------------------------------------------------------*/
    clickBtnsaveRepository(){
        cy.get(this.btnSaveRepository).click({force:true})
    }


    /*----------------------------------------------------------------------------------------------
        method name = clickOnboardAllButton
        description = This method is used to click onboard all button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickOnboardAllButton(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnOnboardAll, false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickOnboardAllCheckbox
        description = This method is used to click onboard all checkbox
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickOnboardAllCheckbox(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.checkBoxOnboardAll, false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickPlusIcon
        description = This method is used to click plus icon on the multi parameter.
        Parameters
            count = number of multiple parameters want to add
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickPlusIcon(count){
        const baseAction = new BaseActions
        return baseAction.clickTheElement("div.plan-based-setup div:nth-child(" + count + ").d-flex.flex-no-wrap i.v-icon.notranslate.mdi.mdi-plus", true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterMultiParameterPlanBasedSetupValue
        description = This method is used to enter multi parameter plan based setup value.
        Parameters
            count = number of multiple parameters want to add
            value = value of multiple parameters want to add
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterMultiParameterPlanBasedSetupValue(value, count){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.enterTheValue(value, true, "div.plan-based-setup div:nth-child(" + count + ").d-flex.flex-no-wrap textarea")
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterMultiParameterPlanBasedSetupKey
        description = This method is used to enter multi parameter plan based setup key.
        Parameters
            count = number of multiple parameters want to add
            value = value of multiple parameters want to add
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterMultiParameterPlanBasedSetupKey(value, count){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.enterTheValue(value, true, "div.plan-based-setup div:nth-child(" + count + ").d-flex.flex-no-wrap input[placeholder=' Enter or select']",
        true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = getParameteresKeys
        description = This method is used to get parameters keys and value
        Parameters
            parameterPlanBasedSetupKeyValue = multi parameters key and value to be passed from .json i.e. a=1,b=2,c=3
        return value = null
    ------------------------------------------------------------------------------------------------*/

    getParameteresKeys(parameterPlanBasedSetupKeyValue){
        const key = []
        const values = []
        if(parameterPlanBasedSetupKeyValue.includes(",")){
            var result = parameterPlanBasedSetupKeyValue.split(",")
            for(var i=0; i<result.length; i++){
                key[i] = result[i].split("=")[0]
                values[i] = result[i].split("=")[1]
            }
            for(var j=0; j<key.length; j++) {
                if(j >= 1){
                    this.clickPlusIcon(j)
                }
                cy.wait(threeSeconds)
                this.enterMultiParameterPlanBasedSetupKey(key[j], j+1)
                this.enterMultiParameterPlanBasedSetupValue(values[j], j+1)
                cy.wait(threeSeconds)
            }
        } else {
            var keyName = parameterPlanBasedSetupKeyValue.split("=")[0]
            var value = parameterPlanBasedSetupKeyValue.split("=")[1]
            this.clickParameterPlanBasedSetupKey()
            this.clickRepositoryConfigDropdownValue(keyName)
            this.enterParameterPlanBasedSetupValue(value)
        }
    }

    /*----------------------------------------------------------------------------------------------
        method name = configureTheRepoWithMultiParams
        description = This method is used to configure the repository with multi parameters
        Parameters
            iacEngineType = Repository config dropdown value to be passed from .json, 
            version = version value for configuration to be passed from .json, 
            remediationType = remediation type value to be passed from .json, 
            isPlanBasedSetup = boolean value if want to active plan based setup or not, value to be passed from .json, 
            parameterPlanBasedSetupKeyValue = multi parameters key and value to be passed from .json i.e. a=1,b=2,c=3
        return value = null
    ------------------------------------------------------------------------------------------------*/

    configureTheRepoWithMultiParams(iacEngineType, version, remediationType, isPlanBasedSetup, parameterPlanBasedSetupKeyValue) {
        this.clickRepositorySettingsIcon()
        cy.wait(threeSeconds)
        this.clickIacEngineTypeDropdown()
        this.clickRepositoryConfigDropdownValue(iacEngineType)
       if(iacEngineType == "Terraform") {
            if(isPlanBasedSetup) {
                this.clickPlanBasedSetupToggleButton()
               this.clickIacEngineVersionDropdown()
               this.selectTerraformVersion()
                this.clickRepositoryConfigDropdownValue(version)
            }
            this.clickRemediationTypeDropdown()
            this.clickRepositoryConfigDropdownValue(remediationType)
            this.getParameteresKeys(parameterPlanBasedSetupKeyValue)
        } else if(iacEngineType == "Cloudformation") {
            this.clickParameterPlanBasedSetupKey()
            this.clickRepositoryConfigDropdownValue(parameterPlanBasedSetupKey)
            this.enterParameterPlanBasedSetupValue(parameterPlanBasedSetupValue)  
        }
        this.clickSaveButton()
    }

    /*----------------------------------------------------------------------------------------------
        method name = onboardRepoWithRepoConfigWithMultiParams
        description = This method is used to onboard all repository and configure the repository with multi parameters
        Parameters
            iacEngineType = Repository config dropdown value to be passed from .json, 
            version = version value for configuration to be passed from .json, 
            remediationType = remediation type value to be passed from .json, 
            isPlanBasedSetup = boolean value if want to active plan based setup or not, value to be passed from .json, 
            parameterPlanBasedSetupKeyValue = multi parameters key and value to be passed from .json i.e. a=1,b=2,c=3
            repositoryName = name of the repository. Value to be passed from .json
            projectName = name of the project, 
            repoType = repo belongs to git, azure, bitbucket, gitlab. Value to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    onboardRepoWithRepoConfigWithMultiParams(repositoryName, projectName, repoType, iacEngineType, version, remediationType, isPlanBasedSetup,
        parameterPlanBasedSetupKeyValue){
        this.navigateToRepositoryConnection(repositoryName, repoType)
        this.configureTheRepoWithMultiParams(iacEngineType, version, remediationType, isPlanBasedSetup, parameterPlanBasedSetupKeyValue)
        this.clickRepositoryContinueButton()
         this.searchProjectForRepositoryConnection(projectName)
         
        
       
           }

    /*----------------------------------------------------------------------------------------------
        method name = clickCreateProjectButton
        description = This method is used to click create project button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickCreateProjectButton(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnCreateProject, false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickAddANewProjectLink
        description = This method is used to click add a new project link
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickAddANewProjectLink(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.linkAddANewProject, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = createNewProjectAtRuntime
        description = This method is used to create new project at run time and then onboard repository
        Parameters
            projectName = name of the project, 
            cloudType = type of project want to create i.e. AWS, Azure, GCP
        return value = null
    ------------------------------------------------------------------------------------------------*/

    createNewProjectAtRuntime(projectName, cloudType){
        const projectConnection = new ProjectConnection_PO
        this.clickAddANewProjectLink()
        projectConnection.enterProjectName(projectName)
        if(cloudType === "azure") {
            cy.get("input[value='azure']").click({ force : true })
        } else if(cloudType === "gcp") {
            cy.get("input[value='gcp']").click({ force : true })
        } else if(cloudType === "aws") {
            cy.get("input[value='aws']").click({ force : true })
        }
        this.clickCreateProjectButton()
        this.clickRepositoryProjectNameContinueButton()
        this.verifyRepositoryConnectionToastMessage()
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickRepoFlyoutCloseIcon
        description = This method is used to close repository flyout
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickRepoFlyoutCloseIcon(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.repoFlyoutCloseIcon, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickSettingsCancelButton
        description = This method is used to cancel settings popup
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickSettingsCancelButton(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnSettingsCancel, false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickSettingsEditIcon
        description = This method is used to click edit icon on settings popup
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickSettingsEditIcon(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.editIconSettings, false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickProjectFilterButton
        description = This method is used to click project filter button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickProjectFilterButton(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnProjectFilter, false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickRepositoriesNameInGrid
        description = This method is used to click repositories name in the table
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickRepositoriesNameInGrid(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.gridRepoName, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickProjectNameFilterValue
        description = This method is used to click project name in the project filter dropdown
        Parameters
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickProjectNameFilterValue(projectName){

    cy.get("[data-cy=multi-select-"+ projectName +"]").click({force:true})     
    }
    /*----------------------------------------------------------------------------------------------
        method name = clickRepositoriesTab
        description = This method is used to click repositories tab
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickRepositoriesTab(){
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.tabRepositories, false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = navigateAndVerifyTheRepoValuesInFlyout
        description = This method is used to navigate to repository page and verify the value in repository flyout
        Parameters
            projectName = name of the project, 
            iacEngineType = repository configuration value to be passed from .json, 
            parameterPlanBasedKey = parameter plan based key to be passed from .json, 
            parameterPlanBasedSetup = parameter plan based setup value to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    navigateAndVerifyTheRepoValuesInFlyout(projectName, iacEngineType, parameterPlanBasedKey, parameterPlanBasedSetup) {
        this.clickRepositoriesTab()
        cy.wait(fiveSeconds)
        this.clickProjectFilterButton()
        cy.wait(eightSeconds)
        this.clickProjectNameFilterValue(projectName)
         this.clickRepositoriesNameInGrid()
         this.clickSettingsEditIcon()
        cy.wait(fiveSeconds)
        cy.get(this.parameterPlanBasedSetupKey).then(elem => {
            const keyValue = Cypress.$(elem).val();
            expect(keyValue).to.include(parameterPlanBasedKey)
        });
        cy.get(this.parameterPlanBasedSetupValue).then(elem => {
            const value = Cypress.$(elem).val();
            expect(value).to.include(parameterPlanBasedSetup)
        });
        this.clickSettingsCancelButton()
        cy.wait(fiveSeconds)
        cy.xpath(this.repoStatus).should('include.text', ' READY ');
        cy.xpath(this.engineTypeValue).should('include.text', iacEngineType.toLowerCase());
        this.clickRepoFlyoutCloseIcon()
    
        
    }

    navigateAndVerifyingRepoFailingPoliciesAndResources(iacScanFailingPoliciesThresholdValue,iacScanResourcesThresholdValue,projectName){
        cy.get(this.repoFailingPolicies).then(elem => {
            const failingPolicies = Cypress.$(elem).text();
           expect(parseInt(failingPolicies)).to.greaterThan(parseInt(iacScanFailingPoliciesThresholdValue))
        });
        cy.get(this.repoResources).then(elem => {
            const resources = Cypress.$(elem).text();
            expect(parseInt(resources)).to.greaterThan(parseInt(iacScanResourcesThresholdValue))
        });
        
    }

    /*----------------------------------------------------------------------------------------------
        method name = navigateAndVerifyTheFailingPoliciesAndResources
        description = This method is used to navigate to repository page and verify the failing policies and resources
        Parameters
            projectName = name of the project, 
            iacScanFailingPoliciesThresholdValue = failing policies threshold value to be passed from .json, 
            iacScanResourcesThresholdValue = resources threshold value to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    navigateAndVerifyTheFailingPoliciesAndResources(iacScanFailingPoliciesThresholdValue, iacScanResourcesThresholdValue, projectName) {
        const alerts = new Alerts
        const projectConnection = new ProjectConnection_PO
        alerts.clickAlertsLink()
        alerts.clickHomeLink()
        projectConnection.clickLink(projectConnection.tabProjectAndConnection)
        cy.wait(threeSeconds)
        projectConnection.searchProject(projectName)
        cy.wait(fiveSeconds)
        cy.get(this.failingPoliciesText).then(elem => {
            const failingPolicies = Cypress.$(elem).text();
            if(parseInt(failingPolicies) > 0){
           expect(parseInt(failingPolicies)).to.greaterThan(parseInt(iacScanFailingPoliciesThresholdValue))
            }
            else{
                cy.log("The count is zero")
            }
        });
        cy.get(this.resourcesText).then(elem => {
            const resources = Cypress.$(elem).text();
            if(parseInt(resources) > 0 ){
            expect(parseInt(resources)).to.greaterThan(parseInt(iacScanResourcesThresholdValue))
            }
            else{
                cy.log("The count is zero")
            }
        });
        this.clickProjectName(projectName)
        this.verifyRepositoryConnectionTextInFlyout()
        this.clickFlyoutCloseIcon()
    
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickSaveButton
        description = This method is used to click save button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickSaveButton(){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnSave, false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterParameterPlanBasedSetupValue
        description = This method is used to enter plan based setup value
        Parameters
            value = repository configuration parameter setup value, to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterParameterPlanBasedSetupValue(value){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.enterTheValue(value, true, this.parameterPlanBasedSetupValue)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickParameterPlanBasedSetupKey
        description = This method is used to click parameter based setup key dropdown
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickParameterPlanBasedSetupKey(){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.parameterPlanBasedSetupKey, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickRemediationTypeDropdown
        description = This method is used to click Remediation dropdown
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickRemediationTypeDropdown(){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.dropDownRemediationType, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickIacEngineTypeDropdown
        description = This method is used to click IAC Engine dropdown
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickIacEngineTypeDropdown(){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.dropDownIacEngineType, false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickRepositoryConfigDropdownValue
        description = This method is used to click Repository configuration dropdown
        Parameters
            value = select the value from the repository configuration dropdown, value to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickRepositoryConfigDropdownValue(value) {
        const baseAction = new BaseActions
        return baseAction.clickTheElement("//div[contains(text(),'" + value + "') and @class='v-list-item__title']", false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickIacEngineVersionDropdown
        description = This method is used to click IAC Engine version dropdown
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickIacEngineVersionDropdown(){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.dropDownIacEngineVersion, false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickPlanBasedSetupToggleButton
        description = This method is used to click plan based setup toggle button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickPlanBasedSetupToggleButton(){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnTogglePlanBasedSetup, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickRepositorySettingsIcon
        description = This method is used to click repository settings icon
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickRepositorySettingsIcon(){
        cy.wait(threeSeconds)
        cy.get("body").then($body => {
        if ($body.find(this.repoSettingsIcon).length > 0) {
            cy.get(this.repoSettingsIcon).then($header => {
                if ($header.is(':visible')) {
                    cy.get(this.repoSettingsIcon).click({force : true})
                }
            });
        } else {
            cy.get(this.iconSettingsks8Repo).click({force : true})
        }
        });
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickRepositorySettingsIcon
        description = This method is used to click repository settings icon
        Parameters
            iacEngineType = Repository config dropdown value to be passed from .json, 
            version = version value for configuration to be passed from .json, 
            remediationType = remediation type value to be passed from .json, 
            isPlanBasedSetup = boolean value if want to active plan based setup or not, value to be passed from .json, 
            parameterPlanBasedSetupKey = parameters key to be passed from .json,
            parameterPlanBasedSetupValue = parameters value to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    configureTheRepo(iacEngineType, version, remediationType, isPlanBasedSetup, parameterPlanBasedSetupKey, parameterPlanBasedSetupValue) {
        this.clickRepositorySettingsIcon()
        cy.log("after click repository")
        cy.wait(threeSeconds)
        this.clickIacEngineTypeDropdown()
        this.clickRepositoryConfigDropdownValue(iacEngineType)
        if(iacEngineType == "Terraform") {
            if(isPlanBasedSetup) {
                this.clickPlanBasedSetupToggleButton()
                this.clickIacEngineVersionDropdown()
                this.clickRepositoryConfigDropdownValue(version)
            }
            this.clickRemediationTypeDropdown()
            this.clickRepositoryConfigDropdownValue(remediationType)
            this.clickParameterPlanBasedSetupKey()
            this.clickRepositoryConfigDropdownValue(parameterPlanBasedSetupKey)
            this.enterParameterPlanBasedSetupValue(parameterPlanBasedSetupValue)
        } else if(iacEngineType == "Cloudformation") {
            this.clickParameterPlanBasedSetupKey()
            this.clickRepositoryConfigDropdownValue(parameterPlanBasedSetupKey)
            this.enterParameterPlanBasedSetupValue(parameterPlanBasedSetupValue)  
        }
        this.clickSaveButton()
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyRepositoryConnectionToastMessage
        description = This method is used to verify repository connection toast message
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyRepositoryConnectionToastMessage() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("Repo created, linked with projects and IaC scan running", this.toastAlertMessage)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickFlyoutCloseIcon
        description = This method is used to close repository flyout
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickFlyoutCloseIcon(){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.flyoutCloseIcon, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickUploadButton
        description = This method is used to click upload button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickUploadButton(){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnUpload, true)
    }
    

    /*----------------------------------------------------------------------------------------------
        method name = clickServiceAccountCredentialsRadioButton
        description = This method is used to click service account credential radio button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickServiceAccountCredentialsRadioButton(){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.radioBtnServiceAccountCredentials, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterProjectNameInAzureSearchBox
        description = This method is used to enter project name in the search box
        Parameters
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterProjectNameInAzureSearchBox(projectName){
        cy.wait(eightSeconds)
        const baseAction = new BaseActions
        return baseAction.enterTheValue(projectName, true, this.searchBoxAzureProjectName)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickGcpServiceAccountLink
        description = This method is used to click GCP service account
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickGcpServiceAccountLink(){
        cy.wait(eightSeconds)
        cy.xpath(this.linkGcpServiceAccount).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickAzurePublicCloudRadioButton
        description = This method is used to click azure public cloud radio button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickAzurePublicCloudRadioButton() {
        cy.wait(threeSeconds)
        cy.get(this.radioBtnAzurePublicCloud).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickAxureVpcContinueButton
        description = This method is used to click azure VPC continue button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickAxureVpcContinueButton() {
        cy.wait(threeSeconds)
        cy.get(this.btnContinueAzureVpc).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickAzureSubscriptionCheckbox
        description = This method is used to click azure subscription checkbox
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickAzureSubscriptionCheckbox(){
        cy.wait(fiveSeconds)
        cy.get(this.checkBoxAzureSubscription).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickServicePrincipalRadioButton
        description = This method is used to click service principal radio button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickServicePrincipalRadioButton(){
        cy.wait(fiveSeconds)
        cy.get(this.radioBtnServicePrincipal).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickAzureSubscriptionLink
        description = This method is used to click azure subscription link
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickAzureSubscriptionLink(){
        cy.wait(eightSeconds)
        cy.xpath(this.linkAzureSubscription).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyRepositoryConnection
        description = This method is used to verify repository connection
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyRepositoryConnection() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("Repos: 1", this.projectRepositoryValue)
    }

    verifyMultiRepositoryConnection() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("Repos: 2", this.projectRepositoryValue)
    }

    

    /*----------------------------------------------------------------------------------------------
        method name = clickProjectName
        description = This method is used to click project name
        Parameters
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickProjectName(projectName) {
        const baseAction = new BaseActions
        return baseAction.clickTheElement("div[data-cy='project-name " + projectName + "']", true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickRepositoryProjectNameContinueButton
        description = This method is used to click repository project name continue button
        parameters = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickRepositoryProjectNameContinueButton(){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnContinueRepositoryProjectName, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyRepositoryConnectionTextInFlyout
        description = This method is used to verify repository connection text in flyout
        parameters = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyRepositoryConnectionTextInFlyout() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("1  Repository(s) ", this.repositoryTextInFlyout.toLocaleLowerCase())
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickProjectNameCheckbox
        description = This method is used to click checkbox of the project name
        parameters = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickProjectNameCheckbox(){
        cy.wait(fiveSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.checkBoxProjectName, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterProjectNameInRepositorySearchBox
        description = This method is used to enter project name in repository checkbox
        Parameters
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterProjectNameInRepositorySearchBox(projectName){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.enterTheValue(projectName, true, this.searchBoxProject)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickRepositoryContinueButton
        description = This method is used to click repository continue button
        parameters = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickRepositoryContinueButton(){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnContinueRepository, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickRepositoryCheckbox
        description = This method is used to click repository checkbox
        Parameters
            repoType = enter the repo type as bitbucket, gitlab, github to be passed in .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickRepositoryCheckbox(repoType){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement("//span[contains(text(),'" + repoType + "')]//parent::div//parent::div//parent::div//div//div//div[2]/div//div", false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterRepositoryNameInSearchBox
        description = This method is used to enter repository name in search box
        Parameters
            repositoryName = enter the repository name in search box, value to be passed in .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterRepositoryNameInSearchBox(repositoryName){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.enterTheValue(repositoryName, true, this.searchBoxRepository)

    }

    enterRepositoryNameInSearchBox(repositoryName2){
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.enterTheValue(repositoryName2, true, this.searchBoxRepository)

    }

    /*----------------------------------------------------------------------------------------------
        method name = clickVersionControlProviderContinueButton
        description = This method is used to click version control provider continue button
        parameters = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickVersionControlProviderContinueButton(){
        cy.wait(fiveSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnContinueVersionControlProvider, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickChooseWorkflowContinueButton
        description = This method is used to click choose workflow continue button
        parameters = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickChooseWorkflowContinueButton(){
        cy.wait(fiveSeconds)
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnContinueChooseWorkflow, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickVersionControlRadiobutton
        description = This method is used to click version control radio button
        parameters = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickVersionControlRadiobutton(){
       const baseAction = new BaseActions
        return baseAction.clickTheElement(this.radioBtnVersionControl, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickRepositoryLink
        description = This method is used to click repository link
        parameters = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickRepositoryLink(){
        
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.linkRepository, false)
       
    }

    /*----------------------------------------------------------------------------------------------
        method name = navigateToRepositoryConnection
        description = This method is used to navigate to repository and create connection
        Parameters
            repositoryName = enter the repository name in search box, value to be passed in .json,
            repoType = enter the repo type as bitbucket, gitlab, github to be passed in .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    navigateToRepositoryConnection(repositoryName, repoType) {
        const baseAction = new BaseActions
        const projectConnection = new ProjectConnection_PO
        baseAction.openConnectionPopup()
        projectConnection.clickConnectionLink()
        this.clickRepositoryLink()
        this.clickVersionControlRadiobutton()
        this.clickChooseWorkflowContinueButton()
        this.clickVersionControlProviderContinueButton()
        this.enterRepositoryNameInSearchBox(repositoryName)
        this.clickRepositoryCheckbox(repoType)
    }

    navigateToRepository2Connection(repositoryName2, repoType) {
        const baseAction = new BaseActions
        const projectConnection = new ProjectConnection_PO
        baseAction.openConnectionPopup()
        projectConnection.clickConnectionLink()
        this.clickRepositoryLink()
        this.clickVersionControlRadiobutton()
        this.clickChooseWorkflowContinueButton()
        this.clickVersionControlProviderContinueButton()
        this.enterRepositoryNameInSearchBox(repositoryName2)
        this.clickRepositoryCheckbox(repoType)
    }

    /*----------------------------------------------------------------------------------------------
        method name = searchProjectForRepositoryConnection
        description = This method is used to search project for repository connection
        Parameters
            projectName = enter the project name in search box
        return value = null
    ------------------------------------------------------------------------------------------------*/

    searchProjectForRepositoryConnection(projectName) {
        this.enterProjectNameInRepositorySearchBox(projectName)
        this.clickProjectNameCheckbox()
        this.clickRepositoryProjectNameContinueButton()
        this.verifyRepositoryConnectionToastMessage()
    }

    /*----------------------------------------------------------------------------------------------
        method name = onboardRepoWithoutRepoConfig
        description = This method is used to onboard repository without configuration
        Parameters
            repositoryName = enter the repository name in search box, value to be passed in .json,
            repoType = enter the repo type as bitbucket, gitlab, github to be passed in .json,
            projectName = enter the project name in search box,
            isCreateNewProject =  boolean value to create a new project, 
            projectType = enter the project type as AWS, Azure, GCP in .json
        return value = null
    ------------------------------------------------------------------------------------------------*/
    
    onboardRepoWithoutRepoConfig(repositoryName, projectName, repoType, isCreateNewProject, projectType){
        this.navigateToRepositoryConnection(repositoryName, repoType)
        this.clickRepositoryContinueButton()
        if(isCreateNewProject){
            this.createNewProjectAtRuntime(projectName, projectType)
        } else {
            this.searchProjectForRepositoryConnection(projectName)
        }
    }

    /*----------------------------------------------------------------------------------------------
        method name = onboardAllRepoWithoutRepoConfigAndValidate
        description = This method is used to onboard all repository without configuration and validate
        parameters = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    onboardAllRepoWithoutRepoConfigAndValidate(){
        const baseAction = new BaseActions
        const projectConnection = new ProjectConnection_PO
        baseAction.openConnectionPopup()
        projectConnection.clickConnectionLink()
        this.clickRepositoryLink()
        this.clickVersionControlRadiobutton()
        this.clickChooseWorkflowContinueButton()
        this.clickVersionControlProviderContinueButton()
        this.clickOnboardAllCheckbox()
        cy.wait(eightSeconds)
        this.clickOnboardAllButton()
        cy.wait(fiveSeconds)
        cy.get(this.toastAlertMessage).then(elem => {
            if(Cypress.$(elem).attr('background-color') === '#ff0000') {
                this.verifyRepositoryFailureToastMessage()
            }});
        projectConnection.clickProjectAndConnectionTab()
        projectConnection.searchProject("Default")
        projectConnection.verifySearchedText("Default", projectConnection.projectNameFirstRow)
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyRepositoryFailureToastMessage
        description = This method is used to verify repository failure toast message
        parameters = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyRepositoryFailureToastMessage(){
        const baseAction = new BaseActions
        baseAction.verifyTextExists("Maximum repositories onboarded, exceeds limit", this.toastAlertMessage)
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyTheRepositoryConnection
        description = This method is used to verify repository connection
        Parameters
            projectName = enter the project name in search box
        return value = null
    ------------------------------------------------------------------------------------------------*/

        verifyTheRepositoryConnection(projectName,repositoryName) {
        const projectConnection = new ProjectConnection_PO
        projectConnection.clickProjectAndConnectionTab()
        projectConnection.searchProject(projectName)
        this.verifyRepositoryConnection()
        this.clickProjectName(projectName)
        cy.wait(threeSeconds)
        this.clickEditRepositoryIcon()
        cy.wait(threeSeconds)
        this.searchRepos(repositoryName)
        this.verifyRepositoryConnectionTextInFlyout()
        this.clickFlyoutCloseIcon()
    }

    /*----------------------------------------------------------------------------------------------
        method name = onboardRepoWithRepoConfig
        description = This method is used to onboard repository without repository configuration
        Parameters
            repositoryName = enter the repository name in search box, value to be passed in .json,
            repoType = enter the repo type as bitbucket, gitlab, github to be passed in .json,
            projectName = enter the project name in search box,
            iacEngineType = Repository config dropdown value to be passed from .json, 
            version = version value for configuration to be passed from .json, 
            remediationType = remediation type value to be passed from .json, 
            isPlanBasedSetup = boolean value if want to active plan based setup or not, value to be passed from .json, 
            parameterPlanBasedSetupKey = parameters key to be passed from .json,
            parameterPlanBasedSetupValue = parameters value to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    onboardRepoWithRepoConfig(repositoryName, projectName, repoType, iacEngineType, version, remediationType, isPlanBasedSetup,
        parameterPlanBasedSetupKey, parameterPlanBasedSetupValue){
        this.navigateToRepositoryConnection(repositoryName, repoType)
        // scm patch to be added.
        this.configureTheRepo(iacEngineType, version, remediationType, isPlanBasedSetup, parameterPlanBasedSetupKey, parameterPlanBasedSetupValue)
        this.clickRepositoryContinueButton()
        this.searchProjectForRepositoryConnection(projectName)
    }
    /*----------------------------------------------------------------------------------------------
        method name = onboardRepoWithRepoConfig
        description = This method is used to onboard repository without repository configuration
        Parameters
            repositoryName = enter the repository name in search box, value to be passed in .json,
            repoType = enter the repo type as bitbucket, gitlab, github to be passed in .json,
            projectName = enter the project name in search box,
            iacEngineType = Repository config dropdown value to be passed from .json, 
            version = version value for configuration to be passed from .json, 
            remediationType = remediation type value to be passed from .json, 
            isPlanBasedSetup = boolean value if want to active plan based setup or not, value to be passed from .json, 
            parameterPlanBasedSetupKey = parameters key to be passed from .json,
            parameterPlanBasedSetupValue = parameters value to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    onboardPublicRepoWithRepoConfig(repositoryName, repoType, repoUrl, folderPath, iacEngineType, version, projectName, remediationType, isPlanBasedSetup,
        parameterPlanBasedSetupKey, parameterPlanBasedSetupValue) {
        this.navigateToPublicRepositoryConnection(repositoryName, repoType, folderPath, repoUrl)
        this.configureTheRepo(iacEngineType, version, remediationType, isPlanBasedSetup, parameterPlanBasedSetupKey, parameterPlanBasedSetupValue)
        this.clickRepositoryContinueButton()
        this.searchProjectForRepositoryConnection(projectName)
    }

        /*----------------------------------------------------------------------------------------------
        method name = navigateToPublicRepositoryConnection
        description = This method is used to navigate to repository and create connection
        Parameters
            repositoryName = enter the repository name in search box, value to be passed in .json,
            repoType = enter the repo type as bitbucket, gitlab, github to be passed in .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    navigateToPublicRepositoryConnection(repositoryName, repoType, folderPath, repoUrl) {
        const baseAction = new BaseActions
        const projectConnection = new ProjectConnection_PO
        baseAction.openConnectionPopup()
        projectConnection.clickConnectionLink()
        this.clickRepositoryLink()
        this.clickVersionControlRadiobutton()
        this.clickChooseWorkflowContinueButton()
        this.clickVersionControlProviderContinueButton()
        cy.log("clicked on radio button")
        this.clicklinkAddpublicRepo()
        cy.log("after Add Public repo")
        this.enterRepositoryNameInTextBox(repositoryName)
        this.enterRepositoryUrlInTextBox(repoUrl)
        this.enterFolderNameInTextBox(folderPath)
        this.clickonAddCustomButton()
        cy.get(this.repoSettingsIcon).click({force : true})
    }
        /*----------------------------------------------------------------------------------------------
        method name = clickonAddCustomlink
        description = This method is used to click on Add Custom Link
        Parameters
            repositoryName = enter the repository name in search box, value to be passed in .json
            repoUrl = enter the repository url, value to be passed in .json
            folderPath = enter the folder path name, value to be passed in .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clicklinkAddpublicRepo() {
        cy.waitUntil(() => cy.wait(threeSeconds).then(() => Cypress.$(this.linkAddPublicRepo)))
        cy.log("inside Add Public")
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.linkAddPublicRepo, true)
    }
    /*----------------------------------------------------------------------------------------------
        method name = enterRepositoryNameInTextBox
        description = This method is used to enter repo Name in the text box
        Parameters
            repoName = enter the repo Name into the inbox, value to be passed in .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

	enterRepositoryNameInTextBox(repositoryName) {
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.enterTheValue(repositoryName, true, this.textBoxRepoNameAddCustom )

    }
       /*----------------------------------------------------------------------------------------------
        method name = enterRepositoryUrlInTextBo
        description = This method is used to enter repo Name in the text box
        Parameters
            repoName = enter the repo Name into the inbox, value to be passed in .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

	enterRepositoryUrlInTextBox(repoUrl) {
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.enterTheValue(repoUrl, true, this.textBoxRepoUrlAddCustom  )

    }
    /*----------------------------------------------------------------------------------------------
        method name = enterRepositoryNameInTextBox
        description = This method is used to enter repo Name in the text box
        Parameters
            repoName = enter the repo Name into the inbox, value to be passed in .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

	enterRepositoryNameInTextBox(repositoryName) {
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.enterTheValue(repositoryName, true, this.textBoxRepoNameAddCustom )

    }
    /*----------------------------------------------------------------------------------------------
        method name = clickonAddCustomBotton
        description = This method is used to click on Add button of Add custom repo popup
    ------------------------------------------------------------------------------------------------*/
	clickonAddCustomButton(){
		cy.wait(threeSeconds)
		const baseAction = new BaseActions
		return baseAction.clickTheElement(this.btnAddCustomPopUp,true)
	}

    
    /*----------------------------------------------------------------------------------------------
        method name = enterFolderNameInTextBox
        description = This method is used to enter Folder name in the text box
        Parameters
            folderPath = enter the folder path into the inbox, value to be passed in .json
        return value = null
    ------------------------------------------------------------------------------------------------*/
	
	enterFolderNameInTextBox(folderpath) {
        cy.wait(threeSeconds)
        const baseAction = new BaseActions
        return baseAction.enterTheValue(folderpath, true, this.textBoxFolderPathAddCustom)
    }
    /*----------------------------------------------------------------------------------------------
        method name = navigateAndVerifyTheFailingPoliciesAndResources
        description = This method is used to navigate to repository page and verify the failing policies and resources
        Parameters
            projectName = name of the project, 
            iacScanFailingPoliciesThresholdValue = failing policies threshold value to be passed from .json, 
            iacScanResourcesThresholdValue = resources threshold value to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyTheFailingPoliciesAndResources(iacScanFailingPoliciesThresholdValue, iacScanResourcesThresholdValue, projectName) {
        const alerts = new Alerts
        const projectConnection = new ProjectConnection_PO
        alerts.clickAlertsLink()
        cy.wait(threeSeconds)
        alerts.clickHomeLink()
        cy.wait(threeSeconds)
        projectConnection.clickLink(projectConnection.tabProjectAndConnection)
        cy.wait(threeSeconds)
        projectConnection.searchProject(projectName)
        cy.get(this.failingPoliciesText).then(elem => {
            const failingPolicies = Cypress.$(elem).text();
            expect(parseInt(failingPolicies)).to.greaterThan(parseInt(iacScanFailingPoliciesThresholdValue))
        });
        cy.get(this.resourcesText).then(elem => {
            const resources = Cypress.$(elem).text();
            expect(parseInt(resources)).to.greaterThan(parseInt(iacScanResourcesThresholdValue))
        });
        this.clickProjectName(projectName)
        this.verifyRepositoryConnectionTextInFlyout()
        this.clickFlyoutCloseIcon()

    }
}
export default ProjectRepository