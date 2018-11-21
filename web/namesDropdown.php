<?php
require_once("functions.php");
require_once("sections.php");


?>
<select id='names' onchange="setTime('names')">
<option id='namesDefault' value='0'>Songs</option>
<?
o("Prologue", $A0);
o("Opening Chorus", $C0);
o("Ithaca", $A1);
o("Isle of the Lotus Eaters", $C1);
o("Shipwrecked Sailor", $F1);
o("First Ballad Interlude", $I1);
o("Hymn to Athena", $A2);
o("Cyclops", $D2);
o("Second Ballad Interlude", $J2);
o("Master of the Winds", $N2);
o("Sailor Song", $A3);
o("The First Mate Gets Greedy", $F3);
o("Storm Scene", $G3);
o("Seasick Sailor Song", $A4);
o("Circe's Tango", $E4);
o("The Piggies' Progress", $I4);
o("Sailor Song Reprise", $B5);
o("Sirens' Song", $F5);
o("Third Ballad Interlude", $L5);
o("Homecoming Quartet", $A6);
o("Recognition", $C6);
o("Finale", $H6);
o("Bow Music", $K6);



?></select>