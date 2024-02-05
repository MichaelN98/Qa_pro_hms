function checkProbabilityTheory(count) {
    
    let evenCount = 0;                                          // переменные для сохранения парных и не парных чисел
    let oddCount = 0;

    for (let a = 0; a < count; a++) {                           // генерация случайных числе и счет парных и не парных
        let randomNum = Math.floor(Math.random() * (1000 - 100 + 1) + 100);

        if (randomNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercentage = (evenCount / count) * 100;             //процентное соотношение
    let oddPercentage = (oddCount / count) * 100;

    console.log('Кількість згенерованих чисел:', count);        //вывод инфы
    console.log('Парних чисел:', evenCount);
    console.log('Непарних чисел:', oddCount);
    console.log('Відсоток парних до не парних:', evenPercentage.toFixed(2) + '% : ' + oddPercentage.toFixed(2) + '%');
}
