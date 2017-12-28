var Tutorial = {};

Tutorial.makeFace = function (type, ID, extraClasses) {
	/**
	makes a face
	arguments:
		type = optional; default = "happy-face"; the type of face (as assigned by class)
		ID = optional; an ID for the face; using an empty string will allow skipping this argument
		extraClasses = optional; an array or space-separated string of classes
	non-native functions: none
	*/
	if (type) {
		if (typeof type != "string") {
			throw "The type of face isn't a string.";
		} else if (type.split("-")[type.split("-").length - 1] != "face") {
			throw 'The class of the face doesn\'t end in "-face".';
		}
	} else {
		type = "happy-face";
	}
	var face = document.createElement("div");
	if (typeof ID == "string" && ID != "") {
		face.id = ID;
	}
	if (extraClasses) {
		if (extraClasses instanceof Array || typeof extraClasses == "string") {
			if (extraClasses instanceof Array) {
				var list = extraClasses.join(" ");
			} else {
				var list = extraClasses;
			}
			face.className = type + " " + list;
		} else {
			console.warn("The extra classes of the face maker are of an incorrect type.");
		}
	} else {
		face.className = type;
	}
	var leftEye = document.createElement("div"),
		rightEye = document.createElement("div"),
		mouth = document.createElement("div");
	leftEye.className = "face-left-eye";
	rightEye.className = "face-right-eye";
	mouth.className = "face-mouth";
	face.appendChild(leftEye);
	face.appendChild(rightEye);
	face.appendChild(mouth);
	return face;
};