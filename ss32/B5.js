function book(author, name) {
    this.author = author;
    this.name = name;
}

const books = [
    new book('star', 'sao trời'),
    new book('young', 'tuổi trẻ'),
    new book('life', 'cuộc sống'),

];

const authorName = prompt("Nhập tên tác giả:");

const foundBooks = books.filter(book => book.author === authorName);
if (foundBooks.length > 0) {
    for (let i = 0; i < foundBooks.length; i++) {
        const book = foundBooks[i];
        console.log(`Tác giả: ${book.author}, Tên sách: ${book.name}`);
    }
} else {
    console.log("Không tìm thấy sách");
}
