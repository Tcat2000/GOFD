const { $ColorBorderTexture } = require("packages/com/lowdragmc/lowdraglib/gui/texture/$ColorBorderTexture");
const { $ResourceBorderTexture } = require("packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture");
const { $ClickData } = require("packages/com/lowdragmc/lowdraglib/gui/util/$ClickData");
const { $Widget } = require("packages/com/lowdragmc/lowdraglib/gui/widget/$Widget");
const { $Position } = require("packages/com/lowdragmc/lowdraglib/utils/$Position");
const { $Size } = require("packages/com/lowdragmc/lowdraglib/utils/$Size");

let button_none = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_none.png")
let button_input = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_input.png")
let button_output = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_output.png")
let button_input_output = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_input_output.png")
let button_energy = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_energy.png")
let modes_normal = [button_none, button_input, button_output, button_input_output, button_energy];

let button_none_selected = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_none_selected.png")
let button_input_selected = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_input_selected.png")
let button_output_selected = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_output_selected.png")
let button_input_output_selected = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_input_output_selected.png")
let button_energy_selected = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_energy_selected.png")
let modes_selected = [button_none_selected, button_input_selected, button_output_selected, button_input_output_selected, button_energy_selected];

let button_18 = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_18.png");
let button_18_selected = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_18_selected.png");
let button_14 = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_14.png");
let button_14_selected = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_14_selected.png");
let button_8 = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_8.png");
let button_8_selected = new ResourceTexture["(java.lang.String)"]("mbd2:textures/gui/mek/button_8_selected.png");

let tab_flud = new $ResourceBorderTexture("mbd2:textures/gui/mek/fluid_tab.png", 16, 16, 2, 2);
let tab_gas = new $ResourceBorderTexture("mbd2:textures/gui/mek/gas_tab.png", 16, 16, 2, 2);
let tab_infuse = new $ResourceBorderTexture("mbd2:textures/gui/mek/infuse_tab.png", 16, 16, 2, 2);
let tab_item = new $ResourceBorderTexture("mbd2:textures/gui/mek/item_tab.png", 16, 16, 2, 2);
let tab_pigment = new $ResourceBorderTexture("mbd2:textures/gui/mek/pigment_tab.png", 16, 16, 2, 2);
let tab_slurry = new $ResourceBorderTexture("mbd2:textures/gui/mek/slurry_tab.png", 16, 16, 2, 2);
let tab_security = new $ResourceBorderTexture("mbd2:textures/gui/mek/secturity_tab.png", 16, 16, 2, 2);
let tab_security_flipped = new $ResourceBorderTexture("mbd2:textures/gui/mek/security_tab_flipped.png", 16, 16, 2, 2);
let tab_switch = new $ResourceBorderTexture("mbd2:textures/gui/mek/switch_tab.png", 16, 16, 2, 2);
let tab_switch_flipped = new $ResourceBorderTexture("mbd2:textures/gui/mek/switch_tab_flipped.png", 16, 16, 2, 2);
let tab = new $ResourceBorderTexture("mbd2:textures/gui/mek/tab.png", 16, 16, 2, 2);
let tab_flipped = new $ResourceBorderTexture("mbd2:textures/gui/mek/tab_flipped.png", 16, 16, 2, 2);

function openSideConfigUI(source, block, energy, gas, infuse, pigment, slurry, item) {
    let creator = UIProject.loadUIFromFile("ldlib:mek/side_config");
    let root = creator.get();

    let eject = false;

    let blur_overlay = root.getFirstWidgetById("blur");
    let eject_indicator = root.getFirstWidgetById("eject_indicator");

    let config_top = config(root, "config_top", block.level.getBlock(block.pos.offset(0,1,0)), new $Position(74, 56));
    let config_front = config(root, "config_front", block.level.getBlock(block.pos.offset(0,0,-1)), new $Position(74, 56 + 23));
    let config_bottom = config(root, "config_bottom", block.level.getBlock(block.pos.offset(0,-1,0)), new $Position(74, 56 + 23 + 23));
    let config_left = config(root, "config_left", block.level.getBlock(block.pos.offset(-1,0,0)), new $Position(74 - 23, 56 + 23));
    let config_right = config(root, "config_right", block.level.getBlock(block.pos.offset(1,0,0)), new $Position(74 + 23, 56 + 23));
    let config_back = config(root, "config_back", block.level.getBlock(block.pos.offset(0,0,1)), new $Position(74 - 23, 56 + 23 + 23));

    let dragger = new JavaAdapter(Java.loadClass("com.lowdragmc.lowdraglib.gui.widget.Widget"), {
        mouseDragged: function(mouseX, mouseY, button, dragX, dragY) {
            if(this.dragging) root.setSelfPosition(this.startPos.add(mouseX - this.mouseX, mouseY - this.mouseY));
        },
        mouseClicked: function(mouseX, mouseY, button) {
            this.dragging = this.isMouseOverElement(mouseX, mouseY);
            this.startPos = root.getSelfPosition();
            this.mouseX = mouseX;
            this.mouseY = mouseY;
        },
        mouseReleased: function(mouseX, mouseY, button) {

        }
    }, new $Position(3,3), new $Size(156, 18)).setId("dragger");
    root.addWidget(dragger);

    let button_reset = button(root, new $Position(139,98), new $Size(14, 14), button_14, button_14_selected, "mekanism:gui/button/clear_sides.png",
        function(mouseX, mouseY, button) {
            if(!this.isMouseOverElement(mouseX, mouseY)) return;
            config_top.mode = 0;
            config_top.updateTexture();
            config_front.mode = 0;
            config_front.updateTexture();
            config_bottom.mode = 0;
            config_bottom.updateTexture();
            config_left.mode = 0;
            config_left.updateTexture();
            config_right.mode = 0;
            config_right.updateTexture();
            config_back.mode = 0;
            config_back.updateTexture();
        }
    );

    let button_toggle = button(root, new $Position(139,9), new $Size(14, 14), button_14, button_14_selected, "mekanism:gui/button/auto_eject.png",
        function(mouseX, mouseY, button) {
            if(!this.isMouseOverElement(mouseX, mouseY)) return;
            eject = !eject;
            console.log(eject);
        }
    );

    let button_close = button(root, new $Position(9,9), new $Size(8,8), button_8, button_8_selected, "mekanism:gui/button/close.png", 
        function(mouseX, mouseY, button) {
            if(!this.isMouseOverElement(mouseX, mouseY)) return;
            source.removeWidget(root);
        }
    );

    blur_overlay.setVisible(false);

    eject_indicator.setTextProvider(() => {
        console.log(eject);
        if(eject) return Component.literal("Eject: on");
        else return Component.literal("Eject: off");
    })

    root.setId("side_config_panel");
    source.addWidget(root);
    source.mouseMoved(0,0);
    return source;
}

function config(root, id, block, pos) {
    let obj = {};
    obj.updateTexture = function() {
        obj.button.setBackground(modes_normal[obj.mode]);
    }
    obj.button = new JavaAdapter(Java.loadClass("com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"), {
        mouseClicked: function(mouseX, mouseY, button) {
            if(!this.isMouseOverElement(mouseX, mouseY)) return;
            obj.mode = (obj.mode + 1) % modes_normal.length;
            obj.updateTexture();
        }
    }, pos, new $Size(22, 22)).setId(id).setBackground(modes_normal[0]);
    obj.slot = new ImageWidget().setId("slot");
    obj.slot.setSelfPosition(3, 3);
    obj.button.addWidget(obj.slot);
    root.addWidget(obj.button);
    obj.mode = 0;
    obj.slot.setImage(new ItemStackTexture["(net.minecraft.world.item.ItemStack[])"](block.item));
    obj.slot.setSize(16, 16);
    return obj;
}

function button(root, pos, size, texture, selectedTexture, overlayTexture, onClick) {
    let button = new JavaAdapter(Java.loadClass("com.lowdragmc.lowdraglib.gui.widget.WidgetGroup"), {
        mouseClicked: function(mouseX, mouseY, button) {
            if(onClick != undefined) {
                if(this.clicked(mouseX, mouseY, button)) {
                    this.writeClientAction(this, 1, new $FriendlyByteBuf().writeInt(mouseX).writeInt(mouseY).writeInt(button));
                    this.playButtonClickSound();
                }
            }
        },
        clicked: onClick,
        mouseMoved: function(mouseX, mouseY) {
            if(selectedTexture == null) return;
            if(!this.isMouseOverElement(mouseX, mouseY)) this.setBackground(texture);
            else this.setBackground(selectedTexture);
        },
        handleClientAction: function(id, buffer) {
            console.log(buffer);
            if(id == 1 && onClick != undefined) {
                clicked(buffer.readInt(), buffer.readInt(), buffer.readInt());
            }
        },
    }, pos, size);
    button.setBackground(texture);
    if(overlayTexture != null) button.addWidget(new ImageWidget(0, 0, size.width, size.height, new ResourceTexture["(java.lang.String)"](overlayTexture)));

    root.addWidget(button);
    return button;
}