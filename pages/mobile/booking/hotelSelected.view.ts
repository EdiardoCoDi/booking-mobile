import Page from '../page';


class HotelSelected extends Page{
    async validate(): Promise<void> {        
        await expect(this.btnSelectRooms).toBePresent();
        
    }

    get btnSelectRooms(){
        return $("//android.widget.Button[@resource-id='com.booking:id/select_room_cta']");
    }

    get price(){
        return $("//android.widget.TextView[@=resource-id='com.booking:id/price_view_price']");
    }

    get radbtnBussiness(){
        return $("//android.widget.RadioButton[@resource-id='com.booking:id/business_purpose_layout']")
    }


    async btnSelectRoom_click(): Promise<void>{
        await (await this.btnSelectRooms).click();
    }

    async radbtnBussines_click(): Promise<void>{
        await (await this.radbtnBussiness).click();
    }

}


export default new HotelSelected();