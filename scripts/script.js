

				       //HAVE ANY QUESTIONS??? FEEL FREE TO CONTACT ME!!! 


let cellSystem = {                             //creating object, with 3 other objects
	1: {									   //inside. Every object has 3 same propertys
		 1: 0,								   //(1,2,3) and their starting value is 0.
		 2: 0,								   //This will help us to make something like
		 3: 0,								   //2 dimentional array(like in c++)
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
let winstatus = 0;							   // variable "winstatus" will be changed to 1 if someone wins.
let step = 0;                                  // current game step
function checker(i, j){						   // function "checker" is checking cell emptyness, if cell is empty it will be filled with "X" and the value of cellSystem[i][j] will be changed to 4
	if (!winstatus){                           // preventing programm to continue the game if someone has already won

		if(cellSystem[i][j] === 0){
			document.getElementById(i + "" + j).innerHTML = "X";
			cellSystem[i][j] = 4;
			step++
			if(step>=1){
			winnerchecker();					// "winnerChecker" function is checking who can win at this moment, declaration will be later, but we can still use it becouse of JS engine
			warningChecker();                   // "warningChecker" function is main AI, it decides where to put "O", will be described later as well  
			winnerchecker();
		}
		}

		
	}
}
function Owins(){								//"Owins" function: some visual effect when "O" win, and increasing value of "winStatus" to prevent the programm to continue the game
	console.log("O wins");
	winstatus++
	document.getElementById("divblack").style.visibility = ("visible");
	document.getElementById("winnerO").style.visibility = ("visible");
	blackDivFadeIn();
	winnerOFadeIn();
	restartButtonFadeIn()
}
function Xwins(){                              //"Xwins" same as "Owins", but for X
	console.log("X wins");
	winstatus++
	document.getElementById("divblack").style.visibility = ("visible");
	document.getElementById("winnerX").style.visibility = ("visible");
	blackDivFadeIn()
	winnerXFadeIn();
	restartButtonFadeIn()
}


function winnerchecker(){                                             //checking if someone arleady won, first priority is "O"
	if(!winstatus){
		if(cellSystem[1][1]+cellSystem[1][2]+cellSystem[1][3] === 3){
			Owins();
		} else
		if(cellSystem[2][1]+cellSystem[2][2]+cellSystem[2][3] === 3){
			Owins();
		} else
		if(cellSystem[3][1]+cellSystem[3][2]+cellSystem[3][3] === 3){
			Owins();
		} else
		if(cellSystem[1][1]+cellSystem[2][1]+cellSystem[3][1] === 3){
			Owins();
		} else
		if(cellSystem[1][2]+cellSystem[2][2]+cellSystem[3][2] === 3){
			Owins();
		} else
		if(cellSystem[1][3]+cellSystem[2][3]+cellSystem[3][3] === 3){
			Owins();
		} else
		if(cellSystem[1][1]+cellSystem[2][2]+cellSystem[3][3] === 3){
			Owins();
		} else
		if(cellSystem[1][3]+cellSystem[2][2]+cellSystem[3][1] === 3){
			Owins();
		} else																//Same for "X"
		if(cellSystem[1][1]+cellSystem[1][2]+cellSystem[1][3] === 12){
			Xwins();
		} else
		if(cellSystem[2][1]+cellSystem[2][2]+cellSystem[2][3] === 12){
			Xwins();
		} else
		if(cellSystem[3][1]+cellSystem[3][2]+cellSystem[3][3] === 12){
			Xwins();
		} else
		if(cellSystem[1][1]+cellSystem[2][1]+cellSystem[3][1] === 12){
			Xwins();
		} else
		if(cellSystem[1][2]+cellSystem[2][2]+cellSystem[3][2] === 12){
			Xwins();
		} else
		if(cellSystem[1][3]+cellSystem[2][3]+cellSystem[3][3] === 12){
			Xwins();
		} else
		if(cellSystem[1][1]+cellSystem[2][2]+cellSystem[3][3] === 12){
			Xwins();
		} else
		if(cellSystem[1][3]+cellSystem[2][2]+cellSystem[3][1] === 12){
			Xwins();
		}

	}
}

function warningChecker(){													    //Main AI for the game, first its checking cellSystem[2][2], so if its empty it fills it with "O"
	if(!winstatus){																//First priority for it it's own "O"'s, so first it's checking for two "O"'s placed side by side, and if so, he puts the third "O" and wins 
		if(!cellSystem[2][2]){													
			cellSystem[2][2] = 1;
			document.getElementById(2 + "" + 2).innerHTML = "O";
		}else
		if(cellSystem[1][1]+cellSystem[1][2]+cellSystem[1][3] === 2){           //Checking for 2 "O"'s side by side
			console.log("Warning in first row")
			for(let i = 1; i<4; i++){
				if(!cellSystem[1][i]){                                           // Finds an empty cell, and if so, fill it with "O" and win.
					document.getElementById(1 + "" + i).innerHTML = "O";
					cellSystem[1][i] = 1;
					break;
				}
			}
		}else
		if(cellSystem[2][1]+cellSystem[2][2]+cellSystem[2][3] === 2){
			console.log("Warning in second row")
			for(let i = 1; i<4; i++){
				if(!cellSystem[2][i]){
					document.getElementById(2 + "" + i).innerHTML = "O";
					cellSystem[2][i]=1;
					break;
				}
			}
		}else
		if(cellSystem[3][1]+cellSystem[3][2]+cellSystem[3][3] === 2){
			console.log("Warning in third row")
			for(let i = 1; i<4; i++){
				if(!cellSystem[3][i]){
					document.getElementById(3 + "" + i).innerHTML = "O";
					cellSystem[3][i] = 1;
					break;
				}
			}
		}else
		if(cellSystem[1][1]+cellSystem[2][1]+cellSystem[3][1] === 2){
			console.log("warning in first column")
			for(let i = 1; i<4; i++){
				if(!cellSystem[i][1]){
					document.getElementById(i + "" + 1).innerHTML = "O";
					cellSystem[i][1]=1;
					break;
				}
			}
		}else
		if(cellSystem[1][2]+cellSystem[2][2]+cellSystem[3][2] === 2){
			console.log("warning in second column")
			for(let i = 1; i<4; i++){
				if(!cellSystem[i][2]){
					document.getElementById(i + "" + 2).innerHTML = "O";
					cellSystem[i][2]=1;
					break;
				}
			}
		}else
		if(cellSystem[1][3]+cellSystem[2][3]+cellSystem[3][3] === 2){
			console.log("warning in third column")
			for(let i = 1; i<4; i++){
				if(!cellSystem[i][3]){
					document.getElementById(i + "" + 3).innerHTML = "O";
					cellSystem[i][3]=1;
					break;
				}
			}
		}else
		if(cellSystem[1][1]+cellSystem[2][2]+cellSystem[3][3] === 2){
			console.log("warning in first diaganal");
			for(i=1; i<4; i++){
				if(!cellSystem[i][i]){
					document.getElementById(i + "" + i).innerHTML = "O";
					cellSystem[i][i]=1;
					break;
				}
			}

		}else
		if(cellSystem[1][3]+cellSystem[2][2]+cellSystem[3][1] ===2){
			console.log("warning in second diaganal")
			for(i=1,j=3;i<4;i++,j--){
				if(!cellSystem[i][j]){
					document.getElementById(i + "" + j).innerHTML = "O";
					cellSystem[i][j]=1;
					break;
				}
			}
		}else
		if(cellSystem[1][1]+cellSystem[1][2]+cellSystem[1][3] === 8){                        //if it can't find 2 "O"'s placed side by side he start checking for 2 "X"'s placed side by side, and if it finds a situation like that he blocks the way of "X" if there is an empty cell 
			console.log("Warning in first row")
			for(let i = 1; i<4; i++){
				if(!cellSystem[1][i]){
					document.getElementById(1 + "" + i).innerHTML = "O";
					cellSystem[1][i] = 1;
					break;
				}
			}
		}else
		if(cellSystem[2][1]+cellSystem[2][2]+cellSystem[2][3] === 8){
			console.log("Warning in second row")
			for(let i = 1; i<4; i++){
				if(!cellSystem[2][i]){
					document.getElementById(2 + "" + i).innerHTML = "O";
					cellSystem[2][i]=1;
					break;
				}
			}
		}else
		if(cellSystem[3][1]+cellSystem[3][2]+cellSystem[3][3] === 8){
			console.log("Warning in third row")
			for(let i = 1; i<4; i++){
				if(!cellSystem[3][i]){
					document.getElementById(3 + "" + i).innerHTML = "O";
					cellSystem[3][i] = 1;
					break;
				}
			}
		}else
		if(cellSystem[1][1]+cellSystem[2][1]+cellSystem[3][1] === 8){
			console.log("warning in first column")
			for(let i = 1; i<4; i++){
				if(!cellSystem[i][1]){
					document.getElementById(i + "" + 1).innerHTML = "O";
					cellSystem[i][1]=1;
					break;
				}
			}
		}else
		if(cellSystem[1][2]+cellSystem[2][2]+cellSystem[3][2] === 8){
			console.log("warning in second column")
			for(let i = 1; i<4; i++){
				if(!cellSystem[i][2]){
					document.getElementById(i + "" + 2).innerHTML = "O";
					cellSystem[i][2]=1;
					break;
				}
			}
		}else
		if(cellSystem[1][3]+cellSystem[2][3]+cellSystem[3][3] === 8){
			console.log("warning in third column")
			for(let i = 1; i<4; i++){
				if(!cellSystem[i][3]){
					document.getElementById(i + "" + 3).innerHTML = "O";
					cellSystem[i][3]=1;
					break;
				}
			}
		}else
		if(cellSystem[1][1]+cellSystem[2][2]+cellSystem[3][3] === 8){
			console.log("warning in first diaganal");
			for(i=1; i<4; i++){
				if(!cellSystem[i][i]){
					document.getElementById(i + "" + i).innerHTML = "O";
					cellSystem[i][i]=1;
					break;
				}
			}

		}else
		if(cellSystem[1][3]+cellSystem[2][2]+cellSystem[3][1] ===8){
			console.log("warning in second diaganal")
			for(i=1,j=3;i<4;i++,j--){
				if(!cellSystem[i][j]){
					document.getElementById(i + "" + j).innerHTML = "O";
					cellSystem[i][j]=1;
					break;
				}
			}
		}else
		if(cellSystem[1][1]+cellSystem[1][2]+cellSystem[1][3] === 8){
			console.log("Warning in first row")
			for(let i = 1; i<4; i++){
				if(!cellSystem[1][i]){
					document.getElementById(1 + "" + i).innerHTML = "O";
					cellSystem[1][i] = 1;
					break;
				}
			}
		}else
		if(cellSystem[2][1]+cellSystem[2][2]+cellSystem[2][3] === 8){
			console.log("Warning in second row")
			for(let i = 1; i<4; i++){
				if(!cellSystem[2][i]){
					document.getElementById(2 + "" + i).innerHTML = "O";
					cellSystem[2][i]=1;
					break;
				}
			}
		}else
		if(cellSystem[1][1]+cellSystem[2][2]+cellSystem[3][3] === 4 || cellSystem[1][1]+cellSystem[2][2]+cellSystem[3][3] === 1){             //checking for one "X" in any row or column, it's a little warning for AI so he block one of the possible ways for X (not optimised, maybe there are some unusefull tasks)
			console.log("Little warning in first diaganal");
			for(i=1,j=1; i<4; i++,j++){
				if(!cellSystem[i][i]){
					document.getElementById(i + "" + i).innerHTML = "O";
					cellSystem[i][i]=1;
					break;
				}
			}

		}else
		if(cellSystem[1][3]+cellSystem[2][2]+cellSystem[3][1] === 4 || cellSystem[1][3]+cellSystem[2][2]+cellSystem[3][1] === 1){
			console.log("Little warning in second diaganal")
			for(i=1,j=3;i<4;i++,j--){
				if(!cellSystem[i][j]){
					document.getElementById(i + "" + j).innerHTML = "O";
					cellSystem[i][j]=1;
					break;
				}
			}
		}
	else
		if(cellSystem[1][1]+cellSystem[1][2]+cellSystem[1][3] === 4 || cellSystem[1][1]+cellSystem[1][2]+cellSystem[1][3] === 1){
			console.log("Little Warning in first row")
			for(let i = 1; i<4; i++){
				if(!cellSystem[1][i]){
					document.getElementById(1 + "" + i).innerHTML = "O";
					cellSystem[1][i] = 1;
					break;
				}
			}
		}else
		if(cellSystem[2][1]+cellSystem[2][2]+cellSystem[2][3] === 4 || cellSystem[2][1]+cellSystem[2][2]+cellSystem[2][3] === 1){
			console.log("Little Warning in second row")
			for(let i = 1; i<4; i++){
				if(!cellSystem[2][i]){
					document.getElementById(2 + "" + i).innerHTML = "O";
					cellSystem[2][i] = 1;
					break;
				}
			}
		}else
		if(cellSystem[3][1]+cellSystem[3][2]+cellSystem[3][3] === 4 || cellSystem[3][1]+cellSystem[3][2]+cellSystem[3][3] === 1){
			console.log("Little Warning in third row")
			for(let i = 1; i<4; i++){
				if(!cellSystem[3][i]){
					document.getElementById(3 + "" + i).innerHTML = "O";
					cellSystem[3][i] = 1;
					break;
				}
			}
		}else
		if(cellSystem[1][1]+cellSystem[2][1]+cellSystem[3][1] === 4 || cellSystem[1][1]+cellSystem[2][1]+cellSystem[3][1] === 1){
			console.log("Little in first column")
			for(let i = 1; i<4; i++){
				if(!cellSystem[i][1]){
					document.getElementById(i + "" + 1).innerHTML = "O";
					cellSystem[i][1]=1;
					break;
				}
			}
		}else
		if(cellSystem[1][2]+cellSystem[2][2]+cellSystem[3][2] === 4 || cellSystem[1][2]+cellSystem[2][2]+cellSystem[3][2] === 1){
			console.log("Little warning in second column")
			for(let i = 1; i<4; i++){
				if(!cellSystem[i][2]){
					document.getElementById(i + "" + 2).innerHTML = "O";
					cellSystem[i][2]=1;
					break;
				}
			}
		}else
		if(cellSystem[1][3]+cellSystem[2][3]+cellSystem[3][3] === 4 || cellSystem[1][3]+cellSystem[2][3]+cellSystem[3][3] === 1){
			console.log("Little warning in third column")
			for(let i = 1; i<4; i++){
				if(!cellSystem[i][3]){
					document.getElementById(i + "" + 3).innerHTML = "O";
					cellSystem[i][3]=1;
					break;
				}
			}
		}else {
			console.log("Draw");
			drawFadeIn();
			blackDivFadeIn();
			restartButtonFadeIn();
			  
 		}
}
}
function blackDivFadeIn(){                                                         //visual effects
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

function restart(){                                          //"restart" function is setting all values to default starting values 
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
	step = 0;
	for(let i=1; i<4; i++)
	for(let j=1; j<4; j++) cellSystem[i][j]=0;
	blackDivFadeOut();
	winnerOFadeOut();
	winnerXFadeOut();
	restartButtonFadeOut();
	drawFadeOut();


}