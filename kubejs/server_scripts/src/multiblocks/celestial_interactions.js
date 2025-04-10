const { $ArrayList } = require("packages/java/util/$ArrayList");
const { $ListTag } = require("packages/net/minecraft/nbt/$ListTag");

const lightInteractingBlocks = new $ArrayList(["mbd2:celestial/mirror_small", "mbd2:celestial/mirror_medium", "mbd2:celestial/mirror_large", "mbd2:celestial/lens_small", "mbd2:celestial/crafter_small", "mbd2:celestial/lens_medium", "mbd2:celestial/crafter_medium", "mbd2:celestial/lens_large", "mbd2:celestial/collector_small", "mbd2:celestial/collector_medium", "mbd2:celestial/collector_large", "mbd2:celestial/crafter_large"]);

ItemEvents.firstRightClicked("kubejs:linking_tool", event => {
    let sneeking = event.player.isShiftKeyDown();
    let block = event.getTarget().block;
    let item = event.getItem()
    let data = item.getOrCreateTagElement("linking_tool");
    let linkedPos = NbtUtils.readBlockPos(data.getCompound("pos"));
    if (data.getCompound("pos").isEmpty()) linkedPos = null;
    let player = event.player;

    if (sneeking) {
        data.put("pos", new $CompoundTag());
        item.addTagElement("linking_tool", data);
        player.tell("cleared");
        return;
    }

    if (block == null || !lightInteractingBlocks.contains(block.id)) {
        return;
    }

    if (linkedPos == null) {
        if(getBlocksCategory(block.id).isConsumer) {
            player.tell("cannot link from block; block does not provide light");
            return;
        }
        data.put("pos", NbtUtils.writeBlockPos(block.pos));
        item.addTagElement("linking_tool", data);
        player.tell("linking");
    }
    else {
        if(getBlocksCategory(block.id).isSource) {
            player.tell("cannot link to block; block does not receive light");
            return;
        }
        if (block.pos.equals(linkedPos)) {
            player.tell("click on different block, or shift click to clear");
            return;
        }
        let linkedMachine = IMachine.ofMachine(event.level.getBlockEntity(linkedPos));
        let targetMachine = IMachine.ofMachine(event.level.getBlockEntity(block.pos));
        if(!linkedMachine.isPresent() || !targetMachine.isPresent()) {
            player.tell("block does not interact with light");
            return;
        }
        linkedMachine.get().getCustomData().put("target", NbtUtils.writeBlockPos(block.pos));

        let targetMachineData = targetMachine.get().getCustomData();
        if(targetMachineData.getBoolean("multiInput")) {
            let list = targetMachineData.getList("sources", 10);
            if(list == null) list = new $ListTag();
            list.add(NbtUtils.writeBlockPos(linkedPos));
            targetMachineData.put("sources", list);
        }
        else targetMachineData.put("source", NbtUtils.writeBlockPos(linkedPos));

        player.tell("linked to block");
        data.put("pos", new $CompoundTag());
        item.addTagElement("linking_tool", data);
    }
});

function getBlocksCategory(block) {
    for(let c = 0; c < global.lightInteractionProperties.length; c++) {
        for(let i = 0; i < global.lightInteractionProperties[c].blocks.length; i++) {
            if("mbd2:celestial/" + global.lightInteractionProperties[c].blocks[i] == block) return global.lightInteractionProperties[c];
        }
    }
}

ItemEvents.rightClicked("kubejs:hand_lens", event => {
    let playerVec = vectorFromYP(event.player.getRotationVector().y, event.player.getRotationVector().x);
    let sun = vectorFromYP(90, event.level.dayTime() / 35);
    let dir = getReflectionVector(sun, playerVec);
    let pos = event.player.getPosition(0);
    event.level.spawnParticles("minecraft:flame", false, pos.x(), pos.y(), pos.z(), dir[0], dir[1], dir[2], 0, 1);
    event.level.spawnParticles("minecraft:flame", false, pos.x(), pos.y(), pos.z(), -sun[0], -sun[1], -sun[2], 0, 1);
    event.level.spawnParticles("minecraft:flame", false, pos.x(), pos.y(), pos.z(), -playerVec[0], -playerVec[1], -playerVec[2], 0, 1);
    // drawParticleLine(event.level, "minecraft:dust 1 0 0", 1, event.player.pos, target, spread, spacing, length, speed, count, showDir, log)
});