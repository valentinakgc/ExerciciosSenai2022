//Conte de 1 a 100 usando FOR, mas mostre ao usuário apenas os pares.

function passandoPelosPares() {
    for (var i = 0; i <= 100; i++) {
        if ((i % 2) == 0) {
                        console.log('Números pares' + i);
        }
    }
}

passandoPelosPares();