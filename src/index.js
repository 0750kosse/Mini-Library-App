const list = document.querySelector('#book-list ul')
const dlt = document.querySelectorAll('#book-list .delete')
const dltButtonsArray = [...dlt];
dltButtonsArray.forEach(btn => btn.addEventListener('click', removeBook))

function addBook() {
  event.preventDefault();
  newTitle();
  clearArea()
  searchBook();
}

function newTitle() {
  const newBook = document.getElementById('newTitle').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deletBtn = document.createElement('span');
  bookName.className = 'name';
  deletBtn.className = 'delete';
  bookName.textContent = newBook;
  deletBtn.textContent = "delete";
  li.appendChild(bookName);
  li.appendChild(deletBtn);
  list.appendChild(li);
  deletBtn.onclick = removeBook
}

function removeBook() {
  const li = event.target.parentElement;
  li.parentNode.removeChild(li)
}

function clearArea() {
  document.getElementById('newTitle').value = "";
}

function searchBook() {
  const searchBar = document.forms['search-books'].querySelector('input').value;
  searchBar.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(book => {
    const title = book.firstElementChild.textContent.toLowerCase();
    if (title.indexOf(searchBar) !== -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  })
}
