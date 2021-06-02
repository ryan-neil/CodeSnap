/* 
=================================
	[Color Picker]
*/
const snapWindow = document.querySelector("#snapWindow");

const pickr = Pickr.create({
	el         : ".color-picker",
	container  : ".side-nav",
	theme      : "monolith",
	showAlways : true,
	inline     : true,
	appClass   : "custom-class",

	components : {
		// Main components
		preview     : true,
		opacity     : true,
		hue         : true,

		// Input / output Options
		interaction : {
			hex   : true,
			rgba  : true,
			hsla  : false,
			hsva  : false,
			cmyk  : false,
			input : true,
			clear : false,
			save  : false
		}
	}
});

// change the snap window background color on select
pickr.on("change", (...args) => {
	let color = args[0].toRGBA();
	this.snapWindow.style.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
});
