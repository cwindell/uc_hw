//Final_CarolineWindell

var divReg;
var divMain;
    
document.addEventListener ('DOMContentLoaded', function (){

	divReg = document.getElementById('divRegistered');
	divMain = document.getElementById('divMain');
	
	divMain.addEventListener('focus', function (event) {fHandleEnter(event, this);}, true);
	divMain.addEventListener('blur', function (event) {fHandleExit(event, this);}, true);

	fProcessForm();
	
	var inputElements = document.querySelectorAll(input.frmRegister[type='text'], [type ='password']);
	var spanElements = document.querySelectorAll('span');
	
	for (var i = 0; i < inputElements.length; i++){
	alert ("Element Id = " + inputElements[i]);
	}
	
	inputElements[i].addEventListener(‘blur’,function(){fCompareInput(arguments);});

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

	alert ("username = " + strQueryString);

	var btn = document.getElementById('btnRegister');
	btn.onclick = fRegister;

	function fRegister(){
		var login = strQueryString;	
		if (strQueryString.length>0) {
			$('#divRegistered').fadeIn(1000);
			divReg.innerHTML = 'Thank you, ' + login + ', you are now registered';
			divMain.style.display = 'none';		

		} else if (strQueryString.length===0) {
     			divReg.style.display = 'none';
			divMain.style.display = '';
      		};
	};
};

function fCompareInput(value1, value2, display){
	if ((value1 | value2).length==0){
		divReg.innerHTML = '';	
		divReg.style.display = '';	
	} else if (value1 === value2){
		divReg.innerHTML = 'Entries match';
		backgroundColor = 'green';
	} else if {
		divReg.innerHTML = 'Entries do not match';
		backgroundColor = 'red';
	};
}


//     Use regexr.com to test regular expressions
//     /[^=]*$/   selects string after =
//     /^.*?\=/   selects string before =
