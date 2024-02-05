const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, obj) {
    if (obj.name === companyName) {                                             //совпадение названия компании с объектом
        return obj;
    }

    if (obj.clients) {                                                          //если у объекта есть клиенты, проверяем  их
        for (const client of obj.clients) {                                     //вызываем функцию для каждого клиента
            const result = findValueByKey(companyName, client);
            if (result) {                                                       // находим нужный и возвращаем
                return result;
            }
        }
    }

    return null;                                                                //если не находим возвращаем null
}


const result = findValueByKey('Клієнт 1.2.3', company);
if (result) {
    console.log(result);
} else {
    console.log('Клієнт не знайдено');
}
