// Định nghĩa lớp Book
class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    // Phương thức hiển thị thông tin sách
    displayInfo() {
        console.log(`Tiêu đề: ${this.title}`);
        console.log(`Tác giả: ${this.author}`);
        console.log(`Năm xuất bản: ${this.publishedYear}`);
    }
}

// Định nghĩa lớp Library
class Library {
    constructor() {
        this.books = [];
    }

    // Phương thức thêm sách mới vào thư viện
    addBook(book) {
        this.books.push(book);
    }

    // Phương thức hiển thị danh sách sách trong thư viện
    displayBooks() {
        console.log("\nDanh sách sách trong thư viện:");
        this.books.forEach(book => {
            book.displayInfo();
            console.log("------------");
        });
    }
}

// Tạo đối tượng thư viện
let library = new Library();

// Thêm một số đối tượng sách vào thư viện
let book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
let book2 = new Book("Conan", "Gosho Aoyama", 1994);

library.addBook(book1);
library.addBook(book2);

// Hiển thị danh sách đầy đủ thông tin của tất cả sách trong thư viện
library.displayBooks();
