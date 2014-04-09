			// For counting moves
			var moveNumber = 0
			var moveCount = function () {
				moveNumber = moveNumber + 1;
				return moveNumber;
			}

			// Array containing all the contents currently on the board.
			var tableContents = [[0,0,0],[0,0,0],[0,0,0]]
			var tableDisplay = [[" "," "," "],[" "," "," "],[" "," "," "]]			

			// Setting and displaying each square.
			var setSquareOne = function(input) {
				if(tableContents[0][0] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[0][0] = 1;
						tableDisplay[0][0] = "X";
					} else {
						tableContents[0][0] = 4;
                                                tableDisplay[0][0] = "O";
					};
					document.getElementById("divSquareOne").innerHTML = tableDisplay[0][0];	
					winCheck(input); 
				}

			}
			
                        var setSquareTwo = function(input) {
                                if(tableContents[0][1] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[0][1] = 1;
                                                tableDisplay[0][1] = "X";
					} else {
						tableContents[0][1] = 4;
                                                tableDisplay[0][1] = "O";

					};
					document.getElementById("divSquareTwo").innerHTML = tableDisplay[0][1]; 
					winCheck(input);
				}
			}	

			var setSquareThree = function(input) {
                                if(tableContents[0][2] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[0][2] = 1;
                                                tableDisplay[0][2] = "X";

					} else {
						tableContents[0][2] = 4;
                                                tableDisplay[0][2] = "O";

					};
                        		document.getElementById("divSquareThree").innerHTML = tableDisplay[0][2]; 
					winCheck(input);
				}
			}

			var setSquareFour = function(input) {
                                if(tableContents[1][0] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[1][0] = 1;
                                                tableDisplay[1][0] = "X";
					} else {
						tableContents[1][0] = 4;
                                                tableDisplay[1][0] = "O";
					};
                        		document.getElementById("divSquareFour").innerHTML = tableDisplay[1][0]; 
					winCheck(input);
				}
			}

			var setSquareFive = function(input) {
                                if(tableContents[1][1] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[1][1] = 1;
                                                tableDisplay[1][1] = "X";
					} else {
						tableContents[1][1] = 4;
                                                tableDisplay[1][1] = "O";
					};
                        		document.getElementById("divSquareFive").innerHTML = tableDisplay[1][1]; 
					winCheck(input);
				}
			}

			var setSquareSix = function(input) {
                                if(tableContents[1][2] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[1][2] = 1;
                                                tableDisplay[1][2] = "X";
					} else {
						tableContents[1][2] = 4;
                                                tableDisplay[1][2] = "O";
					};
                        		document.getElementById("divSquareSix").innerHTML = tableDisplay[1][2]; 
					winCheck(input);
				}
			}

			var setSquareSeven = function(input) {
                                if(tableContents[2][0] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[2][0] = 1;
                                                tableDisplay[2][0] = "X";
					} else {
						tableContents[2][0] = 4;
                                                tableDisplay[2][0] = "O";
					};
	                        	document.getElementById("divSquareSeven").innerHTML = tableDisplay[2][0]; 
					winCheck(input);
				}
			}

			var setSquareEight = function(input) {
                                if(tableContents[2][1] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[2][1] = 1;
                                                tableDisplay[2][1] = "X";
					} else {
						tableContents[2][1] = 4;
                                                tableDisplay[2][1] = "O";
					};
	                        	document.getElementById("divSquareEight").innerHTML = tableDisplay[2][1]; 
					winCheck(input);
				}
			}

			var setSquareNine = function(input) {
                                if(tableContents[2][2] !== 0){
					alert("This square is not empty. Please make another move.");
				} else {
					if(input == "X") {
						tableContents[2][2] = 1;
                                                tableDisplay[2][2] = "X";
					} else {
						tableContents[2][2] = 4;
                                                tableDisplay[2][2] = "O";
					};
	                        	document.getElementById("divSquareNine").innerHTML = tableDisplay[2][2]; 
					winCheck(input);
				}
			}

			
			
			// Checking arrays for a winner
			var winCheck = function(input) {
				moveCount();
				var sumRow = 0;

				// Checking all rows for wins.
				var rowCheck = function() {
					for(var i = 0; i < 3; i++) {
						for (var j = 0; j < 3; j++){
							sumRow = sumRow + tableContents[i][j];
							if(j === 2) {
								if(sumRow === 3){
									alert("You have won!" + sumRow);
									sumRow = 0;
								} else if (sumRow === 12) {
									alert("Better luck next time! " + sumRow);
									sumRow = 0;
								} else {
									sumRow = 0;
								}
							} else {
							}
						}
					}
					sumRow = 0;
				}

				// Checking all columns for wins.
				var columnCheck = function() {
					for(var j = 0; j < 3; j++) {
						for (var i = 0; i < 3; i++){
							sumRow = sumRow + tableContents[i][j];
							if(i === 2) {
								if(sumRow === 3){
									alert("You have won!" + sumRow);
									sumRow = 0;
								} else if (sumRow === 12) {
									alert("Better luck next time! " + sumRow);
									sumRow = 0;
								} else {
									sumRow = 0;
								}
							} else {
							}
						}
					}
					sumRow = 0;
				}

				// Checking first diagonal for wins.
				var leftDiagonalCheck = function() {
					for(var i = 0, j = 0; i < 3; i++, j++) {
						sumRow = sumRow + tableContents[i][j];
						if(i === 2) {
							if(sumRow === 3){
								alert("You have won!" + sumRow);
								sumRow = 0;
							} else if (sumRow === 12) {
								alert("Better luck next time! " + sumRow);
								sumRow = 0;
							} else {
								sumRow = 0;
							}
						} else {
						}
					}
					sumRow = 0;
				}

				// Checking second diagonal for wins.
				var rightDiagonalCheck = function() {
					for(var i = 0, j = 2; i < 3; i++, j--) {
						sumRow = sumRow + tableContents[i][j];
						if(i === 2) {
							if(sumRow === 3){
								alert("You have won!" + sumRow);
								sumRow = 0;
							} else if (sumRow === 12) {
								alert("Better luck next time! " + sumRow);
								sumRow = 0;
							} else {
								sumRow = 0;
							}
						} else {
						}
					}
					sumRow = 0;
					if (input == "X") {
						computerResponse();
					} else {
					}
				}
			}

			// Determining the computer's response
			var computerResponse = function() {
			    	var sumRow = 0;

				// Checking all rows for offensive and defensive moves.
				var rowCheck = function() {
			    		for(var i = 0; i < 3; i++) {
			      			for(var j = 0; j < 3; j++){
			                		sumRow = sumRow + tableContents[i][j];
			                		if(j === 2) {
			                    			if(sumRow === 8){
			                        			for(var k=0; k<3; k++) {
			                            				for (var l = 0; l < 3; l++){
			                                				if (tableContents[k][l] === 0) {
						                                		tableContents[k][l] = 4;
												tableDisplay[k][l] = "O";
						                                	} else {
			                        			        	}
			                            				}			
			                        			}
			                    			} else if(sumRow === 2) {
			                        			for(var k=0; k<3; k++) {
					                        		for(var l = 0; l < 3; l++){
						                                	if (tableContents[k][l] === 0) {
						                                		tableContents[k][l] = 1;
                                                                                                tableDisplay[k][l] = "O";
			                                				} else {
			                                				}
			                            				}
			                        			}
			                    			} else {
			                        			sumRow = 0;
			                        			randomComputerMove();   
			                    			}
				                	}
				            	}
				        }
				    }   

				// Checking all columns for offensive and defensive moves.
                            	var columnCheck = function() {
                            		for(var j = 0; j < 3; j++) {
                            			for (var i = 0; i < 3; i++){
                                        		sumRow = sumRow + tableContents[i][j];
	                                                if(j === 2) {
        	                                                if(sumRow === 8){
                	                                                for(var k=0; k<3; k++) {
                        	                                                for (var l = 0; l < 3; l++){
                                	                                                if (tableContents[k][l] === 0) {
                                        	                                                tableContents[k][l] = 4;
                                                                                                tableDisplay[k][l] = "O";
                                                	                                } else {
                                                        	                        }
                                                                	        }
	                                                                }
        	                                                } else if(sumRow === 2) {
                	                                                for(var k=0; k<3; k++) {
                        	                                                for(var l = 0; l < 3; l++){
                                	                                                if (tableContents[k][l] === 0) {
                                        	                                                tableContents[k][l] = 1;
                                                                                                tableDisplay[k][l] = "O";
                                                	                                } else {
                                                        	                        }
                                                                	        }
	                                                                }
        	                                                } else {
                	                                                sumRow = 0;
                        	                                        randomComputerMove();
                                	                        }
                                        	        }
                                        	}
                                	}
                            	}   


				// Checking first diagonal for offensive and defensive moves.
                            	var leftDiagonalCheck = function() {
                                	for(var i = 0, j = 0; i < 3; i++, j++) {
                            			sumRow = sumRow + tableContents[i][j];
	                                     	if(j === 2) {
        	                               		if(sumRow === 8){
                	                                	for(var k=0; k<3; k++) {
                        	                        		for (var l = 0; l < 3; l++){
                                	                                	if (tableContents[k][l] === 0) {
                                        	                        		tableContents[k][l] = 4;
                                                                                        tableDisplay[k][l] = "O";
                                                	                	} else {
                                                        	        	}
                                                       			}
	                                                       	}
        	                                        } else if(sumRow === 2) {
                	                                	for(var k=0; k<3; k++) {
                        	                        		for(var l = 0; l < 3; l++){
                                	                			if (tableContents[k][l] === 0) {
                                        	        				tableContents[k][l] = 1;
                                                                                        tableDisplay[k][l] = "O";
                                                				} else {
                                                				}
                                                			}
	                                                	}
        	                                        } else {
                	                                	sumRow = 0;
                        	                       		randomComputerMove();
                                	                }
                                        	}
                                	}
                            	}
                               

				// Checking second diagonal for offensive and defensive moves.
	        		var rightDiagonalCheck = function() {
        	                	for(var i = 0, j = 2; i < 3; i++, j--) {
                                        	sumRow = sumRow + tableContents[i][j];
	                                        if(j === 2) {
        	                                        if(sumRow === 8){
                	                                        for(var k=0; k<3; k++) {
                        	                                        for (var l = 0; l < 3; l++){
                                	                                        if (tableContents[k][l] === 0) {
                                        	                                        tableContents[k][l] = 4;
                                                                                        tableDisplay[k][l] = "O";
                                                	                        } else {
                                                        	                }
                                                                	}
	                                                        }
        	                                        } else if(sumRow === 2) {
                	                                        for(var k=0; k<3; k++) {
                        	                                        for(var l = 0; l < 3; l++){
                                	                                        if (tableContents[k][l] === 0) {
                                        	                                        tableContents[k][l] = 1;
                                                                                        tableDisplay[k][l] = "O";
                                                	                        } else {
                                                        	                }
                                                                	}
	                                                        }
        	                                        } else {
                	                                        sumRow = 0;
                        	                                randomComputerMove();
                                	                }
                                        	}
	                                }
        	                }
			}


			

				// For randomised moves (weighted 1.7 to corners, 1.2 to centre and 0.5 to remaining spaces)
			var randomComputerMove = function() {
			var randomNumber = Math.random()*9;
                                	if (randomNumber <= 1.7) {
	                                	if (tableContents[0][0] == 0) {
							setSquareOne("O");
						} else {
							computerResponse();
						}
	                                } else if (randomNumber <= 2.2) {
                                                if (tableContents[0][1] == 0) {
                                                        setSquareTwo("O");
                                                } else {
                                                        computerResponse();
                                                }

	                                } else if (randomNumber <= 3.9) {
                                                if (tableContents[0][2] == 0) {
                                                        setSquareThree("O");
                                                } else {
                                                        computerResponse();
                                                }

					} else if (randomNumber <= 4.4) {
                                                if (tableContents[1][0] == 0) {
                                                        setSquareFour("O");
                                                } else {
                                                        computerResponse();
                                                }

	                                } else if (randomNumber <= 5.6) {
                                                if (tableContents[1][1] == 0) {
                                                        setSquareFive("O");
                                                } else {
                                                        computerResponse();
                                                }

	                                } else if (randomNumber <= 6.1) {
                                                if (tableContents[1][2] == 0) {
                                                        setSquareSix("O");
                                                } else {
                                                        computerResponse();
                                                }

	                                } else if (randomNumber <= 7.8) {
                                                if (tableContents[2][0] == 0) {
                                                        setSquareSeven("O");
                                                } else {
                                                        computerResponse();
                                                }

	                                } else if (randomNumber <= 8.3) {
                                                if (tableContents[2][1] == 0) {
                                                        setSquareEight("O");
                                                } else {
                                                        computerResponse();
                                                }

	                                } else {
                                                if (tableContents[2][2] == 0) {
                                                        setSquareNine("O");
                                                } else {
                                                        computerResponse();
                                                }

	                                }
			}
			



