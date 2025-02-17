function fatorial(nro){
    let total = 1;

    for(let i = 1; i <= nro; i++){
        total = total * i;
    }

    if (nro >= 0){
        return total;
    }else{
        return NaN;
    }
    
}

let r = fatorial(5);
console.log("Fatorial:", r);
r = fatorial(-2);
console.log("Fatorial:", r);
