let experience = Number(prompt("Nhập số năm kinh nghiệm:"));
if(experience < 1){
    console.log("Mới vào nghề");
}else if(experience >= 1 && experience <= 3){
    console.log("Nhân viên có kinh nghiệm");
}  else if(experience >= 4 && experience <= 6){
    console.log("Chuyên viên");
}else{
    console.log("Quản lý");
}