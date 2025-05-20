const { $ImageWidget } = require("packages/com/lowdragmc/lowdraglib/gui/widget/$ImageWidget");
const { $Widget } = require("packages/com/lowdragmc/lowdraglib/gui/widget/$Widget");
const { $Font } = require("packages/java/awt/$Font");
const Tesselator = Java.loadClass("com.mojang.blaze3d.vertex.Tesselator");
const GameRenderer = Java.loadClass("net.minecraft.client.renderer.GameRenderer");
const RenderSystem = Java.loadClass("com.mojang.blaze3d.systems.RenderSystem");
const TextureManager = Java.loadClass("net.minecraft.client.renderer.texture.TextureManager");
const POSITION_TEX = Java.loadClass("com.mojang.blaze3d.vertex.DefaultVertexFormat").POSITION_TEX;
const IGuiTexture = Java.loadClass("com.lowdragmc.lowdraglib.gui.texture.IGuiTexture");
const PressureGaugeRenderer2D = Java.loadClass("me.desht.pneumaticcraft.client.render.pressure_gauge.PressureGaugeRenderer2D");

// const CustomWidget = new JavaAdapter($Widget, {
//     mouseMoved: function (x, y) {

//         console.log("mouse moved x:" + x + " y:" + y);
//         return false;
//     }
// });

ItemEvents.rightClicked("minecraft:iron_ingot", event => {
    // console.log(Object.keys(CustomWidget));
    // let thing = CustomWidget.mouseMoved(1, 2);
    // thing.mouseMoved(1,2);
    ItemUIFactory.INSTANCE.openUI(event.player, event.hand, "equipment_grid");
});

LDLibUI.item("equipment_grid", event => {
    console.log("equipment grid")
    var ui = createEqipmentGridUI(event.getPlayer().getLevel());
    event.success(ui);
});


function createEqipmentGridUI(level) {
    let creator = UIProject.loadUIFromFile("ldlib:equipment_grid");
    let root = creator.get();

    // let icon = new $ImageWidget["(int,int,int,int,java.util.function.Supplier)"](0, 0, 50, 50, () => {
    //     return JavaAdapter(Java.loadClass("com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"), {
    //         init: function() {
    //             this.example = 5;
    //         },
    //         draw: function(graphics, mouseX, mouseY, x, y, width, height) {
    //             // try {
    //             //     let tessellator = Tesselator.getInstance();
    //             //     let bufferbuilder = tessellator.getBuilder();
    //             //     let matrix4f = graphics.pose().last().pose();
    //             //     bufferbuilder.begin(VertexFormat.Mode.QUADS, POSITION_TEX);

    //             //     // RenderSystem.setShader(() => GameRenderer.getPositionTexColorShader());
    //             //     // RenderSystem.setShaderTexture(0, new ResourceLocation("mbd2:textures/gui/dial_indicator.png"));
    //             //     // bufferbuilder.vertex(matrix4f, x, y + height, 0).uv(0, 1).endVertex();
    //             //     // bufferbuilder.vertex(matrix4f, x + width, y + height, 0).uv(1, 1).endVertex();
    //             //     // bufferbuilder.vertex(matrix4f, x + width, y, 0).uv(1, 0).endVertex();
    //             //     // bufferbuilder.vertex(matrix4f, x, y, 0).uv(0, 0).endVertex();
                    
    //             //     RenderSystem.setShader(() => GameRenderer.getPositionTexColorShader());
    //             //     RenderSystem.setShaderTexture(0, new ResourceLocation("mbd2:textures/gui/pressure_gauge_5psi.png"));
    //             //     bufferbuilder.vertex(matrix4f, x, y + height / 2, 0).uv(0, 1).endVertex();
    //             //     bufferbuilder.vertex(matrix4f, x + width, y + height, 0).uv(1, 1).endVertex();
    //             //     bufferbuilder.vertex(matrix4f, x + width, y, 0).uv(1, 0).endVertex();
    //             //     bufferbuilder.vertex(matrix4f, x, y, 0).uv(0, 0).endVertex();
    //             //     tessellator.end();
    //             // }
    //             // catch(e) {
    //             //     console.log(e);
    //             //     tessellator.end();
    //             // }
    //             let gaugeLocation = [50, 50];
    //             PressureGaugeRenderer2D.drawPressureGauge(graphics, Minecraft.getInstance().font, -1, 7, 5, -1000, 3, x + gaugeLocation[0], y + gaugeLocation[1]);
    //             //drawPressureGauge(net.minecraft.client.gui.GuiGraphics,number,number,number,number,number,number,number,number)
    //         }
    //     });
    // });
    // root.addWidget(icon);

    root.addWidget(CreatePressureGaugeWidget(20, 10, 5, -100, HighPressure));

    return root;
}