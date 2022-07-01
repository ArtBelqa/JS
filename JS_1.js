let user_name = "Tyoma"
// CTRL+/ комментирование
console.log (user_name)

let age = 26
console.log (age)

let person = user_name + " " + age
console.log (person)
// можно все в одну строку console.log (user_name + " " + age) без введения новой переменной person

// новый кейс Сколько лет? Арифмитически операции
let user_age = 26
let work_period = 25
let total_age = user_age + work_period
console.log ("Total time = " + total_age)

console.log ("Total time =", total_age, typeof(total_age))

// Boolean (true/false)
let morning = false
console.log ("Morning " + morning + " " + typeof(morning))

let evening = true
console.log ("Evening", evening, typeof(evening))

// Boolean + сравнение
let apples = 10
let oranges = 25
let compare = apples > oranges
console.log ("Compare =", compare)
let equal_compare = apples == oranges
console.log ("Compare_Equals =", equal_compare)

// Операции ветвления. Выполняется какое-то ОДНО условие IF
if (equal_compare) {
    console.log ("Is it really true? =", equal_compare)
} else if (oranges == 30) {
    console.log ("How much oranges? =", oranges)
} else {
    console.log ("It is false =", equal_compare)
}