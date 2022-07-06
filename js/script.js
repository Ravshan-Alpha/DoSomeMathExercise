// const a = {};
// a.num1 = +prompt("Type the first number:");
// a.num2 = +prompt("Type the second number:");
// function plus (x, y) {
//     return x + y; 
// }
// a.result = plus(a.num1, a.num2);
// document.body.innerHTML = "Over all of numbers " + a.result;

// const user = {
//     userName: "John",
//     userAge: 21,
//     met: function () {
//         // this - ЭТОТ ОБЪЕКТ
//         console.log(this);
//         console.log(this.userName);
//         return `User - ${this.userName}; Age - ${this.userAge}` 
//     }, // МЕТОД ОБЪЕКТА-
//     userAdd: () => {
//         console.log(this);
//     }
// };
// document.body.innerHTML = user.met();
// console.log(user.met());
// user.userAdd();

// -Math
// var x = 3.4
// console.log(Math.round(x));
// console.log(Math.ceil(x));
// console.log(Math.floor(x));
// console.log(Math.random());
// Math.random() + ((Максимальное число + 1 - Минимальное значение) + минимальное значение)
// y = Math.floor (Math.random() * 21);
// console.log(y);
function rand (max, min) {
    let result = Math.random() * (max + 1 - min) + min;
    return Math.floor(result)
}
// console.log(rand(20, 5));
// console.log(rand());
let minNum = +prompt("Type minimum value of exercise:", 0);
let maxNum = +prompt("Type maximum value of exercise:", 10);
for (let i = 0; i < 10; i++) {
    let x = rand(maxNum, minNum);
    let y = rand(maxNum, minNum);
    let userResult = prompt(`Try this exercise: ${x} + ${y}`);
    let answer = x + y == userResult ? "Right!" : "Wrong!"
    document.body.innerHTML = document.body.innerHTML + `<p>${x} + ${y} = ${x+y}; Your answer is <span>${userResult}</span> ${answer}</p>`;
    // document.body.innerHTML += `<p>${x} + ${y} = ${x+y}; Your answer is ${userResult} ${answer}</p>`; SAME UP
}