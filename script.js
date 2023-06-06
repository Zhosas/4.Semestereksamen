// JavaScript Document

function udOvn() {
	document.getElementById("bUdOvn").style.background = "#A68876";
	document.getElementById("bUdOvn").style.color = "white";
	document.getElementById("bIndOvn").style.background = "white";
	document.getElementById("bIndOvn").style.color = "#A68876";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png")){
		image.src = "Endelige/1&3/Udvendig/1U.png";
	} else if(image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABS.png")){
		image.src = "Endelige/1&3/Udvendig/1UBS.png";
	} else if(image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABG.png")){
		image.src = "Endelige/1&3/Udvendig/1UBG.png";
	} else if(image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABR.png")){
		image.src = "Endelige/1&3/Udvendig/1UBR.png";
	} 
	else if(image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSH.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSH.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSH.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASH.png")){
		image.src = "Endelige/1&3/Udvendig/1USH.png";
	} else if(image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASS.png")){
		image.src = "Endelige/1&3/Udvendig/1USS.png"
	} else if(image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASG.png")){
		image.src = "Endelige/1&3/Udvendig/1USG.png"
	} else if(image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASR.png")){
		image.src = "Endelige/1&3/Udvendig/1USR.png"
	}
}

function indOvn() {
	document.getElementById("bIndOvn").style.background = "#A68876";
	document.getElementById("bIndOvn").style.color = "white";
	document.getElementById("bUdOvn").style.background = "white";
	document.getElementById("bUdOvn").style.color = "#A68876";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png")){
		image.src = "Endelige/1&3/Indvendig/1I.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABS.png")){
		image.src = "Endelige/1&3/Indvendig/1IBS.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABG.png")){
		image.src = "Endelige/1&3/Indvendig/1IBG.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABR.png")){
		image.src = "Endelige/1&3/Indvendig/1IBR.png";
	} 
	else if(image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSH.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSH.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSH.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASH.png")){
		image.src = "Endelige/1&3/Indvendig/1ISH.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASS.png")){
		image.src = "Endelige/1&3/Indvendig/1ISS.png"
	} else if(image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASG.png")){
		image.src = "Endelige/1&3/Indvendig/1ISG.png"
	} else if(image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASR.png")){
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
	if(image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UU.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABS.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUBS.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABG.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUBG.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABR.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUBR.png";
	}  
	else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSH.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSH.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASH.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUSH.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASS.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUSS.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASG.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUSG.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASR.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUSR.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IU.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABS.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUBS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABG.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUBG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABR.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUBR.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSH.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSH.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASH.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUSH.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASS.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUSS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASG.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUSG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASR.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUSR.png";
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
	if(image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2UL.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABS.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULBS.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABG.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULBG.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABR.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULBR.png";
	}
	else if(image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSH.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSH.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASH.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULSH.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASS.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULSS.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASG.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULSG.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASR.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULSR.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2IL.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABS.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILBS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABG.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILBG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABG.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILBG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABR.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILBR.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSH.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSH.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASH.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILSH.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASS.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILSS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASG.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILSG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASR.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILSR.png";
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
	if(image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UV.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABS.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVBS.png";
	}  else if(image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABG.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVBG.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABR.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVBR.png";
	}
	else if(image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSH.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSH.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASH.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVSH.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASS.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVSS.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASG.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVSG.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASR.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVSR.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IV.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABS.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVBS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABG.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVBG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABR.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVBR.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSH.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSH.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASH.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVSH.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASS.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVSS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASG.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVSG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASR.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVSR.png";
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
	if(image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UA.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBS.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UABS.png";
	}  else if(image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBG.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UABG.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBR.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UABR.png";
	}
	else if(image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSH.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSH.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSH.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UASH.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSS.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UASS.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSG.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UASG.png";
	} else if(image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSR.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UASR.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IA.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBS.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IABS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBG.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IABG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBR.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IABR.png";
	} 
	else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSH.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSH.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSH.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IASH.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSS.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IASS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSG.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IASG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSR.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IASR.png";
	} 
}

function brunTræ() {
	document.getElementById("bBrunT").style.border = "2px solid #1D5FE1";
	document.getElementById("bSortT").style.border = "2px solid black";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png") || image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSH.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSH.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSH.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASH.png")){
		image.src = "Endelige/1&3/Udvendig/1U.png";
	} else if(image.src.match("Endelige/2&4/Udvendig/Uden/2UUBS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABS.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASS.png")){
		image.src = "Endelige/1&3/Udvendig/1UBS.png";
	} else if(image.src.match("Endelige/2&4/Udvendig/Uden/2UUBG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABG.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASG.png")){
		image.src = "Endelige/1&3/Udvendig/1UBG.png";
	} else if(image.src.match("Endelige/2&4/Udvendig/Uden/2UUBR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABR.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASR.png")){
		image.src = "Endelige/1&3/Udvendig/1UBR.png";
	}
	else if (image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png") || image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSH.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSH.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSH.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASH.png")){
		image.src = "Endelige/1&3/Indvendig/1I.png";
	} else if (image.src.match("Endelige/2&4/Indvendig/Uden/2IUBS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABS.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASS.png")){
		image.src = "Endelige/1&3/Indvendig/1IBS.png";
	} else if (image.src.match("Endelige/2&4/Indvendig/Uden/2IUBG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABG.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASG.png")){
		image.src = "Endelige/1&3/Indvendig/1IBG.png";
	} else if (image.src.match("Endelige/2&4/Indvendig/Uden/2IUBR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABR.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASR.png")){
		image.src = "Endelige/1&3/Indvendig/1IBR.png";
	} 
}

function sortTræ() {
	document.getElementById("bBrunT").style.border = "2px solid #FDBC7B";
	document.getElementById("bSortT").style.border = "2px solid #1D5FE1";
	
	var image = document.getElementById("bImg");
	if(image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png") || image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSH.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSH.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSH.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASH.png")){
		image.src = "Endelige/1&3/Udvendig/1USH.png";
	} else if(image.src.match("Endelige/2&4/Udvendig/Uden/2UUBS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABS.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASS.png")){
		image.src = "Endelige/1&3/Udvendig/1USS.png";
	} else if(image.src.match("Endelige/2&4/Udvendig/Uden/2UUBG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABG.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASG.png")){
		image.src = "Endelige/1&3/Udvendig/1USG.png";
	} else if(image.src.match("Endelige/2&4/Udvendig/Uden/2UUBR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABR.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASR.png")){
		image.src = "Endelige/1&3/Udvendig/1USR.png";
	}
	else if (image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png") || image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSH.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSH.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSH.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASH.png")){
		image.src = "Endelige/1&3/Indvendig/1ISH.png";
	} else if (image.src.match("Endelige/2&4/Indvendig/Uden/2IUBS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABS.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASS.png")){
		image.src = "Endelige/1&3/Indvendig/1ISS.png";
	} else if (image.src.match("Endelige/2&4/Indvendig/Uden/2IUBG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABG.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASG.png")){
		image.src = "Endelige/1&3/Indvendig/1ISG.png";
	} else if (image.src.match("Endelige/2&4/Indvendig/Uden/2IUBR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABR.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASR.png")){
		image.src = "Endelige/1&3/Indvendig/1ISR.png";
	} 
}

function karHvid() {
	document.getElementById("bKarH").style.border = "2px solid #1D5FE1";
	document.getElementById("bKarS").style.border = "2px solid black";
	document.getElementById("bKarG").style.border = "2px solid #515E71";
	document.getElementById("bKarR").style.border = "2px solid #A12A2C";
	
	var image = document.getElementById("bImg");
	if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBR.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UU.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBR.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2UL.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBR.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UV.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABR.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UA.png";
	}
	else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSH.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSR.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUSH.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSH.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSR.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULSH.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSH.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSR.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVSH.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASH.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASR.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UASH.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBR.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IU.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBR.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2IL.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBR.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IV.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Idvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABR.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IA.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSH.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSR.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUSH.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSH.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSR.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILSH.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSH.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSR.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVSH.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Idvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASH.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASR.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IASH.png";
	}
}

function karSort() {
	document.getElementById("bKarH").style.border = "2px solid lightgrey";
	document.getElementById("bKarS").style.border = "2px solid #1D5FE1";
	document.getElementById("bKarG").style.border = "2px solid #515E71";
	document.getElementById("bKarR").style.border = "2px solid #A12A2C";
	
	var image = document.getElementById("bImg");
	if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBR.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUBS.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBR.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULBS.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBR.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVBS.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABR.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UABS.png";
	}
	else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSH.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSR.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUSS.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSH.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSR.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULSS.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSH.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSR.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVSS.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASH.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASR.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UASS.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBR.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUBS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBR.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILBS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBR.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVBS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Idvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABR.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IABS.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSH.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSR.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUSS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSH.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSR.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILSS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSH.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSR.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVSS.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Idvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASH.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASR.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IASS.png";
	}
}

function karGrå() {
	document.getElementById("bKarH").style.border = "2px solid lightgrey";
	document.getElementById("bKarS").style.border = "2px solid black";
	document.getElementById("bKarG").style.border = "2px solid #1D5FE1";
	document.getElementById("bKarR").style.border = "2px solid #A12A2C";
	
	var image = document.getElementById("bImg");
	if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBR.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUBG.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBR.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULBG.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBG.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVBS.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABR.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UABG.png";
	}
	else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSH.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSR.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUSG.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSH.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSR.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULSG.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSH.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSR.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVSG.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASH.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASR.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UASG.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBR.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUBG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBR.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILBG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBR.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVBG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Idvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABR.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IABG.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSH.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSR.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUSG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSH.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSR.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILSG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSH.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSR.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVSG.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Idvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASH.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASR.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IASG.png";
	}
}

function karRød() {
	document.getElementById("bKarH").style.border = "2px solid lightgrey";
	document.getElementById("bKarS").style.border = "2px solid black";
	document.getElementById("bKarG").style.border = "2px solid #515E71";
	document.getElementById("bKarR").style.border = "2px solid #1D5FE1";
	
	var image = document.getElementById("bImg");
	if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UU.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUBR.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUBR.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2UL.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULBR.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULBR.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UV.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVBR.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVBR.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1U.png") || image.src.match("Endelige/1&3/Udvendig/1UBS.png") || image.src.match("Endelige/1&3/Udvendig/1UBG.png") || image.src.match("Endelige/1&3/Udvendig/1UBR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UA.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UABR.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UABR.png";
	}
	else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSH.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSS.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSG.png") || image.src.match("Endelige/2&4/Udvendig/Uden/2UUSR.png")){
		image.src = "Endelige/2&4/Udvendig/Uden/2UUSR.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSH.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSS.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSG.png") || image.src.match("Endelige/2&4/Udvendig/Luft/2ULSR.png")){
		image.src = "Endelige/2&4/Udvendig/Luft/2ULSR.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSH.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSS.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSG.png") || image.src.match("Endelige/2&4/Udvendig/Vand/2UVSR.png")){
		image.src = "Endelige/2&4/Udvendig/Vand/2UVSR.png";
	} else if (image.src.match("Endelige/1&3/Udvendig/1USH.png") || image.src.match("Endelige/1&3/Udvendig/1USS.png") || image.src.match("Endelige/1&3/Udvendig/1USG.png") || image.src.match("Endelige/1&3/Udvendig/1USR.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASH.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASS.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASG.png") || image.src.match("Endelige/2&4/Udvendig/Alle/2UASR.png")){
		image.src = "Endelige/2&4/Udvendig/Alle/2UASR.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IU.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUBR.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUBR.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2IL.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILBR.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILBR.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Indvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IV.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVBR.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVBR.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1I.png") || image.src.match("Endelige/1&3/Idvendig/1IBS.png") || image.src.match("Endelige/1&3/Indvendig/1IBG.png") || image.src.match("Endelige/1&3/Indvendig/1IBR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IA.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IABR.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IABR.png";
	}
	else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSH.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSS.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSG.png") || image.src.match("Endelige/2&4/Indvendig/Uden/2IUSR.png")){
		image.src = "Endelige/2&4/Indvendig/Uden/2IUSR.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSH.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSS.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSG.png") || image.src.match("Endelige/2&4/Indvendig/Luft/2ILSR.png")){
		image.src = "Endelige/2&4/Indvendig/Luft/2ILSR.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Indvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSH.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSS.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSG.png") || image.src.match("Endelige/2&4/Indvendig/Vand/2IVSR.png")){
		image.src = "Endelige/2&4/Indvendig/Vand/2IVSR.png";
	} else if (image.src.match("Endelige/1&3/Indvendig/1ISH.png") || image.src.match("Endelige/1&3/Idvendig/1ISS.png") || image.src.match("Endelige/1&3/Indvendig/1ISG.png") || image.src.match("Endelige/1&3/Indvendig/1ISR.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASH.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASS.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASG.png") || image.src.match("Endelige/2&4/Indvendig/Alle/2IASR.png")){
		image.src = "Endelige/2&4/Indvendig/Alle/2IASR.png";
	}
}


