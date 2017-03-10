//Final_CarolineWindell

var divReg;
var divMain;
    
document.addEventListener ('DOMContentLoaded', function() {

	divReg = document.getElementById('divRegistered');
	divMain = document.getElementById('divMain');
	
	divMain.addEventListener('focus', function (event) {fHandleEnter(event, this);}, true);
	divMain.addEventListener('blur', function (event) {fHandleExit(event, this);}, true);

	fProcessForm();
	
	var inputElements = document.querySelectorAll('#frmRegister input[type="text"], #frmRegister input[type="password"]');
	var spanElements = document.querySelectorAll('span');

	console.log(inputElements);
	console.log(spanElements);
	
	// for (var i = 0; i < inputElements.length; i++) {
	// alert ('Array Element ' + i + ' = Element Id: ' + inputElements[i].id);
	// }

	inputElements[2].addEventListener('blur',function() { 
		fCompareInput(inputElements[1].value, inputElements[2].value, spanElements[2]);
	});

	inputElements[4].addEventListener('blur',function() { 
		fCompareInput(inputElements[3].value, inputElements[4].value, spanElements[4]);
	});

});

function fHandleEnter(e) {
	e.target.style.backgroundColor = 'yellow';
};

function fHandleExit(e) {
	e.target.style.backgroundColor = '';	
};

function fProcessForm() {

	var strQueryString = location.search;
	strQueryString = decodeURIComponent(strQueryString);
	var login = strQueryString.replace(/^.*?\=/, '');

	console.log(login);
	
	if (login.length > 0) {
		$('#divRegistered').fadeIn(1000);
		divReg.innerHTML = 'Thank you, ' + login + ', you are now registered';
		divMain.style.display = 'none';		

	} else if (login.length === 0) {
 		divReg.style.display = 'none';
 		divMain.style.display = 'block';	
  	};
};

function fCompareInput(value1, value2, display) {

	if ((value1.length | value2.length) == 0){
		divReg.innerHTML = '';	
		divReg.style.display = '';	
	} else if (value1 === value2) {
		divReg.innerHTML = 'Entries match';
		divReg.style.display.backgroundColor = 'green';
	} else {
		divReg.innerHTML = 'Entries do not match';
		divReg.style.display.backgroundColor = 'red';
	};

}


//     Use regexr.com to test regular expressions
//     /[^=]*$/   selects string after =
//     /^.*?\=/   selects string before =
