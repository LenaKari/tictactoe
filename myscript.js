// Declaring X and O for storing in tableContents.
var X = 1;
var O = 4;

// Arrays containing board contents.
var tableContents = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

/* 
*   The are 8 possible lines in which a player can win. 
*   These arrays set out a list of row/column arrays that define the lines' paths. 
*/
var line0 = [[0, 0], [0, 1], [0, 2]]; // Top row.
var line1 = [[1, 0], [1, 1], [1, 2]]; // Middle row.
var line2 = [[2, 0], [2, 1], [2, 2]]; // Bottom row.
var line3 = [[0, 0], [1, 0], [2, 0]]; // Left column.
var line4 = [[0, 1], [1, 1], [2, 1]]; // Center column.
var line5 = [[0, 2], [1, 2], [2, 2]]; // Right column.
var line6 = [[0, 0], [1, 1], [2, 2]]; // Diagonal from upper left to lower right.
var line7 = [[0, 2], [1, 1], [2, 0]]; // Diagonal from upper right to lower left.
var lines = [line0, line1, line2, line3, line4, line5, line6, line7];

// Summing rows.
var sumLine = function(lineNumber) {
    var total = 0;
    var currentLine = lines[lineNumber];
    for (var i = 0; i < 3; i++) {
        var row = currentLine[i][0];
        var column = currentLine[i][1];

        var value = tableContents[row][column];
        total += value;
    }
    return total;
}

// Summing all squares to determine if there is a draw.
var sumAllSquares = function() {
    var total = 0;
    for (var row=0; row<3; row++) {
        for (var column=0; column<3; column++) {
            total += tableContents[row][column];
        }
    }
    return total;
}

// Is there a draw?
var isDraw = function() {
    return sumAllSquares() === 21;
}

// Who has won?
var getWinner = function() {
    for (var lineNumber=0; lineNumber<lines.length; lineNumber++) {
        var sum = sumLine(lineNumber);
        switch (sum) {
            case 3 * O:
                return O;
            case 3 * X:
                return X;
        }
    }
    return null;
}

// Is there a winner?
var isWin = function () {
    return getWinner() !== null;
}

// Is the game over?
var isGameOver = function() {
    return (isWin() || isDraw());
}

// Finding an empty slot for the computer to fill.
var findEmptySlotOnLine = function(lineNumber) {
    var currentLine = lines[lineNumber];
    for (var i = 0; i < 3; i++) {
        var row = currentLine[i][0];
        var column = currentLine[i][1];

        var value = tableContents[row][column];
        if (value === 0) {
            return [row, column];
        }
    }
    return null;
}

// Setting and displaying a square.
var onClick = function(event)  {
    console.log("an event on the table!", event);
    id = event.target.id
    code = parseInt(id.split('_')[1])
    row = Math.floor(code / 10);
    column = code % 10;
    console.log(row, column);
    setSquare(row, column, X);
}

var setSquare = function(row, column, player) {
    if (tableContents[row][column] !== 0){
        messageUser("This square is not empty. Please make another move.");
    return ;
    } else {
        tableContents[row][column] = player;
        }
    var setDiv = 'divSquare_' + row + column;
    document.getElementById(setDiv).innerHTML = (player === X? 'X' : 'O');
    checkEndGame();
    if (!isGameOver()) {
        if (player === X) {
            computerResponse();
        }
    }
}

// Determine end-game message.
var checkEndGame = function () {
    if (isWin()) {
        if (getWinner() === X) {
            messageUser("You've won!!");
        } else {
            messageUser("Better luck next time!");
        }
    } else if (isDraw()) {
        messageUser("It's a draw!");
    }
}

// Display message.
var messageUser = function(message) {
    document.getElementById("message").innerHTML = message;
}

// Computer's response.
var computerResponse = function() {
    var fillEmptySlot = function(player) {
        for (var lineNumber=0; lineNumber<lines.length; lineNumber++) {
            if (sumLine(lineNumber) === 2 * player) {
                var position = findEmptySlotOnLine(lineNumber);
                setSquare(position[0], position[1], O);
                return true;
            }
        }
        return false;
    }

    // If we can win the game by winning, we should do so!
    if (fillEmptySlot(O)) {
        return;
   }

    // As we cannot win right now, can we prevent a loss?
    if (fillEmptySlot(X)) {
        return;
    }

    randomComputerMove();

}

var randomComputerMove = function() {
    // Weighting corners more heavily for random computer response.
    var weightedSquares = [];
    for (var lineNumber = 0; lineNumber<lines.length; lineNumber++) {
        var line = lines[lineNumber];
        for (var i = 0; i<line.length; i++) {
            var position = line[i];
            weightedSquares.push(position);
        }
    }

    // Randomly selecting a square.
    var randomNumber = Math.floor(Math.random() * weightedSquares.length);
    var position = weightedSquares[randomNumber];
    var row = position[0];
    var column = position[1];
    if (tableContents[row][column] === 0) {
        setSquare(row, column, O);
    } else {
        randomComputerMove();
    }
}

document.addEventListener( "DOMContentLoaded", function(){
    var table = document.getElementsByTagName('table')[0];
    table.addEventListener("click", onClick);
}, false);
