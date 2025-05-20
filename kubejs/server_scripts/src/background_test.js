const TrackedDummyWorld = Java.loadClass("com.lowdragmc.lowdraglib.utils.TrackedDummyWorld");
const CompassScene = Java.loadClass("com.lowdragmc.lowdraglib.gui.compass.component.animation.CompassScene");
const CompassComponent = Java.loadClass("com.lowdragmc.lowdraglib.gui.compass.component.CompassComponent");
const world = new TrackedDummyWorld();

ItemEvents.firstRightClicked('minecraft:gold_ingot', event => {
    ItemUIFactory.INSTANCE.openUI(event.player, event.hand, "background_test");
});

LDLibUI.item("background_test", e => {
    var ui = createBackgroundUI(e);
    e.success(ui);
});

function createBackgroundUI(e) {
    let root = new WidgetGroup();

    let scene = new JavaAdapter(SceneWidget, {

    }, 200, 200, 100, 100, world);
    scene.setRenderedCore([new BlockPos(0,0,0), new BlockPos(0,2,0)], new CompassScene(0, new CompassComponent()))
    root.addWidget(scene);


    return root;
}