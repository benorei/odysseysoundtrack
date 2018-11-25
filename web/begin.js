if(navigator.userAgent.includes("Chrome")){
	var isChrome = true;
}
if(navigator.userAgent.includes("Safari")){
	var isSafari = true;
}
if(navigator.userAgent.includes("Mobile") && navigator.userAgent.includes("Safari")){
	var isMobileSafari = true;
}
if(navigator.appName.indexOf("Internet Explorer")!=-1){     //yeah, s/he's using IE
	var isBadIE=(
    	navigator.appVersion.indexOf("MSIE 9")==-1 &&   //v9 is ok
    	navigator.appVersion.indexOf("MSIE 1")==-1  //v10, 11, 12, etc. is fine too
	);
}
if('standalone' in navigator && 
		navigator.standalone && 
		(/iphone|ipod|ipad/gi).test(navigator.platform) && 
		(/Safari/i).test(navigator.appVersion)){
	var isInAppForm = true;
}

if(isMobileSafari){
	browserMessageDiv.innerHTML = "Because Safari on iOS prefers to use smaller amounts of cellular data, you must click play for the soundtrack to load. You may have to wait after you click play for the soundtrack to start playing.";
}

if(isMobileSafari && !isInAppForm){
	browserMessageDiv.innerHTML = browserMessageDiv.innerHTML + "<br><br>";
}

if (!isInAppForm) {
	browserMessageDiv.innerHTML = browserMessageDiv.innerHTML + "<span class='normal-text'>To use this tool in a full-screen app-type way, tap <span class='code'>Share</span> and then <span class='code'>Add&nbsp;to&nbsp;Home&nbsp;Screen</span> on your iPhone or iOS device.</span> "
}

function onBeginLoad(){
	if(!isMobileSafari){
		popupDiv.innerHTML = "<span class='popuptext show' id='loadingPopup'>Loading soundtrack</span>";
	}
}

function onEndLoad(){
	popupDiv.innerHTML = "<span class='popuptext hide' id='loadingPopup'>Loading soundtrack</span>";
}