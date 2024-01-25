function pow(x, y) {
    let res = 1
    for(let a=0; a<y; a++) {    //цикл поднесения в степень
        res *= x;
    }
    return res;
}
let res = pow(2,3);       //вызов
console.log(res); 
