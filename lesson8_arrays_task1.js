function myBlend(arr) {
    for (let a = arr.length - 1; a > 0; a--) {
        let b = Math.floor(Math.random() * (a + 1));      // случайный индекс
        [arr[a], arr[b]] = [arr[b], arr[a]];                // смена элементов местами
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myBlend(arr);
console.log(arr);       
