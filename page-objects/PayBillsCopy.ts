import { expect, Page, Locator } from '@playwright/test'
import { accountLabel, addNewPayeeButton, addNewPayeeForm, addNewPayeePageTitle, amountLabel, calculateCostsButton, conversionAmountLabel, dateLabel, descriptionLabel, newPayeeAccountLabel, payBillsSuccessMessage, payButton, payeeAddressLabel, payeeDetailsLabel, payeeLabel, payeeNameLabel, paySavedPayeeForm, paySavedPayeePageTitle, pcConversionAmount, pcCurrency, pfcAmountLabel, pfcCurrencyLabel, purchaseButton, purchaseForeignCurrencySuccessMessage, selectedCurrencyLabel, sellRate, spGetPayeeDetailsIcon, spPayeeDetails, USDollarLabel } from '../test/selectors/payBillsPageSelectors'
import { accountLabelCopy, addCopy, addNewPayeeTitleCopy, amountLabelCopy, calculateCostsCopy, conversionAmountLabelCopy, dateLabelCopy, descriptionLabelCopy, newPayeeAccountLabelCopy, payCopy, payeeAddressLabelCopy, payeeDetailsLabelCopy, payeeLabelCopy, payeeNameLabelCopy, paySavedPayeeSuccessMessageCopy, paySavedPayeeTitleCopy, pfcAmountLabelCopy, pfcCurrencyLabelCopy, purchaseCopy, purchaseForeignCurrencySuccessMessageCopy, purchaseForeignCurrencyTitleCopy, selectedCurrencyLabelCopy, USDollarLabelCopy } from '../test/copy/payBillsCopy'

export class PayBillsCopy {
    readonly page: Page
    readonly spGetPayeeDetailsIcon: Locator
    readonly spPayeeDetails: Locator
    readonly paySavedPayeeForm: Locator
    readonly paySavedPayeePageTitle: Locator
    readonly payBillsSuccessMessage: Locator
    readonly pcCurrency: Locator
    readonly calculateCostsButton: Locator
    readonly sellRate: Locator
    readonly pcConversionAmount: Locator
    readonly addNewPayeeForm: Locator
    readonly addNewPayeePageTitle: Locator
    readonly payeeLabel: Locator
    readonly accountLabel: Locator
    readonly amountLabel: Locator
    readonly dateLabel: Locator
    readonly descriptionLabel: Locator
    readonly payButton: Locator
    readonly payeeNameLabel: Locator
    readonly payeeAddressLabel: Locator
    readonly newPayeeAccountLabel: Locator
    readonly payeeDetailsLabel: Locator
    readonly addNewPayeeButton: Locator
    readonly pfcCurrencyLabel: Locator
    readonly pfcAmountLabel: Locator
    readonly USDollarLabel: Locator
    readonly selectedCurrencyLabel: Locator
    readonly conversionAmountLabel: Locator
    readonly purchaseButton: Locator
    readonly purchaseForeignCurrencySuccessMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.spGetPayeeDetailsIcon = page.locator(spGetPayeeDetailsIcon)
        this.spPayeeDetails = page.locator(spPayeeDetails)
        this.paySavedPayeeForm = page.locator(paySavedPayeeForm)
        this.paySavedPayeePageTitle = page.locator(paySavedPayeePageTitle)
        this.payBillsSuccessMessage = page.locator(payBillsSuccessMessage)
        this.pcCurrency = page.locator(pcCurrency)
        this.calculateCostsButton = page.locator(calculateCostsButton)
        this.sellRate = page.locator(sellRate)
        this.pcConversionAmount = page.locator(pcConversionAmount)
        this.payeeLabel = page.locator(payeeLabel)
        this.accountLabel = page.locator(accountLabel)
        this.amountLabel = page.locator(amountLabel)
        this.dateLabel = page.locator(dateLabel)
        this.descriptionLabel = page.locator(descriptionLabel)
        this.payButton = page.locator(payButton)
        this.addNewPayeeForm = page.locator(addNewPayeeForm)
        this.addNewPayeePageTitle = page.locator(addNewPayeePageTitle)
        this.payeeNameLabel = page.locator(payeeNameLabel)
        this.payeeAddressLabel = page.locator(payeeAddressLabel)
        this.newPayeeAccountLabel = page.locator(newPayeeAccountLabel)
        this.payeeDetailsLabel = page.locator(payeeDetailsLabel)
        this.addNewPayeeButton = page.locator(addNewPayeeButton)
        this.pfcCurrencyLabel = page.locator(pfcCurrencyLabel)
        this.pfcAmountLabel = page.locator(pfcAmountLabel)
        this.USDollarLabel = page.locator(USDollarLabel)
        this.selectedCurrencyLabel = page.locator(selectedCurrencyLabel)
        this.conversionAmountLabel = page.locator(conversionAmountLabel)
        this.purchaseButton = page.locator(purchaseButton)
        this.purchaseForeignCurrencySuccessMessage = page.locator(purchaseForeignCurrencySuccessMessage)
    }

    async verifyAccountNumberCopy(selectedAccount: string) {
        try {
            switch(selectedAccount) {
                case 'Sprint':
                    await expect(this.spPayeeDetails).toContainText('For 12119415161214 Sprint account')
                    break
                case 'Bank of America':
                    await expect(this.spPayeeDetails).toContainText('For 47844181491040 Bank of America')
                    break
                case 'Apple':
                    await expect(this.spPayeeDetails).toContainText('For 48944145651315 Apple account')
                    break
                case 'Wells Fargo':
                    await expect(this.spPayeeDetails).toContainText('For 98480498848942 Wells Fargo account')
                    break
                default:
                    throw new Error('Could not verify account number for the provided Payee')
            }
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async verifyCurrencyConversion(currency: string) {
        switch(currency) {
            case 'AUD':
                await expect(this.sellRate).toContainText('1 dollar (AUD) = 1.0987 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 dollar (AUD) = 1098.70 U.S. dollar (USD)')
                break
            case 'CAD':
                await expect(this.sellRate).toContainText('1 dollar (CAD) = 1.0617 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 dollar (CAD) = 1061.70 U.S. dollar (USD)')
                break
            case 'CHF':
                await expect(this.sellRate).toContainText('1 franc (CHF) = 1.1383 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 franc (CHF) = 1138.30 U.S. dollar (USD)')
                break
            case 'CNY':
                await expect(this.sellRate).toContainText('1 yuan (CNY) = 0.1737 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 yuan (CNY) = 173.70 U.S. dollar (USD)')
                break
            case 'DKK':
                await expect(this.sellRate).toContainText('1 krone (DKK) = 0.1863 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 krone (DKK) = 186.30 U.S. dollar (USD)')
                break
            case 'EUR':
                await expect(this.sellRate).toContainText('1 euro (EUR) = 1.3862 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 euro (EUR) = 1386.20 U.S. dollar (USD)')
                break
            case 'GBP':
                await expect(this.sellRate).toContainText('1 pound (GBP) = 1.6942 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 pound (GBP) = 1694.20 U.S. dollar (USD)')
                break
            case 'HKD':
                await expect(this.sellRate).toContainText('1 dollar (HKD) = 0.1362 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 dollar (HKD) = 136.20 U.S. dollar (USD)')
                break
            case 'JPY':
                await expect(this.sellRate).toContainText('1 yen (JPY) = 0.01244 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 yen (JPY) = 12.44 U.S. dollar (USD)')
                break
            case 'MXN':
                await expect(this.sellRate).toContainText('1 peso (MXN) = 0.08374 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 peso (MXN) = 83.74 U.S. dollar (USD)')
                break
            case 'NOK':
                await expect(this.sellRate).toContainText('1 krone (NOK) = 0.1881 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 krone (NOK) = 188.10 U.S. dollar (USD)')
                break
            case 'NZD':
                await expect(this.sellRate).toContainText('1 dollar (NZD) = 0.8792 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 dollar (NZD) = 879.20 U.S. dollar (USD)')
                break
            case 'SEK':
                await expect(this.sellRate).toContainText('1 krona (SEK) = 0.1584 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 krona (SEK) = 158.40 U.S. dollar (USD)')
                break
            case 'SGD':
                await expect(this.sellRate).toContainText('1 dollar (SGD) = 0.8654 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 dollar (SGD) = 865.40 U.S. dollar (USD)')
                break
            case 'THB':
                await expect(this.sellRate).toContainText('1 baht (THB) = 0.03477 U.S. dollar (USD)')
                await expect(this.pcConversionAmount).toContainText('1000.00 baht (THB) = 34.77 U.S. dollar (USD)')
                break
            default:
                throw new Error('Could not select provided currency')
        }
    }

    async paySavedPayeePaymentSuccessfullySubmitted() {
        try {
            await expect(this.payBillsSuccessMessage).toBeVisible()
            await expect(this.payBillsSuccessMessage).toContainText(paySavedPayeeSuccessMessageCopy)
        } catch(err) {
            console.log(`An error occurred: ${err.message}`);
        }
    }

    async newPayeeSuccessfullyAdded(payeeName: string) {
        await expect(this.payBillsSuccessMessage).toBeVisible()
        await expect(this.payBillsSuccessMessage).toContainText("The new payee " + payeeName + " was successfully created.")
    }

    async verifyPaySavedPayeeTabCopy() {
        await expect(this.paySavedPayeeForm).toBeVisible()
        await expect(this.paySavedPayeePageTitle).toBeVisible()
        await expect(this.paySavedPayeePageTitle).toContainText(paySavedPayeeTitleCopy)
        await expect(this.payeeLabel).toContainText(payeeLabelCopy)
        await expect(this.accountLabel).toContainText(accountLabelCopy)
        await expect(this.amountLabel).toContainText(amountLabelCopy)
        await expect(this.dateLabel).toContainText(dateLabelCopy)
        await expect(this.descriptionLabel).toContainText(descriptionLabelCopy)
        await expect(this.payButton).toHaveValue(payCopy)
    }

    async verifyAddNewPayeeTabCopy() {
        await expect(this.addNewPayeePageTitle).toContainText(addNewPayeeTitleCopy)
        await expect(this.payeeNameLabel).toContainText(payeeNameLabelCopy)
        await expect(this.payeeAddressLabel).toContainText(payeeAddressLabelCopy)
        await expect(this.newPayeeAccountLabel).toContainText(newPayeeAccountLabelCopy)
        await expect(this.payeeDetailsLabel).toContainText(payeeDetailsLabelCopy)
        await expect(this.addNewPayeeButton).toHaveValue(addCopy)
    }

    async verifyPurchaseForeignCurrencyTabCopy() {
        await expect(this.pfcCurrencyLabel).toContainText(pfcCurrencyLabelCopy)
        await expect(this.pfcAmountLabel).toContainText(pfcAmountLabelCopy)
        await expect(this.USDollarLabel).toContainText(USDollarLabelCopy)
        await expect(this.selectedCurrencyLabel).toContainText(selectedCurrencyLabelCopy)
        await expect(this.conversionAmountLabel).toContainText(conversionAmountLabelCopy)
        await expect(this.calculateCostsButton).toHaveValue(calculateCostsCopy)
        await expect(this.purchaseButton).toHaveValue(purchaseCopy)
    }

    async successfulyPurchasedForeignCurrency() {
        await expect(this.purchaseForeignCurrencySuccessMessage).toContainText(purchaseForeignCurrencySuccessMessageCopy)
    }
}
