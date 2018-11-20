<?php
require_once("functions.php");
require_once("sections.php");
?>
<select id="sections" onchange="setTime('sections')">
<option value='0'>Choose a section</option>

<?php
for($i=0; $s = $allSectionNames[$i]; $i++){
	echo "<option value='${$s}'>$s</option>";
	echo "<br>";
	if($i==count($allSectionNames)){
		break;
	}
	/*
	$t = int(substr($allSectionNames[$i+1], 1));
	if($t > int(substr($s, 1))){
		echo "</optgroup><optgroup label='Scene $t'>";
	}
	*/
}
?>
</select>