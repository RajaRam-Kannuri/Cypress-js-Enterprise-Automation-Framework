import { mediumTimeout, extremeTimeout, letsWait, getSpecBasedNamePrefix } from '../support/utils'
const store = {}
var cloudScanAttempt = 0

function getEnvs() { return { method: 'GET', headers: { 'x-cookie': Cypress.env('sessionToken') }, url: '/v1/api/env' } }

function getRepos() { return { method: 'GET', headers: { 'x-cookie': Cypress.env('sessionToken') }, url: '/v1/api/repo' } }

function getCustomPolicyGroups() {return {method: 'GET', headers: { 'x-cookie': Cypress.env('sessionToken') }, url: '/v1/api/policy?type=custom' }}

function getCustomPolicies() {return {method: 'GET', headers: { 'x-cookie': Cypress.env('sessionToken') }, url: '/v1/api/rules' }}

function getUsers() { return { method: 'GET', headers: { 'x-cookie': Cypress.env('sessionToken') }, url: 'v1/api/user' } }

function getApiTokens() { return { method: 'GET', headers: { 'x-cookie': Cypress.env('sessionToken') }, url: '/v1/api/application' } }


/**
 * cleanSlate deletes the environments, policies based belonging to the spec
 * This is required when running BAT in single tenant instances like onprem.accurics.com
 */
 function cleanSlate() {
    // Clean up Environments and repositories
    cy.log(`Deleting environments with prefix - ${getSpecBasedNamePrefix()} and associated repositories`)
    cy.request(getEnvs()).then((response) => {
         // expect(response.status).to.eq(200)
         let envs = response.body
         if (envs.length === 0) {
              cy.log("No environments to delete")
         }
         else {
              envs.forEach(function (env) {
                   if (env.name.includes(getSpecBasedNamePrefix()) || env.name.includes('Default-')) {
                        cy.log(`Deleting environment: ${env.name}`)
                        cy.request(deleteEnv(env.id))
                   }
              })
         }
    })
    // Clean up lingering repositories
    cy.request(getRepos()).then(response => {
         let repos = response.body
         if (repos.length === 0) {
              cy.log("No lingering repos found")
         }
         else {
              repos.forEach(function (repo) {
                   cy.log(`Deleting repository: ${repo.url}`)
                   cy.request(deleteRepo(repo.id))
              })
         }
    })

    //Clean up policy groups with spec prefix
    cy.log(`Deleting Policy Groups with prefix - ${getSpecBasedNamePrefix()}`)
    cy.request(getCustomPolicyGroups()).then((policyGroupResponse) => {
         let policyGroups = policyGroupResponse.body
         if (policyGroups.length > 0) {
              policyGroups.forEach(function (policyGroup) {
                   if (policyGroup.name.includes(getSpecBasedNamePrefix())) {
                   // if (policy.policyType.includes("custom")) {
                        cy.log(`Deleting policy: ${policyGroup.name}`)
                        cy.request(deletePolicyGroup(policyGroup.id)) /*.its('status').should('be.equal', 200)*/
                   }
              })
         }
    })

    //Clean up policies with spec prefix
    cy.log(`Deleting policies with prefix - ${getSpecBasedNamePrefix()}`)
    cy.request(getCustomPolicies()).then((policyResponse) => {
         let policies = policyResponse.body
         if (policies.count > 0) {
              policies.rules.forEach(function (policy) {
                   if (policy.ruleDisplayName.includes(getSpecBasedNamePrefix())) {
                   // if (policy.policyType.includes("custom")) {
                        cy.log(`Deleting policy: ${policy.ruleDisplayName}`)
                        cy.request(deletePolicy(policy.policyBuilderId)) /*.its('status').should('be.equal', 200)*/
                   }
              })
         }
    })

    //Clean up Users
    cy.log(`Deleting Users with prefix - ${getSpecBasedNamePrefix()}`)
    cy.request(getUsers()).then((userResponse) => {
         let users = userResponse.body
         if (users.length > 0) {
              users.forEach(function (user) {
                   if (user.email.includes(getSpecBasedNamePrefix().toLowerCase())) {
                        cy.log(`Deleting User: ${user.email}`)
                        cy.request(deleteUser(user.id))/*.its('status').should('be.equal', 204)*/
                   }
              })
         }
    })
    //Clean up ApiTokens
    cy.log(`Deleting Tokens with prefix - ${getSpecBasedNamePrefix()}`)
    cy.request(getApiTokens()).then((response) => {
         let apiTokens = response.body
         if (apiTokens.length > 0) {
              apiTokens.forEach(function (apiToken) {
                   if (apiToken.appName.includes(getSpecBasedNamePrefix())) {
                        cy.log(`Deleting Tokens: ${apiToken.id}`)
                        cy.request(deleteApiToken(apiToken.id))/*.its('status').should('be.equal', 204)*/
                   }
              })
         }
    })

    //Clean up downloads folder
    // cy.exec(`rm -rf ${Cypress.config().downloadsFolder}/*`, { failOnNonZeroExit: false })
}

export {cleanSlate}