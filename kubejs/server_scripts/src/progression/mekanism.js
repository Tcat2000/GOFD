ServerEvents.recipes(event => {
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"tag":"forge:dusts/emerald"}},"output":{"amount":10,"infuse_type":"kubejs:emerald"}});
    event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"tag":"forge:dusts/blaze"}},"output":{"amount":10,"infuse_type":"kubejs:blaze"}});
    
    event.remove("botania:quartz_dark");
    event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"tag":"mekanism:carbon"},"itemInput":{"ingredient":{"item":"minecraft:quartz"}},"output":{"item":"botania:quartz_dark"}});
    event.remove("botania:mana_infusion/mana_quarz");
    event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"tag":"mekanism:diamond"},"itemInput":{"ingredient":{"item":"minecraft:quartz"}},"output":{"item":"botania:quartz_mana"}});
    event.remove("botania:quartz_blaze");
    event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"infuse_type":"kubejs:blaze"},"itemInput":{"ingredient":{"item":"minecraft:quartz"}},"output":{"item":"botania:quartz_blaze"}});
    event.remove("botania:quartz_lavender");
    event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"tag":"mekanism:refined_obsidian"},"itemInput":{"ingredient":{"item":"minecraft:quartz"}},"output":{"item":"botania:quartz_lavender"}});
    event.remove("botania:quartz_red");
    event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"item":"minecraft:quartz"}},"output":{"item":"botania:quartz_red"}});
    event.remove("botania:elven_trade/elf_quartz");
    event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"infuse_type":"kubejs:emerald"},"itemInput":{"ingredient":{"item":"minecraft:quartz"}},"output":{"item":"botania:quartz_elven"}});
    event.remove("botania:quartz_sunny");
    event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":10,"tag":"mekanism:gold"},"itemInput":{"ingredient":{"item":"minecraft:quartz"}},"output":{"item":"botania:quartz_sunny"}});

    event.custom({"type":"mekanism:dissolution","gasInput":{"amount":1,"gas":"mekanism:sulfuric_acid"},"itemInput":{"ingredient":{"item":"kubejs:small_quartz"}},"output":{"amount":100,"chemicalType":"slurry","slurry":"kubejs:impure_quartz"}});
    event.custom({"type":"mekanism:washing","fluidInput":{"amount":5,"tag":"minecraft:water"},"output":{"amount":1,"slurry":"kubejs:quartz"},"slurryInput":{"amount":1,"slurry":"kubejs:impure_quartz"}});
    event.custom({"type":"mekanism:crystallizing","chemicalType":"slurry","input":{"amount":500,"slurry":"kubejs:quartz"},"output":{"item":"minecraft:quartz"}});
});

ServerEvents.tags("item", event => {
    event.remove("forge:circuits/basic", ["mekanism:basic_control_circuit"]);
    event.add("forge:circuits/basic", ["kubejs:basic_pcb"]);
    
    event.remove("forge:circuits/advanced", ["mekanism:advanced_control_circuit"]);
    event.add("forge:circuits/advanced", ["kubejs:small_reinforced_pcb"]);
    
    event.remove("forge:circuits/elite", ["mekanism:elite_control_circuit"]);
    event.add("forge:circuits/elite", ["kubejs:large_advanced_pcb"]);
    
    event.remove("forge:circuits/ultimate", ["mekanism:ultimate_control_circuit"]);
    event.add("forge:circuits/ultimate", ["kubejs:huge_advanced_pcb"]);
});