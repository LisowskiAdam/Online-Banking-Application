import { expect, Page, Locator } from '@playwright/test'
import { comment, description, email, feedbacPagekTitle, name, subject } from '../test/selectors/feedbackPageSelectors'
import { descriptionCopy, feedbackPageTitleCopy } from '../test/copy/feedbackPageCopy'

export class FeedbackPageCopy {
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
        this.feedbackPageTitle = page.locator(feedbacPagekTitle)
        this.description = page.locator(description)
    }

    async verifyCopy() {
        await expect(this.feedbackPageTitle).toContainText(feedbackPageTitleCopy)
        await expect(this.description).toContainText(descriptionCopy)
    }

    async checkIfFormIsEmpty() {
        await expect(this.name).toContainText('')
        await expect(this.email).toContainText('')
        await expect(this.subject).toContainText('')
        await expect(this.comment).toContainText('')
    }
}