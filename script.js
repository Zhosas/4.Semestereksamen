// JavaScript Document

function udOvn() {
	document.getElementById("bUdOvn").style.background = "#A68876";
	document.getElementById("bUdOvn").style.color = "white";
	document.getElementById("bIndOvn").style.background = "white";
	document.getElementById("bIndOvn").style.color = "#A68876";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1I.png")){
	   image.src = "Endelige/1U.png";
	} else if(image.src.match("Endelige/2IU.png")){
		image.src = "Endelige/2UU.png";
	} else if(image.src.match("Endelige/2IL.png")){
		image.src = "Endelige/2UL.png";
	} else if(image.src.match("Endelige/2IV.png")){
		image.src = "Endelige/2UV.png";	  
	} else if(image.src.match("Endelige/2IA.png")){
		image.src = "Endelige/2UA.png";
	} else if(image.src.match("Endelige/3IB.png")){
		image.src = "Endelige/3UB.png";
	} else if(image.src.match("Endelige/3IS.png")){
		image.src = "Endelige/3US.png";
	}
}

function indOvn() {
	document.getElementById("bIndOvn").style.background = "#A68876";
	document.getElementById("bIndOvn").style.color = "white";
	document.getElementById("bUdOvn").style.background = "white";
	document.getElementById("bUdOvn").style.color = "#A68876";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1U.png")){
	   image.src = "Endelige/1I.png";
	} else if (image.src.match("Endelige/2UU.png")){
		image.src = "Endelige/2IU.png";
	} else if(image.src.match("Endelige/2UL.png")){
		image.src = "Endelige/2IL.png";
	} else if(image.src.match("Endelige/2UV.png")){
		image.src = "Endelige/2IV.png";	  
	} else if(image.src.match("Endelige/2UA.png")){
		image.src = "Endelige/2IA.png";
	} else if(image.src.match("Endelige/3UB.png")){
		image.src = "Endelige/3IB.png";
	} else if(image.src.match("Endelige/3US.png")){
		image.src = "Endelige/3IS.png";
	}
	
}

function ingenD() {
	document.getElementById("bIngenD").style.background = "#A68876";
	document.getElementById("bIngenD").style.color = "white";
	document.getElementById("bLuftD").style.background = "white";
	document.getElementById("bLuftD").style.color = "#A68876";
	document.getElementById("bVandD").style.background = "white";
	document.getElementById("bVandD").style.color = "#A68876";
	document.getElementById("bBeggeD").style.background = "white";
	document.getElementById("bBeggeD").style.color = "#A68876";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1U.png") || image.src.match("Endelige/2UL.png") || image.src.match("Endelige/2UV.png") || image.src.match("Endelige/2UA.png") || image.src.match("Endelige/3UB.png") || image.src.match("Endelige/3US.png")){
		image.src = "Endelige/2UU.png";
	} else if (image.src.match("Endelige/1I") || image.src.match("Endelige/2IL.png") || image.src.match("Endelige/2IV.png") || image.src.match("Endelige/2IA.png") || image.src.match("Endelige/3IB.png") || image.src.match("Endelige/3IS.png")){
		image.src = "Endelige/2IU.png";
	}
}

function luftD() {
	document.getElementById("bIngenD").style.background = "white";
	document.getElementById("bIngenD").style.color = "#A68876";
	document.getElementById("bLuftD").style.background = "#A68876";
	document.getElementById("bLuftD").style.color = "white";
	document.getElementById("bVandD").style.background = "white";
	document.getElementById("bVandD").style.color = "#A68876";
	document.getElementById("bBeggeD").style.background = "white";
	document.getElementById("bBeggeD").style.color = "#A68876";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1U.png") || image.src.match("Endelige/2UU.png") || image.src.match("Endelige/2UV.png") || image.src.match("Endelige/2UA.png") || image.src.match("Endelige/3UB.png") || image.src.match("Endelige/3US.png")){
		image.src = "Endelige/2UL.png";
	} else if (image.src.match("Endelige/1I") || image.src.match("Endelige/2IU.png") || image.src.match("Endelige/2IV.png") || image.src.match("Endelige/2IA.png") || image.src.match("Endelige/3IB.png") || image.src.match("Endelige/3IS.png")){
		image.src = "Endelige/2IL.png";
	}
}

function vandD() {
	document.getElementById("bIngenD").style.background = "white";
	document.getElementById("bIngenD").style.color = "#A68876";
	document.getElementById("bLuftD").style.background = "white";
	document.getElementById("bLuftD").style.color = "#A68876";
	document.getElementById("bVandD").style.background = "#A68876";
	document.getElementById("bVandD").style.color = "white";
	document.getElementById("bBeggeD").style.background = "white";
	document.getElementById("bBeggeD").style.color = "#A68876";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1U.png") || image.src.match("Endelige/2UU.png") || image.src.match("Endelige/2UL.png") || image.src.match("Endelige/2UA.png") || image.src.match("Endelige/3UB.png") || image.src.match("Endelige/3US.png")){
		image.src = "Endelige/2UV.png";
	} else if (image.src.match("Endelige/1I") || image.src.match("Endelige/2IU.png") || image.src.match("Endelige/2IL.png") || image.src.match("Endelige/2IA.png") || image.src.match("Endelige/3IB.png") || image.src.match("Endelige/3IS.png")){
		image.src = "Endelige/2IV.png";
	}
}

function beggeD() {
	document.getElementById("bIngenD").style.background = "white";
	document.getElementById("bIngenD").style.color = "#A68876";
	document.getElementById("bLuftD").style.background = "white";
	document.getElementById("bLuftD").style.color = "#A68876";
	document.getElementById("bVandD").style.background = "white";
	document.getElementById("bVandD").style.color = "#A68876";
	document.getElementById("bBeggeD").style.background = "#A68876";
	document.getElementById("bBeggeD").style.color = "white";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1U.png") || image.src.match("Endelige/2UU.png") || image.src.match("Endelige/2UL.png") || image.src.match("Endelige/2UV.png") || image.src.match("Endelige/3UB.png") || image.src.match("Endelige/3US.png")){
		image.src = "Endelige/2UA.png";
	} else if (image.src.match("Endelige/1I") || image.src.match("Endelige/2IU.png") || image.src.match("Endelige/2IL.png") || image.src.match("Endelige/2IV.png") || image.src.match("Endelige/3IB.png") || image.src.match("Endelige/3IS.png")){
		image.src = "Endelige/2IA.png";
	}
}

function brunTræ() {
	document.getElementById("bBrunT").style.border = "2px solid #1D5FE1";
	document.getElementById("bSortT").style.border = "2px solid black";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1U.png") || image.src.match("Endelige/2UU.png") || image.src.match("Endelige/2UL.png") || image.src.match("Endelige/2UV.png") || image.src.match("Endelige/2UA.png") || image.src.match("Endelige/3US.png")){
		image.src = "Endelige/3UB.png";
	} else if (image.src.match("Endelige/1I") || image.src.match("Endelige/2IU.png") || image.src.match("Endelige/2IL.png") || image.src.match("Endelige/2IV.png") || image.src.match("Endelige/2IA.png") || image.src.match("Endelige/3IS")){
		image.src = "Endelige/3IB.png";
	}
}

function sortTræ() {
	document.getElementById("bBrunT").style.border = "2px solid #FDBC7B";
	document.getElementById("bSortT").style.border = "2px solid #1D5FE1";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1U.png") || image.src.match("Endelige/2UU.png") || image.src.match("Endelige/2UL.png") || image.src.match("Endelige/2UV.png") || image.src.match("Endelige/2UA.png") || image.src.match("Endelige/3UB.png")){
		image.src = "Endelige/3US.png";
	} else if (image.src.match("Endelige/1I") || image.src.match("Endelige/2IU.png") || image.src.match("Endelige/2IL.png") || image.src.match("Endelige/2IV.png") || image.src.match("Endelige/2IA.png") || image.src.match("Endelige/3IB")){
		image.src = "Endelige/3IS.png";
	}
}

function karHvid() {
	document.getElementById("bKarH").style.border = "2px solid #1D5FE1";
	document.getElementById("bKarS").style.border = "2px solid black";
	document.getElementById("bKarG").style.border = "2px solid grey";
	document.getElementById("bKarR").style.border = "2px solid #A12A2C";
}

function karSort() {
	document.getElementById("bKarH").style.border = "2px solid #EAEAEA";
	document.getElementById("bKarS").style.border = "2px solid #1D5FE1";
	document.getElementById("bKarG").style.border = "2px solid grey";
	document.getElementById("bKarR").style.border = "2px solid #A12A2C";
}

function karGrå() {
	document.getElementById("bKarH").style.border = "2px solid #EAEAEA";
	document.getElementById("bKarS").style.border = "2px solid black";
	document.getElementById("bKarG").style.border = "2px solid #1D5FE1";
	document.getElementById("bKarR").style.border = "2px solid #A12A2C";
}

function karRød() {
	document.getElementById("bKarH").style.border = "2px solid #EAEAEA";
	document.getElementById("bKarS").style.border = "2px solid black";
	document.getElementById("bKarG").style.border = "2px solid grey";
	document.getElementById("bKarR").style.border = "2px solid #1D5FE1";
}


