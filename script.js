const myLibrary = [];

function Book(author, title, pages, read){
    this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(){
 
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readValue =  document.getElementById("read").checked;
  
  let read = readValue ? "true" : "false";

  if ((title || author || pages) == ""){
    addBookToLibrary();
  }

  const newBook = new Book(author, title, pages, read);
  
  myLibrary.push(newBook);
  
  printLibrary(newBook);
  closeForm();
}

function printLibrary(book){

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default reload behavior
  });

    const bookCollection =  document.getElementsByClassName("library");
    const div = document.createElement("div");
    div.className = "book-card";
    div.innerHTML = 
      "<p>Title: " + book.title +" </p>" +
      "<p>Author: " + book.author +" </p>" +
      "<p>Pages: " + book.pages +" </p>" +
      "<p>Read: " + book.read +" </p>";
    bookCollection[0].appendChild(div);

}


function openForm(){
  
  const form = document.querySelector("form");
  
  form.style.display = "flex";
}

function closeForm(){
  const form = document.querySelector("form");
  
  form.style.display = "none";
}