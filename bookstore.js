const books = [];

function addBook() {
    const name = document.getElementById('bookName').value;
    const author = document.getElementById('bookAuthor').value;
    const price = parseFloat(document.getElementById('bookPrice').value);

    if (name && author && !isNaN(price)) {
        const book = { name, author, price };
        books.push(book);
        displayBooks();
        clearForm();
    } else { 
        alert('Please fill out all fields correctly.');
    }
}

function editBook(index) {
    const name = prompt('Enter new name:', books[index].name);
    const author = prompt('Enter new author:', books[index].author);
    const price = parseFloat(prompt('Enter new price:', books[index].price));

    if (name && author && !isNaN(price)) {
        books[index] = { name, author, price };
        displayBooks();
    } else {
        alert('Invalid input. Please try again.');
    }
}

function deleteBook(index) {
    if (confirm('Are you sure you want to delete this book?')) {
        books.splice(index, 1);
        displayBooks();
    }
}

function displayBooks() {
    const tableBody = document.getElementById('bookTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    books.forEach((book, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = book.name;
        row.insertCell(1).textContent = book.author;
        row.insertCell(2).textContent = book.price.toFixed(2);
        
        const actionsCell = row.insertCell(3);
        actionsCell.innerHTML = `
            <button onclick="editBook(${index})">Edit</button>
            <button onclick="deleteBook(${index})">Delete</button>
        `;
    });
}

function clearForm() {
    document.getElementById('bookName').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookPrice').value = '';
}