/// <reference types="cypress-xpath" />

import BaseActions from "./BaseActions"
import { threeSeconds, fiveSeconds, eightSeconds, tenSeconds, seventySeconds, thirtySeconds } from '../utils'
import ProjectRepository from "./ProjectRepository_PO";
import ProjectConnectionsTab from "./ProjectsAndConnectionsTab_PO";
import Alerts from "./Alerts_PO"
import 'cypress-wait-until';
import { cyUtils } from '../../support';

class ProjectConnection {

    linkAddConnection = '.global-icon-container > svg';
    linkProject = "//div[@class='list-item__title'][normalize-space()='Project']"
    searchBoxAzureProjectName = '.global-repos-search-box-container > .search > [data-cy="search-"]'
    linkConnection = "//div[text()='Connection']"
    inputBoxProjectName = "input[placeholder='Enter a project name']"
    leftPanelContainer = ".menu-container";
    btnContinueProjectName = "#CONTINUE-1"
    btnContinueProvider = '[data-cy="btn-CREATE-2"]'
    btnCreateTeammateInPrj = "#CREATE-3"
    btnContinuePublicCloud = "#CONTINUE-2"
    tabProjectAndConnection = ":nth-child(2) > .plain > .custom-tab-main-block > .custom-tab-text-block > .custom-tab-text"
    searchBoxProjectName = '.global-envs-search-wrapper > .global-search-box-container > .search > [data-cy="search-"]'
    linkAwsAccount = "//div[text()='AWS connection']"
    linkRepository = "//div[text()='Repository']"
    onboardAwsAccount = "//div[contains(text(),'Onboard AWS account')]"
    PublicRadioButtonCloud = '[data-cy="option-Public Cloud"] > .radio-group__radio-icon-container'
    radioBtnPublicCloud = "//div[contains(text(),'Public cloud')]"
    inputBoxEnterArn = "input[placeholder='Enter a Role ARN']"
    inputBoxClientId = "input[name='Client ID']"
    inputBoxEnterExternalId = "input[placeholder='Enter an external ID']"
    btnArnContinue = "#CONTINUE-3"
    radioButtonAllVpc = "//div[contains(text(),'All (recommended)')]"
    btnContinueVpc = "#CONTINUE-4"
    btnContinueAzureVpc = "#CONTINUE-5"
    btnConnectCloud = "//span[contains(text(),'CONNECT CLOUD ACCOUNT')]"
    checkBoxConnectProject = "div.grid-text-title div div div"
    tabDashboard = "//div[text()=' Dashboard ' and @class='custom-tab-text']"
    radiobtnVersionControl = "#vc_radio_btn"
    btnContinueChooseWorkflow = "#continue_step_1 div"
    btnContinueVersionControlProvider = "#continue-step-2 div.upper_case"
    searchBoxRepository = "div#repo_coonection_grid #searchText"
    checkBoxRepository = "div#repo_coonection_grid div.grid-text-data div[data-cy='checkbox']"
    btnContinueRepository = "#continue-step-3"
    searchBoxProject = "div#RepoConnectionVcChooseProject #searchText"
    checkBoxProjectName = "div#accurics-grid-row-data div[data-cy='checkbox']"
    btnContinueRepositoryProjectName = "div#connect-step-4"
    projectRepositoryValue = 'div.env-row-body.on-scrollbar div.env-row:nth-child(1) div.project-provider-repo-container div:nth-child(3) div.project-repo-sub-text'
    linkAzureSubscription = "//div[text()='Azure subscription']"
    btnRadioServicePrincipal = "input[value='servicePrincipal']"
    inputBoxSecretValue = "input[name='Secret value']"
    inputBoxTenantId = "input[name='Tenant ID']"
    checkBoxAzureSubscription = "div.mgmt-group__list-container div.mgmt-group__list__row-body div.mgmt-group__list-row:nth-child(1) div.mgmt-group__list-checkbox"
    btnRadioAzurePublicCloud = 'div#app div:nth-child(4) > div.step-content-wrapper > div:nth-child(1) > div:nth-child(1) > div > div > div.radio-group__radio-icon-container > div > input[type="radio"]'
    linkGcpServiceAccount = "//div[text()='GCP service account']"
    btnRadioServiceAccountCredentials = "input[value='serviceCredentials']"
    btnUpload = "input#fileUpload"
    repositoryTextInFlyout = "div.s-body div:nth-child(2).sidenav-data-wrapper div.s-value-text.pre-formatted"
    flyoutCloseIcon = "div.global-close-icon-container"
    emptyProjectNameText = 'div.step-title__subtitle__text.isError'
    toastAlertMessage = "div[role='alert']"
    searchBoxProjectConnection = "div#envs #searchText"
    searchBoxRepositories = '.global-repos-search-box-container > .search > [data-cy="search-"]'
    searchBoxCloudAccounts = "div#cloud #searchText"
    searchBoxCluster = "div#cluster #searchText"
    searchBoxPipeline = "div#pipeline #searchText"
    searchBoxAwsConnectionProjectName = '[data-cy="search-"]'
    projectNameFirstRow = 'div.env-row-body.on-scrollbar div.env-row:nth-child(1) div.envs-grid-linked-body-text'
    repositoryNameFirstRow = 'div.repo-row-body.on-scrollbar div.repos-row:nth-child(1) div.repos-grid-main-text'
    cloudAccountNameFirstRow = 'div.cloud-row-body.on-scrollbar div.cloud-row:nth-child(1) div.cloud-grid-main-text'
    tabCloudAccount = "div[data-cy='Cloud Accounts'] div.common-title-container"
    tabPipeline = "div[data-cy='Pipelines'] div.common-title-container"
    tabClusters = "div[data-cy='K8s Clusters'] div.common-title-container"
    linkRunScan = "span.envs-run-text"
    configureCloudScan = "//div[contains(text(),'Configure Cloud Scan')]"
    checkBoxSelectDeselectAll = "#select-all"
    checkBoxS3Bucket = "#resource-s3"
    btnRunScan = "#run-scan"
    failingPoliciesText = "div.env-policy-container div.envs-grid-linked-normal-text"
    resourcesText = "div.env-resources-container div.envs-grid-body-text"
    btnEditProject = '[data-cy="edit-Name"] > .v-image > .v-responsive__content'
    editText = '#editText-project'
    btnSaveEditProject = '[data-cy="textEditPopup saveButton"]'
    checkBoxProject = '.env-project-container > .cloud-setup__list__checkbox-container > [data-cy="checkbox"]'
    btnDeleteProject = '.global-envs-search-wrapper > .global-filter-chip-wrapper > :nth-child(3)'
    btnDeleteConfirm = '[data-cy="btn-delete"]'
    checkboxAllSortedProject = "//div[@class='envs-title-row']//div[@class='cloud-setup__list-checkbox header']"
    verifyNoProjectText = '[data-cy="no-data"]'
    refreshButton = "button[data-cy='project-refresh-btn']"
    showAllBox = "#envs > div > div.global-envs-search-container > div.global-repos-count-box > div > div.d-flex.mr-3 > input[type=checkbox]"
    repositoryTab = '[data-cy="Repositories"] > .custom-tab-wrapper > .common-card-row > .common-card-icon-container > div > .svg-icon'
    repoRefreshButton = "button[data-cy='repository-refresh-btn']"
    repositoryCheckBox = '#repo > div > div.repos-grid-data-container > div.repos-grid-title-background > div > div.repos-container > div:nth-child(1) > div > div'
    repoDelete = "#repo > div > div.global-repos-search-container > div.global-repos-search-wrapper > div.global-repo-filter-chip-wrapper > div:nth-child(3)"
    repoPopupMsg = '[data-cy="btn-delete"]'
    noRepoFound = '#repo > div > div.repos-grid-data-container > div:nth-child(2) > div > div > div.no-project-title-row > div.no-project-title-box > div'
    singleProject = '//*[@id="0_row"]/div/div[1]/div/div[1]/div/div'
    repoProject = '.data-row > .repos-container > .cloud-setup__list__checkbox-container > [data-cy="checkbox"]'
    cloudProject = '.cloud-data-row > :nth-child(1) > .cloud-setup__list__checkbox-container > [data-cy="checkbox"]'
    cloudRefresh = '#cloud > div > div.global-cloud-search-container > div.global-repos-count-box > div.refresh-icon > button'
    cloudCheckBox = '"#cloud > div > div.cloud-grid-data-container > div.cloud-grid-title-background > div > div:nth-child(1) > div > div"'
    cloudDelete = "#cloud > div > div.global-cloud-search-container > div.global-cloud-search-wrapper > div.cloud-account-grid-global-filter-chip-wrapper > div:nth-child(4)"
    cloudPopup = "div[class='button_box_style continue_button_color']"
    noCloudFound = "#cloud > div > div.cloud-grid-data-container > div:nth-child(2) > div > div > div.no-project-title-row > div.no-project-title-box > div"
    btnGcpContinueProvider = '[data-cy="btn-CONTINUE-2"] > span'
    btnGcpContinue = "div#CONTINUE-3"
    checkBoxDefaultScan = 'div.scan-resource-checkbox-default-container'
    btnCancel = '#cancel'
    checkboxResourceCloudStorage = 'label[for=resource-gcs]'
    checkboxResorceNetwork = 'label[for=resource-networks]'
    checkboxResorceDns = 'label[for=resource-dns]'
    checkboxResourceKubernetes = 'label[for=resource-gke]'
    awsInavalidMessage = '[data-cy="step-error__text-The Role ARN was not valid. Try again."]'
    subscriptionCheckbox = '.mgmt-group__list__header-row > .mgmt-group__list__checkbox-container > .mgmt-group__list-checkbox'
    selectProject = '[data-cy="check-box-row-index-0"] > [data-cy="checkbox"]'
    connectCloud = '[data-cy="btn-CONNECT CLOUD ACCOUNT-6"] > span'
    checkboxSubscriptionName = "div[data-cy='mgmt-group checkbox- tenable-acc-test']"
    applicationGateway = ':nth-child(1) > :nth-child(5) > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    networkInterfaces = ':nth-child(2) > :nth-child(16) > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    postSqlServer = ':nth-child(3) > :nth-child(2) > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    noSubscription = "div[class='no-subscription-title-text']"
    checkboxResourceEc2 = 'label[for=resource-ec2_instance]'
    checkboxResourceAcm = 'label[for=resource-acm]'
    checkboxResourceEip = 'label[for=resource-eip]'
    checkboxResourceVpc = 'label[for=resource-vpc]'
    checkboxResourceSubnet = 'label[for=resource-subnet]'
    checkboxShowAllProjects = '.env-project-container > .cloud-setup__list__checkbox-container > [data-cy="checkbox"]'
    checkboxProjectAll = '.env-project-container > .cloud-setup__list__checkbox-container > [data-cy="checkbox"]'
    btnRefresh = '[data-cy="project-refresh-btn"]'
    btnPagination = ':nth-child(5) > .v-icon'
    multipleProjectCreation(projectName) {
        const baseAction = new BaseActions
        baseAction.openConnectionPopup()
        this.clickProjectAddButton()
        cy.waitUntil(() => cy.get(this.inputBoxProjectName).then($el => Cypress.dom.isVisible($el)), { timeout: eightSeconds });
        this.enterProjectName(projectName)
        this.clickProjectNameContinueButton()
        cy.wait(threeSeconds)
        this.clickProviderContinueButton()
        cy.wait(threeSeconds)
        this.verifyCreateProjectToastMessage();
        cy.wait(eightSeconds)
        this.navigateToProjectConnectionTab(projectName)
    }
    createTestDataForProjectCreation(projectName) {
        for (var i = 1; i <= 10; i++) {
            this.multipleProjectCreation(projectName + i)
        }
    }
    searchProject1(projectName) {
        cy.get(this.searchBoxProjectName).type(projectName).invoke('val').should('have.length.greaterThan', 64)
    }

    enterProjectName1(projectName) {
        cy.get(this.inputBoxProjectName).type(projectName).invoke('val').should('have.length', 64)
    }
    verifyToastMessageForEmptyProjectName() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("enter a project name below", this.emptyProjectNameText)
    }
    createProjectAndValidate1(projectName, cloudType) {
        const baseAction = new BaseActions
        baseAction.openConnectionPopup()
        this.clickProjectAddButton()
        cy.waitUntil(() => cy.get(this.inputBoxProjectName).then($el => Cypress.dom.isVisible($el)), { timeout: eightSeconds });
        this.enterProjectName1(projectName)
        this.clickProjectNameContinueButton()
        cy.wait(threeSeconds)
        this.clickProviderContinueButton()
        cy.wait(threeSeconds)
        this.verifyCreateProjectToastMessage();
        cy.wait(eightSeconds)
        //this.navigateToProjectConnectionTab(projectName)
    }
    navigateToProjectConnectionTabAndSearchProject1(projectName) {
        this.clickLink(this.tabProjectAndConnection)
        cy.get(this.searchBoxProjectName).should('be.visible').click({ force: true })
        this.searchProject1(projectName)
        this.verifyNoProjectFound()
    }

    negativeValidationForProjectName() {
        const baseAction = new BaseActions
        baseAction.openConnectionPopup()
        this.clickProjectAddButton()
        this.clickProjectNameContinueButton()
        this.verifyToastMessageForEmptyProjectName()
    }

    clickResourceEc2() {
        cy.get(this.checkboxResourceEc2).click({ force: true })
    }
    clickResourceAcm() {
        cy.get(this.checkboxResourceAcm).click({ force: true })
    }
    clickResourceEip() {
        cy.get(this.checkboxResourceEip).click({ force: true })
    }
    clickResourceVpc() {
        cy.get(this.checkboxResourceVpc).click({ force: true })
    }
    clickResourceSubnet() {
        cy.get(this.checkboxResourceSubnet).click({ force: true })
    }


    verifyDefaultScanResources(projectName) {
        this.verifyTheConnectionCreated(projectName)
        this.clickRunScanLink()
        this.clickConfigureCloudScan()
        this.verifyResources()
        cy.wait(eightSeconds)
        this.clickCancelButton()
    }

    clickResourceCloudStorage() {
        cy.get(this.checkboxResourceCloudStorage).click({ force: true })
    }

    clickResourceNetwork() {
        cy.get(this.checkboxResorceNetwork).click({ force: true })
    }

    clickResourceDns() {
        cy.get(this.checkboxResorceDns).click({ force: true })

    }

    clickResourceKubernetes() {
        cy.get(this.checkboxResourceKubernetes).click({ force: true })

    }

    clickGcpfileUploadContinueButton() {
        cy.get(this.btnGcpContinue).click({ force: true })
    }

    clickDefaultScanCheckBox() {
        cy.get(this.checkBoxDefaultScan).click()
    }

    clickCancelButton() {
        cy.get(this.btnCancel).click()
    }

    clickGCPContinueButton() {
        cy.get(this.btnGcpContinueProvider).click({ force: true })
    }

    searchEditProject(updateprojectname) {
        cy.get(this.searchBoxProjectName).type(updateprojectname)
    }

    clickCheckBoxProject() {
        cy.get(this.checkBoxProject).click()
    }

    clickDeleteProject() {
        cy.get(this.btnDeleteProject).click({ force: true })
    }

    clickDeleteConfirm() {
        cy.get(this.btnDeleteConfirm).click({ force: true })
    }

    editProject() {
        cy.get(this.btnEditProject).click({ force: true })
        cy.get(this.editText).clear()

    }
    clearProjectName() {
        cy.get(this.editText).clear()
    }

    enterUpdateName(updateprojectname) {
        cy.get(this.editText).type(updateprojectname)
    }

    saveEditProject() {
        cy.get(this.btnSaveEditProject).click({ force: true })
    }

    updateProjectNameAndDelete(updateprojectname, projectName) {
        const projectrepository = new ProjectRepository
        projectrepository.clickProjectName(projectName)
        this.editProject()
        cy.wait(fiveSeconds)
        this.enterUpdateName(updateprojectname)
        cy.wait(fiveSeconds)
        this.saveEditProject()
        projectrepository.clickFlyoutCloseIcon()
        this.verifyNoProjectFound()
        cy.get(this.searchBoxProjectName).clear()
        this.searchEditProject(updateprojectname)
        this.deleteProjectName()
        cy.wait(threeSeconds)
        this.verifyProjectDeleteToastMessage()
        this.verifyNoProjectFound()
    }

    deleteProjectName() {
        this.clickCheckBoxProject()
        this.clickDeleteProject()
        this.clickDeleteConfirm()
    }

    verifyProjectDeleteToastMessage() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("The project has been deleted.", this.toastAlertMessage)
    }

    verifyGcpInvalidCredToastMessage() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("An internal server error occurred. Please wait a moment and try your request again.", this.toastAlertMessage)
    }

    verifyNoProjectFound() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("No projects found.", this.verifyNoProjectText)
    }

    verifyResources() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("Cloud Storage (GCS)", this.checkboxResourceCloudStorage)
        baseAction.verifyTextExists("Compute Network", this.checkboxResorceNetwork)
        baseAction.verifyTextExists("DNS", this.checkboxResorceDns)
        baseAction.verifyTextExists("Kubernetes Engine (GKE)", this.checkboxResourceKubernetes)
    }

    connectAwsAccountWithInvalidCred(arnValueInvalid, externalIdInvalid, projectName) {
        const baseAction = new BaseActions
        baseAction.openConnectionPopup()
        this.clickConnectionLink()
        this.clickAwsAccountLink()
        this.clickOnboardAwsAccountRadiobutton()
        this.clickProjectNameContinueButton()
        this.clickPublicCloudRadiobutton()
        this.clickPublicCloudContinueButton()
        this.enterArnValue(arnValueInvalid)
        this.enterExternalIdValue(externalIdInvalid)
        this.clickArnContinueButton()
        cy.wait(threeSeconds)
        this.verifyAWSInvalidCredToastMessage()
        cy.wait(fiveSeconds)
    }





    /*----------------------------------------------------------------------------------------------
        method name = navigateAndVerifyTheFailingPoliciesAndResources
        description = This method is used to navigate to project connection tab and verify the failing policies
                        and resources text.
        Parameters
            failingPoliciesThresholdValue = threshold value passed from .json for the failing policies, 
            resourcesThresholdValue = threshold value passed from .json for the resources, 
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/

    navigateAndVerifyTheFailingPoliciesAndResources(failingPoliciesThresholdValue, resourcesThresholdValue, projectName) {
        const alerts = new Alerts
        alerts.clickAlertsLink()
        cy.wait(threeSeconds)
        alerts.clickHomeLink()
        cy.wait(eightSeconds)
        this.clickLink(this.tabProjectAndConnection)
        this.searchProject(projectName)

        cy.get(this.failingPoliciesText).then(elem => {
            const failingPolicies = Cypress.$(elem).text();
            expect(parseInt(failingPolicies)).to.greaterThan(parseInt(failingPoliciesThresholdValue))
        });
        cy.get(this.resourcesText).then(elem => {
            const resources = Cypress.$(elem).text();
            expect(parseInt(resources)).to.greaterThan(parseInt(resourcesThresholdValue))
        });
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickRunScanButton
        description = This method is used to click run scan button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickRunScanButton() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnRunScan, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickS3BucketCheckbox
        description = This method is used to click s3 bucket checkbox
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickS3BucketCheckbox() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.checkBoxS3Bucket, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickSelectDeselectAllCheckbox
        description = This method is used to click select all and deselectall checkbox
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickSelectDeselectAllCheckbox() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.checkBoxSelectDeselectAll, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickConfigureCloudScan
        description = This method is used to click configure cloud scan button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickConfigureCloudScan() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.configureCloudScan, false)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickRunScanLink
        description = This method is used to click run scan link on project connection page
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickRunScanLink() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.linkRunScan, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = initiateCloudScan
        description = This method is used to initiate cloud scan
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    initiateCloudScan() {
        this.clickRunScanLink()
        this.clickConfigureCloudScan()
        cy.waitUntil(() => cy.wait(threeSeconds).then(() => Cypress.$(this.checkBoxSelectDeselectAll).length))
        this.clickSelectDeselectAllCheckbox()
        this.clickSelectDeselectAllCheckbox()
        this.clickResourceEc2()
        this.clickResourceAcm()
        this.clickResourceSubnet()
        this.clickResourceEip()
        this.clickResourceVpc()
        this.clickS3BucketCheckbox()
        this.clickRunScanButton()

    }
    initiateAzureScan() {

        this.clickRunScanLink()
        this.clickConfigureCloudScan()
        cy.waitUntil(() => cy.wait(threeSeconds).then(() => Cypress.$(this.checkBoxSelectDeselectAll).length))
        this.clickSelectDeselectAllCheckbox()
        this.clickSelectDeselectAllCheckbox()
        this.clickResourceApplicationGateway()
        this.clickResourceNetworkInterfaces()
        this.clickResourcePostgreSQLServer()
        cy.wait(threeSeconds)
        this.clickRunScanButton()
    }

    initiateGCScan() {
        this.clickRunScanLink()
        this.clickConfigureCloudScan()
        cy.waitUntil(() => cy.wait(threeSeconds).then(() => Cypress.$(this.checkBoxSelectDeselectAll).length))
        this.clickSelectDeselectAllCheckbox()
        this.clickSelectDeselectAllCheckbox()
        this.clickResourceCloudStorage()
        this.clickResourceNetwork()
        this.clickResourceDns()
        this.clickResourceKubernetes()
        this.clickDefaultScanCheckBox()
        cy.wait(threeSeconds)
        this.clickRunScanButton()
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickClustersTab
        description = This method is used to click clusters tab
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickClustersTab() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.tabClusters, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickPipelinesTab
        description = This method is used to click pipelines tab
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickPipelinesTab() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.tabPipeline, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickCloudAccountTab
        description = This method is used to click cloud account tab
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickCloudAccountTab() {
        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.tabCloudAccount, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifySearchedText
        description = This method is used to verify searched text is present or not
        Parameters
            dataToBeSearch = text to be searched, 
            element = locator of the element to fetch text for comparison
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifySearchedText(dataToBeSearch, element) {
        const baseAction = new BaseActions
        baseAction.verifyTextExists(dataToBeSearch, element)
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterDataInSearchBox
        description = This method is used to enter data in search box
        Parameters 
            dataForSearch = text to be searched, 
            element = locator of the element to fetch text for comparison
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterDataInSearchBox(dataForSearch, element) {

        const baseAction = new BaseActions
        return baseAction.enterTheValue(dataForSearch, true, element)
    }

    /*----------------------------------------------------------------------------------------------
        method name = searchData
        description = This method is used to search data on project connection tab
        Parameters
            dataSearchType = the data passed for search is of either project, repositories, cloudaccount, pipeline, clusters, 
            dataToBeSearch = text to be searched
        return value = null
    ------------------------------------------------------------------------------------------------*/

    searchData(dataSearchType, dataToBeSearch) {
        this.clickProjectAndConnectionTab()
        if (dataSearchType === "project") {
            this.enterDataInSearchBox(dataToBeSearch, this.searchBoxProjectConnection)
            this.verifySearchedText(dataToBeSearch, this.projectNameFirstRow)
        } else if (dataSearchType === "repositories") {
            const projectRepository = new ProjectRepository
            projectRepository.clickRepositoriesTab()
            this.enterDataInSearchBox(dataToBeSearch, this.searchBoxRepositories)
            this.verifySearchedText(dataToBeSearch, this.repositoryNameFirstRow)
        } else if (dataSearchType === "cloudaccount") {
            this.clickCloudAccountTab()
            this.enterDataInSearchBox(dataToBeSearch, this.searchBoxCloudAccounts)
            this.verifySearchedText(dataToBeSearch, this.cloudAccountNameFirstRow)
        } else if (dataSearchType === "pipeline") {
            this.clickPipelinesTab()
            this.enterDataInSearchBox(dataToBeSearch, this.searchBoxPipeline)
            //To-Do create locator for the pipeline first row
        } else if (dataSearchType === "clusters") {
            this.clickClustersTab()
            this.enterDataInSearchBox(dataToBeSearch, this.searchBoxCluster)
            //To-Do create locator for the clusters first row
        }
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyRepositoryConnectionToastMessage
        description = This method is used to verify toast message of repository connection
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyRepositoryConnectionToastMessage() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("Repo created, linked with projects and IaC scan running", this.toastAlertMessage)
    }

    verifyAWSInvalidCredToastMessage() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("The Role ARN was not valid. Try again", this.awsInavalidMessage)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickFlyoutCloseIcon
        description = This method is used to close the flyout popup.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickFlyoutCloseIcon() {

        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.flyoutCloseIcon, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickUploadButton
        description = This method is used to click on upload button for GCP.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickUploadButton() {
        const yourFixturePath = 'GCPcredentials.json'
        cy.get(this.btnUpload).attachFile(yourFixturePath)

    }

    clickUplodaButtonInvaidCred() {
        const yourFixturePath = 'example.json'
        cy.get(this.btnUpload).attachFile(yourFixturePath)

    }

    /*----------------------------------------------------------------------------------------------
        method name = clickServiceAccountCredentialsRadioButton
        description = This method is used to click ServiceAccountCredentials RadioButton.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickServiceAccountCredentialsRadioButton() {

        const baseAction = new BaseActions
        return baseAction.clickTheElement(this.btnRadioServiceAccountCredentials, true)
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterProjectNameInAzureSearchBox
        description = This method is used to enter project name in azure search box.
        Parameters 
            projectName is the name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterProjectNameInAzureSearchBox(projectName) {
        const baseAction = new BaseActions
        return baseAction.enterTheValue(projectName, true, this.searchBoxAzureProjectName)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickGcpServiceAccountLink
        description = This method is used to click GCP service account link.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickGcpServiceAccountLink() {

        cy.xpath(this.linkGcpServiceAccount).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickAzurePublicCloudRadioButton
        description = This method is used to click Azure Public Cloud radio button.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickAzurePublicCloudRadioButton() {

        cy.get(this.btnRadioAzurePublicCloud).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickAxureVpcContinueButton
        description = This method is used to click Azure continue button on VPC.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickAxureVpcContinueButton() {

        cy.get(this.btnContinueAzureVpc).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterProjectNameInSearchBox
        description = This method is used to enter project name in search box.
        Parameters
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterProjectNameInSearchBox(projectName) {

        const baseAction = new BaseActions
        return baseAction.enterTheValue(projectName, true, this.searchBoxAwsConnectionProjectName)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickConnectProjectCheckbox
        description = This method is used to click project connect checkbox.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickConnectProjectCheckbox() {
        cy.get(this.checkBoxConnectProject).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickConnectCloudButton
        description = This method is used to click connect cloud button.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickConnectCloudButton() {
        cy.xpath(this.btnConnectCloud).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickVpcContinueButton
        description = This method is used to click continue button on VPC section. 
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickVpcContinueButton() {
        cy.wait(threeSeconds)
        cy.get(this.btnContinueVpc).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickAllVpcRadioButton
        description = This method is used to click all VPC radio button.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickAllVpcRadioButton() {
        cy.wait(fiveSeconds)
        cy.xpath(this.radioButtonAllVpc).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickArnContinueButton
        description = This method is used to click continue button after filling ARN value
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickArnContinueButton() {
        cy.get(this.btnArnContinue).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterExternalIdValue
        description = This method is used to enter external id value
        Parameters
            externalId = external id of the AWS account to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterExternalIdValue(externalId) {
        cy.get(this.inputBoxEnterExternalId).type(externalId)
    }

    enterInvaliExternalIdValue(externalIdInvalid) {
        cy.get(this.inputBoxEnterExternalId).type(externalIdInvalid)
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterSecretValue
        description = This method is used to enter secret value
        Parameters
            secretValueText = secret value of the AWS account to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterSecretValue(secretValueText) {
        cy.get(this.inputBoxSecretValue).type(secretValueText)
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterTenantId
        description = This method is used to enter tenant id
        Parameters
            tenantIdText = tenant id of the AWS account to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterTenantId(tenantIdText) {
        cy.get(this.inputBoxTenantId).type(tenantIdText)
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterArnValue
        description = This method is used to enter ARN value
        Parameters
            arnValue = ARN value of the AWS account to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterArnValue(arnValue) {
        cy.get(this.inputBoxEnterArn).type(arnValue)
    }

    enterInvalidArnValue(arnValueInvalid) {
        cy.get(this.inputBoxEnterArn).type(arnValueInvalid)
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterClientId
        description = This method is used to enter client id
        Parameters
            clientId = client id of the AWS account to be passed from .json
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterClientId(clientId) {
        cy.get(this.inputBoxClientId).type(clientId)
    }
    enterClientIdInvalid(clientId_invalid) {
        cy.get(this.inputBoxClientId).type(clientId_invalid)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickPublicCloudRadiobutton
        description = This method is used to click public cloud radio button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickPublicCloudRadiobutton() {
        cy.xpath(this.radioBtnPublicCloud).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickOnboardAwsAccountRadiobutton
        description = This method is used to click onboard AWS account radio button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickOnboardAwsAccountRadiobutton() {

        cy.xpath(this.onboardAwsAccount).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = searchProject
        description = This method is used to search project
        Parameters
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/

    searchProject(projectName) {
        cy.get(this.searchBoxProjectName).focus().clear()
        cy.get(this.searchBoxProjectName).type(projectName)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickAwsAccountLink
        description = This method is used to click AWS account link
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickAwsAccountLink() {

        cy.xpath(this.linkAwsAccount).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickConnectionLink
        description = This method is used to click connection link on popup
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickConnectionLink() {
        cy.xpath(this.linkConnection).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickLink
        description = This method is used to click any link on basis of element passed.
        Parameters
            element = pass the element to be clicked with a wait of 8 seconds
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickLink(element) {

        cy.get(element).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickProjectAndConnectionTab
        description = This method is used to click project and connection tab.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickProjectAndConnectionTab() {

        cy.get(this.tabProjectAndConnection).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickCreateButton
        description = This method is used to click create button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickCreateButton() {
        cy.get(this.btnCreateTeammateInPrj).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickProviderContinueButton
        description = This method is used to click provider continue button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickProviderContinueButton() {
        cy.get(this.btnContinueProvider).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickPublicCloudContinueButton
        description = This method is used to click public cloud continue button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickPublicCloudContinueButton() {
        cy.get(this.btnContinuePublicCloud).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickProjectNameContinueButton
        description = This method is used to click project name continue button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickProjectNameContinueButton() {
        cy.get(this.btnContinueProjectName).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickAddConnectionLink
        description = This method is used to click add commection link
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickAddConnectionLink() {
        cy.get(this.linkAddConnection).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickProjectAddButton
        description = This method is used to click project add button
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickProjectAddButton() {
        cy.xpath(this.linkProject).click({ force: true })
    }

    /*----------------------------------------------------------------------------------------------
        method name = enterProjectName
        description = This method is used to enter project name and search it.
        Parameter
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/

    enterProjectName(projectName) {
        cy.get(this.inputBoxProjectName).type(projectName)
    }

    /*----------------------------------------------------------------------------------------------
        method name = verifyCreateProjectToastMessage
        description = This method is used to verify project creation toast message
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    verifyCreateProjectToastMessage() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("Project created successfully.", this.toastAlertMessage)
    }

    /*----------------------------------------------------------------------------------------------
        method name = createProjectAndValidate
        description = This method is used to create project and validate the toast message and project in
                        project connection tab.
        Parameter
            projectName = name of the project, 
            cloudType = the type of project want to create AWS, Azure, GCP
        return value = null
    ------------------------------------------------------------------------------------------------*/

    createProjectAndValidate(projectName, cloudType) {
        const baseAction = new BaseActions
        baseAction.openConnectionPopup()
        this.clickProjectAddButton()
        cy.waitUntil(() => cy.get(this.inputBoxProjectName).then($el => Cypress.dom.isVisible($el)), { timeout: eightSeconds });
        this.enterProjectName(projectName)
        this.clickProjectNameContinueButton()
        if (cloudType === "azure") {
            cy.get("input[value='azure']").click({ force: true })
        } else if (cloudType === "gcp") {
            cy.get("input[value='gcp']").click({ force: true })
        }
        cy.wait(threeSeconds)
        this.clickProviderContinueButton()
        cy.wait(threeSeconds)
        this.verifyCreateProjectToastMessage();
        cy.wait(eightSeconds)
        this.navigateToProjectConnectionTab(projectName)
    }
    /*----------------------------------------------------------------------------------------------
        method name = navigateToProjectConnectionTabAndSearchProject
        description = This method is used to navigate project connection tab and search project.
        Parameternpx cypress open --env configFile=tenable-prod
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/

    navigateToProjectConnectionTab(projectName) {
        this.clickLink(this.tabProjectAndConnection)
        cy.get(this.searchBoxProjectName).should('be.visible').click({ force: true })
        this.searchProject(projectName)
        cy.get('div.env-row-body.on-scrollbar div.env-row:nth-child(1) div.envs-grid-linked-body-text').should('include.text', projectName)
    }

    /*----------------------------------------------------------------------------------------------
        method name = clickProjectConnectionTab
        description = This method is used to click project connection tab.
        parameter = null
        return value = null
    ------------------------------------------------------------------------------------------------*/

    clickProjectConnectionTab() {
        cy.wait(eightSeconds)
        this.clickLink(this.tabProjectAndConnection)

    }
    connectAzureProject(clientId, secretValue, tenantId, projectName) {

        const baseAction = new BaseActions
        baseAction.openConnectionPopup()
        this.clickConnectionLink()
        this.clickAzureSubscriptionLink()
        this.clickServicePrincipalRadioButton()
        this.clickProjectNameContinueButton()
        this.clickAzurePublicCloudRadioButton()
        this.clickPublicCloudContinueButton()
        this.enterClientId(clientId)
        this.enterSecretValue(secretValue)
        this.enterTenantId(tenantId)
        this.clickArnContinueButton()
        cy.wait(eightSeconds)
        this.clickAzureSubscriptionCheckbox()
        this.clickVpcContinueButton()
        cy.wait(thirtySeconds)
        this.clickAllVpcRadioButton()
        this.clickAxureVpcContinueButton()
        this.enterProjectNameInAzureSearchBox(projectName)
        this.clickProjectNameCheckbox()
        this.clickConnectCloudButton()

    }

    /*----------------------------------------------------------------------------------------------
        method name = connectAwsAccountWithProject
        description = This method is used to connect AWS account with project
        Parameters
            arnValue = ARN value of the AWS account to be passed from .json, 
            externalId = externalID of the AWS account to be passed from .json, 
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/

    connectAwsAccountWithProject(arnValue, externalId, projectName) {
        const baseAction = new BaseActions
        baseAction.openConnectionPopup()
        this.clickConnectionLink()
        this.clickAwsAccountLink()
        this.clickOnboardAwsAccountRadiobutton()
        this.clickProjectNameContinueButton()
        this.clickPublicCloudRadiobutton()
        this.clickPublicCloudContinueButton()
        this.enterArnValue(arnValue)
        this.enterExternalIdValue(externalId)
        this.clickArnContinueButton()
        this.clickAllVpcRadioButton()
        this.clickVpcContinueButton()
        this.enterProjectNameInSearchBox(projectName)
        this.clickConnectProjectCheckbox()
        this.clickConnectCloudButton()
    }

    /*----------------------------------------------------------------------------------------------
        method name = connectAzureAccountWithProject
        description = This method is used to connect Azure account with project
        Parameters
            clientId = client id of the azure account to be passed from .json, 
            secretValue = secret value of the azure account to be passed from .json, 
            tenantId = tenant id of the azure account to be passed from .json, 
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/

    connectAzureAccountWithProject(clientId, secretValue, tenantId, projectName) {
        const baseAction = new BaseActions
        baseAction.openConnectionPopup()
        this.clickConnectionLink()
        this.clickAzureSubscriptionLink()
        this.clickServicePrincipalRadioButton()
        this.clickProjectNameContinueButton()
        this.clickAzurePublicCloudRadioButton()
        this.clickPublicCloudContinueButton()
        this.clickProviderContinueButton()
        this.enterClientId(clientId)
        this.enterSecretValue(secretValue)
        this.enterTenantId(tenantId)
        this.clickArnContinueButton()
        this.clickAzureSubscriptionCheckbox()
        this.clickVpcContinueButton()
        this.clickAllVpcRadioButton()
        this.clickAxureVpcContinueButton()
        this.enterProjectNameInAzureSearchBox(projectName)
        this.clickProjectNameCheckbox()
        this.clickConnectCloudButton()
    }

    /*----------------------------------------------------------------------------------------------
        method name = connectGcpAccountWithProject
        description = This method is used to connect GCP account with project
        Parameters
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/
    connectAzure(clientId_invalid, secretValue_invalid, tenantId_invalid) {

        const baseAction = new BaseActions
        baseAction.openConnectionPopup()
        this.clickConnectionLink()
        this.clickAzureSubscriptionLink()
        this.clickServicePrincipalRadioButton()
        this.clickProjectNameContinueButton()
        this.clickAzurePublicCloudRadioButton()
        this.clickPublicCloudContinueButton()
        this.enterClientIdInvalid(clientId_invalid)
        this.enterSecretValue(secretValue_invalid)
        this.enterTenantId(tenantId_invalid)
        this.clickArnContinueButton()
        this.noSubscriptionFound()
    }
    connectGcpAccountWithProject(projectName) {
        const baseAction = new BaseActions
        baseAction.openConnectionPopup()
        this.clickConnectionLink()
        this.clickGcpServiceAccountLink()
        this.clickServiceAccountCredentialsRadioButton()
        this.clickProjectNameContinueButton()
        this.clickPublicCloudRadiobutton()
        this.clickGCPContinueButton()
        cy.wait(eightSeconds)
        this.clickUplodaButtonInvaidCred()
        cy.wait(threeSeconds)
        this.clickGcpfileUploadContinueButton()
        cy.wait(threeSeconds)
        this.verifyGcpInvalidCredToastMessage()
        cy.wait(fiveSeconds)
        this.clickUploadButton()
        cy.wait(threeSeconds)
        this.clickGcpfileUploadContinueButton()
        cy.wait(threeSeconds)
        this.clickAllVpcRadioButton()
        this.clickVpcContinueButton()
        this.enterProjectNameInSearchBox(projectName)
        this.clickConnectProjectCheckbox()
        this.clickConnectCloudButton()
    }
    /*----------------------------------------------------------------------------------------------
        method name = verifyTheConnectionCreated
        description = This method is used to verify the connection created
        Parameters
            projectName = name of the project
        return value = null
    ------------------------------------------------------------------------------------------------*/
    verifyTheConnectionCreated(projectName) {
        this.clickProjectAndConnectionTab()
        this.searchProject(projectName)
        cy.get('div.env-row-body.on-scrollbar div.env-row:nth-child(1) div.project-provider-repo-container div:nth-child(1) div.project-provider-sub-text').should('include.text', 'Cloud accounts: 1')
    }
    projectConnectionTab() {
        cy.get(this.tabProjectAndConnection).click({ force: true })
        cy.wait(5000)
        cy.xpath(this.singleProject).click({ force: true })
        cy.get(this.btnDeleteProject).click({ force: true })
        cy.get(this.btnDeleteConfirm).click({ force: true })
        cy.get(this.refreshButton).click({ force: true })
        cy.get(this.showAllBox).click({ force: true })
        cy.get(this.checkBoxProject).click({ force: true })
        cy.get(this.btnDeleteProject).click({ force: true })
        cy.get(this.btnDeleteConfirm).click({ force: true })
        cy.wait(8000)
        cy.get(this.verifyNoProjectText).should('be.visible')
        cy.get(this.tabCloudAccount).click({ force: true })
        cy.wait(5000)
        // These lines of code is impacted due to open bug - APE-9097 
        // cy.get(this.cloudProject).click({ multiple: true })
        // cy.get(this.cloudDelete).click({ force: true })
        // cy.get(this.cloudPopup).click({ force: true })
        // cy.get(this.cloudRefresh).click({ force: true })
        // cy.get(this.cloudCheckBox).click({ force: true })
        // cy.get(this.noCloudFound).should('be.visible')
        cy.get(this.repositoryTab).click({ force: true })
        cy.get(this.repoProject).click({ multiple: true })
        cy.get(this.repoDelete).click({ force: true })
        cy.get(this.repoPopupMsg).click({ force: true })
        cy.get(this.repoRefreshButton).click({ force: true })
        cy.get(this.repositoryCheckBox).click({ force: true })
        cy.get(this.repoDelete).click({ force: true })
        cy.wait(5000)
        cy.get(this.noRepoFound).should('be.visible')
    }
    verifyProjectDeleteMessage() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("The project has been deleted", this.toastAlertMessage)
    }

    verifyRepoDeleteMessage() {
        const baseAction = new BaseActions
        baseAction.verifyTextExists("Repository deleted successfully", this.toastAlertMessage)
    }
    clickAzureSubscriptionLink() {
        cy.xpath(this.linkAzureSubscription).click({ force: true })
    }
    clickServicePrincipalRadioButton() {
        cy.get(this.btnRadioServicePrincipal).click({ force: true })
    }
    clickAzureSubscriptionCheckbox() {
        cy.wait(4000)
        cy.get(this.checkboxSubscriptionName).click({ force: true })
    }
    clickProjectNameCheckbox() {
        cy.get(this.selectProject).click({ force: true })
    }
    clickResourceApplicationGateway() {
        cy.get(this.applicationGateway).click({ force: true })
    }
    clickResourceNetworkInterfaces() {
        cy.get(this.networkInterfaces).click({ force: true })
    }
    clickResourcePostgreSQLServer() {
        cy.get(this.postSqlServer).click({ force: true })
    }
    noSubscriptionFound() {
        cy.get(this.noSubscription).should('be.visible')
    }
    failingPoliciesResources(failingPoliciesThresholdValue, resourcesThresholdValue, projectName) {
        const alerts = new Alerts
        alerts.clickAlertsLink()
        cy.wait(threeSeconds)
        alerts.clickHomeLink()
        cy.wait(eightSeconds)
        this.clickLink(this.tabProjectAndConnection)
        this.searchProject(projectName)
        cy.get(this.failingPoliciesText).then(elem => {
            const failingPolicies = Cypress.$(elem).text();
            expect(parseInt(failingPolicies)).to.lessThan(parseInt(failingPoliciesThresholdValue))
        });
        cy.get(this.resourcesText).then(elem => {
            const resources = Cypress.$(elem).text();
            expect(parseInt(resources)).to.lessThan(parseInt(resourcesThresholdValue))
        });
    }

    clickRefreshButton() {
        cy.get(this.btnRefresh).click()
    }
    deleteAllAutomationProject() {
        const projectConnectionstab = new ProjectConnectionsTab
        this.clickLink(this.tabProjectAndConnection)
        cy.wait(tenSeconds)
        cy.get(this.checkboxShowAllProjects).click()
        this.searchProject("BAT_UI")
        this.clickRefreshButton()
        this.clickDeleteProject()
        this.clickDeleteConfirm()
        cy.get(this.btnPagination).click()
        this.clickRefreshButton()
        this.clickDeleteProject()
        this.clickDeleteConfirm()
        this.verifyProjectDeleteToastMessage()
        cy.wait(eightSeconds)
        this.clickLink(this.tabProjectAndConnection)
        cy.get(this.tabProjectAndConnection).click({ force: true })
        cy.wait(5000)
        cy.reload()
        cy.wait(threeSeconds)
        cy.get(this.repositoryTab).click({ force: true })
        cy.wait(threeSeconds)
        projectConnectionstab.validateProjectAssignmentToRepository()
    }
    deleteSpecificProjects(projectName) {
        this.clickLink(this.tabProjectAndConnection)
        cy.wait(tenSeconds)
        cy.get(this.checkboxShowAllProjects).click()
        this.searchProject(projectName)
        cy.get(this.checkboxProjectAll).click()
        this.clickDeleteProject()
        this.clickDeleteConfirm()
        this.verifyProjectDeleteToastMessage()
    }
    deleteOrphanRepos() {
        const projectConnectionstab = new ProjectConnectionsTab
        cy.wait(eightSeconds)
        this.clickLink(this.tabProjectAndConnection)
        cy.get(this.tabProjectAndConnection).click({ force: true })
        cy.wait(threeSeconds)
        cy.reload()
        cy.wait(threeSeconds)
        cy.get(this.repositoryTab).click({ force: true })
        cy.wait(threeSeconds)
        projectConnectionstab.validateProjectAssignmentToRepository()
        cy.wait(threeSeconds)
    }
    deleteProjectsAndRepos(projectName) {
        this.deleteSpecificProjects(projectName)
        this.deleteOrphanRepos()
    }

}

export default ProjectConnection