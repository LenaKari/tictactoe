			// For counting moves
			var moveNumber = 0
			var moveCount = function () {
				moveNumber = moveNumber + 1;
				return moveNumber;
			}

			// Array containing all the contents currently on the board.
			var tableContents = [[0,0,0],[0,0,0],[0,0,0]]
			

			// Declaring, setting and displaying each square.
			var setSquareOne = function(input) {
				if(tableContents[0][0] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[0][0] = 1;
					} else {
						tableContents[0][0] = 4;
					};
					document.getElementById("divSquareOne").innerHTML = input;	
					winCheck(input); 
				}

			}
			
                        var setSquareTwo = function(input) {
                                if(tableContents[0][1] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[0][1] = 1;
					} else {
						tableContents[0][1] = 4;
					};
					document.getElementById("divSquareTwo").innerHTML = input; 
					winCheck(input);
				}
			}	

			var setSquareThree = function(input) {
                                if(tableContents[0][2] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[0][2] = 1;
					} else {
						tableContents[0][2] = 4;
					};
                        		document.getElementById("divSquareThree").innerHTML = input; 
					winCheck(input);
				}
			}

			var setSquareFour = function(input) {
                                if(tableContents[1][0] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[1][0] = 1;
					} else {
						tableContents[1][0] = 4;
					};
                        		document.getElementById("divSquareFour").innerHTML = input; 
					winCheck(input);
				}
			}

			var setSquareFive = function(input) {
                                if(tableContents[1][1] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[1][1] = 1;
					} else {
						tableContents[1][1] = 4;
					};
                        		document.getElementById("divSquareFive").innerHTML = input; 
					winCheck(input);
				}
			}

			var setSquareSix = function(input) {
                                if(tableContents[1][2] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[1][2] = 1;
					} else {
						tableContents[1][2] = 4;
					};
                        		document.getElementById("divSquareSix").innerHTML = input; 
					winCheck(input);
				}
			}

			var setSquareSeven = function(input) {
                                if(tableContents[2][0] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[2][0] = 1;
					} else {
						tableContents[2][0] = 4;
					};
	                        	document.getElementById("divSquareSeven").innerHTML = input; 
					winCheck(input);
				}
			}

			var setSquareEight = function(input) {
                                if(tableContents[2][1] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[2][1] = 1;
					} else {
						tableContents[2][1] = 4;
					};
	                        	document.getElementById("divSquareEight").innerHTML = input; 
					winCheck(input);
				}
			}

			var setSquareNine = function(input) {
                                if(tableContents[2][2] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[2][2] = 1;
					} else {
						tableContents[2][2] = 4;
					};
	                        	document.getElementById("divSquareNine").innerHTML = input; 
					winCheck(input);
				}
			}

			
			
			// Checking arrays for a winner
			Array.prototype.AllValuesSame = function() {
				if(this.length > 0) {
					for(var i = 1; i < this.length; i++) {
						if(this[i] !== this[0])
							return false;
					}
				}
				return true;
			}

			var winCheck = function(input) {
				moveCount();
                                if (rowOne.length === 3 && rowOne.AllValuesSame() == true) {
					alert(input + " is the winner!");
				} else if (rowTwo.length === 3 && rowTwo.AllValuesSame() == true) {
					alert(input + " is the winner!");
				} else if (rowThree.length === 3 && rowThree.AllValuesSame() == true) {
					alert(input + " is the winner!");
                                } else if (columnOne.length === 3 && columnOne.AllValuesSame() == true) {
					alert(input + " is the winner!");
                                } else if (columnTwo.length === 3 && columnTwo.AllValuesSame() == true) {
					alert(input + " is the winner!");
                                } else if (columnThree.length === 3 && columnThree.AllValuesSame() == true) {
					alert(input + " is the winner!");
                                } else if (diagonalOne.length === 3 && diagonalOne.AllValuesSame() == true) {
					alert(input + " is the winner!");
                                } else if (diagonalTwo.length === 3 && diagonalTwo.AllValuesSame() == true) {
					alert(input + " is the winner!");
				} else if (moveNumber === 9) {
					alert("It's a draw!");
				} else {
					if (input == "X") {
						computerResponse();
					} else {
					}
				}
			}

			// Determining the computer's response
			var computerResponse = function() {
                                var allSquares = new Array (squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine);
				var randomNumber = Math.floor((Math.random()*9));
				var randomSelect = allSquares[randomNumber];


			
				// For offensive moves
				if (squareOne == "O" && squareTwo == "O" && squareThree == 0) {
					setSquareThree("O");
				} else if (squareOne == "O" && squareThree == "O" && squareTwo == 0) {
					setSquareTwo("O");
				} else if (squareOne == "O" && squareFour == "O" && squareSeven == 0) {
					setSquareSeven("O");
				} else if (squareOne == "O" && squareSeven == "O" && squareFour == 0) {
					setSquareFour("O");
				} else if (squareOne == "O" && squareFive == "O" && squareNine == 0) {
					setSquareNine("O");
				} else if (squareOne == "O" && squareNine == "O" && squareFive == 0) {
					setSquareFive("O");
                                } else if (squareTwo == "O" && squareThree == "O" && squareOne == 0) {
					setSquareOne("O");
				} else if (squareTwo == "O" && squareFive == "O" && squareEight == 0) {
					setSquareEight("O");
				} else if (squareTwo == "O" && squareEight == "O" && squareFive == 0) {
					setSquareFive("O");
				} else if (squareThree == "O" && squareFive == "O" && squareSeven == 0) {
					setSquareSeven("O");
				} else if (squareThree == "O" && squareSix == "O" && squareNine == 0) {
					setSquareNine("O");
				} else if (squareThree == "O" && squareSeven == "O" && squareFive == 0) {
					setSquareFive("O");
				} else if (squareThree == "O" && squareNine == "O" && squareSix == 0) {
					setSquareSix("O");
                                } else if (squareFour == "O" && squareFive == "O" && squareSix == 0) {
					setSquareSix("O");
				} else if (squareFour == "O" && squareSix == "O" && squareFive == 0) {
					setSquareFive("O");
				} else if (squareFour == "O" && squareSeven == "O" && squareOne == 0) {
					setSquareOne("O");
				} else if (squareFive == "O" && squareSix == "O" && squareFour == 0) {
					setSquareFour("O");
				} else if (squareFive == "O" && squareSeven == "O" && squareThree == 0) {
					setSquareThree("O");
				} else if (squareFive == "O" && squareEight == "O" && squareTwo == 0) {
					setSquareTwo("O");
				} else if (squareFive == "O" && squareNine == "O" && squareOne == 0) {
					setSquareOne("O");
				} else if (squareSix == "O" && squareNine == "O" && squareThree == 0) {
					setSquareThree("O");
				} else if (squareSeven == "O" && squareEight == "O" && squareNine == 0) {
					setSquareNine("O");
				} else if (squareSeven == "O" && squareNine == "O" && squareEight == 0) {
					setSquareEight("O");
				} else if (squareEight == "O" && squareNine == "O" && squareSeven == 0) {
					setSquareSeven("O");



                                // For defensive moves
				} else if (squareOne == "X" && squareTwo == "X" && squareThree == 0) {
					setSquareThree("O");
				} else if (squareOne == "X" && squareThree == "X" && squareTwo == 0) {
					setSquareTwo("O");
				} else if (squareOne == "X" && squareFour == "X" && squareSeven == 0) {
					setSquareSeven("O");
				} else if (squareOne == "X" && squareSeven == "X" && squareFour == 0) {
					setSquareFour("O");
				} else if (squareOne == "X" && squareFive == "X" && squareNine == 0) {
					setSquareNine("O");
				} else if (squareOne == "X" && squareNine == "X" && squareFive == 0) {
					setSquareFive("O");
				} else if (squareTwo == "X" && squareThree == "X" && squareOne == 0) {
					setSquareOne("O");
				} else if (squareTwo == "X" && squareFive == "X" && squareEight == 0) {
					setSquareEight("O");
				} else if (squareTwo == "X" && squareEight == "X" && squareFive == 0) {
					setSquareFive("O");
				} else if (squareThree == "X" && squareFive == "X" && squareSeven == 0) {
					setSquareSeven("O");
				} else if (squareThree == "X" && squareSix == "X" && squareNine == 0) {
					setSquareNine("O");
				} else if (squareThree == "X" && squareSeven == "X" && squareFive == 0) {
					setSquareFive("O");
                                } else if (squareThree == "X" && squareNine == "X" && squareSix == 0) {
					setSquareSix("O");
				} else if (squareFour == "X" && squareFive == "X" && squareSix == 0) {
					setSquareSix("O");
				} else if (squareFour == "X" && squareSix == "X" && squareFive == 0) {
					setSquareFive("O");
				} else if (squareFour == "X" && squareSeven == "X" && squareOne == 0) {
					setSquareOne("O");
				} else if (squareFive == "X" && squareSix == "X" && squareFour == 0) {
					setSquareFour("O");
				} else if (squareFive == "X" && squareSeven == "X" && squareThree == 0) {
					setSquareThree("O");
				} else if (squareFive == "X" && squareEight == "X" && squareTwo == 0) {
					setSquareTwo("O");
				} else if (squareFive == "X" && squareNine == "X" && squareOne == 0) {
					setSquareOne("O");
				} else if (squareSix == "X" && squareNine == "X" && squareThree == 0) {
					setSquareThree("O");
				} else if (squareSeven == "X" && squareEight == "X" && squareNine == 0) {
					setSquareNine("O");
				} else if (squareSeven == "X" && squareNine == "X" && squareEight == 0) {
					setSquareEight("O");
				} else if (squareEight == "X" && squareNine == "X" && squareSeven == 0) {
					setSquareSeven("O");



				// For randomised moves
				} else {
                                	if (randomSelect == 0) {
						if (randomNumber == 0) {
	                                              	setSquareOne("O");
	                                      	} else if (randomNumber == 1) {
	                                              	setSquareTwo("O");
	                                      	} else if (randomNumber == 2) {
	                                              	setSquareThree("O");
	                                      	} else if (randomNumber == 3) {
	                                              	setSquareFour("O");
	                                      	} else if (randomNumber == 4) {
	                                              	setSquareFive("O");
	                                      	} else if (randomNumber == 5) {
	                                              	setSquareSix("O");
	                                      	} else if (randomNumber == 6) {
	                                              	setSquareSeven("O");
	                                      	} else if (randomNumber == 7) {
	                                              	setSquareEight("O");
	                                        } else {
	                                         	setSquareNine("O");
	                                        }
					} else {
	                                      	computerResponse();
	                                }
				}
			}


