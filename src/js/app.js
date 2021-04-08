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
			editor.style.boxShadow =
				"0px 25px 15px -10px rgba(21, 22, 65, 0.3)";
		} else {
			editor.style.boxShadow = "none";
		}
	});
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
};
toggleHead();

/* 
=================================
[function that toggles padding amount]
*/
const togglePadding = () => {
	const snapWindow = document.querySelector(".snap-window");
	const padBtn16 = document.querySelector(".pad-btn.pad-16");
	const padBtn32 = document.querySelector(".pad-btn.pad-32");
	const padBtn64 = document.querySelector(".pad-btn.pad-64");

	padBtn16.addEventListener("click", () => {
		snapWindow.classList.add("window-pad-16");
	});
	padBtn32.addEventListener("click", () => {
		snapWindow.classList.add("window-pad-32");
	});
	padBtn64.addEventListener("click", () => {
		snapWindow.classList.add("window-pad-64");
	});
};
togglePadding();
