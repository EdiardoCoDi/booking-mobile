import Page from '../page';

class StarPage extends Page{


    async validate(): Promise<void> {   
        await expect(this.btnCerrar).toBePresent();  
        await expect(this.btnCerrar).toBeClickable();         
    }

    get btnCerrar() { return $('//android.widget.ImageButton[@content-desc="Navigate up"]') }

    async Cerrar(): Promise<void> {
        await (await this.btnCerrar).click();
    }
}

export default new StarPage();