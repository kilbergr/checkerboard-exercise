var checkerboard = function(){
	for (var i = 0; i <= 100; i++){
	   if (i%2 === 0){
			var newDiv = document.createElement("div");
			newDiv.style.paddingBottom = "11.1%";
			newDiv.style.backgroundColor = "red";
			newDiv.style.width= "11.1%";
			newDiv.style.float="left";
        } else if (i%2 === 1){
           	var newDiv = document.createElement("div");
			newDiv.style.paddingBottom = "11.1%";
			newDiv.style.backgroundColor = "black";
			newDiv.style.width= "11.1%";
			newDiv.style.float="left";
        }
		document.body.appendChild(newDiv);
	}
}
checkerboard();