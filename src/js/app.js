/* 
=================================
	[dark mode]
*/
// users' last choice will be remembered
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// check if dark mode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

// enable function
const enableDarkMode = () => {
	// 1. add the class of darkMode to the body
	document.body.classList.add("darkmode");
	// 2. update darkMode in the localStorage
	localStorage.setItem("darkMode", "enabled");

	return;
};

// disable function
const disableDarkMode = () => {
	// 1. remove the class of darkMode from the body
	document.body.classList.remove("darkmode");
	// 2. update darkMode in the localStorage
	localStorage.setItem("darkMode", null);

	return;
};

if (darkMode === "enabled") {
	enableDarkMode();
}

// event toggle
darkModeToggle.addEventListener("click", () => {
	// update darkMode every time someone clicks on the button
	darkMode = localStorage.getItem("darkMode");
	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}

	return;
});

/* 
=================================
	[CodeMirror]
*/
const editor = CodeMirror.fromTextArea(
	document.getElementById("text-editor"),
	{
		mode            : "javascript",
		theme           : "material-palenight",
		lineNumbers     : true,
		tabSize         : 2,
		lineWrapping    : true,
		scrollbarStyle  : null,
		matchBrackets   : true,
		styleActiveLine : true
	}
);

/* 
=================================
	[starter code in the editor]
*/
const starterCode = editor
	.getDoc()
	.setValue(
		"// JavaScript Higher Order Functions\nconst add = (a, b) => a + b;\nconst isEven = num => num % 2 === 0;\n\nconst data = [ 2, 3, 1, 5, 4, 6 ];\n\nconst evenValues = data.filter(isEven); // [2, 4, 6]\nconst evenSum = data.filter(isEven).reduce(add); // 12"
	);

/* 
=================================
	[function that resets all toggles to "on"]
*/
const resetToggles = () => {
	let toggles = document.getElementsByClassName("toggle-input");

	for (let tag of toggles) {
		tag.checked = true;
	}

	return;
};
resetToggles();

/* 
=================================
	[function that toggles editor line numbering on and off]
*/
const toggleLineNumbers = () => {
	const numbersCheckBox = document.getElementById("lineNumbers");

	numbersCheckBox.addEventListener("click", () => {
		if (numbersCheckBox.checked === true) {
			editor.setOption("lineNumbers", true);
		} else {
			editor.setOption("lineNumbers", false);
		}
	});

	return;
};
toggleLineNumbers();

/* 
=================================
	[function that toggles editor shadow on and off]
*/
const toggleShadow = () => {
	const shadowCheckBox = document.getElementById("boxShadow");
	const editor = document.querySelector(".input-box-wrapper");

	shadowCheckBox.addEventListener("click", () => {
		if (shadowCheckBox.checked === true) {
			editor.classList.add("active-shadow");
		} else {
			editor.classList.remove("active-shadow");
		}
	});

	return;
};
toggleShadow();

/* 
=================================
	[function that toggles editor header on and off]
*/
const toggleHead = () => {
	const headerCheckBox = document.getElementById("heading");
	const header = document.querySelector(".input-box__item.header");

	headerCheckBox.addEventListener("click", () => {
		if (headerCheckBox.checked === true) {
			header.style.display = "flex";
		} else {
			header.style.display = "none";
		}
	});

	return;
};
toggleHead();

/* 
=================================
	[toggles padding button styles]
*/

// select all padding buttons
const padBtns = document.querySelectorAll(".pad-btn");

// padding button variables
const btn16 = document.querySelector(".btn-16");
const btn32 = document.querySelector(".btn-32");
const btn64 = document.querySelector(".btn-64");

// loop through all the padding buttons
padBtns.forEach((clickedBtn) => {
	// add onClick event listener
	clickedBtn.addEventListener("click", () => {
		// remove the active class from all buttons
		padBtns.forEach((btn) => {
			btn.classList.remove("active-pad-btn");
		});

		// add the active class to the clicked button
		clickedBtn.classList.add("active-pad-btn");

		// add/remove padding logic
		// select the snap window
		const snapWindow = document.querySelector(".snap-window");

		// remove all padding function
		// BUGGGG
		const removePadding = () => {
			snapWindow.classList.remove(
				"active-pad-16",
				"active-pad-32",
				"active-pad-64"
			);
		};
		removePadding();

		// add 16px padding on click
		btn16.addEventListener("click", (removePadding) => {
			snapWindow.classList.add("active-pad-16");
		});

		// add 32px padding on click
		btn32.addEventListener("click", (removePadding) => {
			snapWindow.classList.add("active-pad-32");
		});

		// add 64px padding on click
		btn64.addEventListener("click", (removePadding) => {
			snapWindow.classList.add("active-pad-64");
		});
	});
});

/* 
=================================
	[toggle snap window padding amount]
*/
// get the snap window styles
