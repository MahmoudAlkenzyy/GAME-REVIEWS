import { Ui } from './uiDisplay.js';
const ui = new Ui();
export class Games {
    constructor() {
        this.getGames('mmorpg');
        this.ui = new Ui();
    }
    async getGames(term = 'mmorpg') {
        const res = await fetch(
            `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${term}`,
            {
                headers: {
                    'X-RapidAPI-Key':
                        'efb649e564msh86af3c56ca4aa62p17198bjsnd52ba137259f',
                    'X-RapidAPI-Host':
                        'free-to-play-games-database.p.rapidapi.com',
                },
            }
        );
        const data = await res.json();

        this.ui.displayData(data);
    }
}
