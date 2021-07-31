// Завдання 1. forEach

// Заданий масив з числами. Знайдіть суму цих чисел.
//     let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.
// ------------------------------------------------------------------------------------------

// Завдання 2. Map

// Заданий масив з числами. Створіть новий масив, що складається з квадратів цих чисел.	
//     let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.
// ------------------------------------------------------------------------------------------

// Завдання 3. Every

// Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.
// ------------------------------------------------------------------------------------------

// Завдання 4. Some

// Заданий масив об’єктів. Перевірте, чи всі хоч один ключ country має значення 'Cuba'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.
// ------------------------------------------------------------------------------------------

// Завдання 5. Filter

// Заданий масив значень, в ньому можуть бути звичайні елементи і підмасиви. Залиште в ньому тільки підмасиви.
//     let arr = [1, 'string', [3, 4], 5, [6, 7]];
// Результат вивести в консоль.
// ------------------------------------------------------------------------------------------

// Завдання 6. Reduce

// Заданий масив з числами. Знайдіть суму перших N елементів до першого нуля. 
// Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, так як далі стоїть елемент з числом 0.
//     let arr = [1, 2, 5, 0, 4, 5, 6];
// Результат вивести в консоль.

// Заданий масив з числами. Дізнайтеся скільки елементів з початку масиву треба скласти, щоб в сумі вийшло більше 10-ти.
//     let arr = [1, 2, 3, 0, 4, 5, 6];
// Результат вивести в консоль.
// ------------------------------------------------------------------------------------------

// Завдання 7. Любим методом

// Заданий масив з числами. Залиште в ньому тільки позитивні числа. Потім вийміть квадратний корінь і цих чисел. 
//     let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// Результат вивести в консоль.

// --------------------------------------------------------------------------------------------------------------------------------------------
                                                            // HomeWork

// Завдання 1 - Виконано двама способами
// let arr = [5, 6, 7, 8, 9];
// let result = 0;
 // const reducer = (accumulator, currentValue) => accumulator + currentValue;
 // console.log(arr.reduce(reducer));

   // arr.forEach((elem) => {
   //    console.log(`element: ${elem}`);
   //    result += elem;
   //    return result
   // })
// console.log(result)

// Завдання2 - Готово
// let arr = [5, 6, 7, 8, 9];
// let newArr = arr.map(function(num) {
//    return num *= num
// })
// console.log(newArr)

// Завдання 3. Every -Готово
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ];
// function truly(element, index, array) {
//    return element === 'Ukraine';
// }
// let result = arr.every(truly);
// console.log(result);

// Завдання 4. Some - Готово

// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ];
// let [{country}] = arr;
// function truly(element, index, arr) {
//    console.log(`країна: ${country}`)
//    return element === 'Cuba';
// }
// let result = arr.some(truly);
// console.log(result)

// Завдання 5. Filter - Готове
// let arr = [1, 'string', [3, 4], 5, [6, 7]];
// function filt(elem){
//     if (Array.isArray(elem)){
//         return true
//     } else {
//         return false
//     }
// }
// const result = arr.filter(filt)
// console.log(result)

// Завдання 6. Reduce

//const arr = [1, 2, 3, 0, 4, 5, 6];
//
// function sum(arr) {
//   let flag = false;
//
//   return arr.reduce((acc, next) => {
//     if(next === 0) flag = true
//     if(!flag) return acc + next
//     return acc
//   }, 0);
// }
//
// console.log(sum(arr));


// Завдання 7
// let arr = [1, -2, 3, 0, 4, -5, 6, -11]
//
// console.log(arr.filter(i => i > 0).map(i => parseFloat(Math.sqrt(i).toFixed(3))))