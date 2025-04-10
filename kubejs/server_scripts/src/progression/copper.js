ServerEvents.tags('item', event => {
    event.add("kubejs:organic_matter", "minecraft:kelp");
    event.add("kubejs:organic_matter", "minecraft:cactus");
    event.add("kubejs:organic_matter", "minecraft:carrot");
    event.add("kubejs:organic_matter", "minecraft:potato");
    event.add("kubejs:organic_matter", "#minecraft:leaves");
});

ServerEvents.recipes(event => {
    pressing(event, ["#kubejs:organic_matter"], ["kubejs:bio_mass"]);
    washing(event, ["kubejs:bio_mass"], ["kubejs:copper_oxide_dust"]);
    mixing(event, ["kubejs:copper_oxide_dust", "kubejs:small_iron_dust"], ["kubejs:copper_refinment_blend"]);
    melting(event, "kubejs:copper_refinment_blend", "embers:molten_copper*20", "kubejs:molten_slag*10");
});
function pressing(event, ingredients, results) {
    event.custom({
        "type": "create:pressing",
        "ingredients": ingredients,
        "results": results
    });
}
function washing(event, ingredients, results) {
    event.custom({
        "type": "create:splashing",
        "ingredients": ingredients,
        "results": results
    });
}
function mixing(event, ingredients, results) {
    event.custom({
        "type": "create:mixing",
        "ingredients": ingredients,
        "results": results
    });
}
function melting(event, ingredient, result, bonusResult) {
    var inputIgred = ingredient.split("*");
    var inputCount = -1;
    if(inputIgred.length > 1) inputCount = Float.parseFloat(inputIgred.get[1]);
    var input = {}
    if(inputCount == -1) {
        input = {
            "item": inputIgred[0]
        }
        if(ingredient.startsWith("#")) {
            input = {
                "tag": inputIgred[0]
            }
        }
    }
    else {
        input = {
            "item": inputIgred[0],
            "count": inputCount
        }
        if(ingredient.startsWith("#")) {
            input = {
                "tag": inputIgred[0],
                "count": inputCount
            }
        }
    }
    
    var outputIgred = result.split("*", 2)

    var outputCount = -1
    if(outputIgred.length > 1) outputCount = Float.parseFloat(outputIgred[1]);
    
    var output = {}
    if(outputCount == -1) {
        output = {
            "fluid": outputIgred[0],
            "amount": 1
        }
    }
    else {
        output = {
            "fluid": outputIgred[0],
            "amount": outputCount
        }
    }
    
    var bonusIgred = bonusResult.split("*", 2)

    var bonusCount = -1
    if(bonusIgred.length > 1) bonusCount = Float.parseFloat(bonusIgred[1]);
    
    var bonus = {}
    if(bonusCount == -1) {
        bonus = {
            "fluid": bonusIgred[0],
            "amount": 1
        }
    }
    else {
        bonus = {
            "fluid": bonusIgred[0],
            "amount": bonusCount
        }
    }

    event.custom({
        "type": "embers:melting",
        "bonus": bonus,
        "input": input,
        "output": output
    });
}