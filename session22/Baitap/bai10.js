let select;
let arr;
do{
    console.log("MENU");
    console.log("1. Nhập vào mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Thêm phần tử");
    console.log("4. Sửa phần tử");
    console.log("5. Xóa phần tử");
    console.log("6. Thoát");
    select = parseInt(prompt("Lựa chọn của bạn: "));
    switch(select){
        case 1:
            arr = prompt("Nhập vào mảng: ");
            arr = arr.split("");
            break;
        case 2:
            console.log(`Array = ${arr}`);
            break;
        case 3:
            let input = +prompt("Nhập vị trí muốn thêm: ");
            if(input < 0 || input > arr.length || Number.isNaN(input)){
                console.log(`Vị trí không hợp lệ`);
            }else{
                let value = +prompt("Nhập giá trị muốn thêm: ");
                if(Number.isNaN(input)){
                    console.log(`Giá trị không hợp lệ`);
                }else{
                    arr.splice(input -1 ,0,value);
                }
            }
            break;
        case 4:
            let update = +prompt("Nhập vị trí muốn thêm: ");
            if(update < 0 || update > arr.length || Number.isNaN(update)){
                console.log(`Vị trí không hợp lệ`);
            }else{
                let value = +prompt("Nhập giá trị muốn thêm: ");
                if(Number.isNaN(update)){
                    console.log(`Giá trị không hợp lệ`);
                }else{
                    arr.splice(update -1 ,1,value);
                }
            }
            break;
        case 5:
            let dele = +prompt("Nhập vị trí muốn thêm: ");
            if( dele < 0 || dele > arr.length || Number.isNaN(dele)){
                console.log(`Vị trí không hợp lệ`);
            }else{
                arr.splice(dele -1 ,1);
            }
            break;
    }
}while(select !== 6);