let user = prompt("Nhập tên người dùng: ");
let pass;
if(user == "ADMIN"){
    pass = prompt("Nhập mật khẩu: ");
    if(pass == "TheMaster"){
        console.log("Welcome");
    }else if(pass == ""){
        console.log("Canceled");
    }else{
        console.log("Wrong password");
    }
}else if(user == ""){
    console.log("Canceled");
}else{
    console.log("I Don’t know you");
}