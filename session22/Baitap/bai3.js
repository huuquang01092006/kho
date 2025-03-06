let input = Number(prompt("Nhập dãy số bất kỳ: "));
if(Number.isNaN(input)){
    console.log(`Dãy không hợp lệ`);
}else{
    let str = input.toString();
    let numbers = str.split(",");
    numbers.reverse();
    console.log(numbers);
}