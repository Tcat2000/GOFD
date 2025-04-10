const { $GasBuilder } = require("packages/mekanism/api/chemical/gas/$GasBuilder");

const $Gas = Java.loadClass('mekanism.api.chemical.gas.Gas')

StartupEvents.registry('mekanism:gas', event => {
    event.createCustom('kubejs:difluoromethane', () => new $Gas($GasBuilder.builder().tint(0xA020F0)));
    event.createCustom('kubejs:heated_difluoromethane', () => new $Gas($GasBuilder.builder().tint(0xA020F0)));
});