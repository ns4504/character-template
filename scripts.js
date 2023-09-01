//NAVIGATION CREATION
	// Set navigation content in local storage
	function setNavContent(content) {
	  localStorage.setItem('navContent', content);
	}

	// Get navigation content from local storage
	function getNavContent() {
	  return localStorage.getItem('navContent');
	}

	// Set the navigation content
	setNavContent(`
	<div class="nav">
			<nav>
			<a href="index.html">BASICS</a>
			<a HREF="appearance.html">APPEARANCE</a>
			<a HREF="personality.html">PERSONALITY</a>
			<a HREF="background.html">BACKGROUND</a>
			<a HREF="relatioships">RELATIONSHIPS</a>
			<a HREF="combat">COMBAT</a>
			</nav>
		</div>
	`);