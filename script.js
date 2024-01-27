function getFormvalue() {
    var form=document.getElementById('form1');
	var first=form.elements['fname'].value;
	var last=form.elements['lname'].value;
	alert(first+" "+last);
}
