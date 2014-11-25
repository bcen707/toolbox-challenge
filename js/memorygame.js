"use strict";

// first need to attain all the images, for-each loop?
// then shuffle

/*
States we care about in this game

- total # unfound matches (display to user)
- time since start of game (display to user)
- # of non-matches (status to user)

For tiles 
- has this been matched
	if yes - show, but don't allow them to click matched tiles again
	if no - flip back over
- has this tile been clicked?
- how many tiles have been clicked?
*/

var gameTiles = [];
var elapsedSeconds;
var startTime;
var timer;

for (var index = 1; index <= 32; index++) {
	gameTiles.push({
	src: "img/tile" + index + ".jpg",
	matched: false,
	clicked: false
	});
}
	




startTime = _.now();
console.log(startTime);

function onTimer() {
	elapsedSeconds = Math.floor((_.now() - startTime) / 1000);
	console.log(elapsedSeconds);
} //onTimer()

function stopTime() {
	window.clearInterval(timer);
} // stopTime()

