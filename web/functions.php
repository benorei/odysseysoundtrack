<?

function o($n,$m,$s){
	$t = 60*$m + $s;
	echo "<option value='$t'>$n</option>";
}

function od($n){
	print "</optgroup><optgroup label='$n'>";
}

function setTime(id) {
	var choiceDropdown = document.getElementById(id);
	var choice = choiceDropdown.options[choiceDropdown.selectedIndex].value;
	soundtrack.currentTime = choice;
}

?>