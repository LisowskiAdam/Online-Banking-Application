import { expect, Page, Locator } from '@playwright/test'
import { amount, amountConfirmPage, cancelButton, continueButton, description, descriptionAdditionalInfo, fromAccount, fromAccountConfirmPage, makeAnotherTransferButtonLink, submitButton, successMessage, toAccount, toAccountConfirmPage, transferFundsConfirmPageTitle, transferFundsDescription, transferFundsPageTitle } from '../test/selectors/transferfundsPageSelectors'
import { descriptionAdditionalInfoCopy, makeAnotherTransferButtonLinkCopy, successMessageCopy, transferFundsConfirmPageTitleCopy, transferFundsDescriptionCopy, transferFundsPageTitleCopy, transferFundsVerifyPageTitleCopy } from '../test/copy/transferFundsPageCopy'

export class TransferFundsCopy {
    readonly page: Page
    readonly transferFundsPageTitle: Locator
    readonly transferFundsPageTitleCopy: Locator
    readonly transferFundsVerifyPageTitleCopy: Locator
    readonly fromAccount: Locator
    readonly toAccount: Locator
    readonly amount: Locator
    readonly description: Locator
    readonly continueButton: Locator
    readonly cancelButton: Locator
    readonly submitButton: Locator
    readonly successMessage: Locator
    readonly transferFundsConfirmPageTitle: Locator
    readonly makeAnotherTransferButtonLink: Locator
    readonly fromAccountConfirmPage: Locator
    readonly toAccountConfirmPage: Locator
    readonly amountConfirmPage: Locator
    readonly transferFundsDescription: Locator
    readonly descriptionAdditionalInfo: Locator

    constructor(page: Page) {
        this.page = page
        this.transferFundsPageTitle = page.locator(transferFundsPageTitle)
        this.fromAccount = page.locator(fromAccount)
        this.toAccount = page.locator(toAccount)
        this.amount = page.locator(amount)
        this.description = page.locator(description)
        this.continueButton = page.locator(continueButton)
        this.cancelButton = page.locator(cancelButton)
        this.submitButton = page.locator(submitButton)
        this.successMessage = page.locator(successMessage)
        this.transferFundsConfirmPageTitle = page.locator(transferFundsConfirmPageTitle)
        this.makeAnotherTransferButtonLink = page.locator(makeAnotherTransferButtonLink)
        this.fromAccountConfirmPage = page.locator(fromAccountConfirmPage)
        this.toAccountConfirmPage = page.locator(toAccountConfirmPage)
        this.amountConfirmPage = page.locator(amountConfirmPage)
        this.transferFundsDescription = page.locator(transferFundsDescription)
        this.descriptionAdditionalInfo = page.locator(descriptionAdditionalInfo)
    }

    async verifyTransferFundsFirstPageCopy() {
        expect(this.page.url()).toBe('http://zero.webappsecurity.com/bank/transfer-funds.html')
        await expect(this.transferFundsPageTitle).toContainText(transferFundsPageTitleCopy)
        await expect(this.fromAccount).toContainText('Savings(Avail. balance = $ 1000)')
        await expect(this.toAccount).toContainText('Savings(Avail. balance = $ 1000)')
        await expect(this.amount).toContainText('')
        await expect(this.description).toContainText('')
        await expect(this.descriptionAdditionalInfo).toContainText(descriptionAdditionalInfoCopy)
        await expect(this.continueButton).toBeVisible()
    }

    async verifyDataBeforeTransferingMoney(fromAccount: string, toAccount: string, amount: string) {
        expect(this.page.url()).toBe('http://zero.webappsecurity.com/bank/transfer-funds-verify.html')
        await expect(this.transferFundsPageTitle).toContainText(transferFundsVerifyPageTitleCopy)
        await expect(this.transferFundsDescription).toContainText(transferFundsDescriptionCopy)
        await expect(this.amount).toHaveValue(amount)
        switch(fromAccount) {
            case '1':
                await expect(this.fromAccount).toHaveValue('Savigns')
                break
            case '2':
                await expect(this.fromAccount).toHaveValue('Checking')
                break
            case '3':
                await expect(this.fromAccount).toHaveValue('Savings')
                break
            case '4':
                await expect(this.fromAccount).toHaveValue('Loan')
                break
            case '5':
                await expect(this.fromAccount).toHaveValue('Credit Card')
                break
            case '6':
                await expect(this.fromAccount).toHaveValue('Brokerage')
                break
            default:
                throw new Error('Provided account was not found')
        }
        switch(toAccount) {
            case '1':
                await expect(this.toAccount).toHaveValue('Savigns')
                break
            case '2':
                await expect(this.toAccount).toHaveValue('Checking')
                break
            case '3':
                await expect(this.toAccount).toHaveValue('Savings')
                break
            case '4':
                await expect(this.toAccount).toHaveValue('Loan')
                break
            case '5':
                await expect(this.toAccount).toHaveValue('Credit Card')
                break
            case '6':
                await expect(this.toAccount).toHaveValue('Brokerage')
                break
            default:
                throw new Error('Provided account was not found')
        }
        await expect(this.cancelButton).toBeVisible()
        await expect(this.submitButton).toBeVisible()
    }

    async verifyDescriptionOnFirstPageCopy() {
        await expect(this.descriptionAdditionalInfo).toContainText(descriptionAdditionalInfoCopy)
    }

    async checkIfTransactionWasSuccessfullySent(formData: { fromAccount: string, toAccount: string, amount: string}) {
        await expect(this.page.url()).toBe('http://zero.webappsecurity.com/bank/transfer-funds-confirm.html')
        await expect(this.transferFundsConfirmPageTitle).toContainText(transferFundsConfirmPageTitleCopy)
        await expect(this.successMessage).toBeVisible()
        await expect(this.successMessage).toContainText(successMessageCopy)
        await expect(this.amountConfirmPage).toContainText(formData.amount)
        switch(formData.fromAccount) {
            case '1':
                await expect(this.fromAccountConfirmPage).toContainText('Savigns')
                break
            case '2':
                await expect(this.fromAccountConfirmPage).toContainText('Checking')
                break
            case '3':
                await expect(this.fromAccountConfirmPage).toContainText('Savings')
                break
            case '4':
                await expect(this.fromAccountConfirmPage).toContainText('Loan')
                break
            case '5':
                await expect(this.fromAccountConfirmPage).toContainText('Credit Card')
                break
            case '6':
                await expect(this.fromAccountConfirmPage).toContainText('Brokerage')
                break
            default:
                throw new Error('Provided account was not found')
        }
        switch(formData.toAccount) {
            case '1':
                await expect(this.toAccountConfirmPage).toContainText('Savigns')
                break
            case '2':
                await expect(this.toAccountConfirmPage).toContainText('Checking')
                break
            case '3':
                await expect(this.toAccountConfirmPage).toContainText('Savings')
                break
            case '4':
                await expect(this.toAccountConfirmPage).toContainText('Loan')
                break
            case '5':
                await expect(this.toAccountConfirmPage).toContainText('Credit Card')
                break
            case '6':
                await expect(this.toAccountConfirmPage).toContainText('Brokerage')
                break
            default:
                throw new Error('Provided account was not found')
        }
        await expect(this.makeAnotherTransferButtonLink).toContainText(makeAnotherTransferButtonLinkCopy)
    }
    
    async veryifyPageRedirect() {
        await expect(this.transferFundsPageTitle).toContainText(transferFundsPageTitleCopy)
        expect(this.page.url()).toBe('http://zero.webappsecurity.com/bank/transfer-funds.html')
    }
}