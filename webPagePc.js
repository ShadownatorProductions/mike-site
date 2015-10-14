var cpu1 = "Intel Pentium G3258";
var cpu2 = "Intel I3-4330";
var cpu3 = "Intel I5-4590";
var cpu4 = "Intel Xeon E3-1241 V3";

function init() {
	var nameCpu1 = document.getElementById("cpu1");
	nameCpu1.innerHTML = cpu1;
}

function onCpu() {
	var getCpu = document.getElementById("cpu").value;
	document.getElementById("gpu").style.display = "block";

	if (getCpu == "cpu1") {
        document.getElementById("gpu3").style.display = "none";
		document.getElementById("gpu4").style.display = "none";
		document.getElementById("gpu5").style.display = "none";
	} else if (getCpu == "cpu2") {

    }
}

function onGpu() {
	var getGpu = document.getElementById("gpu").value;
	document.getElementById("psu").style.display = "block";

	if (getGpu == "") {

    }
}