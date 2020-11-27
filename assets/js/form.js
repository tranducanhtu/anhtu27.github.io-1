function kiemtra()
{
	let user=document.getElementById('tendangnhap').value;
	let email=document.getElementById('mail').value;
	let pw_1=document.getElementById('matkhau').value;
	let pw_2=document.getElementById('nhaplaimatkhau').value;
	let check = document.getElementById('check').checked;
	// var testemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(user=="")
	{
		document.getElementById('name').innerHTML="Tên tài khoản không hợp lệ";
		return false;
	}
	else
	{
		document.getElementById('name').innerHTML="";
	}
	if(pw_1.length<7)
	{
		document.getElementById('password').innerHTML="Mật khẩu không hợp lệ";
		return false;
	}
	else 
	{
		document.getElementById('password').innerHTML="";
	}
	if(pw_1!=pw_2)
	{
		document.getElementById('repassword').innerHTML="Mật khẩu không đúng";
		return false;
	}
	else
	{
		document.getElementById('repassword').innerHTML="";
	}
	if(email=="")
	{
		document.getElementById('err').innerHTML="Email chua nhap";
		return false;
	}
	else
	{
		document.getElementById('err').innerHTML="";
	}
	
	// var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	// if(!filter.test(email.value))
	// {
		// document.getElementById('err').innerHTML="email khong hop le";
		// mail.focus;
	// }
	// else
	// {
		// document.getElementById('err').innerHTML="";
	// }
	if(check == false) 
	{
		document.getElementById('check2').innerHTML="Chưa check, hãy ấn check";
		return false;
	}
	else
	{
		document.getElementById('check2').innerHTML="";
	}
	return true;
}
 	