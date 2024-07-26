import { expect, Locator, Page } from '@playwright/test'
import { submitButton } from '../test/selectors/loginPageSelectors'
import { userEmail } from '../test/selectors/resetPasswordPageSelectors'

export class ResetPassword {
    readonly page: Page
    readonly userEmail: Locator
    readonly submitButton: Locator

    constructor(page: Page) {
        this.page = page
        this.userEmail = page.locator(userEmail)
        this.submitButton = page.locator(submitButton)
    }

    async provideEmail(email: string) {
        try {
            await this.userEmail.fill(email)
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async pressSubmitButton() {
        try {
            await this.submitButton.click()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async emailSuccessfullySent() {
        await expect(this.page.url()).toBe('http://zero.webappsecurity.com/forgotten-password-send.html')
    }
}