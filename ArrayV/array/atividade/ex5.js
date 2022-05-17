//Crie um array que em cada linha possua valor de um produto e ao lado possua o valor do produto com
//desconto de 5%

var array = [100]
for(let i = 0; i < 3; i++){
    array.push(array[i]*0.05)
}

console.log(array);