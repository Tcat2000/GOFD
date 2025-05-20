const { $CapabilityIO } = require("packages/com/lowdragmc/mbd2/common/trait/$CapabilityIO");
const { $BlockContainerJS } = require("packages/dev/latvian/mods/kubejs/level/$BlockContainerJS");
const { $HashMap } = require("packages/java/util/$HashMap");
const { $InfuseType } = require("packages/mekanism/api/chemical/infuse/$InfuseType");
const { $InfusionStack } = require("packages/mekanism/api/chemical/infuse/$InfusionStack");

const MekanismChemicalRecipeCapability = Java.loadClass("com.lowdragmc.mbd2.integration.mekanism.MekanismChemicalRecipeCapability");
const BuiltinRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");
const MekanismInfuseTypes = Java.loadClass("mekanism.common.registries.MekanismInfuseTypes");


MBDMachineEvents.onRightClick("mbd2:mek/metallurgic_extractor", e => {
    let event = e.getEvent();

    // event.getMachine().getTraitByName("input").getCapabilityIOOverride = new $CapabilityIO();
    // event.getMachine().getTraitByName("input").getCapabilityIOOverride.topIO = $IO.OUT;
});

MBDMachineEvents.onUI("mbd2:mek/metallurgic_extractor", e => {
    let root = e.getEvent().getRoot();
    
    standardUIElements(root, e.getEvent().getMachine());
    console.log(e.getEvent().getMachine().recipeType.getProxyRecipes());
});

const infuse_conversion_recipes = [[Items.REDSTONE, [MekanismInfuseTypes.REDSTONE.get(), 10]]];

MBDMachineEvents.onTick("mbd2:mek/metallurgic_extractor", e => {
    let event = e.getEvent();
    let machine = event.getMachine();
    let data = machine.getCustomData();

    let input_slot = machine.getTraitByName("input");
    let infuse_output = machine.getTraitByName("infuse");

    input_slot.storage.setFilter((stack) => {
        let success = false;
        infuse_conversion_recipes.forEach((recipe) => {
            if(recipe[0] == stack.getItem()) {
                success = true;
                return;
            }
        });
        return success
    });

    let success = -1;
    infuse_conversion_recipes.forEach((recipe, index) => {
        if(recipe[0] == input_slot.storage.getStackInSlot(0).getItem()) {
            success = index;
            return;
        }
    });
    if(success == -1) {
        machine.setMachineState("waiting");
        data.putString("error", "Invalid input, what the hell did you do??");
        return; //invalid input, what the hell did you do??
    }

    if(input_slot.storage.getStackInSlot(0).isEmpty()) {
        machine.setMachineState("idle");
        return; // no input
    }
    if((infuse_output.storages[0].getCapacity() - infuse_output.storages[0].getStored() < infuse_conversion_recipes[success][1][1])) {
        machine.setMachineState("waiting");
        data.putString("error", "Output full");
        return; // output full
    }
    machine.setMachineState("working");

    console.log(infuse_conversion_recipes[success][1][0]);
    console.log(infuse_output.storages[0].getStack().getRaw());
    console.log(infuse_output.storages[0].getStack().isEmpty());
    if(infuse_output.storages[0].getStack().getRaw() != infuse_conversion_recipes[success][1][0] && !infuse_output.storages[0].getStack().isEmpty()) return; // output wrong type

    input_slot.storage.getStackInSlot(0).shrink(1);
    if(infuse_output.storages[0].getStack().isEmpty()) infuse_output.storages[0].setStack(new $InfusionStack(infuse_conversion_recipes[success][1][0], infuse_conversion_recipes[success][1][1]));
    else infuse_output.storages[0].getStack().grow(infuse_conversion_recipes[success][1][1]);
});

MBDRecipeTypeEvents.onTransferProxyRecipe("mbd2:infusion_conversion", e => {
    let event = e.getEvent();
    const {recipeType, proxyTypeId, proxyType, proxyRecipeId, proxyRecipe} = event;

    // make sure the recipe type is correct
    if(proxyTypeId === "mekanism:infusion_conversion") {
        let input = proxyRecipe.getInput(); // we assume the ingredients has and only has one item.
        let output = proxyRecipe.getOutput(input);
        console.log("input: ", input);
        console.log("output: ", output);
        // convert it into a mbd2 recipe
        var recipe = recipeType.recipeBuilder() // same as create recipe via kjs event
            .id(proxyRecipeId + "/mbd2")
            .duration(1)
            .inputItems(input)
            .output(MekanismChemicalRecipeCapability.CAP, output)
            .chance(0)
            .inputFluids("water 1000")
            .chance(1)
            .buildMBDRecipe();

        // If you want to skip this recipe
        // event.mbdRecipe = null;
        // set the result
        event.mbdRecipe = recipe;
    }
});