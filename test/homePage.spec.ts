import { test } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { HomePage } from '../page-objects/HomePage'
import { ResetPassword } from '../page-objects/ResetPassword'
import { HomePageCopy } from '../page-objects/HomePageCopy'

test.describe('Test the Home page', () => {
    let loginPage: LoginPage
    let homePage: HomePage
    let homePageCopy: HomePageCopy
    let resetPassword: ResetPassword

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        resetPassword = new ResetPassword(page)
        homePageCopy = new HomePageCopy(page)

        await homePage.visitPage()
    })

    test('should test Carrousel on the Home page', async ({ page }) => {
        await homePage.testCarrousel()
    })

    test('should check whether the links on Home page redirect User to expected page', async ({ page }) => {
        const redirectLink = ['Checking Account Activity', 'Transfer Funds', 'My Money Map']

        await loginPage.pressSignInButton()
        await loginPage.login()
        await homePage.proceedToHomePage()

        for (let i = 0; i < redirectLink.length; i++) {
            await homePage.pressHomePageLinks(redirectLink[i])
            await homePage.pressZeroBankLogoButton()
        }
    })

    test('should perform e2e tests on the Search textfield', async ({ page }) => {
        const phrase = 'bank'

        await homePage.searchTheTerm(phrase)
        await homePage.testSearchPage(phrase)
        await homePageCopy.verifySearchCopy()
        await homePage.pressFAQLink()
        await homePage.verifyFAQURL()
    })

    test('should check Copy on the Home page', async ({ page }) => {
        await homePageCopy.verifyHomeTabCopy()
        await homePage.pressMoreServicesButton()
        await homePage.verifyThatUserWasMovedToMoreServicesPage()
        await homePageCopy.verifyOnlineBankingTabCopy()
        await homePage.testFooter()
    })
})