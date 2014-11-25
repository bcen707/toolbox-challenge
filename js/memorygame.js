"use strict";
//Billy Cen


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

var tileStorage = [];
var elapsedSeconds;
var startTime;
var timer;

for (var index = 1; index <= 32; index++) {
	tileStorage.push({
	src: "img/tile" + index + ".jpg",
	match: false,
	clicked: false
	});
}
	
$(document).ready(function() {
	$('#begin').click(function() {
		elapsedSeconds = 0;
		var matches = 0;
		var unmatched = 8;
		var tries = 0;

		$('#game-board').empty();
	    $('#game-board').css('display', 'none');
	    $('#game-board').css('display', 'inline');
	    $('#win').css('display', 'none'); 
	    $('#found').text('Pairs found: ' + matches);
	    $('#remain').text('Pairs left: ' + unmatched);
	    $('#attempts').text('Turns taken: ' + tries);


		var gameTiles = [];
		tileStorage = _.shuffle(tileStorage);
		gameTiles = tileStorage.slice(0, 8); //selected pictures for game

		startTime = _.now();
		timer = window.setInterval(onTimer, 1000);

		_.forEach(gameTiles, function(tile) {
			tile.clicked = false;
			tile.matched = false;
			gameTiles.push(_.clone(tile)); //make pairs 
		}); 

		gameTiles = _.shuffle(gameTiles) //shuffles the tile pairs

		var board = $('#game-board');
		var row = $(document.createElement('div')); //create a div for the game board


	    _.forEach(gameTiles, function(tile, tileIndex) {
	        if (tileIndex > 0 && tileIndex % 4 == 0) {
	            board.append(row);
	            row = $(document.createElement('div'));
	        }
	        var image = $(document.createElement('img'));
	        image.attr('src', 'img/tile-back.png'); //swap to 'img/tile-back.png' for start
	        image.attr('alt', 'tile ' + tile.num);
	        image.attr('width', '100px');
	        
	        image.data('tile', tile);
	        
	        row.append(image);
	    });
	    board.append(row);



	    var clicks = 0;
	    var first;
	    var second;


	    $('game-board img').click(function() {
	    	if (clicks % 2 == 0) { //only want to check if tiles match when # of clicks is even
	    		second = $(this);
	    		reveal(second.data('tile'), second);
	    	}

	    	else { // # of clicks is odd
				first = $(this);
				reveal(tile1.data('tile'), first);
	    	}









			if (matches == 8) { // stop timer and display winning message
				stopTime();
				$('#win').css('display', 'block');
			}

		}); //img.click()	
	}); //begin.click()


}); //document.ready()

function reveal(tile, image) {
    image.fadeOut(25, function() {
        if (tile.clicked) {
            image.attr('src', 'img/tile-back.png');
        } else {
            image.attr('src', tile.src)
        }
        tile.clicked = !tile.clicked;
        image.fadeIn(75);
    });
};




function onTimer() {
	elapsedSeconds = Math.floor((_.now() - startTime) / 1000);
	$('#time').text("Game duration: " + elapsedSeconds + " seconds");
} //onTimer()

function stopTime() {
	window.clearInterval(timer);
} // stopTime()

