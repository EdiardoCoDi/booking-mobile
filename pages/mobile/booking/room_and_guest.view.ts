import Gestures from "../../../utils/Gestures";
import Page from "../page"; 


class RoomsGuests extends Page{
    validate(): Promise<void> {
        throw new Error("Method not implemented.");
    }

     //*************Habitaciones****************** *//
    get btnAddRooms(){ return $('//android.view.ViewGroup[1]/android.widget.LinearLayout/*[@resource-id="com.booking:id/bui_input_stepper_add_button"]');    }
    get btnRemoveRooms() { return $('//android.view.ViewGroup[1]/android.widget.LinearLayout/*[@resource-id="com.booking:id/bui_input_stepper_remove_button"]');}
    get txtrooms() { return $('//android.view.ViewGroup[1]/android.widget.LinearLayout/*[@resource-id="com.booking:id/bui_input_stepper_value"]');}

    async RoomsRegister(habitaciones: number): Promise<void> {
        let NmbRooms = parseInt(await (await this.txtrooms).getText(), 10);
    
        while (habitaciones > NmbRooms) {
            await (await this.btnAddRooms).click();
            NmbRooms = parseInt(await (await this.txtrooms).getText(), 10);
            console.log(NmbRooms);
        }
    
        while (habitaciones < NmbRooms) {
            await (await this.btnRemoveRooms).click();
            NmbRooms = parseInt(await (await this.txtrooms).getText(), 10);
            console.log(NmbRooms);
        }
    }
    
    
    //*************Adultos****************** *//
    get btnAddAdults(){ return $('//android.view.ViewGroup[2]/android.widget.LinearLayout/*[@resource-id="com.booking:id/bui_input_stepper_add_button"]');    }
    get btnRemoveAdults() { return $('//android.view.ViewGroup[2]/android.widget.LinearLayout/*[@resource-id="com.booking:id/bui_input_stepper_remove_button"]');}
    get txtAdults() { return $('//android.view.ViewGroup[2]/android.widget.LinearLayout/*[@resource-id="com.booking:id/bui_input_stepper_value"]');}

    async AdultsRegister(adultos: number): Promise<void> {
        let NmbAdults = parseInt(await (await this.txtAdults).getText(), 10);
    
        while (adultos > NmbAdults) {
            await (await this.btnAddRooms).click();
            NmbAdults = parseInt(await (await this.txtAdults).getText(), 10);
            console.log(NmbAdults);
        } 
    
        while (adultos < NmbAdults) {
            await (await this.btnRemoveRooms).click();
            NmbAdults = parseInt(await (await this.txtAdults).getText(), 10);
            console.log(NmbAdults);
        }
    }

     //*************Niños****************** *//
    get btnAddChildren(){ return $('//android.view.ViewGroup[3]/android.widget.LinearLayout/*[@resource-id="com.booking:id/bui_input_stepper_add_button"]');    }
    get btnRemoveChildren() { return $('//android.view.ViewGroup[3]/android.widget.LinearLayout/*[@resource-id="com.booking:id/bui_input_stepper_remove_button"]');}
    get txtChildrens() { return $('//android.view.ViewGroup[3]/android.widget.LinearLayout/*[@resource-id="com.booking:id/bui_input_stepper_value"]');}
    
    //***************Edad de los niños****************** *//
    //getoptionAge(edad: string){ return (`//android.widget.EditText[@text="${edad} years old"]`)}
    get optionAge() { return $('//android.widget.NumberPicker/android.widget.EditText[@text="5 years old"]')}
    get optionSelect () { return $('//android.widget.EditText[@text="Select"]');}
    get btnAgeOK() { return $('//android.widget.Button[2][@text="OK"]');}

    async ChildrensRegister(children: number, edadninnos: string): Promise<void> {        
            await (await this,this.btnAddChildren).click();
            await browser.pause(5000);
            await expect( this.optionSelect).toBePresent();
            await browser.pause(5000);
            Gestures.checkIfDisplayedWithSwipeUpPorcent(await this.optionAge,8,0,0.65);
            await browser.pause(5000);
            await (await this.btnAgeOK).click();        
    }

    //*****General Select rooms and guests**************************************//
    get btnApplyRoomsAndGuests() { return $('//android.widget.Button[@text="APPLY"]');}
    get btnRegisterRoomsAndGuest() {return $('//android.widget.TextView[@text="1 room · 2 adults · 0 children"]')}

    //********************************************************//
    async Register(habitaciones: number, adultos: number, ninnos: number, edadninnos: string): Promise<void> {
        await (await this.btnRegisterRoomsAndGuest).click();
        await browser.pause(2000);
         this.RoomsRegister(habitaciones);
         await browser.pause(2000);
         this.AdultsRegister(adultos);
        await browser.pause(2000);
        this.ChildrensRegister(ninnos, edadninnos);
        await browser.pause(2000);
        await (await this.btnApplyRoomsAndGuests).click();
        await browser.pause(10000);
    }


    }    



export default new RoomsGuests();