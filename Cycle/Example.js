/* ************
    EXAMPLE
************ */

const Cycle = require("./Cycle");

let lights = [
    ["green", 20],
    ["yellow", 5],
    ["red", 30],
]

let colors = new Cycle(lights);


for(let i=0; i<12; i++) {
    console.log(`colors.next() #${i+1} -> [${colors.next()}]`);
}