function doiXung(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
const random = [1, 2, 3, 2, 1];

// Gọi hàm để kiểm tra đối xứng và in kết quả
if (doiXung(random)) {
    console.log("Mảng là đối xứng.");
} else {
    console.log("Mảng không đối xứng.");
}
