let numbers = [2,5,7,4,1,8,6];
let input = prompt("Nhập số bất kỳ");
let check = false;
for(let i = 0; i < numbers.length; i++ ){
    if(numbers[i] == input){
        check = true;
    }
}
if(check){
    console.log(`Bingo`);
}else{
    console.log(`Chúc bạn may mắn lần sau`);
}
