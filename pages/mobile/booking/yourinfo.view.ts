import Page from '../page'
import Gestures from "../../../utils/Gestures";

class YourInfoView extends Page{
    async validate(): Promise<void> {
            await expect(this.Title_Fill_Your_Info).toExist();
    }

    get firist_name(){
        return $("//javaClass[@resource-id='com.booking:id/bstage1_contact_firstname_value']//android.widget.EditText[@resource-id='com.booking:id/bui_input_container_content']");
    }
    get last_name(){
        return $("//javaClass[@resource-id='com.booking:id/bstage1_contact_lastname_value']//android.widget.EditText[@resource-id='com.booking:id/bui_input_container_content']");
    }

    get email(){
        return $("//javaClass[@resource-id='com.booking:id/bstage1_contact_email_value']//android.widget.AutoCompleteTextView[@resource-id='com.booking:id/bui_input_container_content']");
    }

    get address(){
        return $("//javaClass[@resource-id='com.booking:id/bstage1_contact_address_value']//android.widget.EditText[@resource-id='com.booking:id/bui_input_container_content']");
    }

    get zip_code(){
        return $("//javaClass[@resource-id='com.booking:id/bstage1_contact_zipcode_value']//android.widget.EditText[@resource-id='com.booking:id/bui_input_container_content']");
    }

    get city(){
        return $("//javaClass[@resource-id='com.booking:id/bstage1_contact_city_value']//android.widget.EditText[@resource-id='com.booking:id/bui_input_container_content']");
    }

    get phone(){
        return $("//javaClass[@resource-id='com.booking:id/bstage1_contact_telephone_value']//android.widget.EditText[@resource-id='com.booking:id/bui_input_container_content']");
    }

    get Title_Fill_Your_Info(){
        return $("//android.widget.TextView[@text='Fill in your info']")
    }
    get radbtnBussiness(){
        return $("//android.widget.RadioButton[@resource-id='com.booking:id/business_purpose_business']")
    }

    get btnNextStep(){
        return $("//android.widget.Button[@resource-id='com.booking:id/action_button'][@text='Next step']")
    }

    async radbtnBussines_click(): Promise<void>{
        await (await this.radbtnBussiness).click();
    }

    async btnNextStep_click(): Promise<void>{
        await (await this.btnNextStep).click();
    }

    async inValue(object: WebdriverIO.Element, texto: string): Promise<void>{
        Gestures.checkIfDisplayedWithSwipeUp(await object,8,0);
        await browser.pause(1500);
        await (await object).setValue(texto);
    }



}

export default new YourInfoView();