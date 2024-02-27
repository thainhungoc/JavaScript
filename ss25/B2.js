const a = Number(prompt("Nhập số nguyên dương a"));
const b = Number(prompt("Nhập số nguyên dương b"));
let sum = 0;
for (let i = Math.min(a, b) + 1; i < Math.max(a, b); i++) {
  sum += i;
}
console.log("Tổng các số nguyên trong khoảng giữa", a, "và", b, "là:", sum);