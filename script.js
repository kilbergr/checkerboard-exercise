
var checkerboard = function(){
	for (var i = 0; i <= 100; i++){
		if (i%2 === 0){
			var newDiv = document.createElement("div");
			newDiv.style.paddingBottom = "11.1%";
			newDiv.style.backgroundColor = "rgb(83, 219, 201)";
			newDiv.style.width= "11.1%";
			newDiv.style.float="left";
			document.body.appendChild(newDiv);
		} else if (i%2 === 1){
			var newDiv = document.createElement("div");
			newDiv.style.paddingBottom = "11.1%";
			newDiv.style.width= "11.1%";
			newDiv.style.float="left";
			var j = 0;
			while(j < 255){
				newDiv.style.backgroundColor ="rgb(219, 83, " + j + ")";
				document.body.appendChild(newDiv);
				j+=10;
			}
		}

	}
}
checkerboard();
 