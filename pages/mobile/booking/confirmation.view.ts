import Page from '../page'

class Confirmation extends Page{
    validate(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    get confirmed(){
        return $("//android.widget.TextView[@resource-id='com.booking:id/booking_number_label']");
    }

    get precio(){
        return $("//android.widget.TextView[@resource-id='com.booking:id/pb_reservation_card_total_price']")
    }

    
}

export default new Confirmation();