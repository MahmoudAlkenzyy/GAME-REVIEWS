export class Ui {
    displayData(data) {
        // console.log(data);
        let gamesArea = document.querySelector('.games .row');
        const cards = data
            .map((game) => {
                return `  <div data-id=${game.id}
                 class="col-lg-3 col-md-4 col-sm-6 gameCard">
                    <div class="card bg-transparent text-white border-1 border-secondary h-100" >
                        <img src="${
                            game.thumbnail
                        }" class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                    <h5 class=""><i class="fa fa-fire-flame-curved"></i> ${
                        game.title
                    }</h5>
                            <p class="card-text">
                               ${game.short_description
                                   .split(' ', 8)
                                   .toString()
                                   .replace(/,/g, ' ')}
                            </p>
                        </div>
                    </div>
                </div>`;
            })
            .join('');
        // console.log(cards);
        gamesArea.innerHTML = cards.replace(/'/g, '');
    }

    displayDetails(data) {
        const detailsArea = document.querySelector('.details .gameArea');
        console.log(data);
        detailsArea.innerHTML = `
        
       
        <div class="col-md-4">
        <img class="w-100" src="${data.thumbnail}"> 
        </div>



        <div class="col-md-8">
        
        <h3>Title: ${data.title}</h3>
         <div class=" row container-fluid">
             <div class="col-4">Genra: <span class="badge rounded-pill  ">${
                 data.genre
             }</span></div>
             <div class="col-4">Platform: <span class="badge rounded-pill  ">${
                 data.platform
             } </span></div>
             <div class="col-4">Status: <span class="badge rounded-pill  ">${
                 data.status
             }</span></div>
        
        </div>
        <p class="py-3"  >Discription: ${data.description} </p>
        </div>

        <h3 class="col-12">Screen shots:</h3>
       ${data.screenshots
           .map((screen) => {
               return `<div class="col-md-4"> <img class="img-fluid" src="${screen.image}"> </div>`;
           })
           .toString()
           .replace(/,/g, '')}
           
           
            <a class="btn btn-outline-warning w-auto ms-3" target="_blank" href='${
                data.game_url
            }'>Show the Game</a>
            
           
        `;
    }
}
