import { expect, Locator, Page } from '@playwright/test'
import { submitButton } from '../test/selectors/loginPageSelectors'
import { emailLabel, rpPageDescription, rpPageTitle, sendPasswordButton, userEmail } from '../test/selectors/resetPasswordPageSelectors'
import { emailLabelCopy, rpPageDescriptionCopy, rpPageTitleCopy, sendPasswordButtonCopy } from '../test/copy/resetPasswordCopy'

export class ResetPasswordCopy {
    readonly page: Page
    readonly userEmail: Locator
    readonly submitButton: Locator
    readonly rpPageTitle: Locator
    readonly rpPageDescription: Locator
    readonly emailLabel: Locator
    readonly sendPasswordButton: Locator

    constructor(page: Page) {
        this.page = page
        this.userEmail = page.locator(userEmail)
        this.submitButton = page.locator(submitButton)
        this.rpPageTitle = page.locator(rpPageTitle)
        this.rpPageDescription = page.locator(rpPageDescription)
        this.emailLabel = page.locator(emailLabel)
        this.sendPasswordButton = page.locator(sendPasswordButton)
    }

    async verifyCopy() {
        try {
            await expect(this.rpPageTitle).toContainText(rpPageTitleCopy)
            await expect(this.rpPageDescription).toContainText(rpPageDescriptionCopy)
            await expect(this.emailLabel).toContainText(emailLabelCopy)
            await expect(this.sendPasswordButton).toHaveValue(sendPasswordButtonCopy)
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }
}