import Page from '../page'

class ChooseStay extends Page{
    async validate(): Promise<void> {
        await expect(this.btnReserva).toBePresent();
    }

    get btnReserva(){
        return $("//android.widget.Button[@resource-id='com.booking:id/recommended_block_reserve_button']");
    }

    async btnReserva_click(): Promise<void>{
        await (await this.btnReserva).click();
    }

}

export default new ChooseStay();