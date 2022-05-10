let numeros = []

let n = 3
for (let i = 0; i < n; i++){
    console.log("Base:" + 2 + "expoente: " + (n-i));
    exponenciacao = 2**(n-i)
    numeros.push(exponenciacao)
}

console.log("Vetor Dobrado", numeros);
for (let i = 0; i < n; i++){
    numeros[i] *= 2
}

console.log("Vetor Dobrado", numeros);
