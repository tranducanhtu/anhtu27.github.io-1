function kiemtra()
{
	var user= document.getElementById('tendangnhap').value;
	if(user=="")
	{
		document.getElementById('erro1').innerHTML="user không được để trống";
	}
	else
	{
		document.getElementById('erro1').innerHTML="";

	}
	var pass= document.getElementById('matkhau').value;
	var cpass=document.getElementById('nhaplaimatkhau').value;
	if(pass=="")
	{
		document.getElementById('erro2').innerHTML="Mật khẩu không được để trống"
	}
	else {
		document.getElementById('erro2').innerHTML="";

	}
	if(pass!=cpass)
	{
		document.getElementById('erro3').innerHTML="Mật khẩu không khớp";
	}
	else{
		document.getElementById('erro3').innerHTML="";

	}
	var email= document.getElementById('mail');
	var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!filter.test(email.value))
	{
		document.getElementById('erro4').innerHTML="email khong hop le";
		mail.focus;
	}
	else{
		document.getElementById('erro4').innerHTML="";

	}
	var ncheck=document.getElementById('check').check;
	if(ncheck==false)
	{
	document.getElementById('erro').innerHTML="Chưa check, hãy ấn check";
	}
	else{
		document.getElementById('erro').innerHTML="";
	}
}
