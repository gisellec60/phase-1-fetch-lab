document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(res => res.json()) 
    .then (data => renderBooks(data) )
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

