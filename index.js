const informations = require('./informations');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello ,i'm ${informations.firstName} from ${informations.campus}!`,
    e : "oO",
    T : "U "

}));