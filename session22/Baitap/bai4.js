let input = Number(prompt("Nhập dãy số bất kỳ: "));
if(Number.isNaN(input)){
    console.log(`Dãy không hợp lệ`);
}else{
    let str = input.toString();
    let numbers = str.split("");
    let max = numbers[0];
    for(let i = 0; i < numbers.length ; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    console.log(`${max} là số lớn nhất trong mảng`);
}