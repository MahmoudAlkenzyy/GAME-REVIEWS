export class Ui {
    displayData(data) {
        console.log(data);
        let gamesArea = document.querySelector('.games .row');
        const cards = data
            .map((game) => {
                return `  <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card bg-transparent text-white border-1 border-secondary h-100" >
                        <img src="${
                            game.thumbnail
                        }" class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                    <h5 class=""><i class="fa fa-fire-flame-curved"></i> ${
                        game.title
                    }</h5>
                            <p class="card-text">
                               ${game.short_description.split(' ', 8)}
                            </p>
                        </div>
                    </div>
                </div>`;
            })
            .join('');
        // console.log(cards);
        gamesArea.innerHTML = cards.replace(/'/g, '');
    }
}
