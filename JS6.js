//Deck class with array of card values since suites don't matter
class Deck {
    constructor() {
        this.values = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13]
    }
    //Fisher Yates suffle method
    shuffle() {
        console.log(this.values.length)
        for (let i = this.values.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
        }
        return this.values;
    }
}
//Player class for name, hand and points
class Player {
    constructor(name) {
        console.log(this)
        this.name = name;
        this.hand = [];
        this.points = 0;
    }
}
//Game class with play method
class Game {
    play() {
        let deck1 = new Deck();
        //call the shuffle method
        deck1.shuffle()
        //declare some varables
        let player1Name = prompt("Enter first player name:");
        let player2Name = prompt("Enter second player name:");
        let player1 = new Player(player1Name);
        let player2 = new Player(player2Name);
        //split the shuffled deck in half into two new arrays
        player1.hand = deck1.values.slice(0, 26)
        player2.hand = deck1.values.slice(26, 52)
        //while loop with pop method to draw one card from each hand and remove it from the array
        while (player1.hand.length != 0) {
            let player1Card = player1.hand.pop();
            let player2Card = player2.hand.pop();
            let tie;
            //if else if statement to determine which player gets the point
            if (player1Card > player2Card) {
                player1.points++
            } else if (player2Card > player1Card) {
                player2.points++
            } else {
                tie = true;
            }
            //alert with template literals to display each round
            alert(`
            ${player1.name}'s card: ${player1Card}, points: ${player1.points},
            ${player2.name}'s card: ${player2Card}, points: ${player2.points},
            ${tie ? 'It is a tie!':""}
            `)
        }
        //if else statement to determine the end game and winner
        if (player1.points !== player2.points) {
            let winnerName = player1.points > player2.points ? player1.name : player2.name;
            alert(`${player1.name}'s points ${player1.points}
                ${player2.name}'s points ${player2.points}
                ${winnerName} wins!`)
        } else {
            alert(`${player1.name} and ${player2.name} tied`)
        }
    }

}

let newGame = new Game();
newGame.play();