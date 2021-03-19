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
