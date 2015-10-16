
function onCpu() {
	getCpu = document.getElementById("cpu").value;
	document.getElementById("cpuLabel").style.display = "none";
	document.getElementById("gpu").style.display = "block";
	
	if (getCpu == "Pentium G3258") {
		document.getElementById("gpu3").style.display = "none";	
		document.getElementById("gpu4").style.display = "none";		
		document.getElementById("gpu5").style.display = "none";		
		document.getElementById("gpu6").style.display = "none";		
	} else if (getCpu == "I3-4330") {
		document.getElementById("gpu4").style.display = "none";	
		document.getElementById("gpu5").style.display = "none";		
		document.getElementById("gpu6").style.display = "none";		
		document.getElementById("gpu3").style.display = "block";
	} else if (getCpu == "I5-4590") {
		document.getElementById("gpu6").style.display = "none";
		document.getElementById("gpu4").style.display = "block";
		document.getElementById("gpu5").style.display = "block";
	} else {
		document.getElementById("gpu1").style.display = "block";
		document.getElementById("gpu2").style.display = "block";
		document.getElementById("gpu3").style.display = "block";
		document.getElementById("gpu4").style.display = "block";
		document.getElementById("gpu5").style.display = "block";
		document.getElementById("gpu6").style.display = "block";
	}
}

function onGpu() {
	getGpu = document.getElementById("gpu").value;
	document.getElementById("gpuLabel").style.display = "none";
	document.getElementById("psu").style.display = "block";
	
	if (getGpu == "Nvidia GTX 750 TI 2gb") {
		document.getElementById("psu2").style.display = "none";
		document.getElementById("psu3").style.display = "none";
		document.getElementById("psu4").style.display = "none";
	} else if (getGpu == "Nvidia GTX 950 2gb" || getGpu == "AMD R9-380 4gb") {
		document.getElementById("psu1").style.display = "none";
		document.getElementById("psu2").style.display = "block";
		document.getElementById("psu3").style.display = "none";
		document.getElementById("psu4").style.display = "none";
	} else if (getGpu == "AMD R9-390 8gb") {
		document.getElementById("psu1").style.display = "none";
		document.getElementById("psu2").style.display = "none";
		document.getElementById("psu3").style.display = "block";
		document.getElementById("psu4").style.display = "none";
	}
}

function onPsu() {
	getPsu = document.getElementById("psu").value;
	document.getElementById("psuLabel").style.display = "none";
	document.getElementById("ram").style.display = "block";
	
}

function onRam() {
	
}
