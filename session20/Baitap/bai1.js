let numb;
do{
    numb = Number(prompt("Nhập số: "));
}while(!Number.isInteger(numb) || numb <0)
let sum = (numb * (numb +1)/2);
console.log(sum);