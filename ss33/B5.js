// // function book(title, author, year, available){
// //     this.title = title;
// //     this.author = author;
// //     this.year = year;
// //     this.available = available;
// //     this.muon = false;
// // }
// // borrow() {
// //     if (!this.muon) {
// //         this.muon = true;
// //         console.log(`Sách '${this.title}' đã được mượn.`);
// //     }
// // }
// // returnBook(){
// //     if (this.muon) {
// //         this.muon = false;
// //         console.log(`Sách '${this.ten_sach}' đã được trả.`);
// //     } else {
// //         console.log(`Sách '${this.ten_sach}' không được mượn.`);
// //     }
// // }

// // Book.prototype.borrow = function() {
// //     if (!this.muon && this.available) {
// //         this.muon = true;
// //         console.log(`Sách '${this.title}' đã được mượn.`);
// //     } else if (this.muon) {
// //         console.log(`Sách '${this.title}' đã được mượn trước đó.`);
// //     } else {
// //         console.log(`Sách '${this.title}' không có sẵn để mượn.`);
// //     }
// // }

// // Book.prototype.returnBook = function() {
// //     if (this.muon) {
// //         this.muon = false;
// //         console.log(`Sách '${this.title}' đã được trả.`);
// //     } else {
// //         console.log(`Sách '${this.title}' không được mượn.`);
// //     }
// // }

// // Book.prototype.isBookAvailable = function() {
// //     return this.available && !this.muon;
// // }

// // // Tạo các đối tượng sách và thêm chúng vào thư viện
// // const book1 = new Book("Harry Potter", "J.K. Rowling", 1997, true);
// // const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, false);
// // const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, true);

// // // Mượn và trả sách
// // book1.borrow();
// // book2.borrow();
// // book1.borrow();
// // book1.returnBook();

// // // Kiểm tra sự sẵn có của sách
// // console.log("Sách 'Harry Potter' có sẵn để mượn:", book1.isBookAvailable());
// // console.log("Sách 'The Great Gatsby' có sẵn để mượn:", book2.isBookAvailable());
// // console.log("Sách 'To Kill a Mockingbird' có sẵn để mượn:", book3.isBookAvailable());







// function Book(title, author, year, available) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.available = available;
//     this.borrowed = false;
// }

// Book.prototype.borrow = function() {
//     if (!this.borrowed && this.available) {
//         this.borrowed = true;
//         console.log(`Sách '${this.title}' đã được mượn.`);
//     } else if (this.borrowed) {
//         console.log(`Sách '${this.title}' đã được mượn trước đó.`);
//     } else {
//         console.log(`Sách '${this.title}' không có sẵn để mượn.`);
//     }
// }

// Book.prototype.returnBook = function() {
//     if (this.borrowed) {
//         this.borrowed = false;
//         console.log(`Sách '${this.title}' đã được trả.`);
//     } else {
//         console.log(`Sách '${this.title}' không được mượn.`);
//     }
// }

// Book.prototype.isBookAvailable = function() {
//     return this.available && !this.borrowed;
// }


// // Tạo các đối tượng sách và thêm chúng vào thư viện
// const book1 = new Book("Harry Potter", "J.K. Rowling", 1997, true);
// const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, false);
// const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, true);

// // Mượn và trả sách
// book1.borrow();
// book2.borrow();
// book1.borrow();
// book1.returnBook();

// // Kiểm tra sự sẵn có của sách
// console.log("Sách 'Harry Potter' có sẵn để mượn:", book1.isBookAvailable());
// console.log("Sách 'The Great Gatsby' có sẵn để mượn:", book2.isBookAvailable());
// console.log("Sách 'To Kill a Mockingbird' có sẵn để mượn:", book3.isBookAvailable());
