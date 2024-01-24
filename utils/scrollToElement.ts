export async function scrollToElementInRecyclerView(
    recyclerViewSelector: string,
    targetElementSelector: string
): Promise<void> {
    const maxScrolls = 20; // Número máximo de intentos de scroll
    let currentScroll = 0;

    while (currentScroll < maxScrolls) {
        // Buscar el elemento por content-desc dentro del RecyclerView
        const element = await browser.$(`${recyclerViewSelector}${targetElementSelector}`);
        const elemntday = await browser.$(targetElementSelector);

        // Si el elemento está presente, salir del bucle
        if (await elemntday.isExisting()) {
            break;
        }

        // Calcular las coordenadas para el desplazamiento
        const { height } = await browser.getWindowRect();
        const startY = Math.floor(height * 0.8);
        const endY = Math.floor(height * 0.1);
        console.log(startY + '-' + endY);

        // Realizar un desplazamiento dentro del RecyclerView
        await browser.touchAction([
            { action: 'press', x: 50, y: startY },
            { action: 'moveTo', x: 50, y: endY },
            'release'
        ]);
        await browser.pause(4500); // Pausa para permitir que la pantalla se actualice

        // Incrementar el contador de desplazamientos
        currentScroll += 1;
    }

    if (currentScroll === maxScrolls) {
        throw new Error(`No se pudo encontrar el elemento en el RecyclerView: ${recyclerViewSelector}`);
    }


}

// // Uso
// (async () => {
//     await scrollToElementInRecyclerView(
//         '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.booking:id/calendar_month_list"]',
//         '//android.view.View[@content-desc="31 December 2023"]'
//     );
// })();
