var cpu1 = "Intel Pentium G3258";
var cpu2 = "Intel I3-4330";
var cpu3 = "Intel I5-4590";
var cpu4 = "Intel Xeon E3-1241 V3";

function init() {
	var nameCpu1 = document.getElementById("cpu1");
	nameCpu1.innerHTML = cpu1;
}

function onCpu() {
	getCpu = document.getElementById("cpu").value;
	document.getElementById("gpu").style.display = "block";

	if (getCpu == "Intel Pentium G3258") {
		document.getElementById("gpu3").style.display = "none";
		document.getElementById("gpu4").style.display = "none";
		document.getElementById("gpu5").style.display = "none";
	} else if (getCpu == "Intel I3-4330") {

    }
}

function onGpu() {
	getGpu = document.getElementById("cpu").value;
	document.getElementById("psu").style.display = "block";

	if (getGpu == "") {

    }
}