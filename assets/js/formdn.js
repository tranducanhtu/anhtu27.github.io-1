function kiemtradn()
{
let user=document.getElementById('tendangnhap1').value;
let pass=document.getElementById('matkhau1').value;
if(user=="")
{
    document.getElementById('tendangnhap2').innerHTML="Tên tài khoản không hợp lệ";
    return false;
}
else
{
    document.getElementById('tendangnhap2').innerHTML="";
}
if(pass<7)
{
    document.getElementById('matkhau2').innerHTML="Mật khẩu không hợp lệ";
    return false;
}
else 
{
    document.getElementById('matkhau2').innerHTML="";
}
return true;
}