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
	
	for (var i = 0; i < inputElements.length; i++){
		// alert ('Element Id = ' + inputElements[i]);
	}
	console.log (i);
	// inputElements[i].addEventListener('blur',function(){fCompareInput(arguments);});

});

function fHandleEnter(e){
	e.target.style.backgroundColor = 'yellow';
};

function fHandleExit(e){
	e.target.style.backgroundColor = '';	
};

function fProcessForm() {

	var strQueryString = location.search;
	strQueryString = decodeURIComponent(strQueryString);
	var login = strQueryString.replace(/^.*?\=/, '');

	// alert ('username = ' + strQueryString);
	console.log('username = ' + login);
	
	if (login.length > 0) {
		$('#divRegistered').fadeIn(1000);
		divReg.innerHTML = 'Thank you, ' + login + ', you are now registered';
		divMain.style.display = 'none';		

	} else if (login.length === 0) {
 		divReg.style.display = 'none';
  	};
};

function fCompareInput(value1, value2, display){
	if ((value1 | value2).length == 0){
		divReg.innerHTML = '';	
		divReg.style.display = '';	
	} else if (value1 === value2){
		divReg.innerHTML = 'Entries match';
		backgroundColor = 'green';
	} else {
		divReg.innerHTML = 'Entries do not match';
		backgroundColor = 'red';
	};
}


//     Use regexr.com to test regular expressions
//     /[^=]*$/   selects string after =
//     /^.*?\=/   selects string before =