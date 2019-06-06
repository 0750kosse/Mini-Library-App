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
  if (newBook.length >= 1) {
    bookName.className = 'name';
    deletBtn.className = 'delete';
    bookName.textContent = newBook;
    deletBtn.textContent = "delete";
    li.appendChild(bookName);
    li.appendChild(deletBtn);
    list.appendChild(li);
    deletBtn.onclick = removeBook
  }
}

function removeBook() {
  const li = event.target.parentElement;
  li.parentNode.removeChild(li)
}

function clearArea() {
  document.getElementById('newTitle').value = "";
}

function searchBook() {
  const searchBar = document.forms['search-bar'].querySelector('input').value;
  searchBar.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(book => {
    const title = book.textContent.toLowerCase();
    if (title.indexOf(searchBar) !== -1) {
      let ulStyles = document.querySelector('#wrapper');
      let compStyles = window.getComputedStyle(ulStyles);
      book.style.display = compStyles;
    } else {
      book.style.display = "none";
    }
  })
}

function hideAllBooks() {
  const checked = document.getElementById('hideBooks').checked;
  if (checked == true) { list.style.display = "none" }
  else { list.style.display = "block" }
}
