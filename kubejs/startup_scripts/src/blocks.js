
StartupEvents.registry("block", event => {
    // const rotating = RawAnimation.begin().thenLoop("rotating");
    // event.create("geckojs:example_block", "animatable")
    // .box(1, 1, 1, 15, 15, 15, true)
    // .animatableBlockEntity(blockEntity => {
    //     blockEntity.addController(state => state.setAndContinue(rotating))
    // })
    // .defaultGeoModel()

    event.create("boiler/wall");
    event.create("boiler/firebox");

    event.create("marble");
    event.create("enscribed_marble");
    event.create("dark_marble");
    event.create("star_marble");
});