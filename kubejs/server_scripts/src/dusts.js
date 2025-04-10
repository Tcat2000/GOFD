const oxides = ["iron","copper","aluminum","lead","silver","nickel","uranium","constantan","steel","bronze","osmium"];
const smalls = ["tin","gold","redstone","glowstone","ash","coal_coke","hop_graphite","saltpeter","sulfur","electrum","fluorite","coal","lithium"];
ServerEvents.recipes(event => {
    
    oxides.forEach(id => {
        var dust = Ingredient.of("#forge:dusts/" + id).getFirst();
        var small = Ingredient.of("#forge:dusts/small/" + id).getFirst();
        var oxide = Ingredient.of("#forge:dusts/oxide/" + id).getFirst();
        var small_oxide = Ingredient.of("#forge:dusts/small/oxide/" + id).getFirst();

        event.shapeless(dust, [small.copyWithCount(9)]);
        event.shapeless(oxide, [small_oxide.copyWithCount(9)]);
        event.shapeless(small.copyWithCount(9), [dust]);
        event.shapeless(small_oxide.copyWithCount(9), [oxide]);
    });
    smalls.forEach(id => {
        var dust = Ingredient.of("#forge:dusts/" + id).getFirst();
        var small = Ingredient.of("#forge:dusts/small/" + id).getFirst();

        event.shapeless(dust, [small.copyWithCount(9)]);
        event.shapeless(small.copyWithCount(9), [dust]);
    });
})