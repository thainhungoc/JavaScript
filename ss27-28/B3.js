function arr(a, b) {
    const kq = [];
    for (let i = a; i <= b; i++) {
        kq.push(i);
    }
    return kq;
}
function xoaLe(mang) {
    return mang.filter(num => num % 2 === 0);
}
const a = parseInt(prompt("Nhập số nguyên a:"));
const b = parseInt(prompt("Nhập số nguyên b:"));
const trongArr = arr(a, b);
const mangChan = xoaLe(trongArr);
console.log("Mảng sau khi xóa các phần tử lẻ:");
console.log(mangChan);
