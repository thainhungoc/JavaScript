function endsWithSubstring(str, target) {
    // Sử dụng phương thức endswith() để kiểm tra xem str có kết thúc bằng target hay không
    return str.endsWith(target);
}

const originalStr = "Hello, world!";
const substring = "world!";
const result = endsWithSubstring(originalStr, substring);

if (result) {
    console.log(`Chuỗi gốc kết thúc bằng chuỗi con: ${substring}`, '[true]');
} else {
    console.log(`Chuỗi gốc không kết thúc bằng chuỗi con: ${substring}`, '[false]');
}
