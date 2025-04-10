ServerEvents.recipes(event => {
    event.remove("immersiveengineering:crafting/capacitor_lv");
    event.shaped(
        "immersiveengineering:capacitor_lv",
        [
            "WPW",
            "IAI",
            "WPW"
        ],
        {
            W: "immersiveengineering:treated_wood_horizontal",
            P: "#forge:plates/copper",
            I: "#forge:ingots/iron",
            A: "pneumaticcraft:etching_acid_bucket"
        }
    )
});