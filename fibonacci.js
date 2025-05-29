//fibonacci
//cada nmero e a soma dos dos anteriores
// 0, 1, 1, 2, 3, 5, 8, 




function fibonacci(n){
    // caso de base
    if (n === 0 ){  //f(0) = 0 
        return 0
    }
    if (n === 1 ){
        return 1
}
// apssso rcursivo f(n) = f(n -1) + f(n -2)
return fibonacci(n -1) + fibonacci(n -2);
}

console.log(fibonacci(10));