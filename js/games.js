import { Ui } from './uiDisplay.js';
import { Details } from './details.js';

export class Games {
    constructor() {
        const ui = new Ui();
        this.getGames('mmorpg');
        this.ui = new Ui();
        const links = document.querySelectorAll('.nav-item a');
        console.log(links);
        for (const link of links) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                scrollTo(0, 600);

                console.log(e.target.text.toLowerCase().trim() === 'shooter');
                const activeNow = document.querySelector('a.active');
                activeNow.classList.remove('active');
                e.target.classList.add('active');

                this.getGames(e.target.text.toLowerCase().trim());
                // window.scrollTo(0, 500);
            });
        }
        new Details();
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
        // console.log(data[0]);

        this.ui.displayData(data);
        this.addEvent();
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 1500);
    }

    addEvent() {
        const cards = document.querySelectorAll('.gameCard');

        for (const card of cards) {
            card.addEventListener('click', (e) => {
                const Home = document.querySelector('.first-part');
                const details = document.querySelector('.details');
                this.details = new Details();
                this.details.getDetails(card.dataset.id);
                setTimeout(() => {
                    Home.classList.add('d-none');
                    details.classList.remove('d-none');
                    scrollTo(0, 0);
                }, 600);
            });
        }
    }
}
