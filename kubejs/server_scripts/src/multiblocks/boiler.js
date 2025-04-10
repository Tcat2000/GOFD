const List = Java.loadClass("java.util.ArrayList");
const MekGases = Java.loadClass("mekanism.common.registries.MekanismGases");
const recipeManagerGetter = Java.loadClass("com.lowdragmc.lowdraglib.Platform");
const GasStack = Java.loadClass("mekanism.api.chemical.gas.GasStack");

const boiler = "mbd2:boiler";

const boiler_wall = "mbd2:boiler/wall"
const boiler_firebox = "mbd2:boiler/fire_box"
const boiler_port = "mbd2:boiler/port"

const NBTWallCount = "wall_count";
const NBTFireBoxCount = "firebox_count";
const NBTFireTemp = "fire_temp";
const NBTWaterTemp = "water_temp";
const NBTBurnTime = "burn_time";
const NBTBoilProgress = "boil_progress";

const recipe = MBDRegistries.RECIPE_TYPES.get("mbd2:boiler");
const recipes = recipeManagerGetter.getMinecraftServer().getRecipeManager().getAllRecipesFor(recipe);

const thermalConvectionSpeed = 0.1;

MBDMachineEvents.onStructureFormed(boiler, eve => {
    let event = eve.getEvent();
    let machine = event.getMachine();
    let level = machine.getLevel();
    let data = machine.getCustomData();

    let wallCount = -3;
    let fireboxCount = 0;

    machine.getPartPositions().forEach(part => {
        let block = level.getBlock(part);
        if(block.getId() === boiler_wall) wallCount++;
        if(block.getId() === boiler_port) wallCount++;
        if(block.getId() === boiler_firebox) fireboxCount++;
    });

    data.putInt(NBTWallCount, wallCount);
    data.putInt(NBTFireBoxCount, fireboxCount);

    console.log(recipe);
    console.log(recipes);
});

MBDMachineEvents.onTick(boiler, eve => {
    let event = eve.getEvent();
    let machine = event.getMachine();
    let level = machine.getLevel();
    let data = machine.getCustomData();

    let tankSize = data.getInt(NBTWallCount);
    let fireSize = data.getInt(NBTFireBoxCount);
    let fireTemp = data.getFloat(NBTFireTemp);
    if(fireTemp == null) fireTemp = 0;
    let waterTemp = data.getFloat(NBTWaterTemp);
    if(waterTemp == null) waterTemp = 0;
    let burnTime = data.getInt(NBTBurnTime);
    if(burnTime == null) burnTime = 0;
    let boil = data.getFloat(NBTBoilProgress);
    if(boil == null) boil = 0;

    let fuel = machine.getTraitByName("fuel");
    let water = machine.getTraitByName("water");
    let steam = machine.getTraitByName("output");

    if(burnTime < fireSize && fireTemp < 500) {
        let slot = fuel.storage.getStackInSlot(0);
        if(!slot.isEmpty()) {
            burnTime += 64;
            slot.shrink(1);
        }
    }
    if(burnTime >= fireSize) {
        burnTime -= fireSize;
        fireTemp += fireSize;
    }
    else {
        fireTemp += burnTime;
        burnTime = 0;
    }
    if(fireTemp > waterTemp) {
        let dif = fireTemp - waterTemp;
        let transfer = dif * thermalConvectionSpeed;
        fireTemp -= transfer / fireSize;
        waterTemp = waterTemp + transfer / tankSize;
    }
    if(waterTemp > 100) {
        let extraTemp = waterTemp - 100;
        let fluid = water.storages[0];
        let hasWater = fluid.getFluid().getFluid().getFluidType() == "minecraft:water";
        let waterAmount = fluid.getFluid().getAmount();
        let isSteam = steam.storages[0].getStack().getType().getRegistryName() == "mekanism:steam";
        let steamEmpty = steam.storages[0].getStack().getType().getRegistryName() == "mekanism:empty"
        let steamSpace = steam.storages[0].getCapacity() - steam.storages[0].getStack().getAmount();
        if(isSteam || steamEmpty && steamSpace > 0 && hasWater && waterAmount > 0) {
            let convert = Math.min(waterAmount, steamSpace / 10, extraTemp, tankSize);
            console.log(convert);
            // if(convert == 0) console.log(waterAmount + " " + (steamSpace / 10) + " " + extraTemp + " " + tankSize);
            boil =+ convert;
            let amount = Math.floor(boil);
            if(amount > 0) {
                boil -= amount;
                waterTemp -= (convert / 50);
                fluid.getFluid().shrink(convert);
                if(steamEmpty) steam.storages[0].setStack(new GasStack(MekGases.STEAM.get(), convert))
                else steam.storages[0].getStack().grow(convert * 10);
            }
        }
    }
    data.putFloat(NBTFireTemp, fireTemp);
    data.putFloat(NBTWaterTemp, waterTemp);
    data.putInt(NBTBurnTime, burnTime);
    data.putFloat(NBTBoilProgress, boil);
});