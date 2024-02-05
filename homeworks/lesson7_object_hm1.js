const player = {                                            //создание объекта
    name: 'Fernando',
    age: 23,
    position: 'forward',

    getInfo() {                                             // вывод свойств объекта в виде ключ:значение
        for (const some in this) {
            if (typeof this[some] !== 'function') {
                console.log(`${some}: ${this[some]}`);
            }
        }
    }
};
player.getInfo();

player.played = true;                                       // добавил новое свойство 

player.getInfo();
