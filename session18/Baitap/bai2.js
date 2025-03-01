let mathPoint = Number(prompt("Nhập điểm Toán"));
let philologyPoint = Number(prompt("Nhập điểm Văn Học"));
let englishPoint = Number(prompt("Nhập điểm Tiếng Anh"));
let averagePoint = (mathPoint + philologyPoint + englishPoint) / 3;
if(averagePoint >= 8){
    console.log("Học sinh giỏi");
}else if(averagePoint >= 6.5 && averagePoint <= 7.9){
    console.log("Học sinh khá");
}  else if(averagePoint <= 6.4 && averagePoint >= 5.9){
    console.log("Học sinh trung bình");
}else{
    console.log("Học sinh yếu");
}