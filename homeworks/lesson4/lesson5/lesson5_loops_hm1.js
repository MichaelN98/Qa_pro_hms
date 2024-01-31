function drawTriangle(height, symbol) {
    for (let a = 1; a <= height; a++) {        // цикл отвечает за строки
        let row = '';                          // пустая сторока для текущей строки
        for (let b = 0; b < a; b++)  {         // количество символов в каждой строке
            row += symbol;                     // добавление символа
        }
        console.log(row);
    }
}
drawTriangle(5, '*');



function drowTringle(height, symbol) {
    for (let a = 1; a <= height; a++) {
        let row = symbol.repeat(a);         //метод repeat() для повторения символа
        console.log(row);
    }
}
drowTringle(10, '*')
