let str = "";
str = prompt("Nhập chuỗi: ");
let char = prompt("Nhập kí tự cần tìm");
index = str.indexOf(char);
if(index != -1){
    console.log("Tồn tại từ cần tìm");
}else{
    console.log("Không tồn tại từ cần tìm");
}