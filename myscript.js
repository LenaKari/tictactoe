			// For counting moves
			var moveNumber = 0;
			var moveCount = function () {
				moveNumber = moveNumber + 1;
				return moveNumber;
			};

			// Array containing all the contents currently on the board.
			var tableContents = [[0,0,0],[0,0,0],[0,0,0]];
			var tableDisplay = [[" "," "," "],[" "," "," "],[" "," "," "]];			

			// Setting and displaying each square.
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
					};
                        		document.getElementById('divSquareOne').innerHTML = tableDisplay[0][0];
		                        document.getElementById('divSquareTwo').innerHTML = tableDisplay[0][1];
                		        document.getElementById('divSquareThree').innerHTML = tableDisplay[0][2];
		                        document.getElementById('divSquareFour').innerHTML = tableDisplay[1][0];
                		        document.getElementById('divSquareFive').innerHTML = tableDisplay[1][1];
		                        document.getElementById('divSquareSix').innerHTML = tableDisplay[1][2];
                		        document.getElementById('divSquareSeven').innerHTML = tableDisplay[2][0];
		                        document.getElementById('divSquareEight').innerHTML = tableDisplay[2][1];
                		        document.getElementById('divSquareNine').innerHTML = tableDisplay[2][2];
					winCheck(input);
				};
			};

			
			
			// Checking arrays for a winner
			var winCheck = function(input) {
				moveCount();
				var sumRow = 0;

				// Checking all rows for wins.
				var rowCheck = function(input) {
					for(var i = 0; i < 3; i++) {
						sumRow = 0;
						for (var j = 0; j < 3; j++){
							sumRow = sumRow + tableContents[i][j];
						}
						if(j === 2) {
							if(sumRow === 3){
								alert("You have won!");
								sumRow = 0;
							} else if (sumRow === 12) {
								alert("Better luck next time!");
								sumRow = 0;
							} else {
								sumRow = 0;
								columnCheck();
							}
						} else {
						}
					}
				}


				// Checking all columns for wins.
				var columnCheck = function(input) {
					for(var j = 0; j < 3; j++) {
						for (var i = 0; i < 3; i++){
							sumRow = sumRow + tableContents[i][j];
							if(i === 2) {
								if(sumRow === 3){
									alert("You have won!");
									sumRow = 0;
								} else if (sumRow === 12) {
									alert("Better luck next time!");
									sumRow = 0;
								} else {
									sumRow = 0;
								}
							} else {
							}
						}
					}
					sumRow = 0;
					leftDiagonalCheck(input);
				}

				// Checking first diagonal for wins.
				var leftDiagonalCheck = function(input) {
					for(var i = 0, j = 0; i < 3; i++, j++) {
						sumRow = sumRow + tableContents[i][j];
						if(i === 2) {
							if(sumRow === 3){
								alert("You have won!");
								sumRow = 0;
							} else if (sumRow === 12) {
								alert("Better luck next time!");
								sumRow = 0;
							} else {
								sumRow = 0;
							}
						} else {
						}
					}
					sumRow = 0;
					rightDiagonalCheck(input);
				}

				// Checking second diagonal for wins.
				var rightDiagonalCheck = function(input) {
					for(var i = 0, j = 2; i < 3; i++, j--) {
						sumRow = sumRow + tableContents[i][j];
						if(i === 2) {
							if(sumRow === 3){
								alert("You have won!");
								sumRow = 0;
							} else if (sumRow === 12) {
								alert("Better luck next time!");
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
				columnCheck(input);
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
												setSquare(k, l, 'O');
						                                	} else {
			                        			        	}
			                            				}			
			                        			}
			                    			} else if(sumRow === 2) {
			                        			for(var k=0; k<3; k++) {
					                        		for(var l = 0; l < 3; l++){
						                                	if (tableContents[k][l] === 0) {
												setSquare(k, l, 'O');
			                                				} else {
			                                				}
			                            				}
			                        			}
			                    			} else {
			                        			sumRow = 0;
			                    			}
				                	} else {
							}
						}
				        }
					columnCheck();
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
                                        	                                                setSquare(k, l, 'O');
                                                	                                } else {
                                                        	                        }
                                                                	        }
	                                                                }
        	                                                } else if(sumRow === 2) {
                	                                                for(var k=0; k<3; k++) {
                        	                                                for(var l = 0; l < 3; l++){
                                	                                                if (tableContents[k][l] === 0) {
												setSquare(k, l, 'O');
                                                	                                } else {
                                                        	                        }
                                                                	        }
	                                                                }
        	                                                } else {
                	                                                sumRow = 0;
                                	                        }
                                        	        } else {
							}
                                        	}
                                	}
					leftDiagonalCheck();
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
											setSquare(k, l, 'O');
                                                	                	} else {
                                                        	        	}
                                                       			}
	                                                       	}
        	                                        } else if(sumRow === 2) {
                	                                	for(var k=0; k<3; k++) {
                        	                        		for(var l = 0; l < 3; l++){
                                	                			if (tableContents[k][l] === 0) {
											setSquare(k, l, 'O');
                                                				} else {
                                                				}
                                                			}
	                                                	}
        	                                        } else {
                	                                	sumRow = 0;
                                	                } 
                                        	} else {
						}
                                	}
					rightDiagonalCheck();
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
											setSquare(k, l, 'O');
                                                	                        } else {
                                                        	                }
                                                                	}
	                                                        }
        	                                        } else if(sumRow === 2) {
                	                                        for(var k=0; k<3; k++) {
                        	                                        for(var l = 0; l < 3; l++){
                                	                                        if (tableContents[k][l] === 0) {
											setSquare(k, l, 'O');
                                                	                        } else {
                                                        	                }
                                                                	}
	                                                        }
        	                                        } else {
                	                                        sumRow = 0;
								randomComputerMove();
                                	                }
                                        	} else {
						}
	                                }
        	                }
				rowCheck();
			}


			

				// For randomised moves (weighted more heavily on corners)
			var randomComputerMove = function() {
//				alert("random move");
				// Setting the square weighting
//				var squareWeightFactor = [[2, 1, 2],[1, 1, 1],[2, 1, 2]]; // weighting of each square
//				var totalSquareWeight = eval(squareWeightFactor.join("+")); // total weight
//				var weightedSquares = (); // new array for holding weighted squares 
//				var currentSquare = 0;
//				
//				while (currentSquare<tableContents.length) {
//					for (i=0; i<squareWeightFactor[currentSquare]; i++)
//						weightedSquares[weightedSquares.length] = tableContents[currentSquare]
//						currentSquare++
//				}


//				var randomNumberX = Math.floor(Math.random()*2);
//				var randomNumberY = Math.floor(Math.random()*2);

				var randomNumber = Math.random()*9;
                                if (randomNumber <= 1.7) {
	                               	if (tableContents[0][0] == 0) {
						setSquare(0, 0, "O");
					} else {
						randomComputerMove();
					}
	                    	} else if (randomNumber <= 2.2) {
                                	if (tableContents[0][1] == 0) {
                                      		setSquare(0, 1, "O");
                                      	} else {
						randomComputerMove();
                                      	}
				} else if (randomNumber <= 3.9) {
					if (tableContents[0][2] == 0) {
                                        	setSquare(0, 2, "O");
                                      	} else {
						randomComputerMove();
                                      	}
				} else if (randomNumber <= 4.4) {
                                	if (tableContents[1][0] == 0) {
                                        	setSquare(1, 0, "O");
                                     	} else {
						randomComputerMove();
                                      	}
				} else if (randomNumber <= 5.6) {
                                	if (tableContents[1][1] == 0) {
                                        	setSquare(1, 1, "O");
					} else {
						randomComputerMove();
					}
				} else if (randomNumber <= 6.1) {
					if (tableContents[1][2] == 0) {
						setSquare(1, 2, "O");
					} else {
						randomComputerMove();
					}
				} else if (randomNumber <= 7.8) {
					if (tableContents[2][0] == 0) {
						setSquare(2, 0, "O");
					} else {
						randomComputerMove();
					}
				} else if (randomNumber <= 8.3) {
					if (tableContents[2][1] == 0) {
						setSquare(2, 1, "O");
					} else {
						randomComputerMove();
					}		
				} else {
					if (tableContents[2][2] == 0) {
						setSquare(2, 2, "O");
					} else {
						randomComputerMove();
					}
				}
			}
			



