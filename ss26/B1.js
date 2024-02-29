const arr = [1, 3, 5, 7, 2.3, 4.6];
const intArr = arr.filter(Number.isInteger);

if (intArr.length > 0) {
    console.log("Các phần tử số nguyên trong mảng:", intArr);
} else {
    console.log("Trong mảng không tồn tại số nguyên.");
}
