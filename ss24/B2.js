const num1 =Number(prompt("Nhập vào một số nguyên dương a:"));
const num2 =Number(prompt("Nhập vào một số nguyên dương b:"));
let sum = 0;
for (let i = Math.min(num1, num2) + 1; i < Math.max(num1, num2); i++) {
  sum += i;
}

console.log("Tổng các số nguyên trong khoảng giữa", num1, "và", num2, "là:", sum);
