import { Ui } from './uiDisplay.js';
const ui = new Ui();
export class Games {
    constructor() {
        this.getGames('mmorpg');
        this.ui = new Ui();
        const links = document.querySelectorAll('.nav-item a');
        console.log(links);
        for (const link of links) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(e.target.text.toLowerCase().trim() === 'shooter');
                const activeNow = document.querySelector('a.active');
                activeNow.classList.remove('active');
                e.target.classList.add('active');

                this.getGames(e.target.text.toLowerCase().trim());
                // window.scrollTo(0, 500);
            });
        }
    }
    async getGames(term = 'mmorpg') {
        const spinner = document.querySelector('.spinner');
        spinner.style.display = 'flex';
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
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 1000);
    }
}
