// Arrays containing board contents.
var tableContents = [[0,0,0],[0,0,0],[0,0,0]];
var tableDisplay = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];

// Declaring and setting all rows.
var line0 = [tableContents[0][0], tableContents[0][1], tableContents[0][2]]; // Top row.
var line1 = [tableContents[1][0], tableContents[1][1], tableContents[1][2]]; // Middle row.
var line2 = [tableContents[2][0], tableContents[2][1], tableContents[2][2]]; // Bottom row.
var line3 = [tableContents[0][0], tableContents[1][0], tableContents[2][0]]; // Left column.
var line4 = [tableContents[0][1], tableContents[1][1], tableContents[2][1]]; // Center column.
var line5 = [tableContents[0][2], tableContents[1][2], tableContents[2][2]]; // Right column.
var line6 = [tableContents[0][0], tableContents[1][1], tableContents[2][2]]; // Diagonal from upper left to lower right.
var line7 = [tableContents[0][2], tableContents[1][1], tableContents[2][0]]; // Diagonal from upper right to lower left.

// Summing rows.
var sumLine0 = line0.reduce(function(a, b) {return a + b;});
var sumLine1 = line1.reduce(function(a, b) {return a + b;});
var sumLine2 = line2.reduce(function(a, b) {return a + b;});
var sumLine3 = line3.reduce(function(a, b) {return a + b;});
var sumLine4 = line4.reduce(function(a, b) {return a + b;});
var sumLine5 = line5.reduce(function(a, b) {return a + b;});
var sumLine6 = line6.reduce(function(a, b) {return a + b;});
var sumLine7 = line7.reduce(function(a, b) {return a + b;});

// For counting moves.
var moveNumber = 0;
var moveCount() = function(){
    moveNumber += 1;
    return moveNumber;
};

// Weighting corners more heavily for random computer response.
var weightedRows = [0, 0, 1, 2, 2];
    
// Randomly selecting a square.
var randomNumberX = Math.floor(Math.random() * weightedRows.length);
var randomNumberY = Math.floor(Math.random() * weightedRows.length);

// random square would be at - (tableContents[weightedRows[randomNumberX]][weightedRows[randomNumberY]]);
