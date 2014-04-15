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
var sumAllLines = [sumLine0, sumLine1,sumLine2,sumLine3,sumLine4,sumLine5,sumLine6,sumLine7];

// For counting moves.
var moveNumber = 0;

// Setting and displaying square.
var setSquare = function(x, y, input) {
    if (tableContents[x][y] !== 0){
        alert("This square is not empty. Please make another move.");
    } else {
        if (input == "X") {
            tableContents[x][y] = 1;
            tableDisplay[x][y] = "X";
        } else {
            tableContents[x][y] = 4;
            tableDisplay[x][y] = "O";
        }
	var setDiv = 'divSquare_' + x + y;
        document.getElementById(setDiv).innerHTML = tableDisplay[x][y];
        moveNumber++;
        winCheck(input);
    };
};

// Checking for a win/draw.
var winCheck = function(input) {
    for (i = 0; i < 8; i++) {
        if (sumAllLines[i] == 12) {
            return ("Better luck next time!");
        } else if (sumAllLines[i] == 3) {
            return ("You've won!");
        }
    }
    if (moveNumber == 9) {
        return ("It's a draw!");
    } else {
        if (input == "X") {
            computerResponse();
        }
    } 
};

// Computer's response.
var computerResponse = function() {

    // Checking for offensive and then defensive moves.
    var computerRowCheck = function() {
        for(var i = 0; i < 3; i++) {
            // Offensive moves.
            if(sumAllLines[i] == 8){
                for(var k=0; k<3; k++) {
                    for (var l = 0; l < 3; l++){
                        if (tableContents[k][l] == 0) {
                            setSquare(k, l, 'O');
                            return true;
                        }
                    }           
                }
            // Defensive moves.
            } else if(sumAllLines[i] == 2) {
                for(var k=0; k<3; k++) {
                    for(var l = 0; l < 3; l++){
                        if (tableContents[k][l] == 0) {
                            setSquare(k, l, 'O');
                            return true;
                        }
                    }
                }
            }
        }
    }

    if (computerRowCheck()) {
        return true;
    } else {
        randomComputerMove();
    }
}

var randomComputerMove = function() {
    // Weighting corners more heavily for random computer response.
    var weightedRows = [0, 0, 1, 2, 2];
    
    // Randomly selecting a square.
    var randomNumberX = Math.floor(Math.random() * weightedRows.length);
    var randomNumberY = Math.floor(Math.random() * weightedRows.length);
    if (tableContents[weightedRows[randomNumberX]][weightedRows[randomNumberY]] == 0) {
        setSquare(weightedRows[randomNumberX], weightedRows[randomNumberY], 'O');
    } else {
        randomComputerMove();
    }
}
