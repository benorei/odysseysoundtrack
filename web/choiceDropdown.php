<?php


function o($n,$m,$s){
	$t = 60*$m + $s;
	echo "<option value='$t'>$n</option>";
}


?>
<select id="choice">
<?php
o("A", 0, 6);
o("B", 0, 36);
o("C", 1, 25);
o("D", 2, 11);
o("E", 2, 43);
o("A1", 3, 16);
o("B1", 3, 47);
o("C1", 4, 27);
o("D1", 4, 55);
o("E1", 5, 45);
o("F1", 6, 40);
o("G1", 7, 27);
o("H1", 7, 51);
o("I1", 8, 45);
o("J1", 9, 34);
o("K1", 9, 59);
o("L1", 10, 10);
o("A2", 10, 47);
o("B2", 11, 21);
o("C2", 11, 50);
o("D2", 12, 2);
o("E2", 12, 42);
o("F2", 12, 57);
o("G2", 13, 28);
o("H2", 14, 33);
o("I2", 14, 55);
o("J2", 15, 22);
o("K2", 15, 53);
o("L2", 16, 6);
o("M2", 16, 25);
o("N2", 16, 39);
o("O2", 17, 17);
o("P2", 17, 49);
o("Q2", 18, 06);
o("R2", 18, 20);
o("A3", 18, 47);
o("B3", 19, 8);
o("C3", 19, 28);
o("D3", 19, 41);
o("E3", 19, 57);
o("F3", 20, 32);
o("G3", 21, 9);
o("A4", 21, 56);
o("B4", 22, 45);
o("C4", 23, 3);
o("D4", 23, 32);
o("E4", 23, 57);
o("F4", 24, 19);
o("G4", 28, 48);
o("H4", 25, 16);
o("I4", 25, 31);
o("J4", 25, 52);
?>
</select>