const substraits = ["basic_pcb_substrait", "large_reinforced_pcb_substrait", "small_advanced_pcb_substrait", "small_advanced_pcb_substrait", "large_advanced_pcb_substrait", "huge_advanced_pcb_substrait"];

const UVLightBoxBlockEntity = Java.loadClass("me.desht.pneumaticcraft.common.block.entity.UVLightBoxBlockEntity");

// ItemEvents.tooltip(event => {
    
//     substraits.forEach(name => {
//         event.addAdvanced("kubejs:raw_" + name, (item, advanced, text) => {
//             let progress = UVLightBoxBlockEntity.getExposureProgress(item);
//             text.add(2,Text.of("Etch success chance: " + progress + "%"));
//             if(progress > 0)text.add(3,Text.of("Put in an etching tank to develop...").color(Color.GRAY));
//             if(progress < 100)text.add(3,Text.of("Put in a UV Light Box to expose...").color(Color.GRAY));
//         })
//     });
// })