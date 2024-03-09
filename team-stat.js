const team = {
    _players: [],
  
    _games: [],
  
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    },
  
    // Method to add a new game
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this._games.push(game);
    },
  
    printPlayers() {
      for (const player of this._players) {

        for (const property in player) {
          console.log(`${property}: ${player[property]}`);
        }
        console.log("-----"); 
      }
    },
  
    printGames() {
      for (const game of this._games) {
        for (const property in game) {
          console.log(`${property}: ${game[property]}`);
        }
        console.log("-----"); 
      }
    },
  };
  
  team.addPlayer("Lydia", "Ndikubwimana", 30);
  team.addPlayer("Pamella", "Uwase", 25);
  team.addPlayer("Michael", "Jordan", 59);

  team.addGame("Hockey", 100, 98);

  team.printPlayers();
 
  team.printGames();