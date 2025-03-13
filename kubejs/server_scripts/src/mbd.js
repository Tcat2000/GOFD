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
MBDMachineEvents.onStateChanged("mbd2:su_out", event => {
    var e = event.getEvent();
    
    var controller = e.getMachine().getMachineState().getRenderer().getAnimatableFromMachine(e.getMachine()).getAnimatableInstanceCache().getManagerForId(0)
    .getAnimationControllers()
    .get("base_controller");

    controller.setParticleKeyframeHandler(customEvent => {
        console.log(customEvent);
        
    });
    e.getMachine().fac

});
MBDMachineEvents.onCustomKeyframeTrigger("mbd2:su_out", event => {
    var level = event.getEvent().getMachine().getLevel();
    var pos = event.getEvent().getMachine().pos;
    var machine = event.getEvent().getMachine();
    if(machine.getFrontFacing().get() == Direction.NORTH || machine.getFrontFacing().get() == Direction.SOUTH) {
        level.runCommandSilent("summon embers:ember_packet " + (pos.x + 0.7) + " " + (pos.y - 0.5) + " " + (pos.z + 0.5) + " {lifetime:15, destX:" + (pos.x + 1.7) + ",destY:" + (pos.y + 1) + ",destZ:" + (pos.z + 0.5) + ",value:0}")
        level.runCommandSilent("summon embers:ember_packet " + (pos.x + 0.3) + " " + (pos.y - 0.5) + " " + (pos.z + 0.5) + " {lifetime:15, destX:" + (pos.x - 0.2) + ",destY:" + (pos.y + 1) + ",destZ:" + (pos.z + 0.5) + ",value:0}")
    }
    else {
        machine.getLevel().spawnParticles("minecraft:flame", false, machine.pos.x + 0.5, machine.pos.y - 0.5625, machine.pos.z + 0.3, 0, 0, 0, 10, 0.001);
        machine.getLevel().spawnParticles("minecraft:flame", false, machine.pos.x + 0.5, machine.pos.y - 0.5625, machine.pos.z + 0.57, 0, 0, 0, 10, 0.001);
    }
});

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
    var dir;
    if(machine.getFrontFacing().get() == Direction.north) {
        dir = machine.pos.offset(0,-1,1)
    }
    else if(machine.getFrontFacing().get() == Direction.west) {
        dir = machine.pos.offset(1,-1,0)
    }
    else if(machine.getFrontFacing().get() == Direction.south) {
        dir = machine.pos.offset(0,-1,-1)
    }
    else if(machine.getFrontFacing().get() == Direction.east) {
        dir = machine.pos.offset(-1,-1,0)
    }
    var heat = machine.getLevel().getBlockEntity(dir).saveWithId().get("fuelLevel");
    machine.getCustomData().putInt("heat", heat)
    
})


/*

[03:24:54] [INFO] src/mbd.js#31: transitionLength
[03:24:54] [INFO] src/mbd.js#31: getClass
[03:24:54] [INFO] src/mbd.js#31: triggeredAnimation
[03:24:54] [INFO] src/mbd.js#31: wait
[03:24:54] [INFO] src/mbd.js#31: getName
[03:24:54] [INFO] src/mbd.js#31: setAnimationSpeed
[03:24:54] [INFO] src/mbd.js#31: receiveTriggeredAnimations
[03:24:54] [INFO] src/mbd.js#31: notifyAll
[03:24:54] [INFO] src/mbd.js#31: currentAnimation
[03:24:54] [INFO] src/mbd.js#31: getBoneAnimationQueues
[03:24:54] [INFO] src/mbd.js#31: soundKeyframeHandler
[03:24:54] [INFO] src/mbd.js#31: getAnimationState
[03:24:54] [INFO] src/mbd.js#31: notify
[03:24:54] [INFO] src/mbd.js#31: triggerableAnim
[03:24:54] [INFO] src/mbd.js#31: setSoundKeyframeHandler
[03:24:54] [INFO] src/mbd.js#31: boneAnimationQueues
[03:24:54] [INFO] src/mbd.js#31: isPlayingTriggeredAnimation
[03:24:54] [INFO] src/mbd.js#31: setOverrideEasingTypeFunction
[03:24:54] [INFO] src/mbd.js#31: hashCode
[03:24:54] [INFO] src/mbd.js#31: class
[03:24:54] [INFO] src/mbd.js#31: currentRawAnimation
[03:24:54] [INFO] src/mbd.js#31: process
[03:24:54] [INFO] src/mbd.js#31: animationSpeedHandler
[03:24:54] [INFO] src/mbd.js#31: getCurrentAnimation
[03:24:54] [INFO] src/mbd.js#31: setAnimationSpeedHandler
[03:24:54] [INFO] src/mbd.js#31: getTriggeredAnimation
[03:24:54] [INFO] src/mbd.js#31: hasAnimationFinished
[03:24:54] [INFO] src/mbd.js#31: particleKeyframeHandler
[03:24:54] [INFO] src/mbd.js#31: setAnimation
[03:24:54] [INFO] src/mbd.js#31: setCustomInstructionKeyframeHandler
[03:24:54] [INFO] src/mbd.js#31: animation
[03:24:54] [INFO] src/mbd.js#31: animationSpeed
[03:24:54] [INFO] src/mbd.js#31: customInstructionKeyframeHandler*/