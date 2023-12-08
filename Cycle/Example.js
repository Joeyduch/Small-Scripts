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

/*
    CONSOLE OUTPUT:
    
    colors.next() #1 -> [green,20]
    colors.next() #2 -> [yellow,5]
    colors.next() #3 -> [red,30]
    colors.next() #4 -> [green,20]
    colors.next() #5 -> [yellow,5]
    colors.next() #6 -> [red,30]
    colors.next() #7 -> [green,20]
    colors.next() #8 -> [yellow,5]
    colors.next() #9 -> [red,30]
    colors.next() #10 -> [green,20]
    colors.next() #11 -> [yellow,5]
    colors.next() #12 -> [red,30]
*/
