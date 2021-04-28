// JavaScript Document
var t;
		var currentIndex=1;
		function next(){
			clearInterval(t);
			if(currentIndex < 3){
				currentIndex++;
				document.getElementById("hinhslide").src = "images/" + currentIndex + ".jpg";
			}
			else{
				currentIndex=1;
				document.getElementById("hinhslide").src = "images/" + currentIndex + ".jpg";
			}
			
		}
		function back(){
			clearInterval(t);
			if(currentIndex > 1){
				currentIndex--;
				document.getElementById("hinhslide").src = "images/" + currentIndex + ".jpg";
			}
			else{
				currentIndex=3;
				document.getElementById("hinhslide").src = "images/" + currentIndex + ".jpg";
			}
		}