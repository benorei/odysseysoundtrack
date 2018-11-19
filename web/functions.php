<?

function o($n,$m,$s){
	$t = 60*$m + $s;
	echo "<option value='$t'>$n</option>";
}

function od($n){
	print "</optgroup><optgroup label='$n'>";
}

?>