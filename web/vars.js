
var soundtrack = document.getElementById("soundtrack");
var playDiv = document.getElementById("playBtn");
var sectionsDropdownDefault = document.getElementById('sectionsDefault');
var namesDropdownDefault = document.getElementById('namesDefault');
var sectionNameSpan = document.getElementById('sectionName');
var songNameSpan = document.getElementById("songName");
var title = document.getElementById("title");
var popup = document.getElementById("loadingPopup");
var popupDiv = document.getElementById("popupDiv");
var browserMessageDiv = document.getElementById("browserMessage");
var scrollableCheckerDiv = document.getElementById("scrollable-checker");
var pageHTML = document.getElementById("html");
var pageBody = document.getElementById("body");
var pageMain = document.getElementById("main");
var sectionsDropdown = document.getElementById("sections");
var namesDropdown = document.getElementById("names");
var sitenameHeadingH1 = document.getElementById("sitename-heading");
var orMarker = document.getElementById("or-marker");

var allSectionNames = [
	"-", 
	"A0", "B0", "C0", "D0", "E0", 
	"A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1", "J1", "K1", "L1", 
	"A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2", "I2", "J2", "K2", "L2", "M2", "N2", "O2", "P2", 
	"A3", "B3", "C3", "D3", "E3", "F3", "G3", 
	"A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I4", "J4", "K4", "L4", "M4", "N4", "O4", "P4", 
	"A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5", "I5", "J5", "K5", "L5", "M5", "N5", "O5", "P5", "Q5", "R5", "S5", "T5", 
	"A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6", "I6", "J6", "K6"];
var allSectionTimes = [
	0,
	6, 
	36, 85, 131, 163, 196, 
	167, 267, 295, 345, 400, 447, 471, 525, 574, 599, 610, 647, 
	680, 710, 722, 762, 777, 808, 873, 895, 922, 953, 966, 985, 999, 1037, 1069, 1124, 
	1148, 1168, 1181, 1197, 1232, 1269, 1316, 
	1365, 1383, 1412, 1434, 1459, 1728, 1516, 1531, 1552, 1565, 1577, 1588, 1621, 1649, 1664, 
	1697, 1725, 1775, 1783, 1817, 1826, 1843, 1879, 1912, 1955, 1972, 1991, 2020, 2040, 2070, 2085, 2117, 2133, 2166, 2191, 
	2216, 2274, 2336, 2366, 2382, 2409, 2474, 2515, 2559, 2581, 2632];
var allSongTimes = [
	0, 85, 
	196, 
	267,400, 525, 647, 722, 922, 999, 1124, 1232, 1269, 1316, 1434, 1531, 1725, 1826, 1991, 2216, 2366, 2515, 2632];

var allSongNames = [
	"Prologue", 
	"Opening Chorus", 
	"Ithaca",
	"Isle of the Lotus Eaters",
	"Shipwrecked Sailor",
	"First Ballad Interlude",
	"Hymn to Athena",
	"Cyclops",
	"Second Ballad Interlude",
	"Master of the Winds",
	"Sailor Song",
	"The First Mate Gets Greedy",
	"Storm Scene",
	"Seasick Sailor Song",
	"Circes Tango",
	"The Piggies Progress","Sailor Song Reprise",
	"Sirens Song",
	"Third Ballad Interlude",
	"Homecoming Quartet",
	"Recognition",
	"Finale",
	"Bow Music"
	];
	