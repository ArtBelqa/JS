 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

let age_1 = 10
let age_2 = 18
let age_3 = 60

function CheckAge (age_1) {
    if (age_1 < age_2) {
    console.log ("You dont have access cause your age is", age_1,"It is less then 18" )
} else if (age_1 >=  age_2, age_1 < age_3) {
    console.log ("Welcome  !")
}
    else if (age_1  > age_3) {
        console.log ("Keep calm and look Culture channel")
} else {
    console.log ("Techical work")}
}
CheckAge (17)
CheckAge (18)
CheckAge (61)
