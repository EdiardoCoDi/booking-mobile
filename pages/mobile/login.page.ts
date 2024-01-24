import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('~input-email') }
    get inputPassword() { return $('~input-password') }
    get btnSubmit() { return $('~button-LOGIN') }
    
    async validate(): Promise<void> {
        await expect(this.inputUsername).toBePresent();
        await expect(this.inputPassword).toBePresent();
        await expect(this.btnSubmit).toBePresent();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username: string, password: string) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }
}

export default new LoginPage();
