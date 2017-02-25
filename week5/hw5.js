document.addEventListener ('DOMContentLoaded', function (){
	if (window.name == 'Popup') {
		window.onload = fAddEmail;
		var btn = document.getElementById('btnAddEmail');
		btn.onclick = fAddEmail;

		function fAddEmail(){
		var eltInput = document.createElement('input'); 
		var eltP = document.createElement('p'); 
		var div = document.getElementById('divEmail');
		div.appendChild(eltP);
		eltP.appendChild(eltInput);
		};

	} else {
		window.onload = function () {
		var btn = document.getElementById('btnWindow');
		btn.onclick = fOpenWin;

		function fOpenWin(width, height){
 		var left = (screen.width/2)-(width/2);
 		var top = (screen.height/2)-(height/2);
 		window.open('hw5_dialog.html','Popup', 'width=500, height=200, top='+top+', left='+left);
		};
	};
};
})