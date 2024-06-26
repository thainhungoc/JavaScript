let listProductsStock = [
    {
        img: "/img/ferrari.jpg",
        name: "AIRism Cotton T (short sleeve)",
        price: 14.90,
        type: "MEN",
        options: [
            {
                src: "/img/ferrari.jpg",
                sizes: [
                    {
                        key: "S",
                        stock: 10
                    },
                    {
                        key: "M",
                        stock: 10
                    },
                    {
                        key: "L",
                        stock: 10
                    }
                ],
            },
            {
                src: "/img/ferrari.jpg",
                sizes: [
                    {
                        key: "S",
                        stock: 10
                    },
                    {
                        key: "M",
                        stock: 10
                    },
                    {
                        key: "L",
                        stock: 10
                    }
                ],
            },
            {
                src: "/img/ferrari.jpg",
                sizes: [
                    {
                        key: "S",
                        stock: 10
                    },
                    {
                        key: "M",
                        stock: 10
                    },
                    {
                        key: "L",
                        stock: 10
                    }
                ],
            },
        ],
    },
]

//Format tiền
const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

//Tạo id ngẫu nhiên cho sản phẩm
function uuid() {
    return new Date().getMilliseconds() + Math.floor(Math.random() * 999999999);
}


//Thêm id và số lượng cho sản phẩm
for (let i = 0; i < listProductsStock.length; i++) {
    listProductsStock[i].id = uuid();
    listProductsStock[i].quantity = 1;
}

//Thêm id cho option
for (let i = 0; i < listProductsStock.length; i++) {
    for (let j = 0; j < listProductsStock[i].options.length; j++) {
        listProductsStock[i].options[j].idOption = uuid();
    }
}


//Lưu listProducts vào localStorage
localStorage.setItem("listProducts", JSON.stringify(listProductsStock));

//Hàm render list tất cả sản phẩm
function renderListAllProducts() {
    let listProducts = JSON.parse(localStorage.getItem("listProducts"));
    renderListProducts(listProducts);
    document.querySelector(".listPage").style.display = "block";
    pagination();
}

//Hàm render list sản phẩm dành cho nam
function renderMenListProducts() {
    let listProducts = JSON.parse(localStorage.getItem("listProducts"));
    let listProductsFerrari = [];
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].type == "Ferrari") {
            listProductsFerrari.push(listProducts[i])
        }
    }
    renderListProducts(listProductsFerrari);
    document.querySelector(".listPage").style.display = "none";
}

// Hàm hiển thị danh sách sản phẩm
function renderListProducts(params) {
    let result = "";
    for (let i = 0; i < params.length; i++) {
        result += `
            <div class="product-item" onclick="renderProductItem('${params[i].id}')">
                <div class="product-image">
                    <img src="${params[i].img}" alt="">
                </div>
                <div class="product-description">   
                    <div class="product-type">
                        <span>${params[i].type}</span>
                        <span>S-M-L</span>
                    </div>
                    <h4 class="product-name">${params[i].name}</h4>
                    <p>${USDollar.format(params[i].price)}</p>
                </div>
            </div>
            `
    }
    document.querySelector(".content-container").innerHTML = result;
    document.querySelector(".content-container").style.display = "flex";
    document.querySelector(".banner-container").style.display = "none";
    document.querySelector(".footer-container").classList.remove("active-footer");
}

//Hiển thị chi tiết sản phẩm
function renderProductItem(idProduct) {

    let listProducts = JSON.parse(localStorage.getItem("listProducts"));
    let productItem = listProducts.find((item) => {
        return item.id == idProduct
    })

    let result = `
        <div class="product">
            <div class="productItem-image">
                <div class="productItem-main-image">
                <img src="${productItem.img}" alt="" class="main-image">
            </div>
                <div class="productItem-image-color">
            
                </div>
            </div>
            <div class="productItem-description">
                <h2>${productItem.name}</h2>
                <h3>${USDollar.format(productItem.price)}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente error totam harum iste deserunt
                suscipit enim aliquam nihil veritatis quam minima architecto ad corporis, facere ut veniam et quas
                culpa.
                </p>
                <h4>Size</h4>
                <div>
                    <input type="radio" id="S" value="S" name="size" class="size-option">
                    <label for="S">S</label>
                    <br>
                    <input type="radio" id="M" value="M" name="size" class="size-option">
                    <label for="M">M</label>
                    <br>
                    <input type="radio" id="L" value="L" name="size" class="size-option">
                    <label for="L">L</label>
                </div>
                <button class="addtocart-button" onclick="addToCart('${productItem.id}')">ADD TO CART</button><br>
                <p class="product-idOption">${productItem.options[0].idOption}</p>
                <span class="stock-size-S">Size S available in stock ${productItem.options[0].sizes[0].stock}</span><br>
                <span class="stock-size-M">Size M available in stock ${productItem.options[0].sizes[1].stock}</span><br>
                <span class="stock-size-L">Size L available in stock ${productItem.options[0].sizes[2].stock}</span>
            </div>
        </div>
        `;
    document.querySelector(".content-container").style.display = "flex";
    document.querySelector(".content-container").innerHTML = result;
    document.querySelector(".banner-container").style.display = "none";
    let productItemColor = document.querySelector(".productItem-image-color");

    let productColors = "";
    for (let i = 0; i < productItem.options.length; i++) {

        productColors += `
            <img src="${productItem.options[i].src}" alt="" onclick="changeProductColor(${idProduct}, '${productItem.options[i].src}', '${productItem.options[i].idOption}')">
        `
    }
    productItemColor.innerHTML = productColors;
}

function searchProduct() {
    var searchQuery = document.querySelector(".form-control").value.toLowerCase();
  
    var allMovies = JSON.parse(localStorage.getItem("listAll")) || [];
  
    var filteredMovies = allMovies.filter(function (movie) {
      return movie.name.toLowerCase().includes(searchQuery);
    });
  
    loadFilms(filteredMovies, "load");
  
    if (filteredMovies.length === 0) {
      document.getElementById("load").innerHTML = "<p>Không tìm thấy phim</p>";
    }
  }
  
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    searchMovies();
  });
  