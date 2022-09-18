let toggleNavStatus = false;

let toggleNav = function() {
	let getSidebar = document.querySelector(".sidenav");
	let getSidebarUl = document.querySelector(".sidenav ul");
	let getSidebarLinks = document.querySelectorAll(".sidenav a");
	
	if (toggleNavStatus === false) {
		getSidebarUl.style.visibility = "visible";
		getSidebar.style.width = "180px";
		
		let arrayLength = getSidebarLinks.length;
		for (let i = 0; i < arrayLength; i++) {
			getSidebarLinks[i].style.opacity = "1";
		}
		toggleNavStatus = true;
	
	}
	
	else if (toggleNavStatus === true) {

		getSidebar.style.width = "60px";
		
		let arrayLength = getSidebarLinks.length;
		for (let i = 0; i < arrayLength; i++) {
			getSidebarLinks[i].style.opacity = "1";
		}
		
		toggleNavStatus = false;
		
	}
}