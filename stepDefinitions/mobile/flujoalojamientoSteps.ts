import { Given, Then, When} from '@cucumber/cucumber';
import SearchPage from '../../pages/mobile/booking/search.view'
import DatePage from '../../pages/mobile/booking/date.view'
import dateView from '../../pages/mobile/booking/date.view';
import RoomsGuests from '../../pages/mobile/booking/room_and_guest.view'
import HotelPage from '../../pages/mobile/booking/hotel.view'
import HotelSelect from '../../pages/mobile/booking/hotelSelected.view'
import ChooseStay from '../../pages/mobile/booking/choosestay.view'
import FillYourInfo from '../../pages/mobile/booking/yourinfo.view'
import OverView from '../../pages/mobile/booking/overview.view'
import FinishBooking from '../../pages/mobile/booking/finishbooking.view'
import Compare from '../../utils/compare'

let precioEsperado: string;

//I am on the login view
Given(/^Ingreso APP de Booking$/, async () => {
    //await StarPage.validate();
    //await StarPage.Cerrar;
});

When(/^Ingreso busqueda de la ciudad: (.*?)$/, async (ciudad: string) =>{
    await SearchPage.validate();
    await SearchPage.ingresaCiudad(ciudad);
});

 

When(/^Ingreso fechas de estadia, desde: 14_02 al 28_02 del 2024$/, async () =>{    
    await DatePage.Scroll_Vertival_Date();    
});


When(/^Selecciono (.*?) habitacion, (.*?) adultos, (.*?) niño de (.*?) años$/, async (habitaciones: number, adultos: number, ninnos: number, edadninnos: string)=>{
    await RoomsGuests.Register(habitaciones, adultos, ninnos, edadninnos);
    await SearchPage.searchBooking();   
});

When(/^selecciono el item de orden 2 en la lista$/, async() =>{
    //await HotelPage.validate();  
    await browser.pause(20000);
    await HotelPage.FocusPrice();
    precioEsperado = await HotelPage.txtPrice.getText();
    Compare(await HotelPage.txtPrice,precioEsperado);
    await HotelPage.FocusImagen();
    await HotelPage.btnSelectRoom_click();    
});

When(/^reservo la primera opcion$/,async () => {    
    await HotelSelect.btnSelectRoom_click();
    await ChooseStay.btnReserva_click();  

});


When(/^verifico que me encuentro en el formulario fill in your info$/, async() =>{
    await FillYourInfo.validate();
    await browser.pause(3000);
});

When(/^ingreso: (.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?)$/, async(nombre,apellido,email,direccion,zip,ciudad,celular) => {
 
    await FillYourInfo.inValue(await FillYourInfo.firist_name, nombre);  
    await FillYourInfo.inValue(await FillYourInfo.last_name, apellido);
    await FillYourInfo.inValue(await FillYourInfo.email, email);
    await FillYourInfo.inValue(await FillYourInfo.address, direccion);   
    await FillYourInfo.inValue(await FillYourInfo.zip_code, zip);    
    await FillYourInfo.inValue(await FillYourInfo.city, ciudad);    
    await FillYourInfo.inValue(await FillYourInfo.phone, celular);
    await FillYourInfo.radbtnBussines_click();
    await FillYourInfo.btnNextStep_click();
  
})

When (/^valido los datos de reservas$/,async () => {
   //await OverView.validate();
   await OverView.btnFinalStep_click();

});


When (/^ingreso tarjeta: (.*?), nombre: (.*?), fecha de expiracion: (.*?)$/,async(tarjet :string, nombre: string, fechaexp: string) => {
    await (await FinishBooking.cardnumber).setValue(tarjet);
    await (await FinishBooking.holdersname).setValue(nombre);
    await (await FinishBooking.expirationdate).setValue(fechaexp);
    //await FinishBooking.btnbooknow_click();    
    await browser.pause(13000);
})

