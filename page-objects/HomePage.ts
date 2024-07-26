import { expect, Page, Locator } from '@playwright/test'
import { carrouselChangedImage, carrouselControlLeft, carrouselControlRight, carrouselFreshImage, checkingAccountActivityLink, contactMicroFocusLink, disclaimerLinkOne, disclaimerLinkTwo, downloadWebInspectLink, feedbackPage, footer, moreServicesButton, myMoneyMapLink, numberOfLinks, onlineBankingMenu, privacyStatementLink, searchResultsTwo, searchTerm, signinButton, termsOfUseLink, transferFundsLink, zeroBankLogoButton } from '../test/selectors/homePageSelectors'
import { carrouselImageOneSRC, carrouselImageThreeSRC, carrouselImageTwoSRC  } from '../test/copy/homePageCopy'
import { HomePageCopy } from './HomePageCopy'

export class HomePage {
    readonly page: Page
    readonly signInButtton: Locator
    readonly searchTerm: Locator
    readonly numberOfLinks: Locator
    readonly feedbackTab: Locator
    readonly moreServicesButton: Locator
    readonly onlineBankingMenu: Locator
    readonly carrouselFreshImage: Locator
    readonly carrouselControlRight: Locator
    readonly carrouselChangedImage: Locator
    readonly carrouselControlLeft: Locator
    readonly searchResultsTwo: Locator
    readonly footer: Locator
    readonly downloadWebInspectLink: Locator
    readonly termsOfUseLink: Locator
    readonly contactMicroFocusLink: Locator
    readonly privacyStatementLink: Locator
    readonly disclaimerLinkOne: Locator
    readonly disclaimerLinkTwo: Locator
    readonly checkingAccountActivityLink: Locator
    readonly transferFundsLink: Locator
    readonly myMoneyMapLink: Locator
    readonly zeroBankLogoButton: Locator

    constructor(page: Page) {
        this.page = page
        this.signInButtton = page.locator(signinButton)
        this.searchTerm = page.locator(searchTerm)
        this.feedbackTab = page.locator(feedbackPage)
        this.numberOfLinks = page.locator(numberOfLinks)
        this.onlineBankingMenu = page.locator(onlineBankingMenu)
        this.moreServicesButton = page.locator(moreServicesButton)
        this.carrouselFreshImage = page.locator(carrouselFreshImage)
        this.carrouselChangedImage = page.locator(carrouselChangedImage)
        this.carrouselControlRight = page.locator(carrouselControlRight)
        this.carrouselControlLeft = page.locator(carrouselControlLeft)
        this.footer = page.locator(footer)
        this.downloadWebInspectLink = page.locator(downloadWebInspectLink)
        this.termsOfUseLink = page.locator(termsOfUseLink)
        this.contactMicroFocusLink = page.locator(contactMicroFocusLink)
        this.privacyStatementLink = page.locator(privacyStatementLink)
        this.disclaimerLinkOne = page.locator(disclaimerLinkOne)
        this.disclaimerLinkTwo = page.locator(disclaimerLinkTwo)
        this.checkingAccountActivityLink = page.locator(checkingAccountActivityLink)
        this.transferFundsLink = page.locator(transferFundsLink)
        this.myMoneyMapLink = page.locator(myMoneyMapLink)
        this.zeroBankLogoButton = page.locator(zeroBankLogoButton)
        this.searchResultsTwo = page.locator(searchResultsTwo)
    }

    async visitPage() {
        await this.page.goto('http://zero.webappsecurity.com/index.html')
    }

    async pressSignInButton() {
        await this.signInButtton.click()
        expect(this.page.url()).toBe('http://zero.webappsecurity.com/login.html')
    }

    async proceedToFeedbackPage() {
        await this.feedbackTab.click()
    }

    async verifyFeedbackURL() {
        expect(this.page.url()).toBe('http://zero.webappsecurity.com/feedback.html')
    }

    async pressMoreServicesButton() {
        await this.moreServicesButton.click()
    }

    async verifyThatUserWasMovedToMoreServicesPage() {
        await expect(this.onlineBankingMenu).toHaveClass('active')
        expect(this.page.url()).toBe('http://zero.webappsecurity.com/online-banking.html')
    }
    
    async testCarrousel() {
        let homePageCopy: HomePageCopy
        homePageCopy = new HomePageCopy(this.page)
        
        await expect(this.carrouselFreshImage).toHaveAttribute('src', carrouselImageOneSRC)
        await homePageCopy.verifyCarrouselCopy()
        await this.carrouselControlRight.click()
        await expect(this.carrouselChangedImage).toHaveAttribute('src', carrouselImageTwoSRC)
        await homePageCopy.verifyCarrouselCopy()
        await this.carrouselControlRight.click()
        await expect(this.carrouselChangedImage).toHaveAttribute('src', carrouselImageThreeSRC)
        await homePageCopy.verifyCarrouselCopy()
        await this.carrouselControlLeft.click()
        await expect(this.carrouselChangedImage).toHaveAttribute('src', carrouselImageTwoSRC)
        await homePageCopy.verifyCarrouselCopy()
    }

    async searchTheTerm(phrase: string) {
        await this.searchTerm.fill(phrase)
        await this.page.keyboard.press('Enter')
    }

    async testSearchPage(phrase: string) {
        let homePageCopy: HomePageCopy
        homePageCopy = new HomePageCopy(this.page)

        await expect(this.numberOfLinks).toHaveCount(2)
        expect(this.page.url()).toBe(`http://zero.webappsecurity.com/search.html?searchTerm=` + phrase)
    }

    async pressFAQLink() {
        await this.searchResultsTwo.click()
    }

    async verifyFAQURL() {
        expect(this.page.url()).toBe('http://zero.webappsecurity.com/online-banking.html')
    }

    async testFooter() {
        let homePageCopy: HomePageCopy
        homePageCopy = new HomePageCopy(this.page)

        await expect(this.footer).toBeVisible()
        await homePageCopy.verifyFooterCopy()
        await this.downloadWebInspectLink.click()
        await expect(this.page.url()).toBe('https://www.opentext.com/products/fortify-webinspect')
        await this.goBack()
        await this.termsOfUseLink.click()
        await expect(this.page.url()).toBe('https://www.microfocus.com/en-us/legal#web-cookies')
        await this.goBack()
        await this.contactMicroFocusLink.click()
        await expect(this.page.url()).toBe('https://support.fortify.com/secure/index.jsp')
        await this.goBack()
        await this.privacyStatementLink.click()
        await expect(this.page.url()).toBe('https://www.microfocus.com/en-us/legal#web-cookies')
        await this.goBack()
        await this.disclaimerLinkOne.click()
        await expect(this.page.url()).toBe('http://zero.webappsecurity.com/online-banking.html')
        await this.goBack()
        await this.disclaimerLinkTwo.click()
        await expect(this.page.url()).toBe('http://zero.webappsecurity.com/index.html')
        await this.goBack()
    }

    async pressHomePageLinks(redirectLink: string) {
        switch (redirectLink) {
            case 'Checking Account Activity':
                await this.checkingAccountActivityLink.click()
                await this.checkRedirectURL(redirectLink)
                break;
            case 'Transfer Funds':
                await this.transferFundsLink.click()
                await this.checkRedirectURL(redirectLink)
                break;
            case 'My Money Map':
                await this.myMoneyMapLink.click()
                await this.checkRedirectURL(redirectLink)
                break;
            default:
                throw new Error('Unexpected link')
        }
    }

    async proceedToHomePage() {
        await this.page.goto('http://zero.webappsecurity.com/index.html')
    }

    async pressZeroBankLogoButton() {
        await this.zeroBankLogoButton.click()
    }

    async checkRedirectURL(redirectLink: string) {
        switch (redirectLink) {
            case 'Checking Account Activity':
                expect(this.page.url()).toBe('http://zero.webappsecurity.com/bank/account-activity.html')
                break;
            case 'Transfer Funds':
                expect(this.page.url()).toBe('http://zero.webappsecurity.com/bank/transfer-funds.html')
                break;
            case 'My Money Map':
                expect(this.page.url()).toBe('http://zero.webappsecurity.com/bank/money-map.html')
                break;
            default:
                throw new Error('Unexpected link')
        }
    }

    async goBack() {
        try {
            await this.page.goBack()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }
}