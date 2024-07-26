import { test } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { HomePage } from '../page-objects/HomePage'
import { Navbar } from '../page-objects/components/Navbar'
import { PayBills } from '../page-objects/PayBills'
import { PayBillsCopy } from '../page-objects/PayBillsCopy'

test.describe('Test the Pay Bills page', () => {
    let loginPage: LoginPage
    let homePage: HomePage
    let navbar: Navbar
    let payBills: PayBills
    let payBillsCopy: PayBillsCopy

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        navbar = new Navbar(page)
        payBills = new PayBills(page)
        payBillsCopy = new PayBillsCopy(page)

        const tabName = 'Pay Bills'

        await homePage.visitPage()
        await homePage.pressSignInButton()
        await loginPage.login()
        await loginPage.proceedToNextPage()
        await navbar.proceedToTab(tabName)
    })

    test('should perform e2e test on the Pay Saved Payee tab of Pay Bills page', async ({ page }) => {
        const payeeAccount = ['Sprint', 'Bank of America', 'Apple', 'Wells Fargo']
        const typeOfAccount = ['Loan', 'Credit Card', 'Checking', 'Brokerage']
        const formData = {
            amount: '19.96',
            date: '2024-07-04',
            description: 'QA test payment'
        }
        
        for (let i = 0; i < payeeAccount.length; i++) {
            await payBills.selectTypeOfAccount(payeeAccount[i])
            await payBills.fulfillPaySavedPayeeForm(typeOfAccount[i], formData)
            await payBillsCopy.paySavedPayeePaymentSuccessfullySubmitted()
        }
        await payBillsCopy.verifyPaySavedPayeeTabCopy()
    })

    test('should perform e2e test on the Add New Payee tab of Pay Bills page', async ({ page }) => {
        const payeeData = {
            payeeName: 'QA Payee',
            payeeAddress: 'Marszałkowska 24, 01-001, Warsaw, Poland',
            payeeAccount: 'testing sub-account',
            payeeDetails: 'some additional information'
        }

        await payBills.proceedToAddNewPayeeTab()
        await payBills.fulfillAddNewPayeeForm(payeeData)
        await payBills.verifyThatNewPayeeWasSuccessfullyAdded(payeeData)
    })

    test('should perform e2e test on the Purchase Foreign Currency tab of Pay Bills page', async ({ page }) => {
        const currency = ['AUD', 'CAD', 'CHF', 'CNY', 'DKK', 'EUR', 'HKD', 'GBP', 'JPY', 'MXN', 'NOK', 'NZD', 'SEK', 'SGD', 'THB']
        const amountOfMoney = '1000'

        await payBills.proceedToPurchaseForeignCurrencyTab()
        await payBills.provide(amountOfMoney)

        for(let i = 0; i <= currency.length; i++) {
            await payBills.fulfillPurchaseForeignCurrencyForm(currency[i])
        }
        await payBills.purchaseCurrency()
    })

    test('should check Copy on the Pay Saved Payee tab of Pay Bills page', async ({ page }) => {
        await payBillsCopy.verifyPaySavedPayeeTabCopy()
    })

    test('should check copy on the Add New Payee tab of Pay Bills page', async ({ page }) => {
        await payBills.proceedToAddNewPayeeTab()
        await payBillsCopy.verifyAddNewPayeeTabCopy()
    })

    test('should check Copy on the Purchase Foreign Currency tab of Pay Bills page', async ({ page }) => {
        await payBills.proceedToPurchaseForeignCurrencyTab()
        await payBillsCopy.verifyPurchaseForeignCurrencyTabCopy()
    })
})