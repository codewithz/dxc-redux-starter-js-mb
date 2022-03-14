import { pipe } from 'lodash/fp';

let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div>";


const trim = str => str.trim();
const lowerCase = str => str.toLowerCase();
const wrapInDiv = str => `<div>${str}</div>`
//trim
//toLowerCase
//wrapInDiv

const result = wrapInDiv(trim(lowerCase(input)));

console.log(result)

//pipe() create a pipeline from left to right 
const transform = pipe(trim, lowerCase, wrapInDiv)

const newResult = transform(input);
console.log("New Result:", newResult);