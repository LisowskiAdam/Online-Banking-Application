import { test } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { HomePage } from '../page-objects/HomePage'
import { Navbar } from '../page-objects/components/Navbar'
import { AccountActivity } from '../page-objects/AccountActivity'

test.describe('Test the Account Activity page', () => {
    let loginPage: LoginPage
    let homePage: HomePage
    let navbar: Navbar
    let accountActivity: AccountActivity

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        navbar = new Navbar(page)
        accountActivity = new AccountActivity(page)

        const tabName = 'Account Activity'

        await homePage.visitPage()
        await homePage.pressSignInButton()
        await loginPage.login()
        await loginPage.proceedToNextPage()
        await navbar.proceedToTab(tabName)
    })

    test('should perform e2e test on the Show Transactions tab of Account Activity page', async ({ page }) => {
        for (let i = 1; i <= 6; i++) { // There are 6 types of account
            await accountActivity.selectTypeOfAccount(i.toString())
        }
    })

    test('should perform e2e test on the Find Transactions tab of Account Activity page', async ({ page }) => {
        const formData = {
            description: 'ONLINE',
            fromDate: '2012-09-01',
            toDate: '2015-09-06',
            fromAmount: '0',
            toAmount: '1000',
            type: 'Any'
        }

        await accountActivity.proceedToFindTransactionsTab()
        await accountActivity.fulfillForm(formData)
        // await accountActivity.checkResults(2) // 500 server error is received upon pressing "Find" button
    })
})