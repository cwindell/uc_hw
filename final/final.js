//Final_CarolineWindell

document.addEventListener ('DOMContentLoaded', function (){

	var divReg = document.getElementById('divRegistered');
	var divMain = document.getElementById('divMain');
	
	divMain.addEventListener('click', function (event) {fHandleEnter(event, this);}, true);
	divMain.addEventListener('click', function (event) {fHandleExit(event, this);}, true);

	fProcessForm();

});

function fHandleEnter(e){
	e.target.style.backgroundColor = 'yellow';
};

function fHandleExit(e){
	e.target.style.backgroundColor = 'white';	
};

function fProcessForm(){

	var strQueryString = location.search;
	strQueryString = decodeURIComponent(strQueryString);
	strQueryString = strQueryString.replace(/^[^=]*=/, '');

	alert ('String = ' + strQueryString);
	
};
