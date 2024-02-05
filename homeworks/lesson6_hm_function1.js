function customIsNaN(value){
    if (typeof value !== 'string') {    // проверка, что передаваемый аргумент стринга
        return true;                    // является ли значение значением NaN
    }                                   // значение NaN не равно ничему, включая самого себя
    return value !== value;
}
console.log(customIsNaN(NaN));          // true
console.log(customIsNaN(5));            // true
console.log(customIsNaN('abc'));        // false
console.log(customIsNaN(undefined));    // true
