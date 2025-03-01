let a = Number(prompt("Nhập cạch a: "));
let b = Number(prompt("Nhập cạch b: "));
let c = Number(prompt("Nhập cạch c: "));
if (a + b > c && a + c > b && b + c > a) {
    if (a == b && b == c) {
        console.log("Tam giác đều");
    } else if (a == b || a == c || b == c) {
        console.log("Tam giác cân");
    } else if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
        console.log("Tam giác vuông");
    } else {
        console.log("Tam giác thường");
    }
} else {
    console.log("Không phải tam giác");
}