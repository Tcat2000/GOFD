const RenderType = Java.loadClass("net.minecraft.client.renderer.RenderType");
const DefaultVertexFormat = Java.loadClass("com.mojang.blaze3d.vertex.DefaultVertexFormat");
const VertexFormat = Java.loadClass("com.mojang.blaze3d.vertex.VertexFormat");
const IMachine = Java.loadClass("com.lowdragmc.mbd2.api.machine.IMachine");

const MultiblockMachineDefinition = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.MultiblockMachineDefinition");
const MBDMachineDefinition = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition");

const multiblockDefinitions = MBDRegistries.MACHINE_DEFINITIONS.values().stream().filter(def => def instanceof MultiblockMachineDefinition).toList();
const singleblockDefinitions = MBDRegistries.MACHINE_DEFINITIONS.values().stream().filter(def => def instanceof MBDMachineDefinition).toList();

// let rt_projector = RenderType.create(
//     "kubejs:rendertype_projection",
//     DefaultVertexFormat.BLOCK,
//     VertexFormat.Mode.QUADS,
//     RenderType.BIG_BUFFER_SIZE,
//     true,
//     true,
//     RenderType.CompositeState.builder()
//         .setShaderState(new RenderStateShard.ShaderStateShard(IPShaders::getProjectionStaticShader))
//         .setTextureState(BLOCK_SHEET_MIPPED)
//         .setTransparencyState(TRANSLUCENT_TRANSPARENCY)
//         .setOutputState(TRANSLUCENT_TARGET)
//         .setDepthTestState(DEPTH_ALWAYS)
//         .createCompositeState(false)
// );


// singleblockDefinitions.forEach(def => {
//     if(!def.id().toString().matches(".*:projector/.*")) return;
//     console.log(def.id());
//     MBDMachineEvents.onClientMachineSetup(def.id(), event => {
//         console.log("machine setup", event.getEvent().getMachine().getCustomData());
//         setupBER(event, event.getEvent().getMachine().getCustomData());
//     });

//     MBDMachineEvents.onCustomDataUpdate(def.id(), event => {
//         console.log("data updated", event.getEvent().getMachine().getCustomData());
//         setupBER(event, event.getEvent().getMachine().getCustomData());
//     });
// });

// multiblockDefinitions.forEach(def => {
//     MBDMachineEvents.onRightClick(def.id(), event => {
//         console.log("data update event");
//         // let projectionData = event.getEvent().newValue.getCompound("projection");
//         // let project = projectionData.getBoolean("project");
//         // if(projectionData == null || project == null) return;
//         let pattern = def.blockPatternFactory().apply(event.getEvent().getMachine());
        
        

//         let world = event.getEvent().getMachine().getLevel();
//         let minZ = -pattern.centerOffset[4];
//         // worldState.clean();
//         let controller = event.getEvent().getMachine();
//         let centerPos = controller.getPos();
//         let facing = controller.getFrontFacing().orElse(Direction.NORTH);
//         let cacheGlobal = worldState.getGlobalCount();
//         let cacheLayer = worldState.getLayerCount();
//         let blocks = {};
//         blocks.put(centerPos, controller);
//         for (let c = 0, z = minZ++, r; c < this.fingerLength; c++) {
//             for (r = 0; r < aisleRepetitions[c][0]; r++) {
//                 cacheLayer.clear();
//                 for (let b = 0, y = -centerOffset[1]; b < this.thumbLength; b++, y++) {
//                     for (let a = 0, x = -centerOffset[0]; a < this.palmLength; a++, x++) {
//                         let predicate = this.blockMatches[c][b][a];
//                         let pos = setActualRelativeOffset(x, y, z, facing).offset(centerPos.getX(), centerPos.getY(), centerPos.getZ());
//                         worldState.update(pos, predicate);
//                         if (!world.isEmptyBlock(pos)) {
//                             blocks.put(pos, world.getBlockState(pos));
//                             predicate.limited.forEach(limit => {
//                                 limit.testLimited(worldState);
//                             })
//                         } else {
//                             let find = false;
//                             let infos = new BlockInfo[0];

//                             let running = true;
//                             predicate.limited.forEach(limit => {
//                                 if(!running) return;
//                                 if (limit.controllerFront.isEnable() && limit.controllerFront.getValue() != facing) return;
//                                 if (limit.minLayerCount > 0) {
//                                     if (!cacheLayer.containsKey(limit)) {
//                                         cacheLayer.put(limit, 1);
//                                     } else if (cacheLayer.get(limit) < limit.minLayerCount && (limit.maxLayerCount == -1 || cacheLayer.get(limit) < limit.maxLayerCount)) {
//                                         cacheLayer.put(limit, cacheLayer.get(limit) + 1);
//                                     } else {
//                                         return;
//                                     }
//                                 } else {
//                                     return;
//                                 }
//                                 infos = limit.candidates == null ? null : limit.candidates.get();
//                                 find = true;
//                                 running = false;
//                             });
//                             if (!find) {

//                                 let running = true;
//                                 predicate.limited.forEach(limit => {
//                                     if (limit.controllerFront.isEnable() && limit.controllerFront.getValue() != facing) return;
//                                     if (limit.minCount > 0) {
//                                         if (!cacheGlobal.containsKey(limit)) {
//                                             cacheGlobal.put(limit, 1);
//                                         } else if (cacheGlobal.get(limit) < limit.minCount && (limit.maxCount == -1 || cacheGlobal.get(limit) < limit.maxCount)) {
//                                             cacheGlobal.put(limit, cacheGlobal.get(limit) + 1);
//                                         } else {
//                                             return;
//                                         }
//                                     } else {
//                                         return;
//                                     }
//                                     infos = limit.candidates == null ? null : limit.candidates.get();
//                                     find = true;
//                                     running = false;
//                                 });
//                             }
//                                 if (!find) { // no limited
//                                     predicate.limited.forEach(limit => {
//                                     if (limit.controllerFront.isEnable() && limit.controllerFront.getValue() != facing) return;
//                                     if (limit.maxLayerCount != -1 && cacheLayer.getOrDefault(limit, Integer.MAX_VALUE) == limit.maxLayerCount)
//                                         return;
//                                     if (limit.maxCount != -1 && cacheGlobal.getOrDefault(limit, Integer.MAX_VALUE) == limit.maxCount)
//                                         return;
//                                     if (cacheLayer.containsKey(limit)) {
//                                         cacheLayer.put(limit, cacheLayer.get(limit) + 1);
//                                     } else {
//                                         cacheLayer.put(limit, 1);
//                                     }
//                                     if (cacheGlobal.containsKey(limit)) {
//                                         cacheGlobal.put(limit, cacheGlobal.get(limit) + 1);
//                                     } else {
//                                         cacheGlobal.put(limit, 1);
//                                     }
//                                     infos = ArrayUtils.addAll(infos, limit.candidates == null ? null : limit.candidates.get());
//                                 });
//                                 predicate.common.forEach(common => {
//                                     if (common.controllerFront.isEnable() && common.controllerFront.getValue() != facing) return;
//                                     infos = ArrayUtils.addAll(infos, common.candidates == null ? null : common.candidates.get());
//                                 });
//                             }

//                             let candidates = [];
//                             if (infos != null) {
//                                 infos.forEach(info => {
//                                     if (info.getBlockState().getBlock() != Blocks.AIR) {
//                                         candidates.add(info.getItemStackForm());
//                                     }
//                                 })
//                             }

//                             // check inventory
//                             let found = null;
//                             let foundSlot = -1;
//                             if (!player.isCreative()) {
//                                 for (let i = 0; i < player.getInventory().items.size(); i++) {
//                                     let itemStack = player.getInventory().items.get(i);
//                                     if (candidates.stream().anyMatch(candidate => ItemStack.isSameItemSameTags(candidate, itemStack)) && !itemStack.isEmpty() && (itemStack.getItem() instanceof BlockItem || itemStack.getItem() instanceof BucketItem)) {
//                                         found = itemStack.copy();
//                                         foundSlot = i;
//                                         break;
//                                     }
//                                 }
//                             } else {
//                                 let running = true;
//                                 candidates.forEach(candidate => {
//                                     found = candidate.copy();
//                                     if (!found.isEmpty() && (found.getItem() instanceof BlockItem || found.getItem() instanceof BucketItem)) {
//                                         running = false;;
//                                     }
//                                     found = null;
//                                 })
//                             }
//                             if (found == null) continue;
//                             let placed = false;
//                             if (found.getItem() instanceof BlockItem) {
//                                 let itemBlock = found.getItem();
//                                 let context = new BlockPlaceContext(world, player, InteractionHand.MAIN_HAND, found, BlockHitResult.miss(player.getEyePosition(0), Direction.UP, pos));
//                                 let interactionResult = itemBlock.place(context);
//                                 placed = interactionResult != InteractionResult.FAIL;
//                             } else if (found.getItem() instanceof BucketItem) {
//                                 let itemBucket = found.getItem();
//                                 placed = itemBucket.emptyContents(player, world, pos, null, null);
//                             }
//                             if (placed && foundSlot >= 0) {
//                                 player.getInventory().getItem(foundSlot).shrink(1);
//                             }
//                             var machineOptional = IMachine.ofMachine(world, pos);
//                             if (machineOptional.isPresent()) {
//                                 blocks.put(pos, machineOptional.orElseThrow());
//                             } else {
//                                 blocks.put(pos, world.getBlockState(pos));
//                             }
//                         }
//                     }
//                 }
//                 z++;
//             }
//         }
//         blocks.forEach((pos, block) => { // adjust facing
//             if (!(block instanceof IMultiController)) {
//                 if (block instanceof BlockState) {
//                     let itemBucket = block;
//                     console.log(itemBucket)
//                 } else if (block instanceof IMachine) {
//                     let block = itemBucket;
//                     console.log(block);
//                 }
//             }
//         });
//     });
// });

function setupBER(event, data) {
    let index = data.getInt("machine");
    if(index >= 0 || index == undefined) index = 0;
    console.log(index, multiblockDefinitions);
    let pattern = multiblockDefinitions[index].blockPatternFactory().apply(multiblockDefinitions[index])[0];
    let blocks = pattern.blocks;
    event.getEvent().getMachine().getHolder().setRenderLogic(renderData => {
        let blockRenderer = renderData.context.getBlockRenderDispatcher();
        let blockEntity = renderData.blockEntity;
        let poseStack = renderData.poseStack;
        let bufferSource = renderData.bufferSource;
        let packedLight = renderData.packedLight;
        let packedOverlay = renderData.packedOverlay;

        console.log(IMachine.ofMachine(blockEntity).get().getCustomData());
    
        let lastChange = new BlockPos(0,0,0);
        poseStack.pushPose();
        for(let x = 0; x < blocks.length; x++) {
            for(let y = 0; y < blocks.length; y++) {
                for(let z = 0; z < blocks.length; z++) {
                    let blockInfo = blocks[x][y][z];
                    let state = blockInfo.blockState;
                    
                    poseStack.translate(x - lastChange.x, y - lastChange.y, z - lastChange.z);
                    lastChange = new BlockPos(x,y,z);

                    blockRenderer.renderSingleBlock(
                        state,
                        poseStack,
                        bufferSource,
                        packedLight,
                        packedOverlay
                    );
                }
            }
        }
        poseStack.popPose();
    });
}