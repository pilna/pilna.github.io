function setTheme(themeName) {
	document.getElementsByTagName('body')[0].className = themeName;
}

function switchTheme() {
	const currentTheme = document
		.getElementsByTagName('body')[0]
		.getAttribute('class');

	if (currentTheme == 'dark-theme') {
		setTheme('light-theme');
	} else {
		setTheme('dark-theme');
	}

	document.getElementById('customSwitch1').blur();
}

function initTheme() {
	const isDarkTheme = document.getElementById('customSwitch1').checked;

	if (isDarkTheme) {
		setTheme('dark-theme');
	} else {
		setTheme('light-theme');
	}
}

function setCurrentYear() {
	document.getElementById("year").innerHTML = new Date().getFullYear();
}

setCurrentYear();
initTheme();
AOS.init();
