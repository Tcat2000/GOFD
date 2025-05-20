const { $ImageWidget } = require("packages/com/lowdragmc/lowdraglib/gui/widget/$ImageWidget");
const { $Position } = require("packages/com/lowdragmc/lowdraglib/utils/$Position");
const { $Size } = require("packages/com/lowdragmc/lowdraglib/utils/$Size");
const { $SNBTCompoundTag } = require("packages/dev/ftb/mods/ftblibrary/snbt/$SNBTCompoundTag");

function standardUIElements(source, machine) {
    let data = machine.getCustomData().copy();
    console.log(data);
    let energy_indicator = button(source, new $Position(-26,source.getSizeHeight() - 29), new $Size(26, 26), new ResourceTexture["(java.lang.String)"]("mekanism:gui/tabs/energy_info_fe.png"), null, null,
        function(mouseX, mouseY, button) {
            if(!this.isMouseOverElement(mouseX, mouseY)) return;
            if(this.mode == undefined) this.mode = 0;
            this.mode = (this.mode + 1) % 2;
            if(this.mode == 0) {
                this.setBackground(new ResourceTexture["(java.lang.String)"]("mekanism:gui/tabs/energy_info_fe.png"));
                this.setHoverTooltips(Component.literal("Using: 0 FE/t"), Component.literal("Needed: 0 kFE"), Component.literal("Unit: FE"));
                data.putInt("energy_format", 0);
                console.log(machine.isRemote());
                console.log(machine.customData);
                machine.customData = data;
                console.log(machine.customData,"\n");
            }
            if(this.mode == 1) {
                this.setBackground(new ResourceTexture["(java.lang.String)"]("mekanism:gui/tabs/energy_info_j.png"));
                this.setHoverTooltips(Component.literal("Using: 0 J/t"), Component.literal("Needed: 0 J"), Component.literal("Unit: J"));
                data.putInt("energy_format", 1);
                console.log(machine.isRemote());
                console.log(machine.customData);
                machine.customData = data;
                console.log(machine.customData,"\n");
            }
        }
    );
    energy_indicator.setHoverTooltips(Component.literal("Using: 0 FE/t"), Component.literal("Needed: 0 kFE"), Component.literal("Unit: FE"));
    source.mouseMoved(0,0);

    let side_config_tab = new $ImageWidget(-26, 6, 26, 26, tab);
    source.addWidget(side_config_tab);
    
    let transporter_config_tab = new $ImageWidget(-26, 34, 26, 26, tab);
    source.addWidget(transporter_config_tab);
    
    let upgrade_tab = new $ImageWidget(source.getSizeWidth(), 6, 26, 26, tab_flipped);
    source.addWidget(upgrade_tab);
    
    let security_tab = new $ImageWidget(source.getSizeWidth(), 34, 26, 26, tab_security_flipped);
    source.addWidget(security_tab);
    
    let switch_tab = new $ImageWidget(source.getSizeWidth(), source.getSizeHeight() - 29, 26, 26, tab_switch_flipped);
    source.addWidget(switch_tab);

    let side_config_button = button(source, new $Position(-21, 10), new $Size(18, 18), button_18, button_18_selected, "mekanism:gui/configuration.png",
    function(mouseX, mouseY, button) {
        if(!this.isMouseOverElement(mouseX, mouseY)) return;
        let side_config_panel = source.getFirstWidgetById("side_config_panel");
        if(side_config_panel == null) {
            side_config_panel = openSideConfigUI(source, machine.getLevel().getBlock(machine.pos));
            console.log("opening");
        }
        else {
            source.removeWidget(side_config_panel);
            console.log("closing");
        }
    });
    let transporter_config_button = button(source, new $Position(-21, 38), new $Size(18, 18), button_18, button_18_selected, "mekanism:gui/transporter_config.png", null);

    source.getFirstWidgetById("mek:progress_bar_error").setVisible(false);
}