function Information(id, name, phone, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
}

const nhap = [];
const n = parseInt(prompt("Nhập số lượng người dùng:"));

for (let i = 0; i < n; i++) {
    let id = prompt("Nhập id");
    let name = prompt("Nhập tên");
    let phone = prompt("Nhập điện thoại");
    let address = prompt("Nhập địa chỉ");
    let infor = new Information(id, name, phone, address);
    nhap.push(infor);
}

console.log("Thông tin cá nhân:");
nhap.forEach((item) => {
    console.log("ID:", item.id);
    console.log("Tên:", item.name);
    console.log("Điện thoại:", item.phone);
    console.log("Địa chỉ:", item.address);
    delete item.address;
    item.email = prompt("Nhập email");
    console.log("Email:", item.email);
});
