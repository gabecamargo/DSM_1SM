/*Exercício 2: Complete o código para que o programa imprima de menor quando o usuário fornecer um valor menor que 18 e imprima de maior caso contrário.*/

let entrada = prompt("Entre com a idade:");
entrada = parseInt(entrada);
if( entrada < 18){
 console.log("de menor");
}
else{
 console.log("de maior");
}