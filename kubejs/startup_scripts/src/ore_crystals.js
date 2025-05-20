const ore_crystal_types = ["basic", "tin", "iron", "redstone", "copper", "gold", "nickle", "carbon", "aluminum", "quartz"];

StartupEvents.registry("block", event => {
    ore_crystal_types.forEach(id => event.create(id + "_ore_crystal").defaultTranslucent().soundType(SoundType.LARGE_AMETHYST_BUD).tag("kubejs:ore_crystal"));
})
StartupEvents.registry("item", event => {
    ore_crystal_types.forEach(id => event.create(id + "_coal_meal"));
})