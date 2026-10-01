import { expect, Locator, Page } from "playwright/test";

export class homePage{
    searchBarTextBox:Locator
    accntsNdListText: Locator
    constructor(page: Page){
        this.searchBarTextBox = page.getByRole('link', { name: 'Amazon.in' })
        this.accntsNdListText = page.locator('#nav-link-accountList')
    }

    async validateTheVisibilityOfSearchbar(){
        await expect(this.searchBarTextBox).toBeVisible();
    }
    async validateAccntsNdListText(){
        await expect(this.accntsNdListText).toContainText('Account & Lists');
    }
     
}