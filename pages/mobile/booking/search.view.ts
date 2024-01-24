import Page from '../page';

class SearchPage extends Page{

    async validate(): Promise<void> {
        await expect(this.boxCiudad).toBePresent(); 
    }

    async validateCiudad():  Promise<void> {
        await expect(this.listCiudad_1).toBePresent(); 
    }

    get btnSearch(){
        return $('//android.widget.Button[@resource-id="com.booking:id/facet_search_box_cta"]');
    }

    async searchBooking(): Promise<void>{
        await (await this.btnSearch).click();        
    }

    get boxCiudad(){
        return $('//android.widget.TextView[@text="Enter your destination"]')
    }

    get editTextCiudad(){
        return $('//android.widget.EditText[@resource-id="com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content"]')
    }

    get listCiudad_1(){
        return $('//android.view.ViewGroup[1]/android.widget.ImageView[2]')
    }

    async ingresaCiudad(ciudad: string){        
        await (await this.boxCiudad).click();
        await (await this.editTextCiudad).setValue(ciudad);
        await browser.pause(3000);
        await (await this,this.listCiudad_1).click();
    }


}
export default new SearchPage();