//Final_CarolineWindell

document.addEventListener ('DOMContentLoaded', function (){

	var divReg = document.getElementById('divRegistered');
	var divMain = document.getElementById('divMain');
	
	divMain.addEventListener('click', function (event) {fHandleEnter(event, this);}, true);
	divMain.addEventListener('mouseout', function (event) {fHandleExit(event, this);}, true);

	fProcessForm();

});

//I think this function works well. Input box turns yellow when you click in it.
function fHandleEnter(e){
	e.target.style.backgroundColor = 'yellow';
};

//There is something wrong with this function. I'm not sure if is the type "mouseout" on line 9, "target" on line 22, or the color "white"
function fHandleExit(e){
	e.target.style.backgroundColor = 'white';	
};

//None of this function is working.
function fProcessForm(){

	var strQueryString = location.search;
	strQueryString = decodeURIComponent(strQueryString);
	strQueryString = strQueryString.replace(/^.*?\=/, '');

	alert ('Test: ' + strQueryString);
	
//I know that the regEx is wrong, but I'm not sure how you are supposed to find the name entered if you've replaced everything up to the equal sign with nothing
	if (strQueryString.length>0) {
		var login = strQueryString.replace(/^.*?\=/, '');
		document.getElementById(divReg).innerHTML = 'Thank you, {login}, you are now registered';
		document.getElementById(divMain).style.display = 'none';
		$('divRegistered').fadeIn(1000);
 	} else if (strQueryString.length===0) {
     		document.getElementById(divReg).style.display = 'none';
		document.getElementById(divMain).style.display = '';
      };
};
