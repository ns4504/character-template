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
			<a href="#">BASICS</a>
			<a HREF="#">APPEARANCE</a>
			<a HREF="#">PERSONALITY</a>
			<a HREF="#">BACKGROUND</a>
			<a HREF="#">COMBAT</a>
			<a HREF="#">RELATIONSHIPS</a>
			</nav>
		</div>
	`);