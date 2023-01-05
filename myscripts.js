let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages + " pages"
    this.status = status
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.status
    }   
}

var newBook = new Book();

function createNewBook() {
  newBook.title = test.book_title.value;
  newBook.author = test.book_author.value;
  newBook.pages = test.number_pages.value + " pages";
  newBook.status = test.read_status.value;
  console.log("You added a new book!")
}

function createBookCard() {

}

function checkBooksPresent() {
  const booksHere = document.getElementById("books_present")
  const booksGone = document.getElementById("books_absent")

  if (myLibrary !== '') {
    booksHere.style.display = 'block';
    booksGone.style.display = 'none';
  } else {
    booksHere.style.display = 'none';
    booksGone.style.display = 'block';
  }
}

const submitFormBtn = document.getElementById("submit_button")

submitFormBtn.addEventListener('click', (e) => {
  createNewBook();
  myLibrary.push(newBook);
  checkBooksPresent();
  console.log("function works")
  document.getElementById("test").reset();
  e.preventDefault();
})

const showFormBtn = document.getElementById("new_form_button")

showFormBtn.addEventListener('click', () => {
  const newBookForm = document.getElementById("test")

  if (newBookForm.style.display === 'none' || newBookForm.style.display === '') {
    newBookForm.style.display = 'block';
  }
})

const hideFormBtn = document.getElementById("cancel_button")

hideFormBtn.addEventListener('click', () => {
  const newBookForm = document.getElementById("test")

  newBookForm.style.display = 'none';
})



function loopBooksToDisplay() {

}