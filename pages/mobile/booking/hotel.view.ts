import Page from '../page';
import Gesture from '../../../utils/Gestures'

class HotelView extends Page{

    

    get btnSelectRoom(){
        return $("//android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageView[@class='android.widget.ImageView']")
    }

    get txtPrice(){
        return $("//android.view.ViewGroup[2]//android.view.ViewGroup[2]/android.view.ViewGroup[5]//android.widget.TextView[@resource-id='com.booking:id/price_view_price']")
    }

    async btnSelectRoom_click() : Promise<void>{
        await (await this.btnSelectRoom).click();
    }

    async getTextProce(): Promise<string> {
        // Utiliza el método `getText` para obtener el texto del elemento
        return (await this.txtPrice).getText();
    }

    async validate(): Promise<void> {
        await expect(this.btnSelectRoom).toBePresent(); 
        
    }

    async FocusPrice(): Promise<void>{
        await Gesture.checkIfDisplayedWithSwipeUp(await this.txtPrice,1,0);  
  
    }
    async FocusImagen(): Promise<void>{
        await Gesture.checkIfDisplayedWithSwipeUp(await this.btnSelectRoom,3,0);  
  
    }

}

export default new HotelView();