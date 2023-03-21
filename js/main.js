// Khóa nút đăng nhập khi chưa nhập user/pass
document.getElementById("btnlogin").disabled=true;
// check required input
function checkRequired(){
    let u = document.getElementById("un").value;
    let p = document.getElementById("mk").value;
    if (u.length>0 && p.length>0) 
        document.getElementById("btnlogin").disabled=false;
    else
        document.getElementById("btnlogin").disabled=true;
}
// hiện mật khẩu
function togglePass() {
    let mk = document.getElementById("mk");
    mk.type = (mk.type === "password")? "text":"password";
}  
// show popup và lưu thông tin đăng nhập vào localstorage
function show_alert() {
    let u = document.getElementById("un").value
    let p = document.getElementById("mk").value;
    alert("Xin chào: " + u );
    let userName = localStorage.setItem("username", u)
    let password = localStorage.setItem("password", p)
}
