// Создай переменные с разными значениями и проверь их тип с помощью оператора typeof

let number = 3;
let bigint = 5n;
let boolean = true;
let nullVariables = null;
let undefaind;
let symbol = Symbol(3);
let string = "strit";

// console.log(typeof number, typeof bigint, typeof boolean, typeof nullVariables, typeof undefaind, typeof symbol, typeof string, typeof f, typeof g);


// Создай мини-скрипт, который рассчитывает, сколько чашек чая/кофе ты выпьешь до 100 лет. Это поможет понять работу с числами и строками.
// Создай переменную currentAge (твой возраст).Создай переменную maxAge со значением 100.Создай переменную cupsPerDay (сколько чашек пьешь в день).
// Рассчитай общее количество: (maxAge - currentAge) * 365 * cupsPerDay.Выведи результат в консоль фразой: "Мне понадобится N чашек до 100 лет".

let maxAge = 100;
// let currentAge = Number(prompt("Ведите ваш возраст:", ));
// let cupsPerDay = Number(prompt("Ведите колько чашек чая пьете в день:", ));

// alert(`Тебе понадобится ${(maxAge-currentAge)*365*cupsPerDay} чашек чая до 100 лет`)


// JavaScript умеет сам менять типы данных (нестрогая типизация). Предскажи результат вычислений. Сначала напиши ответы на бумаге или в комментариях, а потом проверь себя в консоли браузера:

let res1 = "5" - 2;      // мой ответ:number
let res2 = "5" + 2;      // мой ответ: string
let res3 = "10" / "2";   // мой ответ: number
let res4 = "viva" + 2 + 2; // мой ответ: string
let res5 = 2 + 2 + "viva"; // мой ответ: nan; правильный ответ: string
let res6 = true + 1;     // мой ответ: nan; правильный ответ: number
let res7 = false + "!";  // мой ответ: string
let res8 = null == undefined;
let res9 = null === undefined;
console.log(!!0, !!" ", !!NaN, !!5);

console.log(typeof res1, typeof res2, typeof res3, typeof res4, typeof res5, typeof res6, typeof res7, typeof res8, typeof res9);


// Пойми, как хранятся данные. Что будет в консоли в конце?

let a = 10;
let b = a;
b = 20;

let user1 = { name: "Anna" };
let user2 = user1;
user2.name = "Elsa";

console.log(a);     // мой ответ: 10
console.log(user1); // мой ответ: Anna; правильный ответ: Elsa


// Что выведет консоль в конце? Попробуй ответить, не запуская код.

let car1 = { brand: "Tesla" };
let car2 = car1;
let car3 = car2;

car3.brand = "BMW";

console.log(car1.brand); // BMW
console.log(car2.brand); // BMW


// А что будет здесь? Обрати внимание на строку, где hero2 присваивается новое значение.

let hero1 = { name: "Batman" };
let hero2 = hero1;

hero2.name = "Joker";
hero2 = { name: "Iron Man" }; // Вот тут важный момент!

console.log(hero1.name); // Joker
console.log(hero2.name); // Iron Man


// Cделать полную копию объекта. Напиши код, чтобы в copy лежал такой же объект, но по другой ссылке

let original = { name: "Alice", age: 25 };

let copy = 

copy.name = "Bob";

console.log(original.name); // Должно остаться "Alice"
console.log(copy.name);     // Должно быть "Bob"

