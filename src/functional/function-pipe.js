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