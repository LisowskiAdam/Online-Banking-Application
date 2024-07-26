import { expect, test } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { HomePage } from '../page-objects/HomePage'
import { ResetPassword } from '../page-objects/ResetPassword'
import { LoginPageCopy } from '../page-objects/LoginPageCopy'
import { ResetPasswordCopy } from '../page-objects/ResetPasswordCopy'

test.describe('Test the Login flow', () => {
    let loginPage: LoginPage
    let loginPageCopy: LoginPageCopy
    let homePage: HomePage
    let resetPassword: ResetPassword
    let resetPasswordCopy: ResetPasswordCopy

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        loginPageCopy = new LoginPageCopy(page)
        homePage = new HomePage(page)
        resetPassword = new ResetPassword(page)
        resetPasswordCopy = new ResetPasswordCopy(page)

        await homePage.visitPage()
        await homePage.pressSignInButton()
    })

    test('should successfuly login and logout', async ({ page }) => {
        await loginPage.login()
        await loginPage.proceedToNextPage()
        await loginPage.logout()
    })

    test('should be unable to login with empty credentials', async ({ page }) => {
        await loginPage.unsuccessfullLogin('', '')
    })

    test('should be unable to login with invalid credentials', async ({ page }) => {
        await loginPage.unsuccessfullLogin('invalid_uername', 'invalid_password')
    })

    test('should perform e2e tests on the Reset Password page', async ({ page }) => {
        const email = 'test@test.com'
        
        await loginPage.proceedToResetPasswordPage()
        await resetPassword.provideEmail(email)
        await resetPassword.pressSubmitButton()
        await resetPassword.emailSuccessfullySent()
    })

    test('should check Copy on the login form', async ({ page }) => {
        await loginPageCopy.verifyCopy()
    })

    test('should check Copy on the Reset Password page', async ({ page }) => {
        await loginPage.proceedToResetPasswordPage()
        await resetPasswordCopy.verifyCopy()
    })
})