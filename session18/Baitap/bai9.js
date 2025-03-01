let hour = Number(prompt("Nhập giờ: "));
let minute = Number(prompt("Nhập phút: "));
let second = Number(prompt("Nhập giây: "));
if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59) {
    if (hour >= 13 && hour <= 23) {
        hour = hour - 12;
        console.log(`${hour}:${minute}:${second} PM`);
    } else {
        console.log(`${hour}:${minute}:${second} AM`);
    }
} else {
    console.log("Giờ không hợp lệ");
}