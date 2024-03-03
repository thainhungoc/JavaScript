function kiemTra(number) {
    if (number % 2 === 0) {
        return "Số " + number + " là số chẵn";
    } else {
        return "Số " + number + " là số lẻ";
    }
}

function number(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var number1 = number(1, 100);
var number2 = number(1, 100);
var number3 = number(1, 100);

console.log("Số ngẫu nhiên thứ nhất: " + number1);
console.log(kiemTra(number1));

console.log("Số ngẫu nhiên thứ hai: " + number2);
console.log(kiemTra(number2));

console.log("Số ngẫu nhiên thứ ba: " + number3);
console.log(kiemTra(number3));
