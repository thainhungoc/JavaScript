const adminInfo = {
    "username": "admin",
    "pass": "123456"
}

localStorage.setItem("admin", JSON.stringify(adminInfo))

window.onload = function () {    
    addEventChangeTab();

    if (localStorage.getItem('admin')) {
        addTableProducts()
        addTableKhachHang()
        openTab('HomePage')
    } else {
        document.body.innerHTML = `<h1 style="color:red; with:100%; text-align:center; margin: 50px;"> Access is denied.. </h1>`;
    }
}

const listUserLogin = [
    {
        donhang: [],
        email: "hung@gmail.com",
        ho: "Nguyen",
        off: false,
        pass: "123456",
        products: [],
        ten: "MinhHung",
        username: "Minhu"
    }
]
localStorage.setItem("ListUsers", JSON.stringify(listUserLogin))

const productsInfo = [
    {
        name: "Apple Watch SE",
        company: "Watch",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT463ref_VW_34FR+watch-case-45-stainless-gold-s9_VW_34FR+watch-face-45-stainless-gold-s9_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=N3BCckx6eVlTU2FoVlF5SVR3aG4xNXVsTWtoL3UvVVIySFozL2tLNWx3cXdwU3BCUnNDZE1jRWJnOTI1azlxYzRkRmdBN2dmcTNSRWdCUXB1dXdLWnNraDAzeEVXdWtnMXFad015bVA5K2ZTeERoWXl1b0Z6OTFYMXVycEo0SmVkd1o4QjdsQWVyZ0k5NU9zSDMxKzBHbytKTUtMVWljVzR5ZGEwNUpVZGUrckpmNWN0WVRsNmlxbjU0T3JCYkhaMGEwblVNOVhzM0pmS2Z6MDY4ZW5oRmloSWIyVUtBaVpCaWpmQTZEaDhXcz0",
        price: "8.990.000",
        star: 5,
        rateCount: 4,
        promo: {
            name: "giareonline", value: "5.390.000"
        },
        masp: "watch0"
    }
]
localStorage.setItem("ListProducts", JSON.stringify(productsInfo))

// function getListProducts() {
//     return JSON.parse(window.localStorage.getItem('ListProducts'));
// }

function getListUser() {
    const data = JSON.parse(localStorage.getItem('ListUsers')) || []
    const listUsers = []
    for (const user of data) {
        listUsers.push(user)
    }
    return listUsers
}

function addEventChangeTab() {
    var sidebar = document.getElementsByClassName("sidebar")[0]
    var list_a = sidebar.getElementsByTagName('a')
    for (var a of list_a) {
        console.log(a)
        if (!a.onclick) {
            a.addEventListener('click', function () {
                turnOff_Active()
                this.classList.add('active')
                var tab = this.childNodes[0].data.trim()
                openTab(tab)
            })
        }
    }
}
function turnOff_Active() {
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var list_a = sidebar.getElementsByTagName('a');
    for (var a of list_a) {
        a.classList.remove('active');
    }
}

function openTab(nameTab) {
    var main = document.getElementsByClassName('main')[0].children
    for (var el of main) {
        el.style.display = 'none'
    }
    switch (nameTab) {
        case 'Users': document.getElementsByClassName('khachang')[0].style.display = 'block';
            break;
        case 'Products': document.getElementsByClassName('sanpham')[0].style.display = 'block';
            break;
        case 'Orders': document.getElementsByClassName('donhang')[0].style.display = 'block';
            break;
    }
}

function addTableKhachHang() {
    var tc = document.getElementsByClassName('khachang')[0].getElementsByClassName('table-content')[0]
    var s = `<table class="table-outline hideImg">`
    var listUser = getListUser()
    for (var i = 0; i < listUser.length; i++) {
        var u = listUser[i]
        s += `
        <tr>
            <td style="width: 5%">${i + 1}</td>
            <td style="width: 15%">${u.ho} ${u.ten}</td>
            <td style="width: 20%">${u.email}</td>
            <td style="width: 20%">${u.username}</td>
            <td style="width: 10%">${u.pass}</td>
            <td style="width: 10%">
                <div class="tooltip">
                    <button onclick="deleteUser('${u.username}')">Delete</i>
                </div>
            </td>
        </tr>`
    }
    s += `</table>`
    tc.innerHTML = s
}

function setListUser(l) {
    window.localStorage.setItem('ListUsers', JSON.stringify(l));
}

function deleteUser(account) {
    if (window.confirm('Confirm delete all "' + account + '" Account ?')) {
        var listUser = getListUser()
        for (var i = 0; i < listUser.length; i++) {
            if (listUser[i].username == account) {
                listUser.splice(i, 1)
                setListUser(listUser)
                addTableKhachHang()
                return
            }
        }
    }
}


function addTableProducts() {
    var tc = document.getElementsByClassName('sanpham')[0].getElementsByClassName('table-content')[0]
    var s = `<table class="table-outline">`
    var list_products = JSON.parse(localStorage.getItem('ListProducts'));
    for (var i = 0; i < list_products.length; i++) {
        var p = list_products[i]
        console.log("p", p)
        s += `
            <tr>
                <td style="width: 5%">${i+1}</td>
                <td style="width: 10%">${p.masp}</td>
                <td style="width: 40%">
                    <a title="Details" target="_blank">${p.name}</a>
              
                </td>
                <td style="width: 15%">${p.price}</td>
                <td style="width: 15%">${promoToStringValue(p.promo)}</td>
                <td style="width: 15%">
                    <button onclick="addKhungSuaSanPham('${p.masp}')">Edit</button>
                    <button onclick="deleteProduct('${p.masp}', '${p.name}')">Delete</i>
                </td>
            </tr> 
        `
    }
    s += `</table>`;
    tc.innerHTML = s;
}

function promoToStringValue(pr) {
    console.log("pr", pr)
    switch (pr.name) {
        case 'tragop':
            return 'Inst ' + pr.value + '%';
        case 'giamgia':
            return 'Reduce ' + pr.value;
        case 'giareonline':
            return 'Online (' + pr.value + ')';
        case 'moiramat':
            return 'New';
    }
    return '';
}


function addKhungSuaSanPham(masp) {
    var sp;
    var list_products = JSON.parse(localStorage.getItem('ListProducts'));
    for (var p of list_products) {
        if (p.masp == masp) {
            sp = p;
        }
    }
    var s = `
    <span class="close" onclick="this.parentElement.style.transform = 'scale(0)';">&times;</span>
    <table class="overlayTable table-outline table-content table-header">
        <tr>
            <th colspan="2">${sp.name}</th>
        </tr>
        <tr>
            <td>Product Code:</td>
            <td><input type="text" value="${sp.masp}"></td>
        </tr>
        <tr>
            <td>Product Name:</td>
            <td><input type="text" value="${sp.name}"></td>
        </tr>
        <tr>
            <td>Type:</td>
            <td>
                <select>
            `

    var company = ["Mac", "Iphone", "Airpods", "Ipad", "Watch"];
    for (var c of company) {
        if (sp.company == c)
            s += (`<option value="${c}" selected>${c}</option>`);
        else s += (`<option value="${c}">${c}</option>`);
    }

    s += `
                </select>
            </td>
        </tr>
        <tr>
            <td>Image:</td>
            <td>
                <img style="width:30%" class="hinhDaiDien" id="anhDaiDienSanPhamSua" src="${sp.img}">
                <input type="file" accept="image/*" onchange="capNhatAnhSanPham(this.files, 'anhDaiDienSanPhamSua')">
            </td>
        </tr>
        <tr>
            <td>Price (Integer):</td>
            <td><input type="text" value="${stringToNum(sp.price)}"></td>
        </tr>
        <tr>
            <td>Star (0->5) :</td>
            <td><input type="text" value="${sp.star}"></td>
        </tr>
        <tr>
            <td>Rated:</td>
            <td><input type="text" value="${sp.rateCount}"></td>
        </tr>
        <tr>
            <td>Promo:</td>
            <td>
                <select>
                    <option value="">none</option>
                    <option value="tragop" ${sp.promo.name == 'tragop' ? 'selected' : ''}>Installment</option>
                    <option value="giamgia" ${sp.promo.name == 'giamgia' ? 'selected' : ''}>Discount</option>
                    <option value="giareonline" ${sp.promo.name == 'giareonline' ? 'selected' : ''}>Shockings Prices Online</option>
                    <option value="moiramat" ${sp.promo.name == 'moiramat' ? 'selected' : ''}>New</option>
                </select>
            </td>
        </tr>
        <tr>
        <td>Promo value:</td>
        <td>
            <input type="text" value=" ${sp.promo.value}">
        </td>
    </tr>
        <td colspan="2"  class="table-footer"> <button onclick="suaSanPham('${sp.masp}')">Edit</button> </td>
    </table>`
    var khung = document.getElementById('khungSuaSanPham');
    khung.innerHTML = s;
    khung.style.transform = 'scale(1)';
}
let previewSrc;
// Update products picture
function capNhatAnhSanPham(files, id) {

    const reader = new FileReader();
    reader.addEventListener("load", function () {
       
        previewSrc = reader.result;
        document.getElementById(id).src = previewSrc;
    }, false);

    if (files[0]) {
        reader.readAsDataURL(files[0]);
    }
}

function stringToNum(str, char) {
    return Number(str.split(char || '.').join(''));
}
function numToString(num, char) {
    return num.toLocaleString().split(',').join(char || '.');
}

function layThongTinProductTuTable(id) {
    var khung = document.getElementById(id)
    var tr = khung.getElementsByTagName("tr")
    var masp = tr[1].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var name = tr[2].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var company = tr[3].getElementsByTagName('td')[1].getElementsByTagName('select')[0].value;
    var price = tr[5].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var star = tr[6].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var rateCount = tr[7].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var promoName = tr[8].getElementsByTagName('td')[1].getElementsByTagName('select')[0].value;
    var promoValue = tr[9].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    if(isNaN(price)) {
        alert("Price must be an integer")
        return false
    }

    if (isNaN(star)) {
        alert('Star (0->5) must be an integer');
        return false;
    }

    if (isNaN(rateCount)) {
        alert('Rated number must be an integer');
        return false;
    }
    try {
        return {
            "masp": masp,
            "name": name,
            "company": company,
            "img": previewSrc,
            "price": numToString(Number.parseInt(price, 10)),
            "star": Number.parseInt(star, 10),
            "rateCount": Number.parseInt(rateCount, 10),
            "promo": {
                "name": promoName,
                "value": promoValue
            },
        }
    } catch (e) {
        alert('Error: ' + e.toString());
        return false;
    }
}

function setListProducts(newList) {
    localStorage.setItem('ListProducts', JSON.stringify(newList));
}

// Chỉnh sửa sản phẩm
function suaSanPham(masp) {
    var sp = layThongTinProductTuTable('khungSuaSanPham');
    console.log("masp", masp)
    console.log("sp", sp)
    if (!sp) return;

    var list_products = JSON.parse(localStorage.getItem('ListProducts'));

    for (var p of list_products) {
        if (p.masp == masp && p.masp != sp.masp) {
            console.log("p.masp", p.masp, sp.masp)
            alert('Product Code is duplicated !!');
            return false;
        }

        if (p.name == sp.name && p.masp != sp.masp) {
            alert('Products name is duplicated !!');
            return false;
        }
    }

    for (var i = 0; i < list_products.length; i++) {
        if (list_products[i].masp == masp) {
            list_products[i] = sp;
        }
    }

    // Save to localstorage
    setListProducts(list_products);

    // Redraw table
    addTableProducts();

    alert('Edit ' + sp.name + ' successful');

    document.getElementById('khungSuaSanPham').style.transform = 'scale(0)';
}

//Xoá sản phẩm
function deleteProduct(masp, tensp) {
    if (window.confirm('Delete this? Are you sure?  ' + tensp+' ?')) {
    var listProducts = JSON.parse(localStorage.getItem("ListProducts"))

    for (var i = 0; i < listProducts.length; i++) {
        if(listProducts[i].masp == masp) {
            listProducts.splice(i, 1)
        }
    }
     // Save to localstorage
     setListProducts(listProducts);

     // Redraw table
     addTableProducts();
    }
}



// Create Product code
function autoMaProduct(company) {
    
    if (!company) company = document.getElementsByName('type')[0].value;
    var index = 0;
    for (var i = 0; i < list_products.length; i++) {
        if (list_products[i].type == type) {
            index++;
        }
    }
    document.getElementById('maspThem').value = type.substring(0, 3) + index;
}

function addProduct() {
    var newSp = layThongTinProductTuTable("khungThemSanPham")
    console.log("newSp", newSp)
    if(!newSp) return;
    var list_products = JSON.parse(localStorage.getItem('ListProducts'));

    for(var p of list_products) {
        if(p.masp == newSp.masp) {
            alert('Product Code is duplicated!')
            return false
        }
        if(p.name == newSp.name) {
            alert('Product Name is duplicated!')
            return false
        }
    }
    //add product to list_products
    list_products.push(newSp)

    //save new products to local
    setListProducts(list_products)

    //ghi lại table
    addTableProducts()

    alert('Add products "' + newSp.name + '" successful.')

    document.getElementById("khungThemSanPham").style.transform = 'scale(0)'
}

function timKiemSanPham(inp) {
    var kieuTim = document.getElementsByName("kieuTimSanPham")[0].value
    console.log("kieuTim", kieuTim)
    var text = inp.value
    console.log("text", text)

    var vitriKieuTim = { 'ma': 1, 'ten': 2}
    
    var listTr_table = document.getElementsByClassName("sanpham")[0].getElementsByClassName("table-content")[0].getElementsByTagName("tr")
    console.log("listTr_table", listTr_table)
    for (var tr of listTr_table) {
        console.log("tr", tr)
        var td = tr.getElementsByTagName("td")[vitriKieuTim[kieuTim]].innerHTML.toLowerCase()

        if(td.indexOf(text.toLowerCase()) < 0) {
            tr.style.display = "none"
        } else {
            tr.style.display = ''
        }
       
    }
}