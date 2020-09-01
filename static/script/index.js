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
}
