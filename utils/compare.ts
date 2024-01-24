
export async function isTextEqualOrContains(element: WebdriverIO.Element, expectedText: string): Promise<boolean> {
    const actualText: string = await element.getText();
    
    // Realiza la comparación, ya sea exacta o si el texto esperado está contenido en el texto actual.
    return actualText === expectedText || actualText.includes(expectedText);
}


export default isTextEqualOrContains;