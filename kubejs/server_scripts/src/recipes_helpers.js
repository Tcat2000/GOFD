function parseEmbersItem(item) {
    if(item == null) return item;
    var split = item.split("*");
    let out;
    if(split[0].startsWith("#")) {
        out = {
            "tag": split[0]
        }
    }
    else {
        out = {
            "item": split[0]
        }
    }
    if(split[1] != null) out["count"] = split[1];
    return out;
}
function parseEmbersFluid(fluid) {
    if(fluid == null) return fluid;
    let split = fluid.split("*");
    let out = {
        "fluid": split[0]
    }
    if(split[1] != null) out["amount"] = Float.parseFloat(split[1]);
    return out;
}