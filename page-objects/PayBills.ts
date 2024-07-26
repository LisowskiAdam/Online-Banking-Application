import { expect, Page, Locator } from '@playwright/test'
import { addNewPayeeButton, addNewPayeeForm, addNewPayeePageTitle, addNewPayeeTab, calculateCostsButton, dollarsRadioButton, newPayeeAccount, newPayeeAddress, newPayeeDetails, newPayeeName, payBillsSuccessMessage, payButton, paySavedPayeeForm, paySavedPayeePageTitle, paySavedPayeeTab, pcAmount, pcConversionAmount, pcCurrency, purchaseButton, purchaseForeignCurrencyForm, purchaseForeignCurrencyPageTitle, purchaseForeignCurrencySuccessMessage, purchaseForeignCurrencyTab, selectedCurrencyRadioButton, sellRate, spAccount, spAmount, spDate, spDescription, spGetPayeeDetailsIcon, spPayee, spPayeeDetails } from '../test/selectors/payBillsPageSelectors'
import { PayBillsCopy } from './PayBillsCopy'

export class PayBills {
    readonly page: Page
    readonly paySavedPayeeForm: Locator
    readonly addNewPayeeForm: Locator
    readonly purchaseForeignCurrencyForm: Locator
    readonly paySavedPayeeTab: Locator
    readonly addNewPayeeTab: Locator
    readonly purchaseForeignCurrencyTab: Locator
    readonly spPayee: Locator
    readonly spPayeeDetails: Locator
    readonly spGetPayeeDetailsIcon: Locator
    readonly spAccount: Locator
    readonly spAmount: Locator
    readonly spDate: Locator
    readonly spDescription: Locator
    readonly payButton: Locator
    readonly paySavedPayeePageTitle: Locator
    readonly addNewPayeePageTitle: Locator
    readonly purchaseForeignCurrencyPageTitle: Locator
    readonly pcCurrency: Locator
    readonly sellRate: Locator
    readonly pcAmount: Locator
    readonly dollarsRadioButton: Locator
    readonly selectedCurrencyRadioButton: Locator
    readonly calculateCostsButton: Locator
    readonly pcConversionAmount: Locator
    readonly purchaseButton: Locator
    readonly payBillsSuccessMessage: Locator
    readonly purchaseForeignCurrencySuccessMessage: Locator
    readonly newPayeeName: Locator
    readonly newPayeeAddress: Locator
    readonly newPayeeAccount: Locator
    readonly newPayeeDetails: Locator
    readonly addNewPayeeButton: Locator

    constructor(page: Page) {
        this.page = page
        this.paySavedPayeeForm = page.locator(paySavedPayeeForm)
        this.addNewPayeeForm = page.locator(addNewPayeeForm)
        this.purchaseForeignCurrencyForm = page.locator(purchaseForeignCurrencyForm)
        this.paySavedPayeeTab = page.locator(paySavedPayeeTab)
        this.addNewPayeeTab = page.locator(addNewPayeeTab)
        this.purchaseForeignCurrencyTab = page.locator(purchaseForeignCurrencyTab)
        this.spPayee = page.locator(spPayee)
        this.spPayeeDetails = page.locator(spPayeeDetails)
        this.spGetPayeeDetailsIcon = page.locator(spGetPayeeDetailsIcon)
        this.spAccount = page.locator(spAccount)
        this.spAmount = page.locator(spAmount)
        this.spDate = page.locator(spDate)
        this.spDescription = page.locator(spDescription)
        this.payButton = page.locator(payButton)
        this.paySavedPayeePageTitle = page.locator(paySavedPayeePageTitle)
        this.addNewPayeePageTitle = page.locator(addNewPayeePageTitle)
        this.purchaseForeignCurrencyPageTitle = page.locator(purchaseForeignCurrencyPageTitle)
        this.pcCurrency = page.locator(pcCurrency)
        this.sellRate = page.locator(sellRate)
        this.pcAmount = page.locator(pcAmount)
        this.dollarsRadioButton = page.locator(dollarsRadioButton)
        this.selectedCurrencyRadioButton = page.locator(selectedCurrencyRadioButton)
        this.calculateCostsButton = page.locator(calculateCostsButton)
        this.pcConversionAmount = page.locator(pcConversionAmount)
        this.purchaseButton = page.locator(purchaseButton)
        this.payBillsSuccessMessage = page.locator(payBillsSuccessMessage)
        this.purchaseForeignCurrencySuccessMessage = page.locator(purchaseForeignCurrencySuccessMessage)
        this.newPayeeName = page.locator(newPayeeName)
        this.newPayeeAddress = page.locator(newPayeeAddress)
        this.newPayeeAccount = page.locator(newPayeeAccount)
        this.newPayeeDetails = page.locator(newPayeeDetails)
        this.addNewPayeeButton = page.locator(addNewPayeeButton)
    }

    async proceedToPaySavedPayeeTab() {
        await this.paySavedPayeeTab.click()
    }

    async proceedToAddNewPayeeTab() {
        await this.addNewPayeeTab.click()
    }

    async proceedToPurchaseForeignCurrencyTab() {
        await this.purchaseForeignCurrencyTab.click()
    }

    async selectTypeOfAccount(option: string = 'Sprint') {
        try {
            switch(option) {
                case 'sprint':
                    await this.spPayee.selectOption(option)
                    await this.verifyAccountNumber(option)
                    break
                case 'Bank of America':
                    await this.spPayee.selectOption(option)
                    await this.verifyAccountNumber(option)
                    break
                case 'Apple':
                    await this.spPayee.selectOption(option)
                    await this.verifyAccountNumber(option)
                    break
                case 'Wells Fargo':
                    await this.spPayee.selectOption(option)
                    await this.verifyAccountNumber(option)
                    break
                default:
                    throw new Error('Provided Payee account was not found')
            }
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async verifyAccountNumber(selectedAccount: string = 'sprint') {
        let payBillsCopy: PayBillsCopy
        payBillsCopy = new PayBillsCopy(this.page)
        
        try {
            await this.spGetPayeeDetailsIcon.click()
            await payBillsCopy.verifyAccountNumberCopy(selectedAccount)
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async fulfillPaySavedPayeeForm(account: string = 'Savings', formData: { amount: string, date: string, description: string }) {
        try {
            switch(account) {
                case 'Savings':
                    await this.spAccount.selectOption(account)
                    break
                case 'Checking':
                    await this.spAccount.selectOption(account)
                    break
                case 'Loan':
                    await this.spAccount.selectOption(account)
                    break
                case 'Credit Card':
                    await this.spAccount.selectOption(account)
                    break
                case 'Brokerage':
                    await this.spAccount.selectOption(account)
                    break
                default:
                    throw new Error('Could not select provided Payee account')
            }
            await this.spAmount.fill(formData.amount)
            await this.spDate.fill(formData.date)
            await this.spDescription.fill(formData.description)
            await this.payButton.click()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async fulfillAddNewPayeeForm(payeeData: { payeeName: string; payeeAddress: string; payeeAccount: string; payeeDetails: string }) {
        try {
            await this.newPayeeName.fill(payeeData.payeeName)
            await this.newPayeeAddress.fill(payeeData.payeeAddress)
            await this.newPayeeAccount.fill(payeeData.payeeAccount)
            await this.newPayeeDetails.fill(payeeData.payeeDetails)
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async verifyThatNewPayeeWasSuccessfullyAdded(payeeData: { payeeName: string; payeeAddress: string; payeeAccount: string; payeeDetails: string }) {
        let payBillsCopy: PayBillsCopy
        payBillsCopy = new PayBillsCopy(this.page)

        await this.addNewPayeeButton.click()
        await payBillsCopy.newPayeeSuccessfullyAdded(payeeData.payeeName)
    }

    async fulfillPurchaseForeignCurrencyForm(currency: string = 'AUD') {
        let payBillsCopy: PayBillsCopy
        payBillsCopy = new PayBillsCopy(this.page)
        
        try {
            await this.selectCurrency(currency)
            await payBillsCopy.verifyCurrencyConversion(currency)
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async provide(amountOfMoney: string) {
        try {
            await this.pcAmount.fill(amountOfMoney)
            await this.pressSelectedCurrencyRadioButton()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async pressSelectedCurrencyRadioButton() {
        try {
            await expect(this.selectedCurrencyRadioButton).toBeVisible()
            try {
                await this.selectedCurrencyRadioButton.click()
            } catch(err) {
                console.log(`An error occurred: ${err.message}`);
            }
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async pressUSDollarRadioButton() {
        try {
            await expect(this.dollarsRadioButton).toBeVisible()
            try {
                await this.dollarsRadioButton.click()
            } catch(err) {
                console.log(`An error occurred: ${err.message}`);
            }
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async purchaseCurrency() {
        let payBillsCopy: PayBillsCopy
        payBillsCopy = new PayBillsCopy(this.page)

        const amountOfMoney = '5000'
        
        try {
            await this.provide(amountOfMoney)
            await this.pressUSDollarRadioButton()
            await this.purchaseButton.click()
            await payBillsCopy.successfulyPurchasedForeignCurrency()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async selectCurrency(currency: string) { // change function name or even remove it
        try {
            await this.pcCurrency.selectOption(currency)
            await this.calculateCurrency()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async calculateCurrency() {
        try {
            await this.calculateCostsButton.click()
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }
}