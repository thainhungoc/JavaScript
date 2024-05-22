document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.getElementById("close");
    const cartIcon = document.getElementById("icon");
    const cartContainer = document.querySelector(".cart");
    const cartContent = document.querySelector(".cart-content");

    // Đóng/Mở giỏ hàng
    closeButton.addEventListener("click", function() {
        cartContainer.style.display = "none";
    });

    cartIcon.addEventListener("click", function() {
        cartContainer.style.display = "block";
    });

    // Xử lý sự kiện cho các nút "Remove" trong giỏ hàng
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    // Xử lý sự kiện khi thay đổi số lượng sản phẩm trong giỏ hàng
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    // Xử lý sự kiện khi nhấn nút "Add to Cart" trên sản phẩm
    var addCartButtons = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener("click", addCartClicked);
    }
    
    // Xử lý sự kiện khi nhấn vào sản phẩm để hiển thị thông tin sản phẩm
    var productBoxes = document.getElementsByClassName("box");
    for (var i = 0; i < productBoxes.length; i++) {
        var box = productBoxes[i];
        box.addEventListener("click", showProductInfo);
    }

    // Xử lý sự kiện lướt trên giỏ hàng
    cartContent.addEventListener("wheel", function(event) {
        event.stopPropagation();
    });
});

// Hàm thêm sản phẩm vào giỏ hàng
function addProductToCart(title, price, imageSrc) {
    var cartItem = document.createElement("div");
    cartItem.classList.add("cart-box");
    var cartContent = document.querySelector(".cart-content");

    var cartItemContent = `
        <img src="${imageSrc}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">$${price.toFixed(2)}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="fa-solid fa-trash cart-remove"></i>
    `;
    cartItem.innerHTML = cartItemContent;
    cartContent.appendChild(cartItem);

    // Thêm sự kiện xóa sản phẩm khi được thêm vào giỏ hàng
    var removeCartItemButton = cartItem.querySelector(".cart-remove");
    removeCartItemButton.addEventListener("click", removeCartItem);

    // Thêm sự kiện thay đổi số lượng sản phẩm
    var quantityInput = cartItem.querySelector(".cart-quantity");
    quantityInput.addEventListener("change", quantityChanged);
}

// Hàm cập nhật tổng giá trị trong giỏ hàng
function updateCartTotal() {
    var cartItems = document.querySelectorAll(".cart-box");
    var total = 0;
    cartItems.forEach(function(cartItem) {
        var priceElement = cartItem.querySelector(".cart-price");
        var quantityElement = cartItem.querySelector(".cart-quantity");
        var price = parseFloat(priceElement.innerText.replace(/[^\d.]/g, ""));
        var quantity = quantityElement.value;
        total += price * quantity;
    });
    var totalElement = document.querySelector(".total-price");
    totalElement.textContent = "$" + total.toFixed(2);
}

// Hàm xử lý khi nhấn vào nút "Remove" trong giỏ hàng
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
    
    // Kiểm tra nếu giỏ hàng trống, cập nhật tổng giá trị thành 0
    var cartItems = document.querySelectorAll(".cart-box");
    if (cartItems.length === 0) {
        var totalElement = document.querySelector(".total-price");
        totalElement.textContent = "$0.00";
    }
}

// Hàm xử lý khi thay đổi số lượng sản phẩm trong giỏ hàng
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 0;
    }
    updateCartTotal();
}

// Hàm xử lý khi nhấn nút "Add to Cart" trên sản phẩm
function addCartClicked(event) {
    var button = event.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.querySelector(".title").innerText;
    var price = parseFloat(shopProduct.querySelector(".price").innerText.replace(/[^\d.]/g, ""));
    var imageSrc = shopProduct.querySelector(".product-img").src;
    addProductToCart(title, price, imageSrc);
    updateCartTotal();
}

// Hàm xử lý khi nhấn vào sản phẩm để hiển thị thông tin sản phẩm
function showProductInfo(event) {
    // Thêm mã xử lý ở đây để hiển thị thông tin sản phẩm khi được nhấp vào
}

// Hàm tìm kiếm sản phẩm
function searchProduct() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();
    var shopSection = document.getElementById("shop");
    var products = shopSection.getElementsByClassName("box");
    
    for (var i = 0; i < products.length; i++) {
        var title = products[i].getElementsByClassName("title")[0];
        if (title) {
            var txtValue = title.textContent || title.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                products[i].style.display = "";
            } else {
                products[i].style.display = "none";
            }
        }       
    }
}
