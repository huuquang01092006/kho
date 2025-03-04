let numb = prompt("Nhập số nguyên: ");
if (!Number.isInteger(Number(numb))) {
    console.log(`Không hợp lệ`);
} else {
    let symmetric = true;
    let strNumb = numb.toString();
    for (let i = 0; i <= Math.floor(strNumb.length / 2); i++) {
        if (strNumb[i] != strNumb[strNumb.length - 1 - i]) {
            symmetric = false;
            break;
        }
    }
    if (symmetric) {
        console.log(`Là số đối xứng`);
    } else {
        console.log(`Không phải là số đối xứng`);
    }
}
