import { expect, Locator, Page } from '@playwright/test'
import { username, password, submitButton, errorMessage, signinButton, rememberMeCheckbox, resetPasswordLink, usernameButtonLink, logoutButton } from '../test/selectors/loginPageSelectors'
import { LoginPageCopy } from './LoginPageCopy'
import { request } from 'http'

export class LoginPage {
    readonly page: Page
    readonly signInButton: Locator
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButtton: Locator
    readonly rememberMeCheckbox: Locator
    readonly errorMessage: Locator
    readonly resetPasswordLink: Locator
    readonly usernameButtonLink: Locator
    readonly logoutButton: Locator

    constructor(page: Page) {
        this.page = page
        this.signInButton = page.locator(signinButton)
        this.usernameInput = page.locator(username)
        this.passwordInput = page.locator(password)
        this.submitButtton = page.locator(submitButton)
        this.errorMessage = page.locator(errorMessage)
        this.rememberMeCheckbox = page.locator(rememberMeCheckbox)
        this.resetPasswordLink = page.locator(resetPasswordLink)
        this.usernameButtonLink = page.locator(usernameButtonLink)
        this.logoutButton = page.locator(logoutButton)
    }

    async visit() {
        await this.page.goto('http://zero.webappsecurity.com')
    }

    async pressSignInButton() {
        try {
            await this.page.click(signinButton)
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async login(username: string = 'username', password: string = 'password') {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.rememberMeCheckbox.check()
        await expect(this.rememberMeCheckbox).toBeChecked()
        await this.submitButtton.click()
    }

    async logout() {
        await this.usernameButtonLink.click()
        await this.logoutButton.click()
        await this.confirmLogout()
    }

    async confirmLogout() {
        await expect(this.signInButton).toBeVisible()
    }

    async unsuccessfullLogin(username: string, password: string) {
        let loginPageCopy: LoginPageCopy
        loginPageCopy = new LoginPageCopy(this.page)

        await expect(this.page.url()).toBe('http://zero.webappsecurity.com/login.html')
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.submitButtton.click()
        await loginPageCopy.verifyErrorMessage()
        await loginPageCopy.verifyInvalidLoginPageTitle()
    }

    async proceedToNextPage() {
        await this.page.goto('http://zero.webappsecurity.com/bank/account-summary.html') // the web app has an outdated protocol, so forcing the change of the url is the only way to pass the Chrome' error screen
    }

    async proceedToResetPasswordPage() {
        await this.resetPasswordLink.click()
        await expect(this.page.url()).toBe('http://zero.webappsecurity.com/forgot-password.html')
    }

    async wait(Miliseconds: number = 3000) {
        await this.page.waitForTimeout(Miliseconds)
    }
}