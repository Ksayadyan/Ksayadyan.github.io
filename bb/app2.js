function checker2() {
	if(document.documentElement.scrollTop >= 300){
		document.querySelector('#first h1').style.marginTop = "200px;"
	}
}
setInterval(checker2,100);