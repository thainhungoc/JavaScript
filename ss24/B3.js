const a = Number(prompt("Nhập số nguyên a:"));
const b = Number(prompt("Nhập số nguyên b:"));
let ketQua = 1;
for (let i = 0; i < b; i++) {
  ketQua *= a;
}
console.log("Kết quả của", a, "mũ", b, "là:", ketQua);