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

	inputElements[0].addEventListener('blur',function() { 
		fValidateLoginLength(inputElements[0].value, spanElements[0]);
	});
	
	inputElements[0].addEventListener('blur',function() { 
		fValidateLoginCharacters(inputElements[0].value, spanElements[1]);
	});

	inputElements[1].addEventListener('blur',function() { 
		fValidatePassword(inputElements[1].value, spanElements[2]);
	});

	inputElements[2].addEventListener('blur',function() { 
		fCompareInput(inputElements[1].value, inputElements[2].value, spanElements[3]);
	});

	inputElements[3].addEventListener('blur',function() { 
		fValidateEmail(inputElements[3].value, spanElements[4]);
	});

	inputElements[4].addEventListener('blur',function() { 
		fCompareInput(inputElements[3].value, inputElements[4].value, spanElements[5]);
	});

});

function fValidateLoginLength(value, display) {
	console.log('login length', value);
	if (value.length <= 10 && value.length >= 5){
		display.innerHTML = 'Login is correct length';	
		display.style.backgroundColor = 'green';
		console.log('correct length')
	} else {
		display.innerHTML = 'Login must be between 5-10 characters';
		display.style.backgroundColor = 'red';
		console.log('incorrect length')
	};
};

function fValidateLoginCharacters(characters, display) {
	console.log('characters', characters);
	var alphanumeric = /^\w+$/;
	if (alphanumeric.test(characters)){
		display.innerHTML = 'Login has valid characters';	
		display.style.backgroundColor = 'green';
		console.log('correct characters')
	} else {
		display.innerHTML = 'Login must contain only letters, numbers and underscores';
		display.style.backgroundColor = 'red';
		console.log('incorrect characters')
	};
};

function fValidatePassword(value, display) {
	console.log('password', value);
};

function fValidateEmail(value, display) {
	console.log('email', value);
};

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
	if ((value1.length === 0) | (value2.length === 0)){
		display.innerHTML = '';	
		display.style = '';	
	} else if (value1 === value2) {
		display.innerHTML = 'Entries match';
		display.style.backgroundColor = 'green';
	} else {
		display.innerHTML = 'Entries do not match';
		display.style.backgroundColor = 'red';
	};
}


//     Use regexr.com to test regular expressions
//     /[^=]*$/   selects string after =
//     /^.*?\=/   selects string before =
