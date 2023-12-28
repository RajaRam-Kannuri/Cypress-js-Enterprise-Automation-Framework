/// <reference types="cypress-xpath" />
import BaseActions from "./BaseActions";
import ProjectConnection from "./ProjectConnection_PO";
import ProjectRepository from "./ProjectRepository_PO";
import { threeSeconds,fiveSeconds,eightSeconds,tenSeconds } from "../utils";
import 'cypress-wait-until'
import Login from "./Login_PO";

class ProjectConnectionAndTab {
   titleTextDrifts ='div.env-drifts-container'
   titleTextProject="//div[text()=' Project ']"
   failingPoliciesText="//div[text()=' Failing policies ']"
   titleTextResources = "//div[text()=' Resources ']"
   titleTextScan="//div[text()=' Scan ']"
   searchBoxProjectName = '.global-envs-search-wrapper > .global-search-box-container > .search > [data-cy="search-"]'
   btnEditPolicies = "//div[text()=' Edit Policies ']"
   btnSave ="//div[text()=' Save ']"
   btnCancel = "//div[text()=' Cancel ']"
   editCountText =".edit-policy-count-text"
   btnConfirmYes = 'div[data-cy=btn-Yes]'
   btnCloudAccounts = "//div[text()=' Cloud accounts ']"
   checkBoxProject = '.env-project-container > .cloud-setup__list__checkbox-container > [data-cy="checkbox"]'
   addConnections ='.add-connection-text'
   btnCLI ="//div[text()=' CLI ']"
   btnConfiguration ="//div[contains(text(),'Config')]"
   btnHistory = "//div[text()=' History ']"
   btnDelete ="//div[text()=' Delete ' and @class='sidenav-delete-text']"
   checkBoxShowAll ='div.d-flex.mr-3 > input'
   btnRefresh ="button[data-cy='project-refresh-btn']"
   closeIconConnections ='div.menu-container.active>div.list-header-container>div.list-header-close-icon'
   searchBoxPolicies ="input[placeholder='Search policy group']"
   checkBoxPolicyGroup = 'div.edit-policy-grid-title-background > div > div:nth-child(1) > div.edit-policy-checkbox-container >div'
   editPolicyText ='div.edit-policy-count-text'
   paginationProjects ='div.pagination_number'
   tabProjects = "div[data-cy='tab-text Projects']"
   btnConfirmDelete = '[data-cy="btn-delete"]'
   tabIssues = '#nav-issues-icon'
   tabFailingPolicies = "//div[(text()=' Failing Policies ')]"
   tabIgnoredPolicy ="//div[(text()=' Ignored Policies ')]"
   searchBoxPolicy ='.global-violations-search-box-container > .search > [data-cy="search-"]'
   sortIconSeverity='div.violations-severity-container > div.sort-icon-container > button'
   sortIconResources='div.violations-resources-container > div > div.sort-icon-container > button'
   sortIconLastDetected='div.violations-detected-container > div > div > div.sort-icon-container > button'
   textNoFailingPolicies="//div[contains(text(),'No failing')]"
   textNoignoredPolicy ="//div[contains(text(),'No ignored')]"
   projectValues      ='div.custom-tab-wrapper.active'
   btnAllBenchmarks='div.donut-chart-table.on-scrollbar>div.donut-chart-table-row'
   tabReports ='#nav-reports-icon'
   iconRightArrow ="//i[contains(text(),'chevron_right')]"
   btnProject ="//div[text()=' Projects ']"
   btnCloudAccount="//div[text()=' Cloud account ']" 
   btnRepositories ="//div[text()=' Repositories ']"
   btnSeverity ="//div[@class='sfd-button-title-text' and text()=' Severity ']"
   btnStatus="//div[@class='sfd-button-title-text' and text()=' Status ']"
   btnBenchmark="//div[@class='sfd-button-title-text' and text()=' Benchmark ']"
   btnPolicyGroups="//div[@class='sfd-button-title-text' and text()=' Policy groups ']"
   sortingbutton='div.sort-icon-container'
   compliancereports='div.compliance-widget-title-text'
   compliancereports='div.compliance-chart-title-text'
   compliancebenchmarks='div.benchmark-chart-title-text'
   iconDownload ='div.download-box'
   searchBoxPolicyName ="input[id='searchTextSearch policies']"
   pagination='.global-paginations-grid-results-text'
   totalrecords="//div[contains(text(),'Showing')]"
   gridPolicyName='.compliance-policy-grid-linked-normal-text'
   closeFlyoutIconPolicies='.sidenav-issues-close-icon-container>.svg-icon.svg-fill'
   graphFailedCount='div.compliance-iac-cloud-container > div > div.donut-chart-data-container > div:nth-child(1) > div.donut-chart-total-container > div.donut-total-value-container > div '
   failedCount='div.donut-chart-table-row.selected > div.donut-chart-legend-value-container > div'
   btnCCMBenchMark="//div[text()=' CCM ']"
   btnGDRBenchMark="//div[text()=' GDPR ']"
   btnClearFilters='div.compliance-policy-data-grid-clear-filter-text'
   btnMediumSeverityDropdown="div[data-cy='single-select-Medium']"
   btnFailedStatusDropdown="div[data-cy='single-select-Failed']"
   btnBenchmarkDropdown="div[data-cy='single-select-HIPAA']"
   btnPolicyGroupsDropdown="//div[contains(text(),' GCP v2')]"
   countComplianceByPolicies="//div[@class='donut-chart-table']"
   piechartTotalValues="(//div[@class='donut-value-text'])[1]"


   totalCompliancePoliciesInPieChart() {
      cy.xpath(this.piechartTotalValues).each(($el) =>{
      cy.wrap($el).invoke('text').then((text) =>{
      cy.log("Total Policies"+text)
      })
      })
   }
   
   valueCompliancePolicies() {
      cy.waitUntil((threeSeconds) =>cy.xpath(this.countComplianceByPolicies).each(($el)=>{
      cy.wrap($el).invoke('text').then((text) =>{
      cy.log("count compliance policies:"+text)
      })
      }))
   }

   clickClearFiltersButton() {
      cy.get(this.btnclearFilters).click()
   }

   clickDownloadIcon() {
      cy.get(this.iconDownload).click()
   }

   clickProjectsButton() {
      cy.xpath(this.btnProject).click()
   }

   clickCloudAccountButton() {
      cy.xpath(this.btnCloudAccount).click()
   }

   clickRepositoriesButton() {
      cy.xpath(this.btnRepositories).click()
   }

   clickSeverityDropdownButton() {
      cy.xpath(this.btnSeverity).click()
      cy.get(this.btnMediumSeverityDropdown).click()
   }

   clickStatusDropdownButton() {
      cy.xpath(this.btnStatus).click()
      cy.get(this.btnFailedStatusDropdown).click()
   }

   clickBenchmarkDropdownButton() {
      cy.xpath(this.btnBenchmark).click()
      cy.get(this.btnBenchmarkDropdown).click()
   }

   clickBenchmarkDropdownButton() {
      cy.xpath(this.btnBenchmark).click()
   }

   clickPolicyGroupDropdownButton() {
      cy.xpath(this.btnPolicyGroups).click()
      cy.xpath(this.btnPolicyGroupsDropdown)
   }

   clickFilterButtons() {
      this.clickSeverityDropdownButton()
      this.clickStatusDropdownButton()
      this.clickBenchmarkDropdownButton()
      this.clickPolicyGroupDropdownButton()
      this.clickProjectsButton()
      this.clickCloudAccountButton()
      this.clickRepositoriesButton()
   }

   clickCCMButton() {
      cy.xpath(this.btnCCMBenchMark).click()
   }

   clickGDRButton() {
      cy.xpath(this.btnGDRBenchMark).click()
   }

   validateComplianceBenchmarksTableAndChart() {
      cy.wait(fiveSeconds)
      cy.get(this.failedCount).invoke('text').then(value => {
      cy.get(this.graphFailedCount).should('have.text', value).then(() => {
      cy.log("both equal")
      })
      })
   }

   searchPolicyNameAndValidate(policyName,lowSeverityPolicyName,mediumSeverityPolicyName){
      const projectRepository =new ProjectRepository
      this.clickReportsTab()
      cy.wait(threeSeconds)
      cy.get(this.searchBoxPolicyName).type(policyName)
      cy.get(this.gridPolicyName).click()
      cy.get(this.closeFlyoutIconPolicies).click()
      this.clearPolicyInSearchBox(policyName)
      cy.wait(threeSeconds)
      cy.get(this.searchBoxPolicyName).type(lowSeverityPolicyName)
      cy.get(threeSeconds)
      this.clearPolicyInSearchBox(policyName)
      cy.get(this.searchBoxPolicyName).type(mediumSeverityPolicyName)
      cy.wait(threeSeconds)
      this.clearPolicyInSearchBox(policyName)
      this.clickShowAllCheckBox()
   }

   clearPolicyInSearchBox(policyName) {
      cy.get(this.searchBoxPolicyName).clear()
   }

   clickSortingIcon() {
      cy.waitUntil((threeSeconds) =>cy.get(this.sortingbutton).each(($el)=>{
      cy.wrap($el).click().invoke('text').then((text) =>{
      })
      }))
   }

   verifyThePoliciesInTable(string) {
      const baseAction = new BaseActions
      baseAction.verifyTextInTable(this.gridPolicyName, this.pagination, string, this.iconRightArrow)
   }

   numberOfProjects() {
      cy.get(this.projectValues).each(($el) =>{
      cy.wrap($el).invoke('text').then((text) =>{
      cy.log("number of projects:"+text)
      })
      })
   }

   clickAllinBenchmarkTable() {
      cy.waitUntil((threeSeconds) =>cy.get(this.btnAllBenchmarks).each(($el)=>{
      cy.wrap($el).click().invoke('text').then((text) =>{
      cy.log("value of benchmarks:"+text)
      })
      }))
   }

   clickReportsTab() {
      cy.get(this.tabReports).click()
   }

   navigateAndValidateComplianceBencmarksPolicies() {
      cy.wait(threeSeconds)
      cy.waitUntil(() => cy.wait(threeSeconds).then(() => Cypress.$(this.clickFilterButtons).length))
      cy.wait(fiveSeconds)
      this.clickSortingIcon()
      this.clickDownloadIcon()
      cy.wait(fiveSeconds)
      this.clickCCMButton()
      this.validateComplianceBenchmarksTableAndChart()
      cy.wait(threeSeconds)
      this.clickGDRButton()
      this.validateComplianceBenchmarksTableAndChart()
      cy.wait(threeSeconds)
      this.clickAllinBenchmarkTable()
      cy.wait(fiveSeconds)
      this.valueCompliancePolicies()
      cy.wait(threeSeconds)
      this.totalCompliancePoliciesInPieChart()
   }


   clickIssuesTab() {
      cy.get(this.tabIssues).click({force:true})
   }

   clickFailingPoliciesTab() {
      cy.xpath(this.tabFailingPolicies).click()
   }

   clickIgnoredPolicyTab() {
      cy.xpath(this.tabIgnoredPolicy).click()
   }

   searcPolicyName(policyName) {
      cy.get(this.searchBoxPolicy).type(policyName)
   }

   clickSeveritySortingButton() {
      cy.get(this.sortIconSeverity).click({force:true})
   }

   clickResourcesSortingButton() {
      cy.get(this.sortIconResources).click({force:true})
   }

   clickLastDetectedSortingButton() {
      cy.get(this.sortIconLastDetected).click({force:true})
   }

   clickProjectCloudAccountsButton() {
      cy.xpath(this.btnCloudAccounts).click()
   }

   clickConfirmDeleteButton() {
      cy.get(this.btnConfirmDelete).click()
   }

   projectsTabVisible() {
      cy.get(this.tabProjects).should('include.text','Projects')
   } 

   countPagination() {
      cy.get(this.paginationProjects).each(($el) =>{
      cy.wrap($el).invoke('text').then((text) =>{
      cy.log(text)
   })
   })
   }

   clickConnctionsCloseIcon() {
      cy.get(this.closeIconConnections).click({force:true})
   }

   searchPolicy(policyName) {
      cy.get(this.searchBoxPolicies).type(policyName)
   }

   verifyPoliciesCountBeforeSelect() {
      cy.get(this.editCountText).should('include.text',0)
   }

   verifyEditPolicyText(policyName) {
      cy.get(this.editPolicyText).should('include.text',policyName)
   }

   clickPolicyGroupCheckBox() {
      cy.get(this.checkBoxPolicyGroup).click()
   }

   verifyCLIText() {
      cy.xpath(this.btnCLI).should('include.text',"CLI")
   }

   verifyHistoryText() {
      cy.xpath(this.btnHistory).should('include.text',"History")
   }

   verifyDeleteText() {
      cy.xpath(this.btnDelete).click()//should('include.text',"Delete")
   }

   verifyConfigurationText() {
      cy.xpath(this.btnConfiguration).should('include.text',"Configuration")
   }

   clickAddConnections() {
      cy.get(this.addConnections).click({force:true})
   }

   clickCloseIcon() {
      cy.get(this.closeIconConnections).click({force:true})
   }

   clickShowAllCheckBox() {
      cy.get(this.checkBoxShowAll).click()
   }

   clickRefreshButton() {
      cy.get(this.btnRefresh).click()
   }

   clearProjectnameInSearchBox () {
      cy.get(this.searchBoxProjectName).clear()
   }

   clickConfirmPolicy() {
      cy.get(this.btnConfirmYes).click({force:true})
   }

   clickProjectCheckbox() {
      cy.get(this.checkBoxProject).click()
   }

   clickEditPolicies() {
      cy.xpath(this.btnEditPolicies).click({force:true})
   }

   clickPolicySaveButton() {
      cy.xpath(this.btnSave).click()
   }

   navigateAndSavePolicies(policyName) {
      this.clickProjectCheckbox()
      cy.wait(threeSeconds)
      this.clickEditPolicies()
      cy.wait(threeSeconds)
      this.clickPolicyGroupCheckBox()
      this.clickPolicyGroupCheckBox()
      this.verifyPoliciesCountBeforeSelect()
      this.searchPolicy(policyName)
      this.clickPolicyGroupCheckBox()
      this.verifyEditPolicyText(policyName)
      this.clickPolicySaveButton()
      this.clickConfirmPolicy()
      cy.wait(tenSeconds)
   }

   verifyDriftsTitle() {
      const baseAction =new BaseActions
      baseAction.verifyTextExists("Drifts",this.titleTextDrifts)
   }

   verifyProjectTitle() {
      cy.xpath(this.titleTextProject).should('include.text',"Project")
   }

   verifyFalilingPolicies() {
      cy.xpath(this.failingPoliciesText).should('include.text',"Failing policies")
   }

   verifyResourcesTitle() {
      cy.xpath(this.titleTextResources).should('include.text',"Resources")
   }

   verifyScanTitle() {
      cy.xpath(this.titleTextScan).should('include.text',"Scan")
   }

   verifyHeadText(projectName,updateprojectname) {
      const projectConnection =new ProjectConnection
      const projectRepository = new ProjectRepository
      this.projectsTabVisible()
      this.numberOfProjects()
      cy.wait(threeSeconds)
      this.clickRefreshButton()
      cy.wait(threeSeconds)
      this.clickAddConnections()
      projectRepository.clickProjectName(projectName)
      this.verifyCLIText()
      this.verifyConfigurationText()
      this.verifyHistoryText()
      this.verifyDeleteText()
      projectRepository.clickRepoFlyoutCloseIcon()
      this.clickRefreshButton()
      this.clickShowAllCheckBox()
      this.clickRefreshButton()
      this.countPagination()
      this.clickShowAllCheckBox()
      this.clickProjectCloudAccountsButton()
      projectRepository.clickProjectName(projectName)
      this.verifyDeleteText()
      this.clickConfirmDeleteButton()
      projectConnection.verifyProjectDeleteToastMessage()
      this.clearProjectnameInSearchBox()
      this.countPagination()
      this.verifyProjectTitle()
      this.verifyFalilingPolicies()
      this.verifyDriftsTitle()
      this.verifyResourcesTitle()
      this.verifyScanTitle()
   }
}
export default ProjectConnectionAndTab