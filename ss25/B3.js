const n = parseInt(prompt("Nhập vào số nguyên n "));
let count = 0;
var str = n.toString();

for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) % 2 === 0) {
        count++;
    }
}
console.log("Số nguyên " + n + " có " + count + " chữ số chẵn.");