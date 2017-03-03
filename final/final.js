//Final_CarolineWindell

document.addEventListener ('DOMContentLoaded', function (){

	var divReg = document.getElementById('divRegistered');
	var divMain = document.getElementById('divMain');
	
	divMain.addEventListener('click', function (event) {fHandleEnter(event, this);}, true);
	divMain.addEventListener('mouseout', function (event) {fHandleExit(event, this);}, true);

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

	alert ('Test: ' + strQueryString);
	
	var login = strQueryString;
	
	if (strQueryString.length>0) {
		document.getElementById(divMain).style.display = 'none';
 	} else if (strQueryString.length==0) {
     		document.getElementById(divMain).style.display = 'none';
		document.getElementById(divReg).style.display = '';
      };
};
