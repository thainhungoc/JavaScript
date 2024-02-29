function arr(a, b) {
    const result = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}

// Nhập vào 2 số nguyên a và b
const a = parseInt(prompt("Nhập số nguyên a:"));
const b = parseInt(prompt("Nhập số nguyên b:"));

// Tạo mảng chứa tất cả các số trong khoảng giữa a và b
const trongArr = arr(a, b);

// In mảng ra màn hình console
console.log("Mảng chứa các số trong khoảng giữa a và b:");
console.log(trongArr);
