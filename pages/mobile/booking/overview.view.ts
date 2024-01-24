import Page from '../page'

class OverView extends Page{
    
    validate(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    get btnFinalStep() {
        return $("//android.widget.Button[@text='Final step'][@resource-id='com.booking:id/action_button']");
    }

    get precio() {
        return $("//android.widget.TextView[@resource-id='com.booking:id/title'][@text='US$3,518']");
    }

    async btnFinalStep_click(): Promise<void>{
        await (await this.btnFinalStep).click();
    }
    
}

export default new OverView();