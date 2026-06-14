// -------- Условное ветвление: if, '?' --------------
// -------- Задача. Название JavaScript --------------

// let nameJS = prompt ("Какое «официальное» название JavaScript?" , "")

// if (nameJS == "ECMAScript")
// {
//     alert ("Верно!")
// }
// else {
//     alert ("«Не знаете? ECMAScript!»")
// }


// -------- Задача. Покажите знак числа --------------

// let number = prompt ("введите число:" , 0)
// if (number > 0){
//     alert ("1")
// }
// else if (number < 0){
//     alert ("-1")
// } 
// else {
//     alert (0)
// }

// -------- Задача. Перепишите 'if' в '?' --------------

// let a =5, b = 6;
// let result = (a + b < 4) ? 'Мало' : 'Много';
// console.log(result)

// -------- Задача. Перепишите 'if..else' в '?'--------------

// let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';

// -------- Циклы while и for --------------
// -------- Задача. Выведите чётные числа --------------

// for (let even = 2; even < 11; even++) {
//     if(even % 2) continue;
//     alert(even);
// }

// -------- Задача. Замените for на while --------------

// let i=0;
// while(i <3)
// {
//     alert( `number ${i}!` );
//     i++;
// }

// -------- Задача. Повторять цикл, пока ввод неверен --------------

// let even;

// do {
//     even = prompt("введите число больше 100", '');
// }while (even <=100 && even);

// -------- Задача. Вывести простые числа --------------

// let n;
// n = promt("введите число: ", '');

// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) { 
//         if (i % j == 0) continue nextPrime; 
//     }

//     alert(i); // простое число
// }

// -------- Задача. Напишите "if", аналогичный "switch" --------------

// if (browser === 'edge') {
//     alert("You've got the Edge!");
// } else if(browser === 'Chrome' ||  browser === 'Firefox' || browser ===  'Safari' || browser ===  'Opera'){
//     alert( 'Okay we support these browsers too' );
// }else {
//     alert( 'We hope that this page looks ok!' );
// }

// -------- Задача. Переписать условия "if" на "switch" --------------

// const number = +prompt('Введите число между 0 и 3', '');

// switch (number){
//     case 0:
//         alert('Вы ввели число 0');
//     break;
//     case 1:
//         alert('Вы ввели число 1');
//     break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//     break;
// }

// -------- Задача. Перепишите функцию, используя оператор '?' или '||' --------------

// function checkAge(age) {
//    return(age > 18) || confirm('Родители разрешили?');
// }

// function checkAge(age) {
//   return(age > 18) ? true : confirm('Родители разрешили?');
// }

// -------- Задача. Функция min(a, b) --------------

// function min(a, b) {
//     if (a < b) {
//         return a;
//     }
//     return b;
// }

// -------- Задача. Функция pow(x,n) --------------

// function pow(x, n) {
//     let a = x ** n;
//     return (a);
// }

// let x = prompt('Введите число, которое нужно возводить в степень', '');
// let n = prompt("Введите степень", "");

// if (n >= 1 && n % 1 == 0) {
//      alert(pow(x, n));
// }else {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// }




