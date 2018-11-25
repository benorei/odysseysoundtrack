function setTime(id) {
	var choiceDropdown = document.getElementById(id);
	var choice = choiceDropdown.options[choiceDropdown.selectedIndex].value;
	
	if(isChrome == true){
		soundtrack.currentTime = choice - 2;
	}
	else{
		soundtrack.currentTime = choice;
	}

	if(id == 'names') {
		sectionsDropdownDefault.selected = true;
	}
	if(id == 'sections') {
		namesDropdownDefault.selected = true;
	}
}


var currentSectionStartingTime;
var currentSectionIndex;
var nextSectionTime;
var previousSectionTime

function updateSectionName(time){
	var sectionTimesLessThan = allSectionTimes.filter(function(x) {return x <= time;} );
	currentSectionStartingTime = Math.max(...sectionTimesLessThan);
	currentSectionIndex = allSectionTimes.indexOf(currentSectionStartingTime);
	var currentSectionName = allSectionNames[currentSectionIndex];

	var songTimesLessThan = allSongTimes.filter(function(y) {return y <= time;} );
	var currentSongStartingTime = Math.max(...songTimesLessThan);
	var currentSongIndex = allSongTimes.indexOf(currentSongStartingTime);
	var currentSongName = allSongNames[currentSongIndex];

	nextSectionTime = allSectionTimes[currentSectionIndex +1 ];
	previousSectionTime = allSectionTimes[currentSectionIndex -1];

	sectionNameSpan.style.borderStyle = "solid";
	sectionNameSpan.innerHTML = "&nbsp;" + currentSectionName + "&nbsp;";
	songNameSpan.innerHTML = currentSongName;

	if(soundtrack.currentTime == 0){
		songNameSpan.innerHTML = "Not Playing";
		sectionNameSpan.innerHTML = "";
		sectionNameSpan.style.borderStyle = "none";
		title.innerHTML = SITENAME;
	}

	title.innerHTML = currentSectionName + " " + currentSongName + " - " + SITENAME;

}

function checkTime() {
	var time = soundtrack.currentTime;
	updateSectionName(time);
	updateScroll();
	setTimeout(checkTime, 500);
}
checkTime();



function play(){
	soundtrack.play();
	playDiv.innerHTML = "<img src='images/buttons/pauseBtn.jpg' height='30' onclick='pause()'>";
}

function pause(){
	soundtrack.pause();
	playDiv.innerHTML = "<img src='images/buttons/playBtn.png' height='30' onclick='play()'>";
}

function goBack(){
	if(soundtrack.currentTime - currentSectionStartingTime <= 3){
		soundtrack.currentTime = previousSectionTime;
	}
	else{
		soundtrack.currentTime = currentSectionStartingTime;
	}
}

function goForward(){
	soundtrack.currentTime = nextSectionTime;
}

if(isBadIE){
	window.location.href="nosupport_ie.html";
}

function isInViewport(element){
var bounding = element.getBoundingClientRect();
return(
	bounding.top >= 0 &&
	bounding.left >= 0 &&
	bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};


function updateScroll(){
	if(isInViewport(scrollableCheckerDiv) && isInAppForm){
		document.ontouchmove = function(e){ e.preventDefault(); }

	}else{
		document.ontouchmove = function(e){ return true; }
	}
}

if(isInAppForm){
	pageMain.style.borderStyle = "none";
	namesDropdown.style.fontSize = "50px";
	sectionsDropdown.style.fontSize = "50px";
}