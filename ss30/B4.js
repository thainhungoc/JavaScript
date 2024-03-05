
function soNguyenTo(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function hienThi(mang) {
    console.log("Các số nguyên tố trong mảng:");
    for (let so of mang) {
        if (soNguyenTo(so)) {
            console.log(so);
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
hienThi(arr);
