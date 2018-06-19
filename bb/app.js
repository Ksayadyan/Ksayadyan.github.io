function checker() {
	if(document.documentElement.scrollTop >= 400){
		document.getElementById('first').style.filter = "brightness(0)"
		document.getElementById('first').style.transform = "scale(0.1)"
	}else{
		document.getElementById('first').style.filter = "brightness(1)"
		document.getElementById('first').style.transform = "scale(1)"
	}
	if(document.documentElement.scrollTop >= 1101){
		document.getElementById('second').style.transform = "scale(0.1)"
		document.getElementById('second').style.filter = "brightness(0)"
	}else{
		document.getElementById('second').style.transform = "scale(1)"
		document.getElementById('second').style.filter = "brightness(1)"
	}
	if(document.documentElement.scrollTop >= 1900){
		document.getElementById('third').style.transform = "scale(0.1)"
		document.getElementById('third').style.filter = "brightness(0)"
	}else{
		document.getElementById('third').style.transform = "scale(1)"
		document.getElementById('third').style.filter = "brightness(1)"
	} 
}
setInterval(checker,100);