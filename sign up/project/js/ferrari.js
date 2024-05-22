let listCarsStock = [
    {
        img: "/project_fe_md13-render-product-lists/assets/images/productItem/car-image.png",
        name: "2022 Toyota Camry",
        price: 25000,
        type: "SEDAN",
        options: [
            {
                src: "/project_fe_md13-render-product-lists/assets/images/productItem/car-image.png",
                colors: [
                    {
                        key: "SILVER",
                        stock: 10
                    },
                    {
                        key: "BLACK",
                        stock: 10
                    },
                    {
                        key: "WHITE",
                        stock: 10
                    }
                ],
            },
            {
                src: "/project_fe_md13-render-product-lists/assets/images/productItem/car-image2.png",
                colors: [
                    {
                        key: "SILVER",
                        stock: 10
                    },
                    {
                        key: "BLACK",
                        stock: 10
                    },
                    {
                        key: " WHITE",
                        stock: 10
                    }
                ],
            },
            {
                src: "/project_fe_md13-render-product-lists/assets/images/productItem/car-image3.png",
                colors: [
                    {
                        key: "SILVER",
                        stock: 10
                    },
                    {
                        key: "BLACK",
                        stock: 10
                    },
                    {
                        key: "WHITE",
                        stock: 10
                    }
                ],
            },
        ],
    },
]

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function uuid() {
    return new Date().getMilliseconds() + Math.floor(Math.random() * 999999999);
}

for (let i = 0; i < listCarsStock.length; i++) {
    listCarsStock[i].id = uuid();
    listCarsStock[i].quantity = 1;
}

for (let i = 0; i < listCarsStock.length; i++) {
    for (let j = 0; j < listCarsStock[i].options.length; j++) {
        listCarsStock[i].options[j].idOption = uuid();
    }
}

localStorage.setItem("listCars", JSON.stringify(listCarsStock));

function renderListCars() {
    let listCars = JSON.parse(localStorage.getItem("listCars"));
    let listCarItems = "";
    for (let i = 0; i < listCars.length; i++) {
        listCarItems += `
            <div class="product-item" onclick="renderCarItem('${listCars[i].id}')">
                <div class="product-image">
                    <img src="${listCars[i].img}" alt="">
                </div>
                <div class="product-description">   
                    <div class="product-type">
                        <span>${listCars[i].type}</span>
                    </div>
                    <h4 class="product-name">${listCars[i].name}</h4>
                    <p>${USDollar.format(listCars[i].price)}</p>
                </div>
            </div>
            `
    }
    document.querySelector(".content-container").innerHTML = listCarItems;
    document.querySelector(".content-container").style.display = "flex";
    document.querySelector(".banner-container").style.display = "none";
    document.querySelector(".footer-container").classList.remove("active-footer");
}

function renderCarItem(idProduct) {
    let listCars = JSON.parse(localStorage.getItem("listCars"));
    let carItem = listCars.find((item) => {
        return item.id == idProduct
    })

    let result = `
        <div class="product">
            <div class="productItem-image">
                <div class="productItem-main-image">
                <img src="${carItem.img}" alt="" class="main-image">
            </div>
            <div class="productItem-image-color">
            
            </div>
            </div>
            <div class="productItem-description">
                <h2>${carItem.name}</h2>
                <h3>${USDollar.format(carItem.price)}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente error totam harum iste deserunt
                suscipit enim aliquam nihil veritatis quam minima architecto ad corporis, facere ut veniam et quas
                culpa.
                </p>
                <h4>Color</h4>
                <div>
                    <input type="radio" id="SILVER" value="SILVER" name="color" class="color-option">
                    <label for="SILVER">SILVER</label>
                    <br>
                    <input type="radio" id="BLACK" value="BLACK" name="color" class="color-option">
                    <label for="BLACK">BLACK</label>
                    <br>
                    <input type="radio" id="WHITE" value="WHITE" name="color" class="color-option">
                    <label for="WHITE">WHITE</label>
                </div>
                <button class="addtocart-button" onclick="addToCart('${carItem.id}')">ADD TO CART</button><br>
                <p class="product-idOption">${carItem.options[0].idOption}</p>
                <span class="stock-color-SILVER">Silver available in stock ${carItem.options[0].colors[0].stock}</span><br>
                <span class="stock-color-BLACK">Black available in stock ${carItem.options[0].colors[1].stock}</span><br>
                <span class="stock-color-WHITE">White available in stock ${carItem.options[0].colors[2].stock}</span>
            </div>
        </div>
        `;
    document.querySelector(".content-container").style.display = "flex";
    document.querySelector(".content-container").innerHTML = result;
    document.querySelector(".banner-container").style.display = "none";
    let productItemColor = document.querySelector(".productItem-image-color");

    let productColors = "";
    for (let i = 0; i < carItem.options.length; i++) {

        productColors += `
            <img src="${carItem.options[i].src}" alt="" onclick="changeCarColor(${carItem.id}, '${carItem.options[i].src}', '${carItem.options[i].idOption}')">
        `
    }
    productItemColor.innerHTML = productColors;
}