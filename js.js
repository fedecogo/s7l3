fetch ('https://striveschool-api.herokuapp.com/books')
.then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      if (res.status === 404) {
        throw new Error('404 - Not Found')
      } else if (res.status === 500) {
        throw new Error('500 - Internal Server Error')
      } else {
        throw new Error('Errore generico')
      }
    }
  })
  .then((booksData) => {
    console.log('booksData', booksData);
    const row = document.getElementById('row_books')

// ciclo dei books
    booksData.forEach((books) => {
        // creo col
        const col = document.createElement('div');
  col.classList.add('col-6','col-md-3');
// creo card
  const card = document.createElement('div');
  card.classList.add('card');
// riempio card con img
  const cardImg = document.createElement('img');
  cardImg.setAttribute('src', books.img);
  cardImg.classList.add('img-fluid');
  card.appendChild(cardImg);
// creo cord body
  const divPT = document.createElement('div');
  divPT.classList.add('row');
//  titolo
  const title = document.createElement('div');
  title.innerText = books.title;
  title.classList.add('col-8', 'p-2');
  divPT.appendChild(title);
// prezzo
  const price = document.createElement('div');
  price.innerText = `€${books.price}`;
  price.classList.add('col-4', 'p-2');
  divPT.appendChild(price);

  card.appendChild(divPT);
// button carrello
  const carrelloButton = document.createElement('button');
  carrelloButton.innerText = 'Aggiungi al carrello';
  carrelloButton.classList.add('btn','btn-outline-success','m-1')
  card.appendChild(carrelloButton);
// button dis
const discardButton = document.createElement('button');
discardButton.innerText = 'Elimina';
discardButton.classList.add('btn', 'btn-danger', 'm-1');
function InvisibleClass() {
  card.classList.add('invisible'); 
}
discardButton.addEventListener('click', InvisibleClass);
card.appendChild(discardButton);

  col.appendChild(card);
  row.appendChild(col);

  //  funzioni per AGGIUNGERE LE CARD AL CARRELLO
   })

}).catch((err) => {
    console.log(err)
  })