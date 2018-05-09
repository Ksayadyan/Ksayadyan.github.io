let cellSystem = {
	1: {
		 1: 0,
		 2: 0,
		 3: 0,
	},
	2: {
		1: 0,
		2: 0,
		3: 0,
	},
	3: {
		1: 0,
		2: 0,
		3: 0,
	},
}
let winstatus = 0;
let step = 1;
function checker(i, j){
	if(!winstatus){
		if(step%2 !== 0 && cellSystem[i][j]===0){
			cellSystem[i][j] = 4;
			document.getElementById(i + "" + j).innerHTML= "X";
			step++;
			winnerchecker();

		}else if(step%2 === 0 && cellSystem[i][j]===0){
			cellSystem[i][j]= 1; 
			document.getElementById(i + "" +j).innerHTML= "O";
			step++;
			winnerchecker();
		}
	}
}
function Owins(){
	console.log("O wins");
	winstatus++
	document.getElementById("divblack").style.visibility = ("visible");
	document.getElementById("winnerO").style.visibility = ("visible");
	blackDivFadeIn();
	winnerOFadeIn();
	restartButtonFadeIn();
}
function Xwins(){
	console.log("X wins");
	winstatus++;
	document.getElementById("divblack").style.visibility = ("visible");
	document.getElementById("winnerX").style.visibility = ("visible");
	blackDivFadeIn()
	winnerXFadeIn();
	restartButtonFadeIn()
}
function winnerchecker(){
	if(!winstatus){
	if(cellSystem[1][1]+cellSystem[1][2]+cellSystem[1][3]===3) { Owins(); winstatus++;} else
	if(cellSystem[2][1]+cellSystem[2][2]+cellSystem[2][3]===3) { Owins(); winstatus++;} else
	if(cellSystem[3][1]+cellSystem[3][2]+cellSystem[3][3]===3) { Owins(); winstatus++;} else
	if(cellSystem[1][1]+cellSystem[2][1]+cellSystem[3][1]===3) { Owins(); winstatus++;} else
	if(cellSystem[1][2]+cellSystem[2][2]+cellSystem[3][2]===3) { Owins(); winstatus++;} else
	if(cellSystem[1][3]+cellSystem[2][3]+cellSystem[3][3]===3) { Owins(); winstatus++;} else
	if(cellSystem[1][1]+cellSystem[2][2]+cellSystem[3][3]===3) { Owins(); winstatus++;} else
	if(cellSystem[1][3]+cellSystem[2][2]+cellSystem[3][1]===3) { Owins(); winstatus++;} else //x start
	if(cellSystem[1][1]+cellSystem[1][2]+cellSystem[1][3]===12) { Xwins(); winstatus++;} else
	if(cellSystem[2][1]+cellSystem[2][2]+cellSystem[2][3]===12) { Xwins(); winstatus++;} else
	if(cellSystem[3][1]+cellSystem[3][2]+cellSystem[3][3]===12) { Xwins(); winstatus++;} else
	if(cellSystem[1][1]+cellSystem[2][1]+cellSystem[3][1]===12) { Xwins(); winstatus++;} else
	if(cellSystem[1][2]+cellSystem[2][2]+cellSystem[3][2]===12) { Xwins(); winstatus++;} else
	if(cellSystem[1][3]+cellSystem[2][3]+cellSystem[3][3]===12) { Xwins(); winstatus++;} else
	if(cellSystem[1][1]+cellSystem[2][2]+cellSystem[3][3]===12) { Xwins(); winstatus++;} else
	if(cellSystem[1][3]+cellSystem[2][2]+cellSystem[3][1]===12) { Xwins(); winstatus++;}
	else if(step === 10 && winstatus === 0){
			console.log("Draw");
			drawFadeIn();
			blackDivFadeIn();
			restartButtonFadeIn();
			  
 		}
}
}
function blackDivFadeIn(){
	document.getElementById("divblack").style.opacity = ("0.9");
	document.getElementById("divblack").style.visibility = ("visible");
}
function blackDivFadeOut(){
	document.getElementById("divblack").style.opacity = ("0");
	document.getElementById("divblack").style.visibility = ("hidden")
}
function winnerXFadeIn(){
	document.getElementById("winnerX").style.opacity = ("1");
}
function winnerXFadeOut(){
	document.getElementById("winnerX").style.opacity = ("0");
	document.getElementById("winnerX").style.visibility = ("hidden")
}
function winnerOFadeIn(){
	document.getElementById("winnerO").style.opacity = ("1");
}
function winnerOFadeOut(){
	document.getElementById("winnerO").style.opacity = ("0");
	document.getElementById("winnerO").style.visibility = ("hidden")
}
function restartButtonFadeIn(){
	document.getElementById("restartButton").style.opacity = ("1")
	document.getElementById("restartButton").style.visibility = ("visible")
}
function restartButtonFadeOut(){
	document.getElementById("restartButton").style.opacity = ("0")
	document.getElementById("restartButton").style.visibility = ("hidden")
}
function drawFadeIn(){
	document.getElementById("draw").style.opacity = ("1")
	document.getElementById("draw").style.visibility = ("visible")
}
function drawFadeOut(){
	document.getElementById("draw").style.opacity = ("0")
	document.getElementById("draw").style.visibility = ("hidden")
}

function restart(){
	document.getElementById("11").innerHTML = "";
	document.getElementById("12").innerHTML = "";
	document.getElementById("13").innerHTML = "";
	document.getElementById("21").innerHTML = "";
	document.getElementById("22").innerHTML = "";
	document.getElementById("23").innerHTML = "";
	document.getElementById("31").innerHTML = "";
	document.getElementById("32").innerHTML = "";
	document.getElementById("33").innerHTML = "";
	winstatus = 0;
	step = 1;
	for(let i=1; i<4; i++)
	for(let j=1; j<4; j++) cellSystem[i][j]=0;
	blackDivFadeOut();
	winnerOFadeOut();
	winnerXFadeOut();
	restartButtonFadeOut();
	drawFadeOut();


}