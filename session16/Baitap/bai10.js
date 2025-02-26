let firstNumber = Number(prompt("Nhập số thứ nhất: "));
let secondNumber = Number(prompt("Nhập số thứ hai: "));
let ramdomNumber = Number(Math.random() * (secondNumber - firstNumber) + firstNumber);
document.write(`Số bất kì giữa ` + firstNumber + ` và ` + secondNumber + ` la: ` + ramdomNumber + `<br>`);