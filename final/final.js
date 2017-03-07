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
	// alert ('Array Element ' + i + ' = Element Id ' + inputElements[i]);
	// }

	document.inputElements[2].addEventListener('blur',function() { 
		fCompareInput(inputElements[2].value, spanElements[2]);
	});

	document.inputElements[4].addEventListener('blur',function() { 
		fCompareInput(inputElements[4].value, spanElements[4]);
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

function fCompareInput(inputElements.value1, inputElements.value2, display) {
	if ((inputElements[1] | inputElements[2] | inputElements[3] | inputElements[4]).length == 0){
		divReg.innerHTML = '';	
		divReg.style.display = '';	
	} else if ((inputElements[1] === inputElements[2]) && (inputElements[3] === inputElements[4])) {
		divReg.innerHTML = 'Entries match';
		backgroundColor = 'green';
	} else {
		divReg.innerHTML = 'Entries do not match';
		backgroundColor = 'red';
	};
}
