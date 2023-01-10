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
  let pages = Book.pages
  let readstatus = Book.readstatus
  let id = Book.id

  let newCardDiv = document.createElement("div");
  newCardDiv.className += `card_${id}`;

  let newCardBtn = document.createElement("button");
  newCardBtn.className = `removeowncard_${id}`;
  newCardBtn.innerHTML = "Remove This Book";

  let readBtn = document.createElement("button");
  readBtn.className = `readstatus_${id}`;
  readBtn.innerHTML = "Click here to change my read status!";

  let newCardP = document.createElement("p");
  newCardP.innerHTML = `${title} by ${author}<br>${pages}<br>${readstatus}<br>`;

  newCardP.appendChild(readBtn);
  newCardP.appendChild(newCardBtn);
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

let toBeRemovedNumber = 0;
function removeFromLib() {
  myLibrary = myLibrary.filter(item => item.id !== toBeRemovedNumber);
}

const btns = document.querySelector('#card_container');
btns.addEventListener('click', e => {

  let i = 0;
  function flipReadStatus(i) {
    if (myLibrary[i].readstatus == 'Read') {
      myLibrary[i].readstatus = 'Not Read Yet';
    } else if (myLibrary[i].readstatus == 'Not Read Yet') {
      myLibrary[i].readstatus = 'Read';
    }    
  }
  if (e.target.className.slice(0,10) === 'readstatus') {
    console.log("selected read status");
    readStatusChangeNumber = Number(e.target.className.substr(11)); 
    i = readStatusChangeNumber;
    flipReadStatus(i);
    loopArrayForCards();
  } else if (e.target.className.slice(0,13) === 'removeowncard') {
    console.log("this is to remove stuffs");
    // target Book with same unique class #
    toBeRemovedNumber = Number(e.target.className.substr(14));
    removeFromLib();
    loopArrayForCards();
    checkBooksPresent();
    console.table(myLibrary);
  }

  /* if (/\bremoveowncard\b/.test(e.target.className)) {
    alert(e.target.className);
  } */
  // const removeBtn = document.querySelector('[class^="removeowncard"]');
  // target Book with same unique class #
  // toBeRemovedNumber = Number(e.target.className.substr(14));
  // remove said Book

  // removeFromLib();
  // loopArrayForCards();
  // checkBooksPresent();
  // console.table(myLibrary);
});

// changes text based on if there are or aren't books in myLibrary
function checkBooksPresent() {
  const booksHere = document.getElementById("books_present")
  const booksGone = document.getElementById("books_absent")

  if (myLibrary.length > 0) {
    booksHere.style.display = 'block';
    booksGone.style.display = 'none';
  } else if (myLibrary.length == 0) {
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

const clearLibBtn = document.getElementById("clear_all_button")

clearLibBtn.addEventListener('click', () => {
  let text = "Are you sure you want to completely clear out your library?"
  if (confirm(text) == true) {
    myLibrary = [];
    console.table(myLibrary);
    loopArrayForCards();
    checkBooksPresent();
  }
})
