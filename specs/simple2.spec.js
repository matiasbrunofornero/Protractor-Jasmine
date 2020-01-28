describe('Test Despegar HomePage', function async() {
    it('First Test', function () {
        // Get element by className
        var hotelButton = element(by.className("shifu-3-button-circle HOTELS"));
        expect(hotelButton.getText()).toContain("Alojamientos", "El texto del botón Hotel es incorrecto");
    });
    xit('Second Test', function () {
        var logo = element(by.id("logo-desktop"));
        expect(logo.isDisplayed()).toBe(true, "Despegar logo is missing");
    });
});