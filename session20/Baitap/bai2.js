let numb;
let str=""; 
do{
    numb = Number(prompt("Nhập số: "));
}while(!Number.isInteger(numb) || numb <=0)
for(let i = 1; i<= numb; i++){
    if (i % 5 == 0){
        str += i +",";
    }
}
str = str.slice(0,-1);
console.log(`Các số chia hết cho 5 từ 1 đến ${numb} là: ${str}`);
