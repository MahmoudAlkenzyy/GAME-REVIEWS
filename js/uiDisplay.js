export class Ui {
    displayData(data) {
        console.log(data);
        let gamesArea = document.querySelector('.games .row');
        const cards = data
            .map((game) => {
                return `  <div class="col-lg-3 col-md-6">
                    <div class="card" >
                        <img src="${game.thumbnail}" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                </div>`;
            })
            .join('');
        console.log(cards);
        gamesArea.innerHTML = cards.replace(/'/g, '');
    }
}
