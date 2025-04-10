const { $Widget } = require("packages/com/lowdragmc/lowdraglib/gui/widget/$Widget");

MBDMachineEvents.onUseCatalyst("mbd2:centrifuge", e => {
    console.log(Object.keys(e.event.machine.pos));

    let pos = e.event.machine.pos;

    let dir = e.event.machine.frontFacing.get();

    if(dir == Direction.NORTH) {

    }

    let level = e.event.machine.getLevel();

    level.setBlock(pos.relative(0,4,0), "minecraft:stone");
    e.getEvent().getMachine().getLevel().time

});

var startTime = new Map();
MBDMachineEvents.onBeforeRecipeWorking("mbds:su_out", event => {
    startTime.set(event.getEvent().getMachine(), event.getEvent().getMachine().getLevel().time);
});
MBDMachineEvents.onTick("mbd2:su_out", event => {
    var e = event.getEvent();
    var time = e.getMachine().getLevel().time;
    var pos = e.getMachine().pos;
    var offset = Math.abs(JavaMath.floorMod(pos.x, 2)) != Math.abs(JavaMath.floorMod(pos.z, 2));
    var state = e.getMachine().getMachineState().name();

    if(state === "working") {
        if(startTime.has(e.getMachine()) && JavaMath.floorMod(startTime.get(e.getMachine()) - time, 40) == 20) {
            e.getMachine().getLevel().spawnParticles("minecraft:flame", false, e.getMachine().pos.x, e.getMachine().pos.y, e.getMachine().pos.z, 0, 0.1, 0, 1, 1);
            console.info("spawning particle");
        }
        
        if(offset) e.getMachine().triggerGeckolibAnim("working", 1);
        else e.getMachine().triggerGeckolibAnim("working_offset", 1);
    }
    else {
        if(offset) e.getMachine().triggerGeckolibAnim("idle", 1);
        else e.getMachine().triggerGeckolibAnim("idle_offset", 1);
    }
});
// MBDMachineEvents.onStateChanged("mbd2:su_out", event => {
//     var e = event.getEvent();
    
//     var controller = e.getMachine().getMachineState().getRenderer().getAnimatableFromMachine(e.getMachine()).getAnimatableInstanceCache().getManagerForId(0)
//     .getAnimationControllers()
//     .get("base_controller");

//     controller.setParticleKeyframeHandler(customEvent => {
//         console.log(customEvent);
        
//     });

// });

MBDMachineEvents.onBeforeRecipeModify("mbd2:flywheel", event => {
    console.log("running")
    var machine = event.getEvent().getMachine();
    var customData = machine.getCustomData();
    var level = machine.getLevel();
    var network = level.getBlock(machine.pos).getEntityData().getCompound("Network");
    //console.log(level.getBlock(machine.pos).getEntityData().getAllKeys());

    let recipe = event.getEvent().getRecipe();
    let su = network.getFloat("Capacity") - network.getFloat("Stress");

    console.log(recipe);
    

    if(su > 0) recipe = recipe.copy(ContentModifier.of(su,0), false, IO.IN);
    if(su < 0) recipe = recipe.copy(ContentModifier.of(su,0), false, IO.OUT);

    console.log(recipe);

    event.exit(recipe);
    

    switch(machine.getFrontFacing()) {
        case Direction.north : {
            return machine.pos.offset(0,-1,-1)
        }
        case Direction.west : {
            return machine.pos.offset(1,-1,0)
        }
        case Direction.south : {
            return machine.pos.offset(0,-1,1)
        }
        case Direction.east : {
            return machine.pos.offset(-1,-1,0)
        }
    }
});

function test(machine) {
    var level = machine.getLevel();
    var network = level.getBlock(machine.pos).getEntityData().getCompound("Network");
    
    console.log(Math.min(network.getFloat("Capacity") - network.getFloat("Stress"), 1024));
    return Math.min(network.getFloat("Capacity") - network.getFloat("Stress"), 1024);
}

function test2(event, machine) {
    if(machine.getFrontFacing().get() == Direction.NORTH || machine.getFrontFacing().get() == Direction.SOUTH) {
        machine.getLevel().spawnParticles("minecraft:flame", false, machine.pos.x + 0.7, machine.pos.y - 0.5625, machine.pos.z + 0.5, 0.1, 0.1, 0.1, 10, 0.001);
        machine.getLevel().spawnParticles("minecraft:flame", false, machine.pos.x + 0.3, machine.pos.y - 0.5625, machine.pos.z + 0.5, 0.1, 0.1, 0.1, 10, 0.001);
    }
    else {
        machine.getLevel().spawnParticles("minecraft:flame", false, machine.pos.x + 0.5, machine.pos.y - 0.5625, machine.pos.z + 0.3, 0.1, 0.1, 0.1, 10, 0.001);
        machine.getLevel().spawnParticles("minecraft:flame", false, machine.pos.x + 0.5, machine.pos.y - 0.5625, machine.pos.z + 0.57, 0.1, 0.1, 0.1, 10, 0.001);
    }
}

MBDMachineEvents.onTick("mbd2:super_furnace", event => {
    var machine = event.getEvent().getMachine();
    var dir = machine.getPos().offset(multiplyVector(machine.getFrontFacing().get().getNormal(), 0,0,-1)).offset(0,-1,0);
    var heat = machine.getLevel().getBlockEntity(dir).saveWithId().get("fuelLevel");
    machine.getCustomData().putInt("heat", heat)
    
})
MBDMachineEvents.onRecipeWorking("mbd2:blaze_smelter", event => {
    var machine = event.getEvent().getMachine();
    var dir = machine.getPos().offset(multiplyVector(machine.getFrontFacing().get().getNormal(), 0,0,-1)).offset(0,-1,0);
    var heat = machine.getLevel().getBlockEntity(dir).saveWithId().get("fuelLevel");
    machine.setMachineLevel(heat);
});


var HeatExchangerLogicAmbient = Java.loadClass("me.desht.pneumaticcraft.common.heat.HeatExchangerLogicAmbient")
var ContentModifier = Java.loadClass("com.lowdragmc.mbd2.api.recipe.content.ContentModifier")
var MBDRecipe = Java.loadClass("com.lowdragmc.mbd2.api.recipe.MBDRecipe")
var IO = Java.loadClass("com.lowdragmc.mbd2.api.capability.recipe.IO")

MBDMachineEvents.onBeforeRecipeModify("mbd2:radiator", event => {
    var heat = event.getEvent().getMachine().getTraitByName("heat").getHandler().getTemperature();
    var ambient = HeatExchangerLogicAmbient.atPosition(event.getEvent().getMachine().getLevel(), event.getEvent().getMachine().getPos()).getAmbientTemperature();
    if(event.getEvent().getRecipe() == null) return;
    var recipe = event.getEvent().getRecipe().copy();
    if(heat > ambient) recipe = recipe.copy(ContentModifier.of(heat / ambient, 0), false, IO.IN);
    if(heat < ambient) recipe = recipe.copy(ContentModifier.of(ambient / heat, 0), false, IO.OUT);
    
    event.getEvent().setRecipe(recipe);
});

function multiplyVector(vec, x, y, z) {
    return new Vec3i(vec.getX() * x, vec.getY() * y, vec.getZ() * z);
}
