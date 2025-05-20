const { $GasBuilder } = require("packages/mekanism/api/chemical/gas/$GasBuilder");
const { $InfuseType } = require("packages/mekanism/api/chemical/infuse/$InfuseType");
const { $InfuseTypeBuilder } = require("packages/mekanism/api/chemical/infuse/$InfuseTypeBuilder");
const { $Slurry } = require("packages/mekanism/api/chemical/slurry/$Slurry");
const { $SlurryBuilder } = require("packages/mekanism/api/chemical/slurry/$SlurryBuilder");

const $Gas = Java.loadClass('mekanism.api.chemical.gas.Gas')

StartupEvents.registry('mekanism:gas', event => {
    event.createCustom('kubejs:difluoromethane', () => new $Gas($GasBuilder.builder().tint(0xA020F0)));
    event.createCustom('kubejs:heated_difluoromethane', () => new $Gas($GasBuilder.builder().tint(0xA020F0)));
});
StartupEvents.registry("mekanism:infuse_type", event => {
    event.createCustom('kubejs:emerald', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0x16de4b)));
    event.createCustom('kubejs:blaze', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0xff9d00)));
});
StartupEvents.registry("mekanism:slurry", event => {
    event.createCustom('kubejs:impure_quartz', () => new $Slurry($SlurryBuilder.dirty().tint(0xe7d9f3)));
    event.createCustom('kubejs:quartz', () => new $Slurry($SlurryBuilder.clean().tint(0xd9d9f3)));
});