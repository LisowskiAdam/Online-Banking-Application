import { expect, Page, Locator } from '@playwright/test'
import { accountActivityDescription, accountActivityIcon, accountActivityLink, accountSummaryDescription, accountSummaryIcon, accountSummaryLink, adDescription, adDescriptionLink, carrouselDescription, carrouselTitle, checkingAccountActivityDescription, checkingAccountActivityIcon, checkingAccountActivityLink, disclaimerLinkOne, disclaimerLinkTwo, disclaimerText, feedbackMenu, homeMenu, myMoneyMapDescription, myMoneyMapIcon, myMoneyMapLink, onlineBankingDescription, onlineBankingIcon, onlineBankingLink, onlineBankingMenu, onlineBankingMyMoneyMapDescription, onlineBankingMyMoneyMapIcon, onlineBankingSubtitle, onlineBankingTitle, onlineBankingTransferFundsDescription, onlineBankingTransferFundsIcon, onlineStatementsDescription, onlineStatementsIcon, onlineStatementsLink, payBillsDescription, payBillsIcon, payBillsLink, searchResultsOne, searchResultsTitle, searchResultsTwo, searchTerm, transferFundsDescription, transferFundsIcon, transferFundsLink } from '../test/selectors/homePageSelectors'
import { accountActivityDescriptionCopy, accountActivityLinkCopy, accountSummaryDescriptionCopy, accountSummaryLinkCopy, adDescriptionCopy, adDescriptionLinkCopy, carrouselDescriptionCopy, carrouselTitleCopy, checkingAccountActivityTitleCopy, checkingAccountActivityTitleDescriptionCopy, disclaimerLinkOneCopy, disclaimerLinkTwoCopy, disclaimerTextCopy, disclaimerTextCopyrightCopy, myMoneyMapLinkCopy, myMoneyMapTitleCopy, myMoneyMapTitleDescriptionCopy, onlineBankingMyMoneyMapTitleDescriptionCopy, onlineBankingSubtitleCopy, onlineBankingTitleCopy, onlineBankingTitleDescriptionCopy, onlineStatementsDescriptionCopy, onlineStatementsLinkCopy, payBillsDescriptionCopy, payBillsLinkCopy, searchResultsOneCopy, searchResultsTitleCopy, searchResultsTwoCopy, transferFundsDescriptionCopy, transferFundsLinkCopy, transferFundsTitleCopy, transferFundsTitleDescriptionCopy } from '../test/copy/homePageCopy'

export class HomePageCopy {
    readonly page: Page
    readonly homeMenu: Locator
    readonly onlineBankingMenu: Locator
    readonly feedbackMenu: Locator
    readonly searchTerm: Locator
    readonly onlineBankingIcon: Locator
    readonly checkingAccountActivityIcon: Locator
    readonly transferFundsIcon: Locator
    readonly myMoneyMapIcon: Locator
    readonly onlineBankingLink: Locator
    readonly checkingAccountActivityLink: Locator
    readonly transferFundsLink: Locator
    readonly myMoneyMapLink: Locator
    readonly onlineBankingDescription: Locator
    readonly checkingAccountActivityDescription: Locator
    readonly transferFundsDescription: Locator
    readonly myMoneyMapDescription: Locator
    readonly carrouselTitle: Locator
    readonly carrouselDescription: Locator
    readonly onlineBankingTitle: Locator
    readonly onlineBankingSubtitle: Locator
    readonly adDescription: Locator
    readonly adDescriptionLink: Locator
    readonly accountSummaryIcon: Locator
    readonly accountSummaryLink: Locator
    readonly accountSummaryDescription: Locator
    readonly accountActivityIcon: Locator
    readonly accountActivityLink: Locator
    readonly accountActivityDescription: Locator
    readonly onlineBankingTransferFundsIcon: Locator
    readonly onlineBankingTransferFundsDescription: Locator
    readonly payBillsIcon: Locator
    readonly payBillsLink: Locator
    readonly payBillsDescription: Locator
    readonly onlineBankingMyMoneyMapIcon: Locator
    readonly onlineBankingMyMoneyMapDescription: Locator
    readonly onlineStatementsIcon: Locator
    readonly onlineStatementsLink: Locator
    readonly onlineStatementsDescription: Locator
    readonly disclaimerText: Locator
    readonly disclaimerLinkOne: Locator
    readonly disclaimerLinkTwo: Locator
    readonly searchResultsTitle: Locator
    readonly searchResultsTitleCopy: Locator
    readonly searchResultsOne: Locator
    readonly searchResultsTwo: Locator

    constructor(page: Page) {
        this.page = page
        this.homeMenu = page.locator(homeMenu)
        this.onlineBankingMenu = page.locator(onlineBankingMenu)
        this.feedbackMenu = page.locator(feedbackMenu)
        this.searchTerm = page.locator(searchTerm)
        this.onlineBankingIcon = page.locator(onlineBankingIcon)
        this.checkingAccountActivityIcon = page.locator(checkingAccountActivityIcon)
        this.transferFundsIcon = page.locator(transferFundsIcon)
        this.myMoneyMapIcon = page.locator(myMoneyMapIcon)
        this.onlineBankingLink = page.locator(onlineBankingLink)
        this.checkingAccountActivityLink = page.locator(checkingAccountActivityLink)
        this.transferFundsLink = page.locator(transferFundsLink)
        this.myMoneyMapLink = page.locator(myMoneyMapLink)
        this.onlineBankingDescription = page.locator(onlineBankingDescription)
        this.checkingAccountActivityDescription = page.locator(checkingAccountActivityDescription)
        this.transferFundsDescription = page.locator(transferFundsDescription)
        this.myMoneyMapDescription = page.locator(myMoneyMapDescription)
        this.carrouselTitle = page.locator(carrouselTitle)
        this.carrouselDescription = page.locator(carrouselDescription)
        this.onlineBankingTitle = page.locator(onlineBankingTitle)
        this.onlineBankingSubtitle = page.locator(onlineBankingSubtitle)
        this.adDescription = page.locator(adDescription)
        this.adDescriptionLink = page.locator(adDescriptionLink)
        this.accountSummaryIcon = page.locator(accountSummaryIcon)
        this.accountSummaryLink = page.locator(accountSummaryLink)
        this.accountSummaryDescription = page.locator(accountSummaryDescription)
        this.accountActivityIcon = page.locator(accountActivityIcon)
        this.accountActivityLink = page.locator(accountActivityLink)
        this.accountActivityDescription = page.locator(accountActivityDescription)
        this.onlineBankingTransferFundsIcon = page.locator(onlineBankingTransferFundsIcon)
        this.onlineBankingTransferFundsDescription = page.locator(onlineBankingTransferFundsDescription)
        this.payBillsIcon = page.locator(payBillsIcon)
        this.payBillsLink = page.locator(payBillsLink)
        this.payBillsDescription = page.locator(payBillsDescription)
        this.onlineBankingMyMoneyMapIcon = page.locator(onlineBankingMyMoneyMapIcon)
        this.onlineBankingMyMoneyMapDescription = page.locator(onlineBankingMyMoneyMapDescription)
        this.onlineStatementsIcon = page.locator(onlineStatementsIcon)
        this.onlineStatementsLink = page.locator(onlineStatementsLink)
        this.onlineStatementsDescription = page.locator(onlineStatementsDescription)
        this.disclaimerText = page.locator(disclaimerText)
        this.disclaimerLinkOne = page.locator(disclaimerLinkOne)
        this.disclaimerLinkTwo = page.locator(disclaimerLinkTwo)
        this.searchResultsTitle = page.locator(searchResultsTitle)
        this.searchResultsTitleCopy = page.locator(searchResultsTitleCopy)
        this.searchResultsOne = page.locator(searchResultsOne)
        this.searchResultsTwo = page.locator(searchResultsTwo)
    }

    async verifyCarrouselCopy() {
        await expect(this.carrouselTitle).toContainText(carrouselTitleCopy)
        await expect(this.carrouselDescription).toContainText(carrouselDescriptionCopy)
    }

    async verifyHomeTabCopy() {
        try {
            await expect(this.page.url()).toBe('http://zero.webappsecurity.com/index.html')
            await expect(this.homeMenu).toHaveClass('active')
            await expect(this.onlineBankingMenu).toBeVisible()
            await expect(this.feedbackMenu).toBeVisible()
            await expect(this.searchTerm).toHaveAttribute('placeholder', 'Search')
            await expect(this.onlineBankingIcon).toBeVisible()
            await expect(this.checkingAccountActivityIcon).toBeVisible()
            await expect(this.transferFundsIcon).toBeVisible()
            await expect(this.myMoneyMapIcon).toBeVisible()
            await expect(this.onlineBankingLink).toContainText(onlineBankingTitleCopy)
            await expect(this.checkingAccountActivityLink).toContainText(checkingAccountActivityTitleCopy)
            await expect(this.transferFundsLink).toContainText(transferFundsTitleCopy)
            await expect(this.myMoneyMapLink).toContainText(myMoneyMapTitleCopy)
            await expect(this.onlineBankingDescription).toContainText(onlineBankingTitleDescriptionCopy)
            await expect(this.checkingAccountActivityDescription).toContainText(checkingAccountActivityTitleDescriptionCopy)
            await expect(this.transferFundsDescription).toContainText(transferFundsTitleDescriptionCopy)
            await expect(this.myMoneyMapDescription).toContainText(myMoneyMapTitleDescriptionCopy)
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async verifyOnlineBankingTabCopy() {
        try {
            await expect(this.onlineBankingMenu).toHaveClass('active')
            await expect(this.page.url()).toBe('http://zero.webappsecurity.com/online-banking.html')
            await expect(this.onlineBankingTitle).toContainText(onlineBankingTitleCopy)
            await expect(this.onlineBankingSubtitle).toContainText(onlineBankingSubtitleCopy)
            await expect(this.adDescription).toContainText(adDescriptionCopy)
            await expect(this.adDescriptionLink).toHaveAttribute('href', '/login.html')
            await expect(this.adDescriptionLink).toContainText(adDescriptionLinkCopy)
            await expect(this.accountSummaryLink).toContainText(accountSummaryLinkCopy)
            await expect(this.accountSummaryDescription).toContainText(accountSummaryDescriptionCopy)
            await expect(this.accountActivityLink).toContainText(accountActivityLinkCopy)
            await expect(this.accountActivityDescription).toContainText(accountActivityDescriptionCopy)
            
            await expect(this.transferFundsLink).toContainText(transferFundsLinkCopy)
            await expect(this.onlineBankingTransferFundsDescription).toContainText(transferFundsDescriptionCopy)
            await expect(this.payBillsLink).toContainText(payBillsLinkCopy)
            await expect(this.payBillsDescription).toContainText(payBillsDescriptionCopy)
            
            await expect(this.myMoneyMapLink).toContainText(myMoneyMapLinkCopy)
            await expect(this.onlineBankingMyMoneyMapDescription).toContainText(onlineBankingMyMoneyMapTitleDescriptionCopy)
            await expect(this.onlineStatementsLink).toContainText(onlineStatementsLinkCopy)
            await expect(this.onlineStatementsDescription).toContainText(onlineStatementsDescriptionCopy)
            await expect(this.accountSummaryIcon).toBeVisible()
            await expect(this.accountActivityIcon).toBeVisible()
            await expect(this.onlineBankingTransferFundsIcon).toBeVisible()
            await expect(this.payBillsIcon).toBeVisible()
            await expect(this.onlineBankingMyMoneyMapIcon).toBeVisible()
            await expect(this.onlineStatementsIcon).toBeVisible()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async verifySearchCopy() {
        await expect(this.searchResultsTitle).toContainText(searchResultsTitleCopy)
        await expect(this.searchResultsOne).toContainText(searchResultsOneCopy)
        await expect(this.searchResultsOne).toHaveAttribute('href', '/index.html')
        await expect(this.searchResultsTwo).toContainText(searchResultsTwoCopy)
        await expect(this.searchResultsTwo).toHaveAttribute('href', '/online-banking.html')
    }

    async verifyFooterCopy() {
        try {
            await expect(this.disclaimerText).toContainText(disclaimerTextCopy)
            await expect(this.disclaimerText).toContainText(disclaimerTextCopyrightCopy)
            await expect(this.disclaimerLinkOne).toContainText(disclaimerLinkOneCopy)
            await expect(this.disclaimerLinkTwo).toContainText(disclaimerLinkTwoCopy)
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }
}