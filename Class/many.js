class Product {
    constructor(id, name, price, expirationDate) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
    }
}

class Employee {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

class Invoice {
    constructor(products, quantities) {
        this.products = products;
        this.quantities = quantities;
    }

    calculateTotal() {
        return this.products.reduce((total, product, index) => {
            return total + product.price * this.quantities[index];
        }, 0);
    }
}

function addProducts() {
    const productCount = parseInt(prompt("Nhập số lượng sản phẩm"));
    for (let i = 0; i < productCount; i++) {
        let id = prompt("Nhập ID sản phẩm");
        let name = prompt("Nhập tên sản phẩm");
        let price = parseFloat(prompt("Nhập giá của sản phẩm"));
        let expirationDate = prompt("Nhập hạn sử dụng của sản phẩm (dd/mm/yyyy)");
        let product = new Product(id, name, price, expirationDate);
        products.push(product);
        console.log("Sản phẩm đã được thêm vào danh sách");
        console.log(product);
        console.log("----------------------");
    }
}

function addEmployees() {
    const employeeCount = parseInt(prompt("Nhập số lượng nhân viên"));
    for (let i = 0; i < employeeCount; i++) {
        let id = prompt("Nhập ID nhân viên");
        let name = prompt("Nhập tên nhân viên");
        let age = parseInt(prompt("Nhập tuổi nhân viên"));
        let employee = new Employee(id, name, age);
        employees.push(employee);
        console.log("Nhân viên đã được thêm vào danh sách");
        console.log(employee);
        console.log("----------------------");
    }
}

function addInvoices() {
    const invoiceCount = parseInt(prompt("Nhập số lượng hóa đơn"));
    for (let i = 0; i < invoiceCount; i++) {
        let productIds = prompt("Nhập ID sản phẩm");
        let quantities = prompt("Nhập số lượng sản phẩm tương ứng");
        productIds = productIds.split(",");
        quantities = quantities.split(",").map(Number);

        let productsInInvoice = productIds.map(productId => {
            let product = products.find(product => product.id === productId.trim());
            if (!product) {
                console.log(`Sản phẩm với ID ${productId} không tồn tại.`);
            }
            return product;
        }).filter(product => product);

        let invoice = new Invoice(productsInInvoice, quantities);
        invoices.push(invoice);
        console.log("Hóa đơn đã được thêm vào danh sách");
        console.log(invoice);
        console.log("----------------------");
    }
}

let products = [];
let employees = [];
let invoices = [];

addProducts();
addEmployees();
addInvoices();

function displaySummary() {
    console.log(`Tổng số sản phẩm trong cửa hàng: ${products.length}`);
    console.log(`Tổng số nhân viên trong cửa hàng: ${employees.length}`);
    let totalRevenue = invoices.reduce((total, invoice) => {
        return total + invoice.calculateTotal();
    }, 0);
    console.log(`Doanh thu tổng cộng: ${totalRevenue.toFixed(2)}`);
}

displaySummary();





