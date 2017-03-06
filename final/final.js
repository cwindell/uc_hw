//Final_CarolineWindell

var divReg;
var divMain;
    
document.addEventListener ('DOMContentLoaded', function (){

	divReg = document.getElementById('divRegistered');
	divMain = document.getElementById('divMain');
	
	divMain.addEventListener('focus', function (event) {fHandleEnter(event, this);}, true);
	divMain.addEventListener('blur', function (event) {fHandleExit(event, this);}, true);

	fProcessForm();

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
	
	if (strQueryString.length>0) {
		var login = strQueryString(/[^=]*$/);
		document.getElementById(divReg).innerHTML = 'Thank you, ' + login + ', you are now registered';
		document.getElementById(divMain).style.display = 'none';
		$('divRegistered').fadeIn(1000);
 	} else if (strQueryString.length===0) {
     		document.getElementById(divReg).style.display = 'none';
		document.getElementById(divMain).style.display = '';
      };
};

//     /[^=]*$/   selects string after =
//     /^.*?\=/   selects string before =
