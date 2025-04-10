const reinforced = ["large_reinforced_pcb"];
const basic = ["basic_pcb"];

ServerEvents.recipes(event => {
    event.shapeless("kubejs:gold_foil", ["#forge:plates/gold", "immersiveengineering:hammer"]);
    event.shapeless("kubejs:copper_foil", ["#forge:plates/copper", "immersiveengineering:hammer"]);
    basic.forEach(type => {
        makeRecipe(event, type, "basic");
    });
    reinforced.forEach(type => {
        makeRecipe(event, type, "reinforced");
    });
    makeCustomRecipe(event, "small_reinforced_pcb", "reinforced", "kubejs:small_reinforced_pcb_substrait", "pneumaticcraft:empty_pcb", "pneumaticcraft:printed_circuit_board");

    mixing(event, ["mekanism:sawdust", "embers:adhesive"], "kubejs:sawdust_mixture")
    mixing(event, ["minecraft:sand", "pneumaticcraft:plastic"], "kubejs:silica_mixture")
    pressing(event, "kubejs:sawdust_mixture", "kubejs:hardboard")
    pressing(event, "kubejs:silica_mixture", "kubejs:silica_board")

    event.shapeless("kubejs:basic_pcb_substrait", ["kubejs:hardboard"]);
    event.shapeless("kubejs:small_reinforced_pcb_substrait", ["kubejs:silica_board"]);
    event.shapeless("kubejs:large_reinforced_pcb_substrait", ["4x kubejs:small_reinforced_pcb_substrait"]);
    event.shapeless("pneumaticcraft:pcb_blueprint", ["#forge:plates/iron", "immersiveengineering:wirecutter"]);
    event.remove({ "id": "pneumaticcraft:uv_light_box" });
    event.shaped(
        Item.of("pneumaticcraft:uv_light_box"),
        [
            "LLL",
            "CBT",
            "CCC"
        ],
        {
            L: "immersiveengineering:light_bulb",
            B: "pneumaticcraft:pcb_blueprint",
            C: "pneumaticcraft:ingot_iron_compressed",
            T: "pneumaticcraft:pressure_tube"
        }
    )

    event.remove("pneumaticcraft:pressure_chamber/empty_pcb");
    event.remove({ "id": "pneumaticcraft:etching_tank" });

    event.shaped(
        Item.of("pneumaticcraft:etching_tank"),
        [
            "RPR",
            "WTW",
            "SSS"
        ],
        {
            R: "pneumaticcraft:ingot_iron_compressed",
            W: "pneumaticcraft:reinforced_brick_wall",
            T: "pneumaticcraft:small_tank",
            S: "pneumaticcraft:reinforced_brick_slab",
            P: "#forge:glass_panes"
        }
    )
    event.shaped(
        Item.of("kubejs:soldering_iron"),
        [
            "  C",
            " CW",
            "R W"
        ],
        {
            C: "immersiveengineering:component_iron",
            W: "immersiveengineering:wire_copper",
            R: "immersiveengineering:stick_iron"
        }
    )
})
function makeRecipe(event, type, tier) {
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": ("kubejs:" + type + "_substrait")
        },
        "loops": 1,
        "results": [
            {
                "item": ("kubejs:raw_" + type)
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": ("kubejs:incomplete_" + type)
                    },
                    [
                        {
                            "tag": ("kubejs:pcb_foil/" + tier)
                        }
                    ]
                ],
                "results": [
                    {
                        "item": ("kubejs:incomplete_" + type)
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": ("kubejs:incomplete_" + type)
                    }
                ],
                "results": [
                    {
                        "item": ("kubejs:incomplete_" + type)
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": ("kubejs:incomplete_" + type)
        }
    })

    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "item": "kubejs:soldering_iron"
            },
            {
                "tag": "forge:nuggets/tin"
            },
            {
                "item": ("kubejs:blank_" + type)
            },
            {
                "item": "pneumaticcraft:transistor"
            },
            {
                "item": "pneumaticcraft:capacitor"
            }
        ],
        "category": "circuits",
        "result": {
            "item": ("kubejs:" + type)
        }
    })
}

function makeCustomRecipe(event, type, tier, substrait, output, finished) {
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": substrait
        },
        "loops": 1,
        "results": [
            {
                "item": output
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": ("kubejs:incomplete_" + type)
                    },
                    [
                        {
                            "tag": ("kubejs:pcb_foil/" + tier)
                        }
                    ]
                ],
                "results": [
                    {
                        "item": ("kubejs:incomplete_" + type)
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": ("kubejs:incomplete_" + type)
                    }
                ],
                "results": [
                    {
                        "item": ("kubejs:incomplete_" + type)
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": ("kubejs:incomplete_" + type)
        }
    })
    

    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "item": "kubejs:soldering_iron"
            },
            {
                "tag": "forge:nuggets/tin"
            },
            {
                "item": output
            },
            {
                "item": "pneumaticcraft:transistor"
            },
            {
                "item": "pneumaticcraft:capacitor"
            }
        ],
        "category": "circuits",
        "result": {
            "item": finished
        }
    })
}

function mixing(event, ingredients, results) {
    event.custom({
        "type": "create:mixing",
        "ingredients": ingredients,
        "results": results
    });
}
function pressing(event, ingredients, results) {
    event.custom({
        "type": "create:pressing",
        "ingredients": ingredients,
        "results": results
    });
}