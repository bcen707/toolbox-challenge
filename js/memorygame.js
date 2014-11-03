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

var matchesLeft = 8;
var attempts = 0;

function makeBoard() {
	// initialize needed variables
	// attain random 8 pics from 32
	// duplicate each of those 8 to create 8 pairs, 16 in total
}
