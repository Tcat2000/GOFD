ServerEvents.recipes(event => {
    stamping(event, null, "immersiveengineering:slag", "kubejs:molten_slag*100", "embers:flat_stamp")
});

function stamping(event, itemInput, itemOutput, fluidInput, stamp) {
    let recipe = {
        "type": "embers:stamping",
    }
    if(itemInput != null) recipe["input"] = parseEmbersItem(itemInput);
    if(itemOutput != null) recipe["output"] = parseEmbersItem(itemOutput)
    if(fluidInput != null) recipe["fluid"] = parseEmbersFluid(fluidInput);
    if(stamp != null) recipe["stamp"] = parseEmbersItem(stamp);

    event.custom(recipe);
}