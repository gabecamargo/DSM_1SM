let A: number = 10;
let B: number = 20;

console.log("Antes da troca:");
console.log("A =", A);
console.log("B =", B);

let temp: number = A;
A = B;
B = temp;

console.log("Depois da troca:");
console.log("A =", A);
console.log("B =", B);
