let myLibrary = [];
var idcounter = 0;

function Book(title, author, pages, readstatus) {

    this.title = title
    this.author = author
    this.pages = pages + " pages"
    this.readstatus = readstatus
    this.id = idcounter++;
}

function createNewBook() {
  var newBook = new Book();
  newBook.title = test.book_title.value;
  newBook.author = test.book_author.value;
  newBook.pages = test.number_pages.value + " pages";
  newBook.readstatus = test.read_status.value;
  return newBook;
}

const cardGallery = document.getElementById("card_container")

function createCard(Book) {

  let title = Book.title
  let author = Book.author
  let pages = Book.pages + " pages"
  let readstatus = Book.readstatus
  let id = Book.id

  let newCardDiv = document.createElement("div");
  newCardDiv.className += `card_${id}`;

  let newCardBtn = document.createElement("button");
  newCardBtn.className = `removeowncard_${id}`;
  newCardBtn.innerHTML = "Remove This Book";

  let newCardP = document.createElement("p");
  newCardP.innerHTML = `${title} by ${author}, ${pages}; ${readstatus}`;

  newCardP.appendChild(newCardBtn)
  newCardDiv.appendChild(newCardP);
  document.getElementById("card_container").appendChild(newCardDiv);
}

function clearArrayOfCards() {
  let container = document.getElementById("card_container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  };
}

function loopArrayForCards() {
  clearArrayOfCards();

  myLibrary.forEach((Book) => {
    createCard(Book);
    console.table(Book)
  })
}

/* const removeBtn = document.getElementsByClassName("removeowncard")

removeBtn.addEventListener('click', (e) => {
  
  loopArrayForCards();
  checkBooksPresent();
  console.table(myLibrary);
}) */
let toBeRemovedNumber = 0;
function removeFromLib() {
  myLibrary = myLibrary.filter(item => item.id !== toBeRemovedNumber);
}

// try adding unique ID to each card & button so that 
// it will be unique within the card AND library
const btns = document.querySelector('#card_container');
btns.addEventListener('click', e => {
  // creates ability to select all removeBtns
  const removeBtn = document.querySelector('[class^="removeowncard"]');
  // logs target removeBtn unique class #
  console.log(e.target.className.substr(14));
  // target Book with same unique class #
  toBeRemovedNumber = Number(e.target.className.substr(14));
  console.log(toBeRemovedNumber);
  // remove said Book
  removeFromLib()
  // check
  loopArrayForCards();
  checkBooksPresent();
  console.table(myLibrary);
});


// changes text based on if there are or aren't books in myLibrary
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
  var x = createNewBook();
  myLibrary.push(x);
  loopArrayForCards();
  checkBooksPresent();
  console.table(myLibrary);
  /* document.getElementById("test").reset(); */
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