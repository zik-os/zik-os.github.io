//alert(document.getElementById("twitch-chat"))
// 3857 - guit
// 1053 - abv

var goodGamePlayer = document.getElementById("good-game-player");
var twitchChat = document.getElementById("twitch-chat");
var goodGameChat = document.getElementById("goodgame-chat");
var handle = document.getElementById("dragHorizontal");
var handleVertical = document.getElementById("dragVertical");
var container = document.getElementById("container");

var offsetX = 340;
var offsetY = window.innerHeight / 2;

var ggPos = window.innerHeight/2 + "px";
var twitchPos = 0 + "px";
var flagPos = false;

function setSize(e) {
	container.style.position = "absolute";
	container.style.width = (window.innerWidth - 8) + "px";
	container.style.height = (window.innerHeight - 8) + "px";
	container.style.backgroundColor = "0x000000";

	goodGamePlayer.style.position = "absolute";
	goodGamePlayer.style.width = (window.innerWidth - offsetX) + "px";
	goodGamePlayer.style.height = window.innerHeight + "px";
	goodGamePlayer.style.marginTop = "-8px";
	goodGamePlayer.style.marginLeft = "-8px";

	//
	twitchChat.style.position = "absolute";
	twitchChat.style.width = offsetX + "px";
	
	//document.getElementById("twitch-chat").style.marginLeft = "-10px";
	twitchChat.style.marginTop = "0px";
	twitchChat.style.left = (window.innerWidth - offsetX) + "px";

	goodGameChat.style.position = "absolute";
	goodGameChat.style.width = offsetX + "px";
	// goodGameChat.style.top = window.innerHeight/2 + "px";
	goodGameChat.style.marginTop = "0px";
	goodGameChat.style.left = (window.innerWidth - offsetX) + "px";

	if (flagPos) {
		twitchChat.style.height = window.innerHeight - offsetY + "px";
		goodGameChat.style.height = offsetY + "px";

		twitchChat.style.top = "0px";
		goodGameChat.style.top = window.innerHeight - offsetY+"px";
	} else {
		twitchChat.style.height = offsetY + "px";
		goodGameChat.style.height = window.innerHeight - offsetY + "px";

		twitchChat.style.top = window.innerHeight - offsetY + "px";
		goodGameChat.style.top = "0px";
	}

	handle.style.position = "absolute";
	handle.style.width = "8px";
	handle.style.height = (window.innerHeight - 20) + "px";
	//handle.style.top = window.innerHeight/2 + "px";
	handle.style.marginTop = "0px";
	handle.style.left = (window.innerWidth - offsetX - 4) + "px";
	handle.style.cursor = "w-resize";
	handle.style.zIndex = "100";
	 
	handleVertical.style.position = "absolute";
	handleVertical.style.height = "8px";
	handleVertical.style.width = offsetX + "px";
	handleVertical.style.marginTop = "0px";
	handleVertical.style.top =  window.innerHeight - offsetY - 4 + "px";
	handleVertical.style.left = (window.innerWidth - offsetX) + "px";
	handleVertical.style.cursor = "s-resize";
	handleVertical.style.zIndex = "103";
}

setSize(null);

document.addEventListener("resize", setSize);
window.addEventListener("resize", setSize);


handle.addEventListener("mousedown", mouseDownHandler);
handle.addEventListener("dblclick", doubleClickHandler);
handleVertical.addEventListener("mousedown", mouseDownVerticalHandler);

function doubleClickHandler(e) {
	if (flagPos) {
		ggPos = window.innerHeight/2 + "px";
		twitchPos = 0 + "px";
		flagPos = false;
	} else {
		flagPos = true;
		ggPos = 0 + "px";
		twitchPos = window.innerHeight/2 + "px";
	}
	setSize(null);
}

function mouseDownHandler(e) {
	container.style.zIndex = "99";
	document.addEventListener("mousemove", mouseMoveHandler);
	document.addEventListener("mouseup", mouseUpHandler);
}

function mouseUpHandler(e) {
	container.style.zIndex = "0";
	document.removeEventListener("mousemove", mouseMoveHandler);
	document.removeEventListener("mouseup", mouseUpHandler);
}

function mouseMoveHandler(e) {
	offsetX = window.innerWidth - e.clientX;
	setSize(null);
}

function mouseDownVerticalHandler(e) {
	container.style.zIndex = "99";
	document.addEventListener("mousemove", mouseMoveVerticalHandler);
	document.addEventListener("mouseup", mouseUpVerticalHandler);
}

function mouseUpVerticalHandler(e) {
	container.style.zIndex = "0";
	document.removeEventListener("mousemove", mouseMoveVerticalHandler);
	document.removeEventListener("mouseup", mouseUpVerticalHandler);
}

function mouseMoveVerticalHandler(e) {
	offsetY = window.innerHeight - e.clientY;
	setSize(null);
}

document.addEventListener("keydown", keyDownHandler)

function keyDownHandler(e) {
	if (e.keyCode == 84 && e.altKey) {
		doubleClickHandler(null);
	}
}

// favicon
(function() {
    var link = document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKJJREFUeNpjUKYxYBi1YORZ4NG2ehfxYHWbB6Y2uOCoBbt2LSo3pWIkm2bO3Yps+tYZmabUS0Xqvmg+W93mq47D4/iDCIfjZxBwPCUWEHI8hRYYpqI6Hqvx5FtAOGwosYCosCHfAqIdT5YFGI7fOiVBHV9YkmYBKWFDhgWkhQ2pFpDheFIswHD8XKKKG+ItyJyxi0QAM2zUAmpZMNouGp4WAAA9IZdztAU58QAAAABJRU5ErkJggg==';
    document.getElementsByTagName('head')[0].appendChild(link);
}());
