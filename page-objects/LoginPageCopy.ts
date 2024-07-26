import { expect, Locator, Page } from '@playwright/test'
import { submitButton, errorMessage, signinButton, resetPasswordLink, loginLabel, passwordLabel, rememberMeLabel, loginPageTitle } from '../test/selectors/loginPageSelectors'
import { errorMessageCopy, loginLabelCopy, loginPageTitleCopy, passwordLabelCopy, rememberMeLabelCopy, resetPasswordLinkCopy, signInButtonCopy, unsuccessfullloginPageTitleCopy } from '../test/copy/loginPageCopy'

export class LoginPageCopy {
    readonly page: Page
    readonly signInButton: Locator
    readonly submitButtton: Locator
    readonly resetPasswordLink: Locator
    readonly loginPageTitle: Locator
    readonly loginLabel: Locator
    readonly passwordLabel: Locator
    readonly rememberMeLabel: Locator
    readonly loginLabelCopy: Locator
    readonly passwordLabelCopy: Locator
    readonly rememberMeLabelCopy: Locator
    readonly resetPasswordLinkCopy: Locator
    readonly signInButtonCopy: Locator
    readonly loginPageTitleCopy: Locator
    readonly errorMessage: Locator
    readonly errorMessageCopy: Locator

    constructor(page: Page) {
        this.page = page
        this.signInButton = page.locator(signinButton)
        this.submitButtton = page.locator(submitButton)
        this.resetPasswordLink = page.locator(resetPasswordLink)
        this.loginPageTitle = page.locator(loginPageTitle)
        this.loginLabel = page.locator(loginLabel)
        this.passwordLabel = page.locator(passwordLabel)
        this.rememberMeLabel = page.locator(rememberMeLabel)
        this.errorMessage = page.locator(errorMessage)
    }

    async verifyCopy() {
        try {
            await expect(this.loginPageTitle).toContainText(loginPageTitleCopy)
            await expect(this.loginLabel).toContainText(loginLabelCopy)
            await expect(this.passwordLabel).toContainText(passwordLabelCopy)
            await expect(this.rememberMeLabel).toContainText(rememberMeLabelCopy)
            await expect(this.submitButtton).toHaveValue(signInButtonCopy)
            await expect(this.resetPasswordLink).toContainText(resetPasswordLinkCopy)
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async verifyErrorMessage() {
        await expect(this.errorMessage).toContainText(errorMessageCopy)
    }

    async verifyInvalidLoginPageTitle() {
        await expect(this.loginPageTitle).toContainText(unsuccessfullloginPageTitleCopy)
    }
}