@run @mobile
Feature: Flujo de Alojamiento

  @login_web
  Scenario Outline: Flujo completo del servicio de alojamiento

    Given Ingreso APP de Booking
    When Ingreso busqueda de la ciudad: CUSCO
    And  Ingreso fechas de estadia, desde: 14_02 al 28_02 del 2024
    And Selecciono 1 habitacion, 2 adultos, 1 niño de 5 años
    And selecciono el item de orden 2 en la lista
    And reservo la primera opcion
    And verifico que me encuentro en el formulario fill in your info
    And ingreso: Jose,Rojas,jrojas@test.com,tulipanes 003,16035,Lima,9865321441
    And valido los datos de reservas
    And ingreso tarjeta: 4551708161768059, nombre: Jose Hurtado, fecha de expiracion: 0728
    #Then valido el monto del pago de la reserva
    

