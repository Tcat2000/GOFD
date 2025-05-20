ServerEvents.recipes(event => {
    event.shapeless(Item.of("minecraft:calcite", 3), [Ingredient.of("minecraft:cobblestone", 3), Ingredient.of("minecraft:bone_meal")]);
    event.recipes.botania.pure_daisy("kubejs:marble", "minecraft:calcite", 1);
});

BlockEvents.rightClicked(event => {
    if(!Ingredient.of("#minecraft:pickaxes").itemIds.contains(event.item.id)) return;
    if(event.block.id == "kubejs:marble") {
        if(event.block.id != "kubejs:enscribed_marble") event.level.runCommandSilent("playsound block.bone_block.fall player @a " + event.block.pos.x + " " + event.block.pos.y + " " + event.block.pos.z + " 1 1.5");
        if(Math.random() > 0.8) {
            event.block.set("kubejs:enscribed_marble");
            if(!event.player.isCreative()) event.item.damageValue += 1;
        }
    }
})