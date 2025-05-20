const MBDMachineDefinition = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition");
const MBDMachine = Java.loadClass("com.lowdragmc.mbd2.common.machine.MBDMachine");
const ConfigBlockProperties = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties");
const ConfigItemProperties = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigItemProperties");
const ConfigRecipeLogicSettings = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigRecipeLogicSettings");

// MBDRegistryEvents.machine(event => {
//     MBDRegistries.MACHINE_DEFINITIONS.register("mbd2:kubejs_test_machine", JavaAdapter(MBDMachineDefinition, {
//         init: function(id, rootState, blockProperties, itemProperties, machineSettings, recipeLogicSettings, partSettings) {
//         },
//         draw: function(blockEntity) {
//             return JavaAdapter(MBDMachine, {
//                 getCapability: function(cap, side) {
//                     results = new ArrayList();
//                     for (var trait in this.additionalTraits) {
//                         for (var capabilityProviderTrait in trait.getCapabilityProviderTraits()) {
//                             if (capabilityProviderTrait.getCapability() == cap) {
//                                 var io = capabilityProviderTrait.getCapabilityIO(side);
//                                 if (io != IO.NONE) {
//                                     results.add(this.capabilityProviderTrait.getCapContent(io));
//                                 }
//                             }
//                         }
//                     }
//                     if (results.isEmpty()) {
//                         return LazyOptional.empty();
//                     } else {
//                         if (results.size() == 1) {
//                             return LazyOptional.of(() => results.get(0));
//                         } else {
//                             for (var trait in this.additionalTraits) {
//                                 for (var capabilityProviderTrait in trait.getCapabilityProviderTraits()) {
//                                     if (capabilityProviderTrait.getCapability() == cap) {
//                                         return LazyOptional.of(() => (capabilityProviderTrait).mergeContents(results));
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                     return cap.orEmpty(cap, LazyOptional.of(() => results.get(0)));
//                 }
//             });//partSettings != null ? new MBDPartMachine(blockEntity, this) : new MBDMachine(blockEntity, this);
//         }
//     }, "mbd2:kubejs_test_machine", null, new ConfigBlockProperties(), new ConfigItemProperties(), null, new ConfigRecipeLogicSettings(), null, null));
// })

JavaAdapter(WidgetGroup, {

});