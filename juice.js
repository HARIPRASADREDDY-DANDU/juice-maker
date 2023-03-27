'use strict';

const fruitCutter = function(fruit){
    return fruit * 4;
}

const fruitProcessor = function(apple,orange){
    const applePieces = fruitCutter(apple);
    const orangePieces = fruitCutter(orange);
    const juice = `juice with ${applePieces} apple pieces and with ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2, 4));