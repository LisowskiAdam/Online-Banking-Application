import { expect, Page, Locator } from '@playwright/test'
import { question1point1, question1point2, question1point3, question1Title, question2point1, question2point2, question2point3, question2Title } from '../test/selectors/feedbackPageSelectors'
import { question1point1Copy, question1point2Copy, question1point3Copy, question1TitleCopy, question2point1Copy, question2point2Copy, question2point3Copy, question2TitleCopy } from '../test/copy/feedbackPageCopy'

export class FaqPage {
    readonly page: Page
    readonly question1Title: Locator
    readonly question1point1: Locator
    readonly question1point2: Locator
    readonly question1point3: Locator
    readonly question2Title: Locator
    readonly question2point1: Locator
    readonly question2point2: Locator
    readonly question2point3: Locator

    constructor(page: Page) {
        this.page = page
        this.question1Title = page.locator(question1Title)
        this.question1point1 = page.locator(question1point1)
        this.question1point2 = page.locator(question1point2)
        this.question1point3 = page.locator(question1point3)
        this.question2Title = page.locator(question2Title)
        this.question2point1 = page.locator(question2point1)
        this.question2point2 = page.locator(question2point2)
        this.question2point3 = page.locator(question2point3)
    }

    async checkQuestionOneCopy() {
        await expect(this.question1Title).toContainText(question1TitleCopy)
        await expect(this.question1point1).toContainText(question1point1Copy)
        await expect(this.question1point2).toContainText(question1point2Copy)
        await expect(this.question1point3).toContainText(question1point3Copy)
    }
    
    async checkQuestionTwoCopy() {
        await expect(this.question2Title).toContainText(question2TitleCopy)
        await expect(this.question2point1).toContainText(question2point1Copy)
        await expect(this.question2point2).toContainText(question2point2Copy)
        await expect(this.question2point3).toContainText(question2point3Copy)
    }
}