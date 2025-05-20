const { $Random } = require("packages/java/util/$Random");
const { $UseAnim } = require("packages/net/minecraft/world/item/$UseAnim");

const oxides = ["iron", "copper", "aluminum", "lead", "silver", "nickel", "uranium", "constantan", "steel", "bronze", "osmium"];
const smalls = ["tin", "gold", "redstone", "glowstone", "ash", "coal_coke", "hop_graphite", "saltpeter", "sulfur", "electrum", "fluorite", "coal", "lithium", "weak_lunar_alloy", "lunar_alloy", "weak_solar_alloy", "solar_alloy", "weak_celestial_alloy", "celestial_alloy"];
const substraits = ["basic_pcb", "small_reinforced_pcb", "large_reinforced_pcb", "small_advanced_pcb", "large_advanced_pcb", "huge_advanced_pcb"];

const UVLightBoxBlockEntity = Java.loadClass("me.desht.pneumaticcraft.common.block.entity.UVLightBoxBlockEntity");
const BlankPCBBaseItem = Java.loadClass("com.blockgoblin31.gofdtweaks.kubejs.EmptyPCBBaseItem");
const CraftingToolBaseItem = Java.loadClass("com.blockgoblin31.gofdtweaks.kubejs.CraftingToolBaseItem");
const HumanoidModel = Java.loadClass("net.minecraft.client.model.HumanoidModel");
const HumanoidArm = Java.loadClass("net.minecraft.world.entity.HumanoidArm");
const JItem = Java.loadClass("net.minecraft.world.item.Item");

const hammer_animation = new JavaAdapter(Java.loadClass("net.minecraftforge.client.extensions.common.IClientItemExtensions"), {

    init: function() {
        console.log("Test")
        this.SWING_POSE = HumanoidModel.ArmPose.create("SWING", false, (model, entity, arm) => {
            if (arm == HumanoidArm.RIGHT) {
                model.rightArm.xRot = (float) (Math.random() * Math.PI * 2);
            } else {
                model.leftArm.xRot = (float) (Math.random() * Math.PI * 2);
            }
        });
        console.log("Test")
    },
    
    applyForgeHandTransform: function(poseStack, player, arm, itemInHand, partialTick, equipProcess, swingProcess) {
        applyItemArmTransform(poseStack, arm);
        if (player.getUseItem() != itemInHand) {
            return true;
        }
        if (player.isUsingItem()) {
            poseStack.translate(0.0, -0.05, 0.0);
        }
        return true;
    },

    applyItemArmTransform: function(poseStack, arm) {
        let i = arm == HumanoidArm.RIGHT ? 1 : -1;
        poseStack.translate(i * 0.56, -0.52, -0.72);
    }
});

StartupEvents.registry("item", event => {
    event.create("andesite_blend");
    event.create("copper_refinment_blend");
    event.create("bio_mass");
    event.create("small_slag");
    event.create("sawdust_mixture");
    event.create("hardboard");
    event.create("gold_foil").tag("forge:foil/gold").tag("kubejs:pcb_foil/reinforced").tag("kubejs:pcb_foil/basic");
    event.create("copper_foil").tag("forge:foil/gold").tag("kubejs:pcb_foil/basic");
    event.create("projector");

    event.create("linking_tool");
    event.create("hand_lens").use(() => true).useAnimation($UseAnim.CROSSBOW).useDuration((stack) => -1).unstackable();
    event.create("weak_celestial_alloy");
    event.create("celestial_alloy");
    event.create("weak_solar_alloy");
    event.create("solar_alloy");
    event.create("weak_lunar_alloy");
    event.create("lunar_alloy");
    
    event.create("star_metal_grains");
    event.create("small_star_metal_dust");
    event.create("star_metal_dust");
    event.create("star_metal_ingot");
    
    const sizes = ["tiny", "small", "medium", "large"];
    sizes.forEach(size => {
        event.create(size + "celestial_base_lens");
        event.create(size + "lunar_base_lens");
        event.create(size + "solar_base_lens");
        event.create(size + "lunar_lens");
        event.create(size + "solar_lens");
    });

    substraits.forEach(name => {
        createPCBItem(event, name);
    });

    event.createCustom("soldering_iron", () => new CraftingToolBaseItem(null, itemStack => {
        let damage = itemStack.getDamageValue() + 1;
        let maxDamage = itemStack.getMaxDamage();
        console.log(damage + " " + maxDamage + " " + damage > maxDamage);
        if(damage > maxDamage) {
            itemStack.setDamageValue(0);
            itemStack.shrink(1);
        }
        else itemStack.setDamageValue(damage);
        return itemStack;
    }, null));


    oxides.forEach(dust => {
        event.create(dust + "_oxide_dust").tag("forge:dusts/oxide/" + dust);
        event.create("small_" + dust + "_oxide_dust").tag("forge:dusts/small/oxide/" + dust);
        event.create("small_" + dust + "_dust").tag("forge:dusts/small/" + dust);
    });
    smalls.forEach(dust => {
        event.create("small_" + dust + "_dust").tag("forge:dusts/small/" + dust);
    });

    event.create("silica_mixture");
    event.create("silica_board");

    const gpu_item = event.create("gpu").name(() => "ARGB RTX 5090x3D TI SUPER RT OC Founders Edition (aka GPU)");
    const gpu_splashes = [
        "Can even run Minecraft!",
        "Now capable of 480p video output!",
        "Hotter than your oven!",
        "Now with ultra-low energy, 600kW power draw!",
        "Now with 16MB v-ram!",
        "Lava cooled!",
        "Extra prefixes at no extra charge!",
        "Now with extra melty connectors!",
        "Now featuring limited support for Windows!",
        "Now requiring PCIE 9x64!",
        "Only available for a limited time at the low, low, price of $99,999.99! Consult your banker before purchase. Only includes GPU and circuit, case, fans, cooler, PCIe connector, PSU, CPU, RAM, motherboard, computer case, monitor(s), power cable, liquid cooler, SSD, power outlet, house, and power bill not included. GPU selection should not be made only based on advertisements",
    ];
    gpu_item.tooltip(Component.literal(gpu_splashes[new $Random().nextInt(0, gpu_splashes.length)]));

    event.create("small_quartz");

    // console.log(hammer_animation);

    // event.createCustom("sledge_hammer", () => new JavaAdapter(JItem, {
    //     initializeClient: function(consumer) {
    //         consumer.accept(hammer_animation);
    //     }
    // }, new JItem.Properties()));
});

function createPCBItem(event, name) {
    event.create(name);
    event.create(name + "_substrait");
    event.create("blank_" + name);
    event.create("incomplete_" + name);
    event.create("failed_" + name);
    let failedItem;
    let successItem;
    event.createCustom("raw_" + name, () => new BlankPCBBaseItem(() => {
        if(successItem == null) {
            successItem = Ingredient.of("kubejs:blank_" + name).getFirst();
            successItem.setCount(1);
        };
        return successItem.copy();
    }, () => {
        if(failedItem == null) {
            failedItem = Ingredient.of("kubejs:failed_" + name).getFirst();
            failedItem.setCount(1);
        };
        return failedItem.copy();
    }));
}