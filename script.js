// JavaScript Document

function udOvn() {
	document.getElementById("bUdOvn").style.background = "#A68876";
	document.getElementById("bUdOvn").style.color = "white";
	document.getElementById("bIndOvn").style.background = "white";
	document.getElementById("bIndOvn").style.color = "#A68876";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1&3/Indvendig/1I.png")){
	   image.src = "Endelige/1&3/Udvendig/1U.png";
	} else if(image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UU.png";
	} else if(image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2UL.png";
	} else if(image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UV.png";	  
	} else if(image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UA.png";
	} else if(image.src.match("Endelige/1&3/Indvendig/1I.png")){
		image.src = "Endelige/1&3/Udvendig/1U.png";
	} else if(image.src.match("Endelige/1&3/Indvendig/1IBS.png")){
		image.src = "Endelige/1&3/Udvendig/1UBS.png";
	} else if(image.src.match("Endelige/1&3/Indvendig/1IBG.png")){
		image.src = "Endelige/1&3/Udvendig/1UBG.png";
	} else if(image.src.match("Endelige/1&3/Indvendig/1IBR.png")){
		image.src = "Endelige/1&3/Udvendig/1UBR.png";
	} else if(image.src.match("Endelige/1&3/Indvendig/1ISH.png")){
		image.src = "Endelige/1&3/Udvendig/1USH.png";
	} else if(image.src.match("Endelige/1&3/Indvendig/1ISS.png")){
		image.src = "Endelige/1&3/Udvendig/1USS.png"
	} else if(image.src.match("Endelige/1&3/Indvendig/1ISG.png")){
		image.src = "Endelige/1&3/Udvendig/1USG.png"
	} else if(image.src.match("Endelige/1&3/Indvendig/1ISR.png")){
		image.src = "Endelige/1&3/Udvendig/1USR.png"
	}
}

function indOvn() {
	document.getElementById("bIndOvn").style.background = "#A68876";
	document.getElementById("bIndOvn").style.color = "white";
	document.getElementById("bUdOvn").style.background = "white";
	document.getElementById("bUdOvn").style.color = "#A68876";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1&3/Udvendig/1U.png")){
	   image.src = "Endelige/1&3/Indvendig/1I.png";
	} else if (image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IU.png";
	} else if(image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2IL.png";
	} else if(image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IV.png";	  
	} else if(image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IA.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1U.png")){
		image.src = "Endelige/1&3/Indvendig/1I.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBS.png")){
		image.src = "Endelige/1&3/Indvendig/1IBS.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBG.png")){
		image.src = "Endelige/1&3/Indvendig/1IBG.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBR.png")){
		image.src = "Endelige/1&3/Indvendig/1IBR.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1USH.png")){
		image.src = "Endelige/1&3/Indvendig/1ISH.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1USS.png")){
		image.src = "Endelige/1&3/Indvendig/1ISS.png"
	} else if(image.src.match("Endelige/1&3/Udvendig/1USG.png")){
		image.src = "Endelige/1&3/Indvendig/1ISG.png"
	} else if(image.src.match("Endelige/1&3/Udvendig/1USR.png")){
		image.src = "Endelige/1&3/Indvendig/1ISR.png"
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
	if(image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png") || image.src.match("Endelige/1&3/Udvendig/1U.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UU.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png") || image.src.match("Endelige/1&3/Indvendig/1I.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IU.png";
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
	if(image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png") || image.src.match("Endelige/1&3/Udvendig/1U.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2UL.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png") || image.src.match("Endelige/1&3/Indvendig/1I.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2IL.png";
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
	if(image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png") || image.src.match("Endelige/1&3/Udvendig/1U.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UV.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png") || image.src.match("Endelige/1&3/Indvendig/1I.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IV.png";
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
	if(image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/1&3/Udvendig/1U.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UA.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/1&3/Indvendig/1I.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IA.png";
	}
}

function brunTræ() {
	document.getElementById("bBrunT").style.border = "2px solid #1D5FE1";
	document.getElementById("bSortT").style.border = "2px solid black";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png") || image.src.match("Endelige/1&3/Udvendig/1USH.png")){
		image.src = "Endelige/1&3/Udvendig/1U.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png") || image.src.match("Endelige/1&3/Indvendig/1ISH")){
		image.src = "Endelige/1&3/Indvendig/1I.png";
	}
}

function sortTræ() {
	document.getElementById("bBrunT").style.border = "2px solid #FDBC7B";
	document.getElementById("bSortT").style.border = "2px solid #1D5FE1";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png") || image.src.match("Endelige/1&3/Udvendig/1U.png")){
		image.src = "Endelige/1&3/Udvendig/1USH.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png") || image.src.match("Endelige/1&3/Indvendig/1I")){
		image.src = "Endelige/1&3/Indvendig/1ISH.png";
	}
}

function karHvid() {
	document.getElementById("bKarH").style.border = "2px solid #1D5FE1";
	document.getElementById("bKarS").style.border = "2px solid black";
	document.getElementById("bKarG").style.border = "2px solid #515E71";
	document.getElementById("bKarR").style.border = "2px solid #A12A2C";
}

function karSort() {
	document.getElementById("bKarH").style.border = "2px solid lightgrey";
	document.getElementById("bKarS").style.border = "2px solid #1D5FE1";
	document.getElementById("bKarG").style.border = "2px solid #515E71";
	document.getElementById("bKarR").style.border = "2px solid #A12A2C";
}

function karGrå() {
	document.getElementById("bKarH").style.border = "2px solid lightgrey";
	document.getElementById("bKarS").style.border = "2px solid black";
	document.getElementById("bKarG").style.border = "2px solid #1D5FE1";
	document.getElementById("bKarR").style.border = "2px solid #A12A2C";
}

function karRød() {
	document.getElementById("bKarH").style.border = "2px solid lightgrey";
	document.getElementById("bKarS").style.border = "2px solid black";
	document.getElementById("bKarG").style.border = "2px solid #515E71";
	document.getElementById("bKarR").style.border = "2px solid #1D5FE1";
}


