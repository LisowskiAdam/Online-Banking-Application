import { expect, Page, Locator } from '@playwright/test'
import { clearButton, comment, email, faqLink, name, subject, submitButton } from '../test/selectors/feedbackPageSelectors'

export class FeedbackPage {
    readonly page: Page
    readonly name: Locator
    readonly email: Locator
    readonly subject: Locator
    readonly comment: Locator
    readonly submitButton: Locator
    readonly clearButton: Locator
    readonly faqLink: Locator
    readonly feedbackPageTitle: Locator
    readonly description: Locator

    constructor(page: Page) {
        this.page = page
        this.name = page.locator(name)
        this.email = page.locator(email)
        this.subject = page.locator(subject)
        this.comment = page.locator(comment)
        this.submitButton = page.locator(submitButton)
        this.clearButton = page.locator(clearButton)
        this.faqLink = page.locator(faqLink)
    }

    async fulfillForm(formData: {name: string, email: string, subject: string, comment: string}) {
        await this.name.fill(formData.name)
        await this.email.fill(formData.email)
        await this.subject.fill(formData.subject)
        await this.comment.fill(formData.comment)
    }

    async clearFeedbackForm() {
        try {
            await this.clearButton.click()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async submitFeedbackForm() {
        try {
            await this.submitButton.click()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async checkIfFeedbackFormIsSuccessfulySent() {
        expect(this.page.url()).toBe('http://zero.webappsecurity.com/sendFeedback.html')
    }

    async proceedToFAQ() {
        await this.faqLink.click()
        expect(this.page.url()).toBe('http://zero.webappsecurity.com/faq.html')
    }
}