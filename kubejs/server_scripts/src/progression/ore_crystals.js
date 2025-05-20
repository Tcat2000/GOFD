const { $InteractionHand } = require("packages/net/minecraft/world/$InteractionHand");

const ore_crystal_types = ["basic", "tin", "iron", "redstone", "copper", "gold", "nickle", "carbon", "aluminum", "quartz"];
const data = [["minecraft:stone", "1 1 1"], ["minecraft:stone", "1 1 1"], ["minecraft:stone", "0.648 0.531 0.421875", "minecraft:blocks/iron_ore"], ["minecraft:stone", "1 1 1"], ["minecraft:stone", "1 1 1", "minecraft:blocks/copper_ore"], ["minecraft:stone", "1 1 1"], ["minecraft:stone", "1 1 1"], ["minecraft:stone", "1 1 1"], ["minecraft:stone", "1 1 1"], ["minecraft:stone", "0.1 0.1 0.1", "kubejs:crystal/quartz"]];
let coal_meals = [];
let ore_crystals = [];

let block_indexes = {};

ore_crystal_types.forEach((v, i) => coal_meals[i] = "kubejs:" + v + "_coal_meal");
ore_crystal_types.forEach((v, i) => ore_crystals[i] = "kubejs:" + v + "_ore_crystal");
ore_crystal_types.forEach((v, i) => ore_crystals["kubejs:" + v + "_ore_crystal"] = i);

ServerEvents.tags("item", event => {
    event.add("mbd2:crystal_substrait", "minecraft:stone");
    event.add("mbd2:coal_meal", "minecraft:bone_meal");
});

ItemEvents.firstRightClicked(event => {
    let id = coal_meals.indexOf(event.item.getItem().id);
    if(id != -1) {
        if(event.target.block.id != data[id][0]) return;
        if(event.level.getBlock(event.target.block.pos.above()).id != Blocks.AIR.id) return;
        event.level.getBlock(event.target.block.pos.above()).set(ore_crystals[id]);
        if(!event.player.creative) event.item.shrink(1);
        event.level.runCommandSilent("playsound minecraft:item.bone_meal.use block @a " + event.target.block.pos.x + " " + event.target.block.pos.y + " " + event.target.block.pos.z);
        event.level.runCommandSilent("playsound minecraft:block.amethyst_block.step block @a " + event.target.block.pos.x + " " + event.target.block.pos.y + " " + event.target.block.pos.z);
        event.level.runCommandSilent("playsound minecraft:block.amethyst_block.chime block @a " + event.target.block.pos.x + " " + event.target.block.pos.y + " " + event.target.block.pos.z);
        event.level.runCommandSilent("particle minecraft:dust color 1 x y z 0.2 0.2 0.2 0.0 30 normal".replace("x", event.target.block.pos.x).replace("y", event.target.block.pos.y + 1.5).replace("z", event.target.block.pos.z).replace("color", data[id][1]));
    }
});

MBDMachineEvents.onUI("mbd2:crystal_chamber", event => {
    let root = event.getEvent().root;
    let progress = root.getFirstWidgetById("ui:progress_bar");

    progress.setProgressTexture(new JavaAdapter(Java.loadClass("com.lowdragmc.lowdraglib.gui.texture.ProgressTexture"), {
        setProgress: function(progress) {
            this.progress = 1;
            this.scale = progress;
            this.yOffset = -progress * 32 + 31;
        }
    }, new ItemStackTexture["(net.minecraft.world.item.Item[])"]("kubejs:iron_ore_crystal"), null));
});

BlockEvents.rightClicked(event => {
    if(event.item.id != "immersiveengineering:hammer") return;
    if(!event.block.hasTag("kubejs:ore_crystal")) return;
    if(Math.random() < 0.5) {
        event.level.runCommandSilent("playsound block.bone_block.fall player @a " + event.block.pos.x + " " + event.block.pos.y + " " + event.block.pos.z + " 1 1.5");
    }
    else {
        event.level.runCommandSilent("playsound block.deepslate.hit player @a " + event.block.pos.x + " " + event.block.pos.y + " " + event.block.pos.z + " 1 1.5");
    }
    // event.level.playSound(null, event.block.pos.x, event.block.pos.y, event.block.pos.z, "block.bone_block.fall", "players", 1, 1.5, false);
    if(Math.random() > 0.75) {
        if(!event.player.isCreative()) event.item.damageValue += 1;
        console.log(data[ore_crystals[event.block.id]]);
        console.log(data);
        console.log(ore_crystals[event.block.id]);
        console.log(ore_crystals);
        console.log(event.block.id);
        console.log(data[ore_crystals[event.block.id]][2]);
        event.level.runCommandSilent("loot spawn " + event.block.pos.x + " " + event.block.pos.y + " " + event.block.pos.z + " loot " + data[ore_crystals[event.block.id]][2]);
        event.level.runCommandSilent("playsound block.amethyst_block.fall player @a " + event.block.pos.x + " " + event.block.pos.y + " " + event.block.pos.z + " 1 1.5");
        event.block.set("minecraft:air");
    }
})

ServerEvents.genericLootTables(event => {
    event.addJson("kubejs:crystal/quartz", {
        "pools": [
            {
                "rolls": {
                    "min": 1,
                    "max": 5
                },
                "entries": [
                    {
                        "type": "minecraft:item",
                        "name": "kubejs:small_quartz",
                        "quality": 1,
                        "functions": []
                    }
                ]
            }
        ],
        "functions": []
    });
})