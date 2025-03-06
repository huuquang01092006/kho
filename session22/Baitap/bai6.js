let numberArr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let numb = Number(prompt("Nhập số nguyên: "));
if(Number.isNaN(numb)){
    console.log(`Dãy không hợp lệ`);
}else{
    let flag = 0;
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] == numb) {
            flag++;
        }
    }
    if (flag > 0) {
        console.log(`Số ${numb} xuất hiện ${flag}`);
    }else{
        console.log(`Không tồn tại`);
    }
}