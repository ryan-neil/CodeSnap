/* 
=================================
	[CodeMirror]
*/
const editor = CodeMirror.fromTextArea(document.getElementById("text-editor"), {
	mode            : "javascript",
	theme           : "material-palenight",
	lineNumbers     : true,
	tabSize         : 2,
	lineWrapping    : true,
	scrollbarStyle  : null,
	matchBrackets   : true,
	styleActiveLine : true
});

// [starter code in the editor]
const starterCode = editor
	.getDoc()
	.setValue(
		"// JavaScript Higher Order Functions\nconst add = (a, b) => a + b;\nconst isEven = num => num % 2 === 0;\n\nconst data = [ 2, 3, 1, 5, 4, 6 ];\n\nconst evenValues = data.filter(isEven); // [2, 4, 6]\nconst evenSum = data.filter(isEven).reduce(add); // 12"
	);
