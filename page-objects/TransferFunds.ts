import { expect, Page, Locator } from '@playwright/test'
import { amount, amountConfirmPage, cancelButton, continueButton, description, descriptionAdditionalInfo, fromAccount, fromAccountConfirmPage, makeAnotherTransferButtonLink, submitButton, successMessage, toAccount, toAccountConfirmPage, transferFundsConfirmPageTitle, transferFundsDescription, transferFundsPageTitle } from '../test/selectors/transferfundsPageSelectors'
import { TransferFundsCopy } from './TransferFundsCopy'

export class TransferFunds {
    readonly page: Page
    readonly transferFundsPageTitle: Locator
    readonly fromAccount: Locator
    readonly toAccount: Locator
    readonly amount: Locator
    readonly description: Locator
    readonly continueButton: Locator
    readonly cancelButton: Locator
    readonly submitButton: Locator
    readonly successMessage: Locator
    readonly successMessageCopy: Locator
    readonly transferFundsConfirmPageTitle: Locator
    readonly transferFundsConfirmPageTitleCopy: Locator
    readonly makeAnotherTransferButtonLink: Locator
    readonly makeAnotherTransferButtonLinkCopy: Locator
    readonly fromAccountConfirmPage: Locator
    readonly toAccountConfirmPage: Locator
    readonly amountConfirmPage: Locator
    readonly transferFundsDescription: Locator
    readonly transferFundsDescriptionCopy: Locator
    readonly descriptionAdditionalInfo: Locator
    readonly descriptionAdditionalInfoCopy: Locator

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

    async fulfillForm(formData: { fromAccount: string, toAccount: string, amount: string, description: string}) {
        let transferFundsCopy: TransferFundsCopy
        transferFundsCopy = new TransferFundsCopy(this.page)

        await this.fromAccount.selectOption(formData.fromAccount)
        await this.toAccount.selectOption(formData.toAccount)
        await this.amount.fill(formData.amount)
        await this.description.fill(formData.description)
        transferFundsCopy.verifyDescriptionOnFirstPageCopy()
    }

    async pressContinueButton() {
        await this.continueButton.click()
    }

    async cancelTransferingFunds() {
        let transferFundsCopy: TransferFundsCopy
        transferFundsCopy = new TransferFundsCopy(this.page)

        try {
            await this.cancelButton.click()
            await transferFundsCopy.verifyTransferFundsFirstPageCopy()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async confirmMoneyTransfer(formData: { fromAccount: string, toAccount: string, amount: string, description: string}) {
        let transferFundsCopy: TransferFundsCopy
        transferFundsCopy = new TransferFundsCopy(this.page)

        try {
            await this.submitButton.click()
            await transferFundsCopy.checkIfTransactionWasSuccessfullySent(formData)
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async pressMakeAnotherTransferButtonLink() {
        let transferFundsCopy: TransferFundsCopy
        transferFundsCopy = new TransferFundsCopy(this.page)

        try {
            await this.makeAnotherTransferButtonLink.click()
            await transferFundsCopy.veryifyPageRedirect()
            await transferFundsCopy.verifyTransferFundsFirstPageCopy()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }
}