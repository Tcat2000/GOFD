const { $LabelWidget } = require("packages/com/lowdragmc/lowdraglib/gui/widget/$LabelWidget");
const { $ArrayList } = require("packages/java/util/$ArrayList");

BlockEvents.rightClicked("minecraft:lodestone", event => { 
    BlockUIFactory.INSTANCE.openUI(event.player, event.block.pos, "game_ui");
})

LDLibUI.block("game_ui", event => {
    var ui = createUI(event.getPlayer().getLevel());
    event.success(ui);
});

function createUI(level) {
    let creator = UIProject.loadUIFromFile("ldlib:game_window");
    let root = creator.get();
    let subWindow = root.getFirstWidgetById("subwindow");
    let gameTimeText = root.getFirstWidgetById("game_time");
    let jumpButton = root.getFirstWidgetById("jump");

    let tick = level.time;
    let start = level.time;
    
    let walls = new $ArrayList();

    gameTimeText.setTextSupplier(() => {
        if(level.time != tick) {
            tick = level.time;
            tickLogic(subWindow, tick - start, walls);
            subWindow.widg
        }
        return new String(tick - start);
    });
    jumpButton.setOnPressCallback(data => {
        if(level.time != tick) {
            tick = level.time;
            tickLogic(subWindow, tick - start, walls);
            subWindow.widg
        }
    })

    root.addWidget(new ImageWidget["(int,int,int,int,com.lowdragmc.lowdraglib.gui.texture.IGuiTexture)"](0, 0, 50, 50, new ResourceTexture()));

    root.keyPressed(32, 32, 0);
    return root;
}
function tickLogic(root, tick, walls) {
    //min = 2 - size
    //max = 282 + size
    //y = 140 - size
    let player = root.getFirstWidgetById("player");
    let loop = tick % 35;

    if(loop == 0) {
        console.log("creating thing")
        let wall = new ImageWidget["(int,int,int,int,com.lowdragmc.lowdraglib.gui.texture.IGuiTexture)"](282 + 16, 140 - 16, 16, 16, new ResourceTexture["(java.lang.String)"]("minecraft:textures/block/oak_log_side.png"));
        walls.add(wall);
        root.addWidget(wall);
    }
    walls.forEach(widget => {
        console.log(loop + " ticking " + widget.getSelfPosition())
        widget.setSelfPositionX(widget.getSelfPositionX() - 1);
        if(widget.getSelfPositionX() <= 2 - 16) root.removeWidget(widget);
    })
}