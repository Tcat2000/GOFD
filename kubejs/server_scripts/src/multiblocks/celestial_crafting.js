const { $IO } = require("packages/com/lowdragmc/mbd2/api/capability/recipe/$IO");
const { $ContentModifier } = require("packages/com/lowdragmc/mbd2/api/recipe/content/$ContentModifier");
const { $Color } = require("packages/java/awt/$Color");
const { $ArrayList } = require("packages/java/util/$ArrayList");
const { $Random } = require("packages/java/util/$Random");
const { $ParticleOptions } = require("packages/net/minecraft/core/particles/$ParticleOptions");
const { $CompoundTag } = require("packages/net/minecraft/nbt/$CompoundTag");
const { $ListTag } = require("packages/net/minecraft/nbt/$ListTag");

const NbtUtils = Java.loadClass("net.minecraft.nbt.NbtUtils");
const Integer = Java.loadClass("java.lang.Integer");
const Minecraft = Java.loadClass("net.minecraft.client.Minecraft");

const moonColor = [0.9, 0.9, 1];
const sunColor = [1, 0.914, 0.75];

const dyeColors = []; // https://minecraft.wiki/w/Color/Java_Edition_dye_color_changes_in_17w06a
const floatColors = [[249, 255, 254],[157, 157, 151],[71, 79, 82],[29, 29, 33],[131, 84, 50],[176, 46, 38],[249, 128, 29],[254, 216, 61],[128, 199, 31],[94, 124, 22],[22, 156, 156],[58, 179, 218],[60, 68, 170],[137, 50, 184],[199, 78, 189],[243, 139, 170]];
floatColors.forEach((float, i) => {
    dyeColors[i] = [Math.round(float[0] / 255), Math.round(float[1] / 255), Math.round(float[2] / 255)];
})

MBDMachineEvents.onRightClick("mbd2:celstial/pedistal", event => {
    let slot = event.getEvent().getMachine().getTraitByName("holder");
    let hanSlot = event.getEvent().heldItem;

    // if(slot.getCapabilityProviderTraits()[0].getCapability());
});

global.lightInteractionProperties = [
    {"blocks":["lens_small", "mirror_small"], "offset":[0.5,2.5,0.5], "size":1, "isSource":false, "isConsumer":false, "multiInput":false,"colored":true},
    {"blocks":["collector_small"], "offset":[0.5,3.5,0.5], "size":1, "isSource":true, "isConsumer":false, "multiInput":false,"colored":false},
    {"blocks":["crafter_small"], "offset":[0.5,0.5,0.5], "size":1, "isSource":false, "isConsumer":true, "multiInput":true,"colored":false},

    {"blocks":["lens_medium", "mirror_medium"], "offset":[0.5,3.5,0.5], "size":2, "isSource":false, "isConsumer":false, "multiInput":false,"colored":true},
    {"blocks":["collector_medium"], "offset":[0.5,4.5,0.5], "size":2, "isSource":true, "isConsumer":false, "multiInput":false,"colored":false},
    {"blocks":["crafter_medium"], "offset":[0.5,0.5,0.5], "size":2, "isSource":false, "isConsumer":true, "multiInput":true,"colored":false},
    
    {"blocks":["lens_large", "mirror_large"], "offset":[0.5,4.5,0.5], "size":3, "isSource":false, "isConsumer":false, "multiInput":false,"colored":true},
    {"blocks":["collector_large"], "offset":[0.5,5.5,0.5], "size":3, "isSource":true, "isConsumer":false, "multiInput":false,"colored":false},
    {"blocks":["crafter_large"], "offset":[0.5,0.5,0.5], "size":3, "isSource":false, "isConsumer":true, "multiInput":true,"colored":false},
];

global.lightInteractionProperties.forEach(category => {
    category.blocks.forEach(block => {
        console.log("mbd2:celestial/" + block);
        MBDMachineEvents.onTick("mbd2:celestial/" + block, event => {
            let e = event.getEvent();
            let machine = e.getMachine();
            let level = machine.getLevel();
            let data = machine.getCustomData();
            let pos = addVectors(vecA(machine.pos), category.offset);//[machine.pos.x + 0.5, machine.pos.y + 2.5, machine.pos.z + 0.5];

            data.putBoolean("isSource", category.isSource);
            data.putBoolean("isConsumer", category.isConsumer);
            data.put("lightOffset", NBTWriteVector(category.offset));
            data.putBoolean("multiInput", category.multiInput);
            
            let sourceTag = data.getCompound("source");
            let targetTag = data.getCompound("target");
            let sourceMachine = IMachine.ofMachine(level.getBlockEntity(NbtUtils.readBlockPos(sourceTag)));
            let targetMachine = IMachine.ofMachine(level.getBlockEntity(NbtUtils.readBlockPos(targetTag)));
            let sourcePos = addVectors(vecA(NbtUtils.readBlockPos(sourceTag)), sourceMachine.isPresent() ? NBTReadVector(sourceMachine.get().getCustomData().getCompound("lightOffset")) : [0,0,0]);
            let targetPos = addVectors(vecA(NbtUtils.readBlockPos(targetTag)), targetMachine.isPresent() ? NBTReadVector(targetMachine.get().getCustomData().getCompound("lightOffset")) : [0,0,0]);
            let sourceDir = subVectors(sourcePos, pos);

            let lightStack;
            let lit;
            if(category.isSource) {
                if(targetMachine.isPresent()) {
                    let targetMachineData = targetMachine.get().getCustomData();
                    lightStack = LightStack("sun", category.size); // later: calculalte by time ect.
                    lit = BlockPosEqual(NbtUtils.readBlockPos(targetMachineData.getCompound("source")), machine.pos);
                }
            }
            else {
                if(sourceMachine.isPresent() && targetMachine.isPresent()) {
                    let sourceMachineData = sourceMachine.get().getCustomData();
                    let targetMachineData = targetMachine.get().getCustomData();
                    if(sourceMachineData.getBoolean("isConsumer")) return;
                    lightStack = NBTReadLightStack(sourceMachineData.getCompound("light"));
                    if(lightStack.size > category.size) lightStack.size = category.size;

                    let sources = targetMachineData.getList("sources", 10);

                    lit = sourceMachineData.getBoolean("lit") && BlockPosEqual(NbtUtils.readBlockPos(sourceMachineData.getCompound("target")), machine.pos) && (BlockPosEqual(NbtUtils.readBlockPos(targetMachineData.getCompound("source")), machine.pos) || sources.contains(NbtUtils.writeBlockPos(machine.pos)));
                }
                else {
                    lightStack = LightStack("sun", 1);
                    lit = false;
                }
            }
            if(category.colored && data.contains("color")) lightStack.addColor(data.getInt("color"))
            data.put("light", NBTWriteLightStack(lightStack));
            data.putBoolean("lit", lit);

            if(category.isConsumer) {
                // do consumer things
            }
            else {
                if(!Platform.isClientEnvironment() || Minecraft.getInstance().player == null) return;
                // if(dist <= 1) size /= 10;
                // if(dist <= 2) size /= 7;
                // if(dist <= 3) size /= 5;
                // if(dist <= 4) size /= 3;
                // if(dist <= 4) size /= 2;
                // if(dist <= 4) size /= 1.5;
                if(lit) drawParticleLine(level, "minecraft:dust" + dustColor(lightStack.getColor()), category.size, pos, targetPos, [lightStack.size, lightStack.size, lightStack.size], 0.25, 1, 0, category.size, true, false);
            }

            
            // else color = NBTReadColor(data.getCompound("color"));

            // let targetDir = subVectors(targetPos, pos);
            // let difVec = addVectors(vectorHalfway(targetDir, sourceDir), pos);

            // drawParticleeLine(level, "minecraft:flame", pos, difVec, 0.25, 3, 0, false, false);
        });
        MBDMachineEvents.onRightClick("mbd2:celestial/" + block, event => {
            let data = event.getEvent().getMachine().getCustomData();
            data.putInt("color", (data.getInt("color") + 1) % 16);
        });
    })
});

function dustColor(color) {
    return " " + color[0] + " " + color[1] + " " + color[2];
}

const random = new $Random();
function drawParticleLine(level, particle, size, pos, target, spread, spacing, length, speed, count, showDir, log) {
    if(log) console.log(target, pos)
    let dif = subVectors(target, pos);
    let max = magVector(dif);
    let dir = mulVectors(divVectors(dif, max), spacing);

    if(log) console.log(dif, divVectors(dif, max), mulVectors(divVectors(dif, max), spacing));

    let pPos = pos;
    if(log) console.log(length * max / spacing);
    let playerPos = vecA(Minecraft.getInstance().player);
    for (let i = 0; i <= length * max / spacing; i++) {

        let pParticle = particle;
        let pCount = count;
        let show = true;

        if(size != undefined) {
            let pSize = size;
            let dist = distVectors(pPos, playerPos);
            if(dist <= size * 3) pSize = pSize * dist / (size * 3);
            pParticle += " " + pSize;
        }
        if(size != undefined) {
            let pSize = size;
            let dist = distVectors(pPos, playerPos);
            if(dist <= size * 3) pCount = pCount * dist / (size * 3);
            if(pCount < 1 && random.nextFloat(0,1) > pCount) show = false;
            pCount = Math.max(pCount, 1);
        }
        if(show) if(spread != null && count > 0) level.spawnParticles(pParticle, false, pPos[0], pPos[1], pPos[2], spread[0] / 5, spread[1] / 5, spread[2] / 5, pCount, speed);
        else level.spawnParticles(pParticle, false, pPos[0], pPos[1], pPos[2], dir[0], dir[1], dir[2], 0, speed);
        if(log) console.log(pPos);
        pPos = addVectors(pPos, dir);
    }

    if (showDir) {
        let tick = level.time % (length * max / spacing);
        pPos = addVectors(pos, mulVectors(dir, tick));
        level.spawnParticles("minecraft:dust 0 1 0 1", false, pPos[0], pPos[1], pPos[2], dir[0], dir[1], dir[2], 0, speed);
    }
}

function vectorHalfway(vecA, vecB) {
    // Normalize both input vectors
    const normalizedA = normalize(vecA);
    const normalizedB = normalize(vecB);
    
    // Add the normalized vectors together
    //const sumVector = normalizedA.map((val, index) => val + normalizedB[index]);
    const sumVector = addVectors(normalizedA, normalizedB);
    
    // Normalize the resulting sum vector to get the halfway direction
    return normalize(sumVector);
}

function addVectors(vecA, b) {
    if(typeof b == "number") return [vecA[0] + b, vecA[1] + b, vecA[2] + b];
    return [vecA[0] + b[0], vecA[1] + b[1], vecA[2] + b[2]];
}
function subVectors(vecA, b) {
    if(typeof b == "number") return [vecA[0] - b, vecA[1] - b, vecA[2] - b];
    return [vecA[0] - b[0], vecA[1] - b[1], vecA[2] - b[2]];
}
function mulVectors(vecA, b) {
    if(typeof b == "number") return [vecA[0] * b, vecA[1] * b, vecA[2] * b];
    return [vecA[0] * b[0], vecA[1] * b[1], vecA[2] * b[2]];
}
function divVectors(vecA, b) {
    if(typeof b == "number") return [vecA[0] / b, vecA[1] / b, vecA[2] / b];
    return [vecA[0] / b[0], vecA[1] / b[1], vecA[2] / b[2]];
}
function distVectors(vecA, vecB) {
    return Math.abs(magVector(subVectors(vecA, vecB)));
}
function dotVectors(vecA, vecB) {
    return vecA[0] * vecB[0] + vecA[1] * vecB[1] + vecA[2] * vecB[2];
}
function normalizeVector(vec) {
    const mag = Math.sqrt(vec.reduce((sum, val) => sum + val * val, 0));
    if (mag === 0) {
        return vec.map(() => 0); // Avoid division by zero for zero vectors
    }
    return vec.map(val => val / mag);
}

function magVector(vec) {
    return Math.max(Math.abs(vec[0]), Math.abs(vec[1]), Math.abs(vec[2]));
}

function getReflectionVector(incomingVector, surfaceNormal) {
    console.log(incomingVector, surfaceNormal);
    // Normalize the surface normal to ensure accurate calculations
    const normalizedNormal = normalizeVector(surfaceNormal);
  
    // Calculate the dot product of the incoming vector and the normalized normal
    console.log(incomingVector, normalizedNormal);
    const dotProduct = dotVectors(incomingVector, normalizedNormal);
  
    // Calculate the reflection vector using the formula:
    // reflectionVector = incomingVector - 2 * dotProduct * normalizedNormal
  
    // Scale the normalized normal by 2 * dotProduct
    console.log(normalizedNormal, dotProduct)
    const scaledNormal = mulVectors(normalizedNormal, 2 * dotProduct);
  
    // Subtract the scaled normal from the incoming vector to get the reflection vector
    const reflectionVector = subVectors(incomingVector, scaledNormal);
    console.log(reflectionVector);
    return reflectionVector;
}

function vectorFromYP(yaw, pitch) {
    const yawRadians = yaw * (3.1415926 / 180);
    const pitchRadians = pitch * (3.1415926 / 180);
    console.log(yaw, pitch, yawRadians, pitchRadians);

    // Calculate the components of the direction vector
    const x = -Math.cos(pitchRadians) * Math.sin(yawRadians);
    const y = -Math.sin(pitchRadians);
    const z = Math.cos(pitchRadians) * Math.cos(yawRadians);
    return [x,y,z];
}

function vecA(vec) {
    return [vec.x, vec.y, vec.z];
}

function BlockPosEqual(posA, posB) {
    return posA.x == posB.x && posA.y == posB.y && posA.z == posB.z;
}

function averageColors(colors) {
    let r = 0;
    let g = 0;
    let b = 0;
    colors.forEach(color => {
        r += color[0];
        g += color[1];
        b += color[2];
    });
    r /= color.length;
    g /= color.length;
    b /= color.length;
    return [r,g,b];
}

function averageAllColors(color, colors) {
    let r = color[0];
    let g = color[1];
    let b = color[2];
    let ct = 1;
    colors.forEach((color, i) => {
        r += dyeColors[i][0] * color;
        g += dyeColors[i][1] * color;
        b += dyeColors[i][2] * color;
        ct += color;
    });
    r /= ct;
    g /= ct;
    b /= ct;
    return [r,g,b];
}

function LightStack(type, size) {
    return {
        type: type,
        size: size,
        colors: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        addColor: function(color) {
            if(this.colors[color] == undefined) this.colors[color] = 0;
            this.colors[color]++;
            return this;
        },
        getColor: function() {
            if(type == "sun") return averageAllColors(sunColor, this.colors); //color calculated from all the color layers
            if(type == "moon") return averageAllColors(moonColor, this.colors);
        }
    }
}