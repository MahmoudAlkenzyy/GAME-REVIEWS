import { Ui } from './uiDisplay.js';

export class Details {
    constructor() {
        this.ui = new Ui();
        this.getDetails(521);

        const Home = document.querySelector('.first-part');
        const details = document.querySelector('.details');
        const closeBtn = document.querySelector('.closeBtn');
        const spinner = document.querySelector('.spinner');

        closeBtn.addEventListener('click', () => {
            spinner.style.display = 'flex';

            setTimeout(() => {
                Home.classList.remove('d-none');
                details.classList.add('d-none');
                spinner.style.display = 'none';
            }, 1500);
        });
    }
    async getDetails(term = 521) {
        const spinner = document.querySelector('.spinner');

        let gamesArea = document.querySelector('.games .row');
        gamesArea.set;

        spinner.style.display = 'flex';
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${term}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':
                    'efb649e564msh86af3c56ca4aa62p17198bjsnd52ba137259f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            },
        };

        const res = await fetch(url, options);
        const data = await res.json();
        this.ui.displayDetails(data);
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 1500);
    }
}
