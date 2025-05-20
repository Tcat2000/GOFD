const { $TextTexture$TextType } = require("packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture$TextType");
const { $WidgetType } = require("packages/dev/ftb/mods/ftblibrary/ui/$WidgetType");
const PatternPreviewWidget = Java.loadClass("com.lowdragmc.mbd2.api.pattern.PatternPreviewWidget");
const MBDRegistries = Java.loadClass("com.lowdragmc.mbd2.api.registry.MBDRegistries");
const MultiblockMachineDefinition = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.MultiblockMachineDefinition");
const IMachine = Java.loadClass("com.lowdragmc.mbd2.api.machine.IMachine");
const NbtUtils = Java.loadClass("net.minecraft.nbt.NbtUtils");
const CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag");
const FX = Java.loadClass("com.lowdragmc.photon.client.fx.FX");
const MachineFX = Java.loadClass("com.lowdragmc.mbd2.integration.photon.MachineFX");
const Minecraft = Java.loadClass("net.minecraft.client.Minecraft");
const NbtIo = Java.loadClass("net.minecraft.nbt.NbtIo");
const FXHelper = Java.loadClass("com.lowdragmc.photon.client.fx.FXHelper");
const ArrayList = Java.loadClass("java.util.ArrayList");

// const multiblockDefinitions = MBDRegistries.MACHINE_DEFINITIONS.values().stream().filter(def => def instanceof MultiblockMachineDefinition).toList();
const entries = ["v12","test","whatever"];

ItemEvents.firstRightClicked('kubejs:projector', event => {
    if(event.player.isShiftKeyDown()) ItemUIFactory.INSTANCE.openUI(event.player, event.hand, "projector_item_ui");
    else if(!event.item.getTagElement("projector").getInt("machine") != null) {
        let hitBlock = event.getTarget().block;
        let proBlock = Block.getBlock("mbd2:projector/" + hitBlock.getId().split(":", 2)[1]);
        if(proBlock != Blocks.AIR) {
            let tag = NbtUtils.writeBlockState(event.level.getBlock(hitBlock.pos).getBlockState());
            event.level.setBlock(hitBlock.pos, proBlock.defaultBlockState(), 0);
            let machine = IMachine.ofMachine(event.level.getBlockEntity(hitBlock.pos)).get();
            machine.getCustomData().put("block", tag);
            machine.getCustomData().putInt("machine", event.item.getTagElement("projector").getInt("machine"));
        }
    }
})

ItemEvents.firstRightClicked('minecraft:stick', event => {
    let tag = event.item.getOrCreateTagElement("projector");
    console.log(tag);
    tag.putInt("str", tag.getInt("str") + 1);
    event.item.addTagElement("projector", tag);
})

function createUI(item) {
    console.log(multiblockDefinitions);

    let creator = UIProject.loadUIFromFile("ldlib:projector");
    let root = creator.get();

    let button_normal = new ResourceBorderTexture("ldlib:textures/button.png", 200, 20, 2, 14);
    let button_pressed = new ResourceBorderTexture("ldlib:textures/button_disabled.png", 200, 20, 2, 14);

    let scrollPane = root.getFirstWidgetById("scroll_pane");
    let buttonDone = root.getFirstWidgetById("button_done");

    let widgets = new Array(multiblockDefinitions.length);

    let data = item.getOrCreateTagElement("projector");
    let selected = data.getInt("machine");
    if(selected == null || selected >= multiblockDefinitions.length) selected = 0;
    console.log(selected);
    let pattern = PatternPreviewWidget.getPatternWidget(multiblockDefinitions[selected]);
    pattern.setSelfPosition(100, 0);
    root.addWidget(pattern);


    let I = 0;
    multiblockDefinitions.forEach(entry => {
        const i = I;
        let widget = new SwitchWidget(0, 0, 78, 16, null);
        let textTexture = new TextTexture(entry.toString()).setType($TextTexture$TextType.ROLL);
        widget.setBaseTexture(new GuiTextureGroup(button_normal, textTexture));
        widget.setPressedTexture(new GuiTextureGroup(button_pressed, textTexture));
        scrollPane.addWidget(widget);
        if(selected == i) widget.setPressed(true);
        widget.setOnPressCallback((data, pressed) => {
            if(pressed) {
                widgets.forEach((other) => {
                    if(other != widget) other.setPressed(false);
                });

                selected = i;

                root.removeWidget(pattern);
                pattern = PatternPreviewWidget.getPatternWidget(multiblockDefinitions[i]);
                pattern.setSelfPosition(100, 0);
                root.addWidget(pattern);
            }
        });
        root.getGui().
        widgets[widgets.length] = widget;
        I++;
    });

    buttonDone.setOnPressCallback(context => {
        data.putInt("machine", selected);
        item.addTagElement("projector", data);
    });
    
    return root;
}

LDLibUI.item("projector_item_ui", e => {
    // step 2 and step 4

    // let player = e.player
    // let hand = e.hand
    // let held = e.held

    var ui = createUI(e.getHeld());
    e.success(ui);
})

MBDMachineEvents.onRightClick("mbd2:projector/rs_engineering", event => {
    let machine = event.getEvent().getMachine();
    machine.emitPhotonFx("test", new ResourceLocation("photon:diamond_block"), new Vec3f(0,1,0), Vec3f(0,45,0), 5, true);
    triggerFX(machine, "test", new Vec3f(0,1,0), new Vec3f(0,45,0), 0, true);
})

function triggerFX(machine, id, offset, rotation, delay, forcedDeath) {
    let fx = FXHelper.getFX(new ResourceLocation("photon:diamond_block"));
    let rawData = fx.serializeNBT();
    console.log(rawData["mainFX"]["fxObjects"][0]["config"]["renderer"]["model"]["modelLocation"]);
    rawData["mainFX"]["fxObjects"][0]["config"]["renderer"]["model"]["modelLocation"] = "minecraft:block/gold_block"
    console.log(rawData["mainFX"]["fxObjects"][0]["config"]["renderer"]["model"]["modelLocation"]);
    console.log(Object.keys(fx));
    //net.minecraft.resources.ResourceLocation,  java.util.ArrayList,  net.minecraft.nbt.CompoundTag
    //ResourceLocation location, List<IParticleEmitter> emitters, CompoundTag rawData
    let newFx = FX();
    newFx.setFxLocation(new ResourceLocation("photon:test"));
    newFx.deserializeNBT(rawData.getCompound("fx"));
    console.log(Object.keys(newFx));
    
    var machineFX = new MachineFX(new FX(), id, machine); // new ResourceLocation("photon:test"), getEmitters(rawData), rawData {"rawData": rawData, "emitters": getEmitters(rawData), "location": new ResourceLocation("photon:test")}
    console.log(machineFX)
    machineFX.setOffset(offset.x, offset.y, offset.z);
    machineFX.setRotation(rotation.x, rotation.y, rotation.z);
    machineFX.setDelay(delay);
    machineFX.setForcedDeath(forcedDeath);
    machineFX.start();
}