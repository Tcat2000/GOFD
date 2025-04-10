
// MBDMachineEvents.onCustomKeyframe("mbd2:su_out", event => {
//     var level = event.getEvent().getMachine().getLevel();
//     var pos = event.getEvent().getMachine().pos;
//     var machine = event.getEvent().getMachine();
//     if(machine.getFrontFacing().get() == Direction.NORTH || machine.getFrontFacing().get() == Direction.SOUTH) {
//         level.runCommandSilent("summon embers:ember_packet " + (pos.x + 0.7) + " " + (pos.y - 0.5) + " " + (pos.z + 0.5) + " {lifetime:15, destX:" + (pos.x + 1.7) + ",destY:" + (pos.y + 1) + ",destZ:" + (pos.z + 0.5) + ",value:0}")
//         level.runCommandSilent("summon embers:ember_packet " + (pos.x + 0.3) + " " + (pos.y - 0.5) + " " + (pos.z + 0.5) + " {lifetime:15, destX:" + (pos.x - 0.2) + ",destY:" + (pos.y + 1) + ",destZ:" + (pos.z + 0.5) + ",value:0}")
//     }
//     else {
//         machine.getLevel().spawnParticles("minecraft:flame", false, machine.pos.x + 0.5, machine.pos.y - 0.5625, machine.pos.z + 0.3, 0, 0, 0, 10, 0.001);
//         machine.getLevel().spawnParticles("minecraft:flame", false, machine.pos.x + 0.5, machine.pos.y - 0.5625, machine.pos.z + 0.57, 0, 0, 0, 10, 0.001);
//     }
// });

// const Minecraft = Java.loadClass("net.minecraft.client.Minecraft");
// const rlse = Java.loadClass("net.minecraftforge.client.event.RenderLevelStageEvent");
// const RenderType = Java.loadClass("net.minecraft.client.renderer.RenderType");

// NativeEvents.onEvent(rlse, event => {
//     // let { poseStack, camera, stage, partialTick } = event;
//     if(event.getStage().toString() != "minecraft:after_solid_blocks") return;
//     // let buffer = Minecraft.getInstance().renderBuffers().bufferSource();
//     // let level = Minecraft.getInstance().level;
//     // poseStack.pushPose();
//     // poseStack.translate(
//     //     5 - event.getCamera().getPosition().x,
//     //     5 - event.getCamera().getPosition().y,
//     //     5 - event.getCamera().getPosition().z
//     // );

//     // Minecraft.getInstance().getBlockRenderer().renderSingleBlock(Blocks.ACACIA_DOOR.defaultBlockState(), poseStack, buffer, level, new BlockPos(5, 5, 5), 5, 5);
//     // poseStack.popPose();
    
//     // bufferSource.endBatch(RenderType.solid());
//     // bufferSource.endBatch(RenderType.translucent());

//     let minecraft = Minecraft.getInstance();
//     let level = minecraft.level;
//     if (level == null) return;
//     console.log(1);

//     let poseStack = event.getPoseStack();
//     let bufferSource = minecraft.renderBuffers().bufferSource();
//     let blockRenderer = minecraft.getBlockRenderer();

//     // Define the position and state of the fake block
//     let fakeBlockPos = new BlockPos(minecraft.player.getX(), minecraft.player.getY() + 5, minecraft.player.getZ());
//     let fakeBlockState = Blocks.DIAMOND_BLOCK.defaultBlockState();
//     console.log(2);

//     // Push the current matrix to the stack
//     poseStack.pushPose();
// //(BlockState,PoseStack,MultiBufferSource, int pPackedLight, int pPackedOverlay, net.minecraftforge.client.model.data.ModelData modelData, net.minecraft.client.renderer.RenderType renderType)
// //(BlockState,PoseStack,MultiBufferSource,net.minecraft.client.multiplayer.ClientLevel,net.minecraft.core.BlockPos,number,number)
//     try {
//         console.log(fakeBlockPos.x + " " + event.getCamera().getPosition());
//         // Translate the matrix to the fake block's position
//         poseStack.translate(
//                 fakeBlockPos.getX() - event.getCamera().getPosition().x(),
//                 fakeBlockPos.getY() - event.getCamera().getPosition().y(),
//                 fakeBlockPos.getZ() - event.getCamera().getPosition().z()
//         );
//         console.log(3);

//         // Render the fake block
//         blockRenderer.renderSingleBlock(
//                 fakeBlockState,
//                 poseStack,
//                 bufferSource,
//                 0, // Overlay light
//                 0 // Overlay texture
//         );
//         console.log(4);

//         // Pop the matrix to restore the previous state
//         poseStack.popPose();
//         console.log(5);
//     }
//     finally {
//         poseStack.popPose(); // Ensure popPose is always called
//     }
//     console.log(6);

//     // Finish drawing
//     // bufferSource.endBatch(RenderType.solid());
//     // bufferSource.endBatch(RenderType.translucent());
//     console.log(7);
// });