function book(title, author, year, available){
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = available;
    this.muon = false;
}
borrow(){
    if (!this.muon) {
        this.muon = true;
        console.log(`Sách '${this.title}' đã được mượn.`);
    }
}

returnBook() {
    if (this.muon) {
        this.muon = false;
        console.log(`Sách '${this.ten_sach}' đã được trả.`);
    } else {
        console.log(`Sách '${this.ten_sach}' không được mượn.`);
    }
}
const book1 = new Book("harry")

