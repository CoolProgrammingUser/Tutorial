var Tutorial = {};

Tutorial.Character = function (source, options) {
	/**
	makes a character
	arguments:
		source = optional; a URL, file location, or class to be used for the character's appearance
			a class ending in "-face" will be optimized for creating a face
			built-in faces are "happy-face", "sad-face", "angry-face", "alien-face", and "robot-face"
		options = optional; an object ({}) with various optional parameters setting different aspects of the character
			id: an ID for the character
			classes: a list of classes for the character
				can be an array or space-separated string of classes
			movementUnit: the unit of movement for the character, e.g. "px", "em", "vw", ...
	non-native functions: none
	*/

	var character = this;

	if (source) {
		if (typeof source != "string" && source.constructor.toString().search(/HTML.*Element/) == -1) {
			throw "The type of character isn't a string or an HTML element.";
		}
	} else {
		source = "happy-face";
	}
	options = options || {};
	if (source.constructor.toString().search(/HTML.*Element/) > -1) {  // if it's an HTML element
		this.HTMLElement = source;
	} else if (source.includes(".")) {
		this.HTMLElement = document.createElement("img");
	} else {
		if (source.split("-")[source.split("-").length - 1] == "face") {
			this.HTMLElement = document.createElement("div");
			this.HTMLElement.className = source;
			let leftEye = document.createElement("div"),
				rightEye = document.createElement("div"),
				mouth = document.createElement("div");
			leftEye.className = "face-left-eye";
			rightEye.className = "face-right-eye";
			mouth.className = "face-mouth";
			this.HTMLElement.appendChild(leftEye);
			this.HTMLElement.appendChild(rightEye);
			this.HTMLElement.appendChild(mouth);
		} else {
			this.HTMLElement = document.createElement("div");
		}
	}
	if (options.id) {
		this.HTMLElement.id = options.id;
	}
	if (options.classes) {
		if (options.classes instanceof Array || typeof options.classes == "string") {
			let list;
			if (extraClasses instanceof Array) {
				list = options.classes.join(" ");
			} else {
				list = options.classes;
			}
			this.HTMLElement.className = this.HTMLElement.className=="" ? list : this.HTMLElement.className + " " + list;
		} else {
			console.warn("The extra classes of the face maker are of an incorrect type.");
		}
	}

	this.xPosition = 0;
	this.yPosition = 0;
	this.movementUnit = options.movementUnit || "em";
	this.moveLeft = function (distance) {
		if (document.body.contains(character.HTMLElement)) {
			distance = distance || 1;
			character.xPosition -= distance;
			character.HTMLElement.style.left = character.xPosition + character.movementUnit;
		}
	}
	this.moveRight = function (distance) {
		if (document.body.contains(character.HTMLElement)) {
			distance = distance || 1;
			character.xPosition += distance;
			character.HTMLElement.style.left = character.xPosition + character.movementUnit;
		}
	}
	this.moveUp = function (distance) {
		if (document.body.contains(character.HTMLElement)) {
			distance = distance || 1;
			character.yPosition -= distance;
			character.HTMLElement.style.top = character.yPosition + character.movementUnit;
		}
	}
	this.moveDown = function (distance) {
		if (document.body.contains(character.HTMLElement)) {
			distance = distance || 1;
			character.yPosition += distance;
			character.HTMLElement.style.top = character.yPosition + character.movementUnit;
		}
	}
};