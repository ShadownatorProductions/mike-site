jQuery(function () {
    objMike.arrMenus = jQuery(".select");
	objMike.renderCPU();
});

var objMike = objMike || {};

objMike.addEvents = function () {
	objMike.arrMenus.change(function(e) {
		switch (objMike.arrMenus.index(jQuery(this))) {
			case 0:
				objMike.changeCPU();
				break;
			case 1:
				objMike.changeGPU();
				break;
		}
	});
};

objMike.renderCPU = function() {
	var i;
	var strHTML = '<option value="label">Choose a CPU</option>';
	for (i = 0; i < data.processors.length; i++) {
		strHTML += '<option value="' + data.processors[i].name + '">' + data.processors[i].name + '</option>';
	}
	objMike.arrMenus.eq(0).html(strHTML);
	objMike.addEvents();
};

objMike.renderGPU = function(numCPU) {
	var i;
	var strHTML = '<option value="label">Choose a GPU</option>';
	if (numCPU !== 0) {
		for (i = 0; i < data.processors[numCPU - 1].graphics.length; i++) {
			strHTML += '<option value="' + data.processors[numCPU - 1].graphics[i].name + '">' + data.processors[numCPU - 1].graphics[i].name + '</option>';
		}
		objMike.arrMenus.eq(1).html(strHTML);
		objMike.arrMenus.eq(1).addClass("active");
		objMike.numCPUSelect = numCPU;
	}
};

objMike.renderPowRam = function(numGPU) {
	var i;
	var strHTMLPower = '<option value="label">Choose a power supply</option>';
	var strHTMLRam = '<option value="label">Choose RAM</option>';
	if (numGPU !== 0) {
		for (i = 0; i < data.processors[objMike.numCPUSelect - 1].graphics[numGPU - 1].power.length; i++) {
			strHTMLPower += '<option value="' + data.processors[objMike.numCPUSelect - 1].graphics[numGPU - 1].power[i] + '">' + data.processors[objMike.numCPUSelect - 1].graphics[numGPU - 1].power[i] + '</option>';
		}
		for (i = 0; i < data.processors[objMike.numCPUSelect - 1].graphics[numGPU - 1].ram.length; i++) {
			strHTMLRam += '<option value="' + data.processors[objMike.numCPUSelect - 1].graphics[numGPU - 1].ram[i] + '">' + data.processors[objMike.numCPUSelect - 1].graphics[numGPU - 1].ram[i] + '</option>';
		}
		objMike.arrMenus.eq(2).html(strHTMLPower);
		objMike.arrMenus.eq(3).html(strHTMLRam);
		objMike.arrMenus.slice(2).addClass("active");
	}
};

objMike.changeCPU = function() {
	objMike.arrMenus.slice(1).removeClass("active");
	objMike.renderGPU(objMike.arrMenus.eq(0)[0].selectedIndex);
};

objMike.changeGPU = function() {
	objMike.arrMenus.slice(2).removeClass("active");
	objMike.renderPowRam(objMike.arrMenus.eq(1)[0].selectedIndex);
};
