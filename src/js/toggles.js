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
	[toggle snap window padding]
		* Bug: Initial button click removes all padding without adding correct padding.
*/

// select all padding buttons
const padBtns = document.querySelectorAll(".pad-btn");

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

		// remove all padding function (*BUG*)
		const removePadding = () => {
			snapWindow.classList.remove(
				"active-pad-16",
				"active-pad-32",
				"active-pad-64"
			);
		};
		removePadding();

		// padding button variables
		const btn16 = document.querySelector(".btn-16");
		const btn32 = document.querySelector(".btn-32");
		const btn64 = document.querySelector(".btn-64");

		// add 16px padding on click
		btn16.addEventListener("click", () => {
			snapWindow.classList.add("active-pad-16");
		});

		// add 32px padding on click
		btn32.addEventListener("click", () => {
			snapWindow.classList.add("active-pad-32");
		});

		// add 64px padding on click
		btn64.addEventListener("click", () => {
			snapWindow.classList.add("active-pad-64");
		});
	});
});
