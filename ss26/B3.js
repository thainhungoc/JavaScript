let arr = [1, 3, 5, 7, 3];
let search = parseInt(prompt("Nhập số nguyên cần tìm kiếm(1-7)"));
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
        count++;
    }
}
if (count > 0) {
    console.log(`Số ${search} xuất hiện ${count} lần trong mảng.`);
} else {
    console.log(`Số ${search} không tồn tại trong mảng.`);
}
