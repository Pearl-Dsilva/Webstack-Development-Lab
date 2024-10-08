function fetchBooks() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=G2P2HHoBNVI73EfQklmR1RBryVgPEjr6', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const books = JSON.parse(this.responseText);
            displayBooks(books);
        }

    }
    xhr.send();
}

function displayBooks(books) {
    const bookList = document.getElementById('bookList');
    let output = '';
    for (let i in books.results.books) {
        // console.log(books["results"]["books"][i]);
        output += `<div>
                    <h5>${books["results"]["books"][i]["title"]}</h5>
                    <p>Author: ${books["results"]["books"][i]["author"]}</p>
                    <p>Rank: ${books["results"]["books"][i]["rank"]}</p>
                    <hr>
                  </div>`;
    }
    bookList.innerHTML = output;
}


const fetchBooksButton = document.getElementById('fetchBooks');
fetchBooksButton.addEventListener('click', fetchBooks);
// fetchBooksButton.addEventListener('click', displayBooks);

