//
//      0 - 1 - 2
// 0 - 10, 41, 41
// 1 - 20, 45, 47
// 2 - 10, 45, 47


// let x = ["d", "j", "q"];
// x[2]

// console.log(matriz[0][1])
// console.log(matriz[2][1])


    const matriz = [
       [10, 41, 41, 50, 60],
       [20, 45, 47, 20, 30],
       [10, 45, 54, 15, 35],
       [10, 45, 54, 15, 35],
       [10, 45, 54, 15, 35],
       [20, 45, 47, 20, 30],

    ]

for(let linha = 0; linha < matriz.length; linha++){
    // linha

for(let coluna = 0; coluna < matriz[linha].length; coluna++){
//coluna
console.log(`Elemento na posição: [${linha}][${coluna}] é ${matriz[linha][coluna]}`)
}
}


