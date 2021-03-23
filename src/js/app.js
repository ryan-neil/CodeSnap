// CodeMirror
const editor = CodeMirror.fromTextArea(
	document.getElementById('text-editor'),
	{
		mode            : 'javascript',
		theme           : 'material-palenight',
		lineNumbers     : true,
		tabSize         : 2,
		lineWrapping    : true,
		scrollbarStyle  : null,
		matchBrackets   : true,
		styleActiveLine : true
	}
);

// starter code in the text editor
const starterCode = editor
	.getDoc()
	.setValue(
		'// JavaScript Higher Order Functions\nconst add = (a, b) => a + b;\nconst isEven = num => num % 2 === 0;\n\nconst data = [ 2, 3, 1, 5, 4, 6 ];\n\nconst evenValues = data.filter(isEven); // [2, 4, 6]\nconst evenSum = data.filter(isEven).reduce(add); // 12'
	);

// resetting all toggles to "on"
let clist = document.getElementsByTagName('input');
for (let tag of clist) {
	tag.checked = true;
}

// toggle code editor line numbering on and off
const toggleLineNumbers = () => {
	const numbersCheckbox = document.getElementById('lineNumbers');

	if (numbersCheckbox.checked === true) {
		editor.setOption('lineNumbers', true);
	} else {
		editor.setOption('lineNumbers', false);
	}
};

// toggle code editor shadow on and off
const toggleShadow = () => {
	const shadowCheckBox = document.getElementById('boxShadow');
	const editor = document.querySelector('.input-box-wrapper');

	if (shadowCheckBox.checked === true) {
		(editor.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 19px 38px'),
			'rgba(0, 0, 0, 0.22) 0px 15px 12px';
	} else {
		editor.style.boxShadow = 'none';
	}
};

// toggle code editor header on and off
const toggleHead = () => {
	const headerCheckBox = document.getElementById('heading');
	const header = document.querySelector('.input-box__item.header');

	if (headerCheckBox.checked === true) {
		header.style.display = 'flex';
	} else {
		header.style.display = 'none';
	}
};
