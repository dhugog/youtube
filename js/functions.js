function navbar_active(e) {
	var el = document.getElementsByClassName("link-menu");
	el[0].className = "link-menu inactive";
	el[1].className = "link-menu inactive";
	el[2].className = "link-menu inactive";
	el[e].className = "link-menu active";
}

function toggleMenu() {
	var menu = document.getElementById("nav-menu");
	if(menu.style.left == '0px') {
		menu.style.left = '-100%';
	}
	else {
		menu.style.left = '0px';
	}
}