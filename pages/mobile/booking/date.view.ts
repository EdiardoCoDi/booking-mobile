import Page from '../page';
import { obtenerRangoFechas } from '../../../utils/help_fechas'
import Gestures from '../../../utils/Gestures'

class DateView extends Page{

    async validate(): Promise<void> { await expect(this.schule).toBePresent();  }
    async validateSchedule(): Promise<void> { await expect(this.lblSunday).toBePresent(); }


    get schule(){
        const rango = obtenerRangoFechas();
        return $('//android.view.View[@content-desc="' + rango + '"]');
    }

    get monthActual(){
        return $('//android.view.ViewGroup[2]/android.view.View');
    }

    get lblSunday(){
        return $('//android.widget.TextView[1][@text="Sun"]')
    }

    get day(){
        //return $('//android.view.View[@content-desc="14 February 2024"]')
        return $('//android.view.View[@content-desc="14 February 2024"]')
    }

    get dayend(){
        //return $('//android.view.View[@content-desc="14 February 2024"]')
        return $('//android.view.View[@content-desc="28 February 2024"]')
    }

    get calendarBooking(){ 
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.booking:id/calendar_month_list"]')
    }
    
    get btnSelectDays(){
        return $('//android.widget.Button');
    }

    async OpenSchedule(): Promise<void>{ await (await this.schule).click();}
    async ConfirmSelectionDays(): Promise<void>{await (await this.btnSelectDays).click();}

    async Scroll_Vertival_Date(): Promise<void> {    
    Gestures.checkIfDisplayedWithSwipeUp(await this.day, 5,0);
    await expect(this.day).toBePresent();
    await (await this.day).click();
    await browser.pause(5000);
    Gestures.checkIfDisplayedWithSwipeUp(await this.dayend, 5,0);
    await expect(this.dayend).toBePresent();
    await (await this.dayend).click();
    await (await this.btnSelectDays).click();
    await browser.pause(7000);
    }


}

export default new DateView();