import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BottomPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnHome() { return $('~Home') }
    get btnWebView() { return $('~Webview') }
    get btnLogin() { return $('~Login') }
    get btnForms() { return $('~Forms') }
    get btnSwipe() { return $('~Swipe') }
    get btnDrag() { return $('~Drag') }

    async validate(): Promise<void> {
        await expect(this.btnHome).toBePresent();
        await expect(this.btnWebView).toBePresent();
        await expect(this.btnLogin).toBePresent();
        await expect(this.btnForms).toBePresent();
        await expect(this.btnSwipe).toBePresent();
        await expect(this.btnDrag).toBePresent();
    }

    /**
     * Home Button
     */
    async home(): Promise<void> {
        await (await this.btnHome).click();
    }

    /**
     * WebView Button
     */
    async webView(): Promise<void> {
        await (await this.btnWebView).click();
    }

    /**
     * Login Button
     */
     async login(): Promise<void> {
        await (await this.btnLogin).click();
    }

    /**
     * Forms Button
     */
    async forms(): Promise<void> {
        await (await this.btnForms).click();
    }

    /**
     * Swipe Button
     */
     async swipe(): Promise<void> {
        await (await this.btnSwipe).click();
    }

    /**
     * Drag Button
     */
    async drag(): Promise<void> {
        await (await this.btnDrag).click();
    }
}

export default new BottomPage();
