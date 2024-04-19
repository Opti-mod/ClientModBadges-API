// placeholder will change, its literally just the getBetterDiscord function 

import * as utils from "./utils.mjs";
const { addUser, CLIENT_MODS } = utils;

(() => {
    const DEVS = ["1167275288036655133"];
    DEVS.forEach(dev => addUser(dev, CLIENT_MODS.OPTI, ["test"]));
})();