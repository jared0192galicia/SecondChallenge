const head = document.querySelector('.head');
const chest = document.querySelector('.chest');

const frases = ["sandia", "fresa", "piña", "toronja", "melon", "frambuesa"];

function main(){
    let cod = getRandom(0, frases.length);
    console.log("🚀 ~ file: script.js ~ line 7 ~ main ~ cod", cod)
    
}
/**
 * The function takes two arguments, a minimum and a maximum, and returns a random number between those
 * two numbers
 * @param min - The minimum number you want to generate.
 * @param max - The maximum number in the range.
 * @returns A random number between the min and max parameters.
 */
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(Math.random() * (max- min) + min);
    return max;
}

main();