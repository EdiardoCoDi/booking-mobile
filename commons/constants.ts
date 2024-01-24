/**
 * sub page containing constants values
 */
class Constants {
    public static readonly SELECTOR_VALUE = '{VALUE}';
    public static readonly PARAMETRIC_SELECTOR = `//span[contains(.,'${Constants.SELECTOR_VALUE}')]`;
}

export default new Constants();
