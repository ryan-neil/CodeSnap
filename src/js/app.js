// CodeMirror
const editor = CodeMirror.fromTextArea(
	document.getElementById('text-editor'),
	{
		mode           : 'javascript',
		theme          : 'material-palenight',
		lineNumbers    : true,
		tabSize        : 2,
		lineWrapping   : true,
		scrollbarStyle : null
	}
);

// toggle code editor shadow on and off
function toggleShadow() {
	const shadowCheckBox = document.getElementById('boxShadow');
	const editor = document.querySelector('.input-box-wrapper');

	if (shadowCheckBox.checked === true) {
		(editor.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 19px 38px'),
			'rgba(0, 0, 0, 0.22) 0px 15px 12px';
	} else {
		editor.style.boxShadow = 'none';
	}
}

// toggle code editor header on and off
function toggleHead() {
	const headerCheckBox = document.getElementById('heading');
	const header = document.querySelector('.input-box__item.header');

	if (headerCheckBox.checked === true) {
		header.style.display = 'flex';
	} else {
		header.style.display = 'none';
	}
}

// toggle code editor line numbers on and off
function toggleLineNumbers() {
	const numbersCheckBox = document.getElementById('lineNumbers');
}
