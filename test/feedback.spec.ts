import { test } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { HomePage } from '../page-objects/HomePage'
import { FeedbackPage } from '../page-objects/FeedbackPage'
import { FaqPage } from '../page-objects/FaqPage'
import { FeedbackPageCopy } from '../page-objects/FeedbackPageCopy'

test.describe('Test the Feedback page', () => {
    let loginPage: LoginPage
    let homePage: HomePage
    let feedbackPage: FeedbackPage
    let feedbackPageCopy: FeedbackPageCopy
    let faqPage: FaqPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        feedbackPage = new FeedbackPage(page)
        feedbackPageCopy = new FeedbackPageCopy(page)
        faqPage = new FaqPage(page)

        await homePage.visitPage()
        await homePage.proceedToFeedbackPage()
    })

    test('should perform e2e test on the Feedback form', async ({ page }) => {
        const formData = {
            name: 'Quality Assurance',
            email: 'test@test.com',
            subject: 'Testing subject',
            comment: 'Lorem ipsum dolor sit amet - QA'
        }

        await feedbackPageCopy.checkIfFormIsEmpty()
        await feedbackPage.fulfillForm(formData)
        await feedbackPage.clearFeedbackForm()
        await feedbackPageCopy.checkIfFormIsEmpty()
        await feedbackPage.fulfillForm(formData)
        await feedbackPage.submitFeedbackForm()
        await feedbackPage.checkIfFeedbackFormIsSuccessfulySent()
    })

    test('should check Copy on the Feedback form', async ({ page }) => {
        await homePage.verifyFeedbackURL()
        await feedbackPageCopy.verifyCopy()
    })

    test('should check Copy on the FAQ page', async ({ page }) => {
        await feedbackPage.proceedToFAQ()
        await faqPage.checkQuestionOneCopy()
        await faqPage.checkQuestionTwoCopy()
    })
})