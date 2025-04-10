const { $CompoundTag } = require("packages/net/minecraft/nbt/$CompoundTag")

function NBTReadColor(tag) {
    return [tag.getFloat("R"), tag.getFloat("G"), tag.getFloat("B")]
}
function NBTWriteColor(color) {
    let tag = new $CompoundTag();
    tag.putFloat("R", color[0]);
    tag.putFloat("G", color[1]);
    tag.putFloat("B", color[2]);
    return tag;
}

function NBTReadVector(tag) {
    return [tag.getFloat("X"), tag.getFloat("Y"), tag.getFloat("Z")];
}

function NBTWriteVector(vec) {
    let tag = new $CompoundTag();
    tag.putFloat("X", vec[0]);
    tag.putFloat("Y", vec[1]);
    tag.putFloat("Z", vec[2]);
    return tag;
}

function NBTReadLightStack(tag) {
    let stack = LightStack(tag.getString("type"), tag.getInt("size"));
    let colors = tag.getCompound("colors");
    stack.colors = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for(let i = 0; i < 16; i++) {
        if(colors.contains("color_" + i)) stack.colors[Math.round(i)] = colors["color_" + i]
        // console.log(colors.contains("color_" + i), colors, "color_" + i, tag.getInt("color_7"), colors["color_" + i]);
    }
    // console.log(stack, colors, tag)
    return stack;
}

function NBTWriteLightStack(stack) {
    let tag = new $CompoundTag();
    tag.putString("type", stack.type);
    tag.putInt("size", stack.size == undefined ? 1 : stack.size);
    let colors = new $CompoundTag();
    for(let i = 0; i < 16; i++) {
        colors.putInt("color_" + i, stack.colors[i] != undefined ? Math.round(stack.colors[i]) : 1);
    }
    tag.put("colors", colors);
    return tag;
}