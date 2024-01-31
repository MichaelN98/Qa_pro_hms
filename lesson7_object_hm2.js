var services = {
    "стрижка": 60,
    "гоління": 80,
    "Миття голови": 100
};

services['Розбити скло'] = 200;

services.price = function () {
    var total = 0;
    for (var service in this) {
        if (typeof this[service] == 'number') {
            total += this[service];
        }
    }
    return total;
};

services.maxPrice = function () {
    var total = Infinity;
    for (var service in this) {
        if (typeof this[service] == 'number' && this[service] > max) {
            max = this[service];
        }
    }
    return max;
};

services.minPrice = function () {
    var total = Infinity;
    for (var service in this) {
        if (typeof this[service] == 'number' && this[service] < min) {
            min = this[service]
        }
    }
    return min;
};

console.log("Загальна вартість:", services.price(), "грн");
console.log("Мінімальна вартість ", services.minPrice(), "грн");
console.log("Максимальна вартість", services.maxPrice(), "грн");
