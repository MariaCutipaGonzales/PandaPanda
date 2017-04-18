window.addEventListener('load', function () {
	for (var i = 1; i < 5; i++) {
		var docFragment = document.createDocumentFragment();
		var div = document.createElement("div");
		var img = document.createElement("img");
		var button = document.createElement("span");
		var x=document.createTextNode("x");

		button.setAttribute("class","close");
		div.setAttribute("class","divContent");
		button.appendChild(x);
		img.setAttribute("src","assets/img/panda"+i+".jpg");
		img.setAttribute("alt","panda "+i);
		div.appendChild(img);
		div.appendChild(button);
		docFragment.appendChild(div);
		document.getElementById('galleryContent').appendChild(docFragment);
	}

	var close = document.getElementsByClassName("close");
	for (var i = 0; i < close.length; i++) {
		close[i].addEventListener("click", function(e) {
			e.target.parentNode.classList.add("display");
		});
	}

	document.getElementsByClassName("btn")[0].addEventListener("click", function(e) {
   		document.getElementById("origenInfo").classList.toggle("none");
	});

	document.getElementsByClassName("btn")[1].addEventListener("click", function(e) {
		document.getElementById("historiaInfo").classList.toggle("none");
	});

	var div = document.getElementsByClassName("divContent");
	document.getElementsByClassName("btn")[2].addEventListener("click", function(e) {
 	for (var i=0; i<div.length; i++) {
   		 div[i].classList.remove("display");
 	 }
	});

});