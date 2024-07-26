import { test } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { HomePage } from '../page-objects/HomePage'
import { Navbar } from '../page-objects/components/Navbar'
import { TransferFunds } from '../page-objects/TransferFunds'
import { TransferFundsCopy } from '../page-objects/TransferFundsCopy'

test.describe('Test the Transfer Funds page', () => {
    let loginPage: LoginPage
    let homePage: HomePage
    let navbar: Navbar
    let transferFunds: TransferFunds
    let transferFundsCopy: TransferFundsCopy

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        navbar = new Navbar(page)
        transferFunds = new TransferFunds(page)
        transferFundsCopy = new TransferFundsCopy(page)

        const tabName = 'Transfer Funds'

        await homePage.visitPage()
        await homePage.pressSignInButton()
        await loginPage.login()
        await loginPage.proceedToNextPage()
        await navbar.proceedToTab(tabName)
    })

    test('should perform e2e test on the Transfer Money & Make Payments page', async ({ page }) => {
        const formData = {
            fromAccount: '4', // 1-6
            toAccount: '6', // 1-6
            amount: '15',
            description: 'QA test description'
        }

        await transferFundsCopy.verifyTransferFundsFirstPageCopy()
        await transferFundsCopy.verifyDescriptionOnFirstPageCopy()
        for (let i = 0; i <= 1; i++) {
            await transferFunds.fulfillForm(formData)
            await transferFunds.pressContinueButton()
            await transferFundsCopy.verifyDataBeforeTransferingMoney(formData.fromAccount, formData.toAccount, formData.amount)

            if (i === 0) {
                await transferFunds.cancelTransferingFunds()
            } else if (i === 1) {
                await transferFunds.confirmMoneyTransfer(formData)
            }
        }
        await transferFunds.pressMakeAnotherTransferButtonLink()
    })
})