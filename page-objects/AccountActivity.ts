import { expect, Page, Locator } from '@playwright/test'
import { st_accountId, ft_fromAmount, ft_fromDate, ft_toAmount, ft_toDate, ft_type, findButton, findTransactions, ftDescription, showTransactions, filtered_transactions_for_account, noResults } from '../test/selectors/accountActivityPageSelectors'

export class AccountActivity {
    readonly page: Page
    readonly st_accountId: Locator
    readonly showTransactions: Locator
    readonly findTransactions: Locator
    readonly ftDescription: Locator
    readonly ft_fromDate: Locator
    readonly ft_toDate: Locator
    readonly ft_fromAmount: Locator
    readonly ft_toAmount: Locator
    readonly ft_type: Locator
    readonly findButton: Locator
    readonly filtered_transactions_for_account: Locator
    readonly noResults: Locator

    constructor(page: Page) {
        this.page = page
        this.st_accountId = page.locator(st_accountId)
        this.showTransactions = page.locator(showTransactions)
        this.findTransactions = page.locator(findTransactions)
        this.ftDescription = page.locator(ftDescription)
        this.ft_fromDate = page.locator(ft_fromDate)
        this.ft_toDate = page.locator(ft_toDate)
        this.ft_fromAmount = page.locator(ft_fromAmount)
        this.ft_toAmount = page.locator(ft_toAmount)
        this.ft_type = page.locator(ft_type)
        this.findButton = page.locator(findButton)
        this.filtered_transactions_for_account = page.locator(filtered_transactions_for_account)
        this.noResults = page.locator(noResults)
    }

    async proceedToFindTransactionsTab() {
        await this.findTransactions.click()
    }

    async proceedToShowTransactionsTab() {
        await this.showTransactions.click()
    }

    async fulfillForm(formData: {description: string, fromDate: string, toDate: string, fromAmount: string, toAmount: string, type: string}) {
        try {
            await this.ftDescription.fill(formData.description)
            await this.ft_fromDate.fill(formData.fromDate)
            await this.ft_toDate.fill(formData.toDate)
            await this.ft_fromAmount.fill(formData.fromAmount)
            await this.ft_toAmount.fill(formData.toAmount)
            await this.ft_type.selectOption(formData.type)
            await this.findButton.click()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async selectTypeOfAccount(value: string = '1') {
        try {
            await this.st_accountId.selectOption(value)
            await this.expectedNumberOfRows(parseInt(value))
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async expectedNumberOfRows(number: number) {
        try {
            switch(number) {
                case 0:
                    await expect(this.noResults).toBeVisible()
                    break
                case 1:
                    await expect(this.filtered_transactions_for_account).toHaveCount(3)
                    break
                case 2:
                    await expect(this.filtered_transactions_for_account).toHaveCount(3)
                    break
                case 3:
                    await expect(this.filtered_transactions_for_account).toHaveCount(3)
                    break
                case 4:
                    await expect(this.filtered_transactions_for_account).toHaveCount(2)
                    break
                case 5:
                    await expect(this.filtered_transactions_for_account).toHaveCount(0)
                    break
                case 6:
                    await expect(this.filtered_transactions_for_account).toHaveCount(0)
                    break
                default:
                    throw new Error('Unexpected Type of Account')
            }
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }
}