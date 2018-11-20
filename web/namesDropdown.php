<?php
require_once("functions.php");
require_once("sections.php");
?>

<select id="names" onchange="setTime('names')"><?

o("Choose a song", 0);
o("A - Prologue", $A0);
o("C - Opening Chorus", $C0);
o("A1 - Ithaca", $A1);
o("D1 - Isle of the Lotus Eaters", $C1);
o("F1 - Shipwrecked Sailor", $F1);
o("I1 - First Ballad Interlude", $I1);
o("A2 - Hymn to Athena", $A2);
o("D2 - Cyclops", $D2);
o("J2 - Second Ballad Interlude", $J2);
o("N2 - Master of the Winds", $N2);
o("A3 - Sailor Song", $A3);
o("F3 - The First Mate Gets Greedy", $F3);
o("G3 - Storm Scene", $G3);
o("A4 - Seasick Sailor Song", $A4);
o("E4 - Circe's Tango", $E4);
o("I4 - The Piggies' Progress", $I4);
o("B5 - Sailor Song Reprise", $B5);
o("F5 - Sirens' Song", $F5);
o("L5 - Third Ballad Interlude", $L5);
o("A6 - Homecoming Quartet", $A6);
o("D6 - Ithaca Reprise", $D6);
o("G6 - Shipwrecked Sailor Reprise", $G6);
o("H6 - Finale", $H6);
o("K6 - Bow Music", $K6);



?></select>