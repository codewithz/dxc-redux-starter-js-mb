import { pipe } from 'lodash/fp';

let input = "   JavaScript   ";



const trim = str => str.trim();
const lowerCase = str => str.toLowerCase();
const wrapInDiv = str => `<div>${str}</div>`
const wrapInSpan = str => `<span>${str}</span>`

const wrap = (type, str) => `<${type}>${str}</${type}>`



//pipe() create a pipeline from left to right 
const transform = pipe(trim, lowerCase, wrap("div"))

const result = transform(input);
console.log("New Result:", result);
