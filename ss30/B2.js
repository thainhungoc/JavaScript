const n = Number(prompt("Nhập vào 1 số nguyên dương bất kỳ:"));
let arr = [];
if (n % 2 === 0) {
    n -= 1;
}

for (let i = 1; i <= n; i += 2) {
    arr.push(i);
}

console.log(`Số nguyên dương lẻ trong khoảng từ 0 đến ${n} là:`);
console.log(arr);

// const sum = arr.reduce((a, b)=> a+b, 0);
// if(sum % 2 !== 0){
//     console.log(`Tổng Số nguyên dương lẻ trong khoảng từ 0 đến ${n} là:`);
//     console.log(arr);
// } else {
//     console.log("Không có số nguyên dương lẻ thỏa mãn yêu cầu.");
// }
