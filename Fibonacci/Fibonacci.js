/**
 * a simple fibonacci number function
 */

function fib(n) {
    if(n < 2) return n;

    return fib(n-1) + fib(n-2);
}



// -- Execution --
const IS_SEQUENCE = true;
const NUMBER = 20;

if(IS_SEQUENCE) {
    for(let i=0; i<NUMBER; i++) {
        console.log(`at position ${i}: ${fib(i)}`);
    }
}

console.log(`at position ${NUMBER}: ${fib(NUMBER)}`);