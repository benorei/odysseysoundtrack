<title>Odyssey Soundtrack</title><link rel="stylesheet" type="text/css" href="styles.css"><?phprequire('../vendor/autoload.php');?><h1>Odyssey Soundtrack</h1><audio id="soundtrack" controls autoplay>	<source src="soundtrack.mp3" type="audio/mpeg">	Your browser does not support the audio element.</audio><br><br><?php require("sectionsDropdown.php") ?><br><button onclick="setTime("sections")" type="button">Go to Place</button><br><br><p>Use the dropdown menu to choose a section in the score, then click <i>Go to Place</i>. You may need to click Play above or zoom in if you are using mobile.</p><a href='https://docs.google.com/forms/d/e/1FAIpQLSfbI4U3nVygCzuWD4j4vlo19TFPMKU1y9C18fCKqbVRE2gZhQ/viewform?usp=sf_link'>Feedback form</a><script>function setTime(id) {	var choiceDropdown = document.getElementById(id);	var choice = choiceDropdown.options[choiceDropdown.selectedIndex].value;	soundtrack.currentTime = choice;}</script>