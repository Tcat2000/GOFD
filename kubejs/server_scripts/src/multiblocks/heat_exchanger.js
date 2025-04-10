
const ForgeEnergyRecipeCapability = Java.loadClass("com.lowdragmc.mbd2.common.capability.recipe.ForgeEnergyRecipeCapability");
const TextComponent = Java.loadClass("net.minecraft.network.chat.Component");
const Float = Java.loadClass("java.lang.Float");
const compressorEnergyCost = 128;
const degreeEnergyCost = 128;

const id = "mbd2:heat_exchanger";

MBDMachineEvents.onUI(id, event => {
    var machine = event.getEvent().getMachine();
    var data = machine.getCustomData();
    var root = event.getEvent().root;
    var mode_button = root.getFirstWidgetById("kjs:mode");
    var power_usage_text = root.getFirstWidgetById("kjs:power_usage");
    var temp = root.getFirstWidgetById("kjs:temp");
    var temp_text = root.getFirstWidgetById("kjs:temp_text");
    var ambient_temp = root.getFirstWidgetById("kjs:ambient_temp");
    var ambient_temp_text = root.getFirstWidgetById("kjs:ambient_temp_text");
    var target_temp = root.getFirstWidgetById("kjs:target_temp");
    var target_temp_text = root.getFirstWidgetById("kjs:target_temp_text");
    var set_temp = root.getFirstWidgetById("kjs:set_target_temp");
    var heat = event.getEvent().getMachine().getTraitByName("heat").getHandler();
    var ambient = HeatExchangerLogicAmbient.atPosition(event.getEvent().getMachine().getLevel(), event.getEvent().getMachine().getPos()).getAmbientTemperature();
    var target = ambient;
    var mode = data.getString("mode");
    if(data.contains("target_temp")) {
        target = data.getFloat("target_temp")
    }
    else data.putFloat("target_temp", ambient);

    set_temp.setCurrentString(kelToCel(data.getFloat("target_temp")));

    power_usage_text.setTextProvider(() => {
        if(mode == "compressor") return TextComponent.literal(Math.round(compressorEnergyCost + figureEngeryCost(heat.getTemperature(), ambient)) + " FE/t");
        return TextComponent.literal("N/A");
    });

    temp.setProgressSupplier(() => {
        return getTempBarValue(kelToCel(heat.getTemperature()));
    });
    temp_text.setTextProvider(() => {
        return TextComponent.literal(kelToCel(Math.round(heat.getTemperature()) + 0.15) + " C.");
    });
    
    ambient_temp.setProgressSupplier(() => {
        return getTempBarValue(kelToCel(ambient));
    });
    ambient_temp_text.setTextProvider(() => {
        return TextComponent.literal(kelToCel(Math.round(ambient) + 0.15) + " C.");
    });
    
    target_temp.setProgressSupplier(() => {
        return getTempBarValue(kelToCel(target));
    });
    target_temp_text.setTextProvider(() => {
        return TextComponent.literal(kelToCel(Math.round(target) + 0.15) + " C.");
    });

    set_temp.setTextResponder(text => {
        target = Math.min(celToKel(Float.parseFloat(text)), 2000);
        data.putFloat("target_temp", target);
    });

    if(data.getString("mode") == "compressor") mode_button.setPressed(true);

    else mode_button.setPressed(false);
    mode_button.setOnPressCallback((context, state) => {
        if(state) {
            data.putString("mode", "compressor");
            mode = "compressor";
            mode_button.set
        }
        else {
            data.putString("mode", "exchanger");
            mode = "exchanger";
        }
    })
    
    console.log("set mode button");
});
function getTempBarValue(temp) {
    return temp / 2000;
}
function celToKel(cel) {
    return Math.round((cel + 273.15) * 100) / 100;
}
function kelToCel(kel) {
    return Math.round((kel - 273.15) * 100) / 100;
}

MBDMachineEvents.onBeforeRecipeModify(id, event => {
    if(event.getEvent().getRecipe().id == "mbd2:heat_exchanging/recipe_1") {
        
        var heat = event.getEvent().getMachine().getTraitByName("heat").getHandler().getTemperature();
        var ambient = HeatExchangerLogicAmbient.atPosition(event.getEvent().getMachine().getLevel(), event.getEvent().getMachine().getPos()).getAmbientTemperature();


        if(event.getEvent().getRecipe() == null) return;
        var recipe = event.getEvent().getRecipe().copy();

        recipe.getInputContents(ForgeEnergyRecipeCapability.CAP).set(0, recipe.getInputContents(ForgeEnergyRecipeCapability.CAP).get(0).copy(ForgeEnergyRecipeCapability.CAP, ContentModifier.of(compressorEnergyCost + figureEngeryCost(heat, ambient), 0)));
        event.getEvent().setRecipe(recipe);
    }

    event.getEvent().getMachine().getCustomData()
});
MBDMachineEvents.onBeforeRecipeWorking(id, event => {
    var heat = event.getEvent().getMachine().getTraitByName("heat").getHandler().getTemperature();
    if(heat < event.getEvent().getMachine().getCustomData().getFloat("target_temp")) {
        event.getEvent().setCanceled(true);
        event.getEvent().getMachine().po
    }
});
function figureEngeryCost(temp, ambient) {
    if(ambient + 100 < temp) return 0;
    if(ambient < temp) {
        var diff = temp - ambient;
        return diff * 0.25 * degreeEnergyCost;
    }
    else {
        var diff = ambient - temp;
        return diff / 100 * degreeEnergyCost;
    }
}