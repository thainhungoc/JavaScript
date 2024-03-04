function tachKyTu(chuoi) {
    let text = "";
    let num = "";
    let dacBiet = "";

    for (let kyTu of chuoi) {
        if (kyTu.match(/[a-zA-Z]/)) {
            text += kyTu;
        } else if (kyTu.match(/[0-9]/)) {
            num += kyTu;
        } else {
            dacBiet += kyTu;
        }
    }

    return text + num + dacBiet;
}

const str = prompt("Nhập vào một chuỗi bất kỳ: ");

const result = tachKyTu(str);
console.log("Kết quả sau khi tách ký tự:");
console.log(result);
