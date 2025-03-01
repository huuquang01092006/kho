let a = Number(prompt("Nhập số a: "));
let b = Number(prompt("Nhập số b: "));
let operator = prompt("Nhập phép tính(+,-,*,/): ");
switch (operator) {
    case "+":
        alert(`kết quả của phép tính: ${a} + ${b}  = ${a + b}`);
        break;
    case "-":
        alert(`kết quả của phép tính: ${a} - ${b}  = ${a - b}`);
        break;
    case "*":
        alert(`kết quả của phép tính: ${a} * ${b}  = ${a * b}`);
        break;
    case "/":
        alert(`kết quả của phép tính: ${a} / ${b}  = ${a / b}`);
        break;
    default:
        alert("Phép tính sai");
}