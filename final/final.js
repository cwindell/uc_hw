//Final_CarolineWindell

var divReg;
var divMain;
    
document.addEventListener ('DOMContentLoaded', function (){

	divReg = document.getElementById('divRegistered');
	divMain = document.getElementById('divMain');
	
	divMain.addEventListener('focus', function (event) {fHandleEnter(event, this);}, true);
	divMain.addEventListener('blur', function (event) {fHandleExit(event, this);}, true);

	fProcessForm();
	
	var inputElements = document.querySelectorAll('#txtLogin, #txtPassword, #txtConfirmPassword, #txtEmail, #txtConfirmEmail');

});

function fHandleEnter(e){
	e.target.style.backgroundColor = 'yellow';
};

function fHandleExit(e){
	e.target.style.backgroundColor = '';	
};

function fProcessForm(){

	var strQueryString = location.search;
	strQueryString = decodeURIComponent(strQueryString);
	strQueryString = strQueryString.replace(/^.*?\=/, '');

	alert ("username = " + strQueryString)

	var btn = document.getElementById('btnRegister');
	btn.onclick = fRegister;

	function fRegister(){
		var login = strQueryString;	
		if (strQueryString.length>0) {
			$('divReg').fadeIn(1000);
			document.getElementById('divReg').innerHTML = 'Thank you, ' + login + ', you are now registered';
			document.getElementById('divMain').style.display = 'none';		

		} else if (strQueryString.length===0) {
     			document.getElementById('divReg').style.display = 'none';
			document.getElementById('divMain').style.display = '';
      		};
	};
}


//     Use regexr.com to test regular expressions
//     /[^=]*$/   selects string after =
//     /^.*?\=/   selects string before =
