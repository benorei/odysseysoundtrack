<?php
require_once("functions.php");
require_once("sections.php");

?>
<select id='sections' onchange="setTime('sections')">
<option id='sectionsDefault' value='0'>Rehearsal Marks</option>
<optgroup label="Prologue">
<?php
for($i=0; $s = $allSectionNames[$i]; $i++){
	echo "<option value='${$s}'>$s</option>";
	if($i==count($allSectionNames)){
		break;
	}
	
	$t = substr($allSectionNames[$i+1], 1);
	if($t > substr($s, 1)){
		echo "</optgroup><optgroup label='Scene $t'>";
	}
	
}
?>
</select>