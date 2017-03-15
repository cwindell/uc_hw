//Final_CarolineWindell

// add global variables for divReg and divMain
var divReg;
var divMain;

document.addEventListener ('DOMContentLoaded', function() {

	// define variables with reference to elements divRegistered and divMain
	divReg = document.getElementById('divRegistered');
	divMain = document.getElementById('divMain');

	// declare and define variable the reference to element divLoginErrorContainer
	var divLoginErrorContainer = document.getElementById('divLoginErrorContainer');
	
	// use addEventListeners to trigger functions fHandleEnter and fHandleExit
	divMain.addEventListener('focus', function (event) {fHandleEnter(event, this);}, true);
	divMain.addEventListener('blur', function (event) {fHandleExit(event, this);}, true);
	
	// invoke function fProcessForm to hide divReg element (no input yet)
	fProcessForm();

	// declare and define variable that includes all text input and password input elements from frmRegister	
	var inputElements = document.querySelectorAll('#frmRegister input[type="text"], input[type="password"]');
	// declare and define variable that includes all span elements from frmRegister
	var spanElements = document.querySelectorAll('span');

	// console.log(inputElements);
	// console.log(spanElements);
	
	// for (var i = 0; i < inputElements.length; i++) {
	// alert ('Array Element ' + i + ' = Element Id: ' + inputElements[i].id);
	// }

	// use addEventListener to trigger function fValidateLogin when txtLogin element loses focus
	inputElements[0].addEventListener('blur',function() { 
		fValidateLogin(inputElements[0].value, spanElements[0], spanElements[1], divLoginErrorContainer);
	});

	// use addEventListener to trigger function fCompareInput when txtConfirmPassword element loses focus
	inputElements[2].addEventListener('blur',function() { 
		fCompareInput(inputElements[1].value, inputElements[2].value, spanElements[3]);
	});

	// use addEventListener to trigger function fCompareInput when txtConfirmEmail element loses focus
	inputElements[4].addEventListener('blur',function() { 
		fCompareInput(inputElements[3].value, inputElements[4].value, spanElements[5]);
	});

});

// add function to check for input in login element
function fValidateLogin(login, lengthSpan, characterSpan, container) {
	// if login does NOT have input, set inner HTML of length and character spans to empty strings and style attribute of container to none
	if (login.length === 0){
 		container.style.display = 'none';
		lengthSpan.innerHTML = '';	
		lengthSpan.style = '';	
		characterSpan.innerHTML = '';	
		characterSpan.style = '';
	// if login has input, set style attribute of container to block and invoke fValidateLoginLength and fValidateLoginCharacters functions
	} else {
		container.style.display = 'block';	
		fValidateLoginLength(login, lengthSpan)
		fValidateLoginCharacters(login, characterSpan)
	};
};

// add function to check for length of login
function fValidateLoginLength(value, display) {
	// if login length is between 5 and 10 characters, set inner HTML to 'Login is correct length' and background color to green
	if (value.length <= 10 && value.length >= 5){
		// console.log('correct length')
		display.innerHTML = 'Login is correct length';	
		display.style.backgroundColor = 'green';
	// if login length is NOT between 5 and 10 characters, set inner HTML to 'Login must be between 5-10 characters' and background color to red	
	} else {
		// console.log('incorrect length')	
		display.innerHTML = 'Login must be between 5-10 characters';
		display.style.backgroundColor = 'red';
	};
};

// add function to check for characters in login
function fValidateLoginCharacters(characters, display) {
	// declare and define variable named alphanumeric using regex for letters, numbers, and underscores
	var alphanumeric = /^\w+$/;
	// check to see if login has only letters, numbers, and underscores and set inner HTML to 'Login contains valid characters' and background color to green
	if (alphanumeric.test(characters)){
		// console.log('correct characters')
		display.innerHTML = 'Login contains valid characters';	
		display.style.backgroundColor = 'green';
	// if other characters are used, set inner HTML to 'Login must contain only letters, numbers and underscores' and background color to red	
	} else {
		// console.log('incorrect characters')
		display.innerHTML = 'Login must contain only letters, numbers and underscores';
		display.style.backgroundColor = 'red';
	};
};

// add function to change color of input element to yellow when in focus
function fHandleEnter(e) {
	e.target.style.backgroundColor = 'yellow';
};

// add function to remove yellow from input element when focus lost (blur)
function fHandleExit(e) {
	e.target.style.backgroundColor = '';	
};

// add function to hide registration form when user clicks register button
function fProcessForm() {
	// use replace method and regex to select only login string
	var strQueryString = location.search;
	strQueryString = decodeURIComponent(strQueryString);
	var login = strQueryString.replace(/^.*?\=/, '');
	// console.log(login);
	// if login has input, use jQuery fadeIn method to show divRegistered element, set innerHTML to 'Thank you...' and hide divMain element
	if (login.length > 0) {
		$('#divRegistered').fadeIn(1000);
		divReg.innerHTML = 'Thank you, ' + login + ', you are now registered';
		divMain.style.display = 'none';		
	// if login does NOT have input, hide divReg element and show divMain element
	} else if (login.length === 0) {
 		divReg.style.display = 'none';
 		divMain.style.display = 'block';	
  	};
};

// add function to compare password and email elements
function fCompareInput(value1, value2, display) {
	// if either parameter is empty, set inner HTML and style attribute of display parameter to empty string
	if ((value1.length === 0) || (value2.length === 0)) {
		display.innerHTML = '';	
		display.style = '';	
	// if both values are equal, set inner HTML to 'Entries match' and background color to green		
	} else if (value1 === value2) {
		display.innerHTML = 'Entries match';
		display.style.backgroundColor = 'green';
	// if values are NOT empty and NOT equal, set inner HTML to 'Entries do not match' and background color to red	
	} else {
		display.innerHTML = 'Entries do not match';
		display.style.backgroundColor = 'red';
	};
}
