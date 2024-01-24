import Page from '../page'

class FinishView extends Page{
    validate(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    get cardnumber(){
        return $("//android.widget.EditText[@resource-id='com.booking:id/new_credit_card_number_edit']");
    }
    get holdersname() {
        return $("//android.widget.EditText[@resource-id='com.booking:id/new_credit_card_holder_edit']");
    }

    get expirationdate() {
        return $("//android.widget.EditText[@resource-id='com.booking:id/new_credit_card_expiry_date_edit']");
    }

    get btnbooknow() {
        return $("//android.widget.Button[@resource-id='com.booking:id/action_button'][@text='Book now']");
    }

    get precio() {
        return $("//android.widget.TextView[@resource-id='com.booking:id/title'][@text='US$3,518']");
    }

    async btnbooknow_click(): Promise<void>{
        await (await this.btnbooknow).click();
    }
}

export default new FinishView();