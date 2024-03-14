class Card {
    constructor(value) {
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        const values = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13];
        values.forEach(value => {
            this.cards.push(new Card(value));
        });

    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    dealCard() {
        return this.cards.pop();
    }
}
class Player {
    constructor() {

    }
}
class Game {
    constructor() {
        
    }
}