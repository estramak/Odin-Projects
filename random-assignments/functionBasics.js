const n1 = 9;
const n2 = 4;
const s1 = 'bEAVeR';


function add7(num1) {
 return num1 + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(word) {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();

    return firstLetter + restOfWord;
}

function lastLetter(word) {
    return word.charAt(word.length - 1);
}

console.log(add7(n1));
console.log(multiply(n1, n2));
console.log(capitalize(s1));
console.log(lastLetter(s1));