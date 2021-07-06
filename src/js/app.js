/* 
=================================
	[function that displays side bar]
*/
const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector(".project-col2");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	const showMenu = menu.style.display;
	// "" represents default style (block)
	if (showMenu === "") {
		return closeMenu();
	}
	return openMenu();
}

// openMenu = () => (menu.style.display = "block");
function openMenu() {
	menu.style.display = ""; // "" represents default style (block)
	return;
}

// closeMenu = () => (menu.style.display = "none");
function closeMenu() {
	menu.style.display = "none";
	return;
}
