<?

function o($n,$t){
	echo "<option value='$t'>$n</option>";
}

function od($n){
	print "</optgroup><optgroup label='$n'>";
}

function s($m, $s) {
	return 60*$m + $s;
}

function print_var_name($var) {
    foreach($GLOBALS as $var_name => $value) {
        if ($value === $var) {
            return $var_name;
        }
    }

    return false;
}

?>