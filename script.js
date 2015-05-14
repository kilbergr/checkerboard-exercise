
var randInterval;

function randomChange(){
	randInterval = setInterval(checkerboard, 1000);
}


/* Also tried as follows:
function randomChange(){
	randInterval = setInterval(checkerboard, 1000);
}
*/

function randomColor(){
	var randNum = Math.floor(Math.random()*255);
	return randNum;
	}

var checkerboard = function(){
	for (var i = 0; i <= 100; i++){
           	var newDiv = document.createElement("div");
			newDiv.style.paddingBottom = "11.1%";
			newDiv.style.width= "11.1%";
			newDiv.style.float="left";	
			newDiv.style.backgroundColor ="rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
			document.body.appendChild(newDiv);
	}
}

checkerboard();